import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, ShoppingBag, Clock, Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <Users className="h-8 w-8" />,
      number: '50,000+',
      label: 'Довольных клиентов',
      description: 'Нам доверяют тысячи людей'
    },
    {
      id: 2,
      icon: <ShoppingBag className="h-8 w-8" />,
      number: '1,000,000+',
      label: 'Выполненных заказов',
      description: 'Успешно доставлено блюд'
    },
    {
      id: 3,
      icon: <Clock className="h-8 w-8" />,
      number: '25 мин',
      label: 'Среднее время доставки',
      description: 'Быстро и точно в срок'
    },
    {
      id: 4,
      icon: <Star className="h-8 w-8" />,
      number: '4.8',
      label: 'Средний рейтинг',
      description: 'Высокое качество сервиса'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши достижения
          </h2>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            Цифры, которые говорят о качестве нашего сервиса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.id} className="bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-white mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {stat.label}
                </h3>
                <p className="text-orange-100 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;