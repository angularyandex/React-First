import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Search, ArrowLeft, Phone, Mail } from 'lucide-react';

const NotFound = () => {
  const popularPages = [
    { name: 'Главная страница', href: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'Меню', href: '/menu', icon: <Search className="h-4 w-4" /> },
    { name: 'Рестораны', href: '/restaurants', icon: <Search className="h-4 w-4" /> },
    { name: 'О нас', href: '/about', icon: <Search className="h-4 w-4" /> }
  ];

  const helpOptions = [
    {
      title: 'Позвонить в поддержку',
      description: 'Круглосуточная горячая линия',
      contact: '+7 (999) 123-45-67',
      icon: <Phone className="h-5 w-5" />
    },
    {
      title: 'Написать нам',
      description: 'Ответим в течение часа',
      contact: 'support@vkusdelivery.ru',
      icon: <Mail className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Основная секция 404 */}
          <div className="mb-12">
            <div className="text-9xl font-bold text-orange-500 mb-4">404</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Страница не найдена
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              К сожалению, страница, которую вы ищете, не существует или была перемещена. 
              Но не расстраивайтесь — у нас есть много вкусной еды!
            </p>
            
            {/* Кнопки действий */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Home className="h-5 w-5 mr-2" />
                  На главную
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Назад
              </Button>
            </div>
          </div>

          {/* Популярные страницы */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Популярные страницы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularPages.map((page, index) => (
                <Link key={index} to={page.href}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className="text-orange-500 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                        {page.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {page.name}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Поиск */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Попробуйте найти то, что ищете
            </h2>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Поиск по сайту..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 rounded-l-none">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Помощь */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Нужна помощь?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {helpOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-orange-500 mb-3 flex justify-center">
                      {option.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {option.description}
                    </p>
                    <p className="text-orange-600 font-medium">
                      {option.contact}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Забавный факт */}
          <div className="bg-orange-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              А знаете ли вы?
            </h3>
            <p className="text-gray-600">
              Пока вы искали эту страницу, мы доставили уже 
              <span className="font-bold text-orange-600"> 127 заказов</span> 
              голодным клиентам! 🍕
            </p>
            <div className="mt-6">
              <Link to="/menu">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Заказать еду сейчас
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;