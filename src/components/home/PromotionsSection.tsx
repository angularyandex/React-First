import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Gift, Percent } from 'lucide-react';

const PromotionsSection = () => {
  const promotions = [
    {
      id: 1,
      title: 'Скидка 30% на первый заказ',
      description: 'Новым клиентам скидка 30% на любой заказ от 1000₽',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      discount: '30%',
      code: 'WELCOME30',
      validUntil: '31 декабря',
      type: 'new-user',
      href: '/promotions/1'
    },
    {
      id: 2,
      title: 'Бесплатная доставка',
      description: 'При заказе от 1500₽ доставка абсолютно бесплатно',
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600',
      discount: '0₽',
      code: 'FREEDEL',
      validUntil: 'Постоянно',
      type: 'delivery',
      href: '/promotions/2'
    },
    {
      id: 3,
      title: 'Комбо за 599₽',
      description: 'Пицца + напиток + десерт всего за 599₽',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600',
      discount: '40%',
      code: 'COMBO599',
      validUntil: '15 января',
      type: 'combo',
      href: '/promotions/3'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'new-user':
        return <Gift className="h-5 w-5" />;
      case 'delivery':
        return <Clock className="h-5 w-5" />;
      case 'combo':
        return <Percent className="h-5 w-5" />;
      default:
        return <Gift className="h-5 w-5" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'new-user':
        return 'bg-green-500 hover:bg-green-500';
      case 'delivery':
        return 'bg-blue-500 hover:bg-blue-500';
      case 'combo':
        return 'bg-purple-500 hover:bg-purple-500';
      default:
        return 'bg-orange-500 hover:bg-orange-500';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Актуальные акции
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Не упустите возможность сэкономить на любимых блюдах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promotion) => (
            <Card key={promotion.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <img
                  src={promotion.image}
                  alt={promotion.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                <Badge className={`absolute top-4 left-4 ${getTypeBadgeColor(promotion.type)} text-white`}>
                  <div className="flex items-center space-x-1">
                    {getTypeIcon(promotion.type)}
                    <span>-{promotion.discount}</span>
                  </div>
                </Badge>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{promotion.title}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{promotion.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Промокод:</span>
                    <Badge variant="outline" className="font-mono">
                      {promotion.code}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Действует до:</span>
                    <span className="text-sm font-medium">{promotion.validUntil}</span>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => navigator.clipboard.writeText(promotion.code)}
                  >
                    Скопировать код
                  </Button>
                  <Link to={promotion.href} className="flex-1">
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/promotions">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Все акции и предложения
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;