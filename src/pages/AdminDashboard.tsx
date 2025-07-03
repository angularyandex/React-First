import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

const AdminDashboard = () => {
  const [orders] = useState([
    {
      id: 'order-1',
      customer: 'Иван Петров',
      items: ['Пицца Маргарита', 'Салат Цезарь'],
      total: 1290,
      status: 'preparing',
      createdAt: '2024-01-15T10:30:00Z',
      restaurant: 'Пицца Хаус'
    },
    {
      id: 'order-2',
      customer: 'Анна Сидорова',
      items: ['Филадельфия', 'Мисо суп'],
      total: 1850,
      status: 'delivering',
      createdAt: '2024-01-15T11:15:00Z',
      restaurant: 'Суши Мастер'
    }
  ]);

  const [restaurants] = useState([
    {
      id: 'rest-1',
      name: 'Пицца Хаус',
      cuisine: 'Итальянская',
      rating: 4.7,
      orders: 156,
      revenue: 234500,
      status: 'active'
    },
    {
      id: 'rest-2',
      name: 'Суши Мастер',
      cuisine: 'Японская',
      rating: 4.9,
      orders: 89,
      revenue: 189300,
      status: 'active'
    }
  ]);

  const [users] = useState([
    {
      id: 'user-1',
      name: 'Иван Петров',
      email: 'ivan@example.com',
      orders: 23,
      totalSpent: 45600,
      lastOrder: '2024-01-15',
      status: 'active'
    },
    {
      id: 'user-2',
      name: 'Анна Сидорова',
      email: 'anna@example.com',
      orders: 15,
      totalSpent: 28900,
      lastOrder: '2024-01-14',
      status: 'active'
    }
  ]);

  const stats = {
    totalOrders: 1245,
    totalRevenue: 2456789,
    activeUsers: 8934,
    averageOrderValue: 1250
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { label: 'Ожидает', color: 'bg-yellow-500' },
      confirmed: { label: 'Подтвержден', color: 'bg-blue-500' },
      preparing: { label: 'Готовится', color: 'bg-orange-500' },
      delivering: { label: 'В пути', color: 'bg-purple-500' },
      delivered: { label: 'Доставлен', color: 'bg-green-500' },
      cancelled: { label: 'Отменен', color: 'bg-red-500' },
      active: { label: 'Активен', color: 'bg-green-500' },
      inactive: { label: 'Неактивен', color: 'bg-gray-500' }
    };

    const statusInfo = statusMap[status as keyof typeof statusMap];
    return (
      <Badge className={`${statusInfo.color} hover:${statusInfo.color} text-white`}>
        {statusInfo.label}
      </Badge>
    );
  };

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Панель администратора
            </h1>
            <p className="text-gray-600">
              Управление заказами, ресторанами и пользователями
            </p>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Всего заказов</p>
                    <p className="text-2xl font-bold">{stats.totalOrders.toLocaleString()}</p>
                  </div>
                  <ShoppingBag className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Выручка</p>
                    <p className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()}₽</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Активные пользователи</p>
                    <p className="text-2xl font-bold">{stats.activeUsers.toLocaleString()}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Средний чек</p>
                    <p className="text-2xl font-bold">{stats.averageOrderValue}₽</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="orders">Заказы</TabsTrigger>
              <TabsTrigger value="restaurants">Рестораны</TabsTrigger>
              <TabsTrigger value="users">Пользователи</TabsTrigger>
              <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            </TabsList>

            {/* Заказы */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Управление заказами</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            <div>
                              <div className="font-semibold">#{order.id.slice(-8)}</div>
                              <div className="text-sm text-gray-600">{order.customer}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Ресторан</div>
                              <div className="font-medium">{order.restaurant}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Блюда</div>
                              <div className="font-medium">{order.items.join(', ')}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Сумма</div>
                              <div className="font-semibold">{order.total}₽</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Время</div>
                              <div className="font-medium">
                                {new Date(order.createdAt).toLocaleTimeString('ru-RU', {
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {getStatusBadge(order.status)}
                          <div className="flex space-x-1">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Рестораны */}
            <TabsContent value="restaurants">
              <Card>
                <CardHeader>
                  <CardTitle>Управление ресторанами</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {restaurants.map((restaurant) => (
                      <div key={restaurant.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            <div>
                              <div className="font-semibold">{restaurant.name}</div>
                              <div className="text-sm text-gray-600">{restaurant.cuisine}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Рейтинг</div>
                              <div className="font-medium">{restaurant.rating}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Заказов</div>
                              <div className="font-medium">{restaurant.orders}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Выручка</div>
                              <div className="font-semibold">{restaurant.revenue.toLocaleString()}₽</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {getStatusBadge(restaurant.status)}
                          <div className="flex space-x-1">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Пользователи */}
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>Управление пользователями</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4">
                            <div>
                              <div className="font-semibold">{user.name}</div>
                              <div className="text-sm text-gray-600">{user.email}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Заказов</div>
                              <div className="font-medium">{user.orders}</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Потрачено</div>
                              <div className="font-semibold">{user.totalSpent.toLocaleString()}₽</div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">Последний заказ</div>
                              <div className="font-medium">
                                {new Date(user.lastOrder).toLocaleDateString('ru-RU')}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {getStatusBadge(user.status)}
                          <div className="flex space-x-1">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Аналитика */}
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Статистика заказов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Сегодня</span>
                        <span className="font-semibold">156 заказов</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Вчера</span>
                        <span className="font-semibold">142 заказа</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>За неделю</span>
                        <span className="font-semibold">1,089 заказов</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>За месяц</span>
                        <span className="font-semibold">4,567 заказов</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Популярные рестораны</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Пицца Хаус</span>
                        <span className="font-semibold">156 заказов</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Суши Мастер</span>
                        <span className="font-semibold">89 заказов</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Бургер Кинг</span>
                        <span className="font-semibold">67 заказов</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Мама Мия</span>
                        <span className="font-semibold">45 заказов</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;