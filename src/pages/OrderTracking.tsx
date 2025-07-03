import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useOrders } from '@/contexts/OrderContext';
import { 
  CheckCircle, 
  Clock, 
  Truck, 
  MapPin,
  Phone,
  MessageCircle,
  Star,
  ChefHat,
  Package
} from 'lucide-react';

const OrderTracking = () => {
  const { orderId } = useParams();
  const { getOrderById, updateOrderStatus } = useOrders();
  const [order, setOrder] = useState(getOrderById(orderId || ''));

  useEffect(() => {
    if (!order) return;

    // Симуляция обновления статуса заказа
    const statusFlow: Array<typeof order.status> = [
      'pending', 'confirmed', 'preparing', 'ready', 'delivering', 'delivered'
    ];

    const currentIndex = statusFlow.indexOf(order.status);
    if (currentIndex < statusFlow.length - 1) {
      const timer = setTimeout(() => {
        const nextStatus = statusFlow[currentIndex + 1];
        updateOrderStatus(order.id, nextStatus);
        setOrder(prev => prev ? { ...prev, status: nextStatus } : null);
      }, 30000); // Обновляем статус каждые 30 секунд

      return () => clearTimeout(timer);
    }
  }, [order, updateOrderStatus]);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Заказ не найден
          </h2>
          <p className="text-gray-600 mb-6">
            Проверьте правильность номера заказа
          </p>
          <Link to="/menu">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Вернуться к меню
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getStatusInfo = (status: typeof order.status) => {
    const statusMap = {
      pending: { 
        label: 'Ожидает подтверждения', 
        icon: <Clock className="h-5 w-5" />,
        color: 'bg-yellow-500',
        description: 'Ваш заказ принят и ожидает подтверждения ресторана'
      },
      confirmed: { 
        label: 'Подтвержден', 
        icon: <CheckCircle className="h-5 w-5" />,
        color: 'bg-blue-500',
        description: 'Ресторан подтвердил заказ и начинает приготовление'
      },
      preparing: { 
        label: 'Готовится', 
        icon: <ChefHat className="h-5 w-5" />,
        color: 'bg-orange-500',
        description: 'Повара готовят ваш заказ'
      },
      ready: { 
        label: 'Готов к выдаче', 
        icon: <Package className="h-5 w-5" />,
        color: 'bg-purple-500',
        description: 'Заказ готов, курьер заберет его в ближайшее время'
      },
      delivering: { 
        label: 'В пути', 
        icon: <Truck className="h-5 w-5" />,
        color: 'bg-indigo-500',
        description: 'Курьер везет ваш заказ'
      },
      delivered: { 
        label: 'Доставлен', 
        icon: <CheckCircle className="h-5 w-5" />,
        color: 'bg-green-500',
        description: 'Заказ успешно доставлен'
      },
      cancelled: { 
        label: 'Отменен', 
        icon: <Clock className="h-5 w-5" />,
        color: 'bg-red-500',
        description: 'Заказ был отменен'
      }
    };

    return statusMap[status];
  };

  const statusInfo = getStatusInfo(order.status);
  const allStatuses = ['pending', 'confirmed', 'preparing', 'ready', 'delivering', 'delivered'];
  const currentStatusIndex = allStatuses.indexOf(order.status);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Заказ #{order.id.slice(-8)}
          </h1>
          <p className="text-gray-600">
            Оформлен {new Date(order.createdAt).toLocaleString('ru-RU')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Основная информация */}
          <div className="lg:col-span-2 space-y-6">
            {/* Статус заказа */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`${statusInfo.color} text-white p-3 rounded-full`}>
                    {statusInfo.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {statusInfo.label}
                    </h2>
                    <p className="text-gray-600">{statusInfo.description}</p>
                  </div>
                </div>

                {/* Прогресс-бар */}
                <div className="space-y-4">
                  {allStatuses.slice(0, -1).map((status, index) => {
                    const isCompleted = index <= currentStatusIndex;
                    const isCurrent = index === currentStatusIndex;
                    const statusData = getStatusInfo(status as typeof order.status);

                    return (
                      <div key={status} className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isCompleted 
                            ? 'bg-green-500 text-white' 
                            : isCurrent
                            ? statusData.color + ' text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}>
                          {isCompleted && index < currentStatusIndex ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <div className="w-2 h-2 bg-current rounded-full" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className={`font-medium ${
                            isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-400'
                          }`}>
                            {statusData.label}
                          </div>
                          {isCurrent && (
                            <div className="text-sm text-gray-600">
                              {statusData.description}
                            </div>
                          )}
                        </div>
                        {index < allStatuses.length - 2 && (
                          <div className={`w-px h-8 ${
                            isCompleted ? 'bg-green-500' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Время доставки */}
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className="font-medium text-orange-900">
                      Ожидаемое время доставки: {order.estimatedDeliveryTime}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Информация о курьере */}
            {(order.status === 'delivering' || order.status === 'delivered') && order.courier && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Ваш курьер
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold">
                          {order.courier.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {order.courier.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {order.courier.phone}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Позвонить
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Написать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Состав заказа */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Состав заказа
                </h3>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-600">
                          {item.quantity} × {item.price}₽
                        </div>
                        {item.options?.extras && item.options.extras.length > 0 && (
                          <div className="text-xs text-gray-500">
                            +{item.options.extras.join(', ')}
                          </div>
                        )}
                      </div>
                      <div className="font-medium">
                        {item.price * item.quantity}₽
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Боковая панель */}
          <div className="lg:col-span-1 space-y-6">
            {/* Адрес доставки */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Адрес доставки
                </h3>
                <div className="text-gray-600">
                  <div>{order.deliveryAddress.address}</div>
                  {order.deliveryAddress.apartment && (
                    <div>кв. {order.deliveryAddress.apartment}</div>
                  )}
                  {order.deliveryAddress.entrance && (
                    <div>подъезд {order.deliveryAddress.entrance}</div>
                  )}
                  {order.deliveryAddress.floor && (
                    <div>этаж {order.deliveryAddress.floor}</div>
                  )}
                  {order.deliveryAddress.comment && (
                    <div className="mt-2 text-sm">
                      Комментарий: {order.deliveryAddress.comment}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Ресторан */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Ресторан
                </h3>
                <div className="text-gray-900 font-medium mb-2">
                  {order.restaurant.name}
                </div>
                <Link to={`/restaurants/${order.restaurant.id}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Перейти в ресторан
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Итого */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Итого
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Сумма заказа</span>
                    <span>{order.totalPrice - order.deliveryFee}₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span>{order.deliveryFee === 0 ? 'Бесплатно' : `${order.deliveryFee}₽`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold border-t pt-2">
                    <span>Итого</span>
                    <span>{order.totalPrice}₽</span>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  Способ оплаты: {
                    order.paymentMethod === 'card' ? 'Банковская карта' :
                    order.paymentMethod === 'cash' ? 'Наличные' :
                    'Онлайн-платеж'
                  }
                </div>
              </CardContent>
            </Card>

            {/* Действия */}
            {order.status === 'delivered' && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Оцените заказ
                  </h3>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button key={rating} className="p-1">
                        <Star className="h-6 w-6 text-gray-300 hover:text-yellow-400" />
                      </button>
                    ))}
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Оставить отзыв
                  </Button>
                </CardContent>
              </Card>
            )}

            {order.status !== 'delivered' && order.status !== 'cancelled' && (
              <Card>
                <CardContent className="p-6">
                  <Button 
                    variant="outline" 
                    className="w-full text-red-600 hover:text-red-700"
                  >
                    Отменить заказ
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;