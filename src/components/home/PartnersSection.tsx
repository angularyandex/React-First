import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      name: 'Мама Мия',
      logo: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Итальянская кухня'
    },
    {
      id: 2,
      name: 'Суши Мастер',
      logo: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Японская кухня'
    },
    {
      id: 3,
      name: 'Бургер Кинг',
      logo: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Фастфуд'
    },
    {
      id: 4,
      name: 'Пицца Хаус',
      logo: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Пиццерия'
    },
    {
      id: 5,
      name: 'Дракон',
      logo: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Китайская кухня'
    },
    {
      id: 6,
      name: 'Русская изба',
      logo: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Русская кухня'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши партнеры
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы сотрудничаем с лучшими ресторанами города, чтобы предложить вам самые вкусные блюда
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <Card key={partner.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-600">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;