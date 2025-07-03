import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useOrders } from '@/contexts/OrderContext';
import { LoginModal } from '@/components/auth/LoginModal';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  MapPin,
  Clock,
  CreditCard,
  Banknote,
  Smartphone,
  Tag
} from 'lucide-react';

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { createOrder } = useOrders();
  const navigate = useNavigate();
  
  const [showLogin, setShowLogin] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(user?.addresses?.find(a => a.isDefault)?.id || '');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash' | 'online'>('card');
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [orderNotes, setOrderNotes] = useState('');

  const deliveryFee = totalPrice >= 1000 ? 0 : 200;
  const finalPrice = totalPrice + deliveryFee - promoDiscount;

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const applyPromoCode = () => {
    // Простая логика промокодов
    const promoCodes: Record<string, number> = {
      'WELCOME10': 100,
      'SAVE20': 200,
      'FIRST50': 500
    };

    const discount = promoCodes[promoCode.toUpperCase()] || 0;
    setPromoDiscount(discount);
  };

  const handleCheckout = async () => {
    if (!user) {
      setShowLogin(true);
      return;
    }

    if (!selectedAddress) {
      alert('Выберите адрес доставки');
      return;
    }

    const selectedAddressData = user.addresses?.find(a => a.id === selectedAddress);
    if (!selectedAddressData) return;

    try {
      const order = await createOrder({
        userId: user.id,
        items,
        status: 'pending',
        totalPrice: finalPrice,
        deliveryFee,
        deliveryAddress: {
          address: selectedAddressData.address,
          apartment: selectedAddressData.apartment,
          entrance: selectedAddressData.entrance,
          floor: selectedAddressData.floor,
          comment: selectedAddressData.comment
        },
        paymentMethod,
        estimatedDeliveryTime: '30-40 мин',
        restaurant: {
          id: items[0]?.restaurantId || '',
          name: items[0]?.restaurant || ''
        },
        notes: orderNotes
      });

      clearCart();
      navigate(`/order/${order.id}`);
    } catch (error) {
      console.error('Ошибка создания заказа:', error);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Ваша корзина пуста
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Добавьте понравившиеся блюда в корзину, чтобы оформить заказ
            </p>
            <Link to="/menu">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Перейти к меню
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Товары в корзине */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Ваш заказ</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Очистить корзину
                  </Button>
                </div>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${JSON.stringify(item.options)}`} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.restaurant}</p>
                        
                        {item.options && (
                          <div className="mt-1">
                            {item.options.size && (
                              <Badge variant="secondary" className="mr-1 text-xs">
                                {item.options.size}
                              </Badge>
                            )}
                            {item.options.extras?.map((extra, index) => (
                              <Badge key={index} variant="secondary" className="mr-1 text-xs">
                                +{extra}
                              </Badge>
                            ))}
                          </div>
                        )}
                        
                        {item.options?.notes && (
                          <p className="text-xs text-gray-500 mt-1">
                            Комментарий: {item.options.notes}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(`${item.id}-${JSON.stringify(item.options)}`, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(`${item.id}-${JSON.stringify(item.options)}`, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="font-semibold">{item.price * item.quantity}₽</div>
                          <div className="text-sm text-gray-500">{item.price}₽ за шт.</div>
                        </div>

                        <button
                          onClick={() => removeItem(`${item.id}-${JSON.stringify(item.options)}`)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Оформление заказа */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-6">Оформление заказа</h2>

                {/* Адрес доставки */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Адрес доставки
                  </h3>
                  
                  {user?.addresses && user.addresses.length > 0 ? (
                    <div className="space-y-2">
                      {user.addresses.map((address) => (
                        <button
                          key={address.id}
                          onClick={() => setSelectedAddress(address.id)}
                          className={`w-full p-3 text-left rounded-lg border transition-all ${
                            selectedAddress === address.id
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-medium">{address.title}</div>
                          <div className="text-sm text-gray-600">{address.address}</div>
                          {address.apartment && (
                            <div className="text-sm text-gray-500">
                              кв. {address.apartment}
                              {address.entrance && `, подъезд ${address.entrance}`}
                              {address.floor && `, этаж ${address.floor}`}
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-600">
                      {user ? 'Добавьте адрес в профиле' : 'Войдите, чтобы выбрать адрес'}
                    </div>
                  )}
                </div>

                {/* Время доставки */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Время доставки
                  </h3>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium">30-40 минут</div>
                    <div className="text-sm text-gray-600">Стандартная доставка</div>
                  </div>
                </div>

                {/* Способ оплаты */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Способ оплаты</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`w-full p-3 text-left rounded-lg border transition-all ${
                        paymentMethod === 'card'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-3" />
                        <span>Банковской картой</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('online')}
                      className={`w-full p-3 text-left rounded-lg border transition-all ${
                        paymentMethod === 'online'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <Smartphone className="h-4 w-4 mr-3" />
                        <span>Apple Pay / Google Pay</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('cash')}
                      className={`w-full p-3 text-left rounded-lg border transition-all ${
                        paymentMethod === 'cash'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <Banknote className="h-4 w-4 mr-3" />
                        <span>Наличными курьеру</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Промокод */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    Промокод
                  </h3>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Введите промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button 
                      variant="outline" 
                      onClick={applyPromoCode}
                      disabled={!promoCode}
                    >
                      Применить
                    </Button>
                  </div>
                  {promoDiscount > 0 && (
                    <div className="mt-2 text-sm text-green-600">
                      Скидка применена: -{promoDiscount}₽
                    </div>
                  )}
                </div>

                {/* Комментарий к заказу */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Комментарий к заказу</h3>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                    rows={3}
                    placeholder="Особые пожелания..."
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                  />
                </div>

                {/* Итого */}
                <div className="border-t pt-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Сумма заказа</span>
                      <span>{totalPrice}₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка</span>
                      <span>{deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee}₽`}</span>
                    </div>
                    {promoDiscount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Скидка</span>
                        <span>-{promoDiscount}₽</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-semibold border-t pt-2">
                      <span>Итого</span>
                      <span>{finalPrice}₽</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  size="lg"
                  disabled={!user || !selectedAddress}
                >
                  {user ? 'Оформить заказ' : 'Войти и оформить заказ'}
                </Button>

                {deliveryFee > 0 && (
                  <div className="mt-3 text-sm text-gray-600 text-center">
                    Добавьте товаров на {1000 - totalPrice}₽ для бесплатной доставки
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
};

export default Cart;