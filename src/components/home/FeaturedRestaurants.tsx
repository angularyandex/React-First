import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Truck } from 'lucide-react';

const FeaturedRestaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Мама Мия',
      cuisine: 'Итальянская кухня',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      deliveryTime: '25-35 мин',
      deliveryFee: 'Бесплатно',
      minOrder: 'от 800₽',
      isNew: true,
      href: '/restaurants/1'
    },
    {
      id: 2,
      name: 'Суши Мастер',
      cuisine: 'Японская кухня',
      image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      deliveryTime: '30-40 мин',
      deliveryFee: '150₽',
      minOrder: 'от 1200₽',
      isNew: false,
      href: '/restaurants/2'
    },
    {
      id: 3,
      name: 'Бургер Кинг',
      cuisine: 'Фастфуд',
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      deliveryTime: '20-30 мин',
      deliveryFee: 'Бесплатно',
      minOrder: 'от 600₽',
      isNew: false,
      href: '/restaurants/3'
    },
    {
      id: 4,
      name: 'Пицца Хаус',
      cuisine: 'Пиццерия',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      deliveryTime: '25-35 мин',
      deliveryFee: 'Бесплатно',
      minOrder: 'от 900₽',
      isNew: true,
      href: '/restaurants/4'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Рекомендуемые рестораны
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Лучшие рестораны города с высоким рейтингом и быстрой доставкой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <Link key={restaurant.id} to={restaurant.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  
                  {restaurant.isNew && (
                    <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-500">
                      Новый
                    </Badge>
                  )}

                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{restaurant.rating}</span>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {restaurant.cuisine}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{restaurant.deliveryTime}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Truck className="h-4 w-4" />
                        <span>{restaurant.deliveryFee}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Минимальный заказ: {restaurant.minOrder}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/restaurants">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Все рестораны
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;