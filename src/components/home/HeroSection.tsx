import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Вкусная еда
              <br />
              <span className="text-yellow-300">за 30 минут</span>
            </h1>
            <p className="text-xl text-orange-100">
              Доставляем любимые блюда из лучших ресторанов города. 
              Быстро, горячо и с любовью!
            </p>

            {/* Поиск */}
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Введите ваш адрес"
                    className="pl-10 text-gray-900 border-gray-300"
                  />
                </div>
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Что будем заказывать?"
                    className="pl-10 text-gray-900 border-gray-300"
                  />
                </div>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Найти еду
                </Button>
              </div>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-orange-200">Ресторанов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">30 мин</div>
                <div className="text-orange-200">Доставка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-orange-200 flex items-center justify-center">
                  <Star className="h-4 w-4 fill-current mr-1" />
                  Рейтинг
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Вкусная еда"
                className="rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Плавающие карточки */}
            <div className="absolute -top-4 -left-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-500" />
                <div>
                  <div className="font-semibold">Быстрая доставка</div>
                  <div className="text-sm text-gray-500">25-30 минут</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <div>
                  <div className="font-semibold">Высокий рейтинг</div>
                  <div className="text-sm text-gray-500">4.8 из 5 звезд</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Быстрые ссылки */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/menu?category=pizza" className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-opacity-30 transition-all">
            <div className="text-3xl mb-2">🍕</div>
            <div className="font-semibold">Пицца</div>
          </Link>
          <Link to="/menu?category=burgers" className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-opacity-30 transition-all">
            <div className="text-3xl mb-2">🍔</div>
            <div className="font-semibold">Бургеры</div>
          </Link>
          <Link to="/menu?category=sushi" className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-opacity-30 transition-all">
            <div className="text-3xl mb-2">🍣</div>
            <div className="font-semibold">Суши</div>
          </Link>
          <Link to="/menu?category=desserts" className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-opacity-30 transition-all">
            <div className="text-3xl mb-2">🍰</div>
            <div className="font-semibold">Десерты</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;