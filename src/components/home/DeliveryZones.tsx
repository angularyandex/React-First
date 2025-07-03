import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Truck } from 'lucide-react';

const DeliveryZones = () => {
  const zones = [
    {
      id: 1,
      name: 'Центральный район',
      deliveryTime: '20-30 мин',
      deliveryFee: 'Бесплатно',
      minOrder: 800,
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 2,
      name: 'Северный район',
      deliveryTime: '25-35 мин',
      deliveryFee: '150₽',
      minOrder: 1000,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 3,
      name: 'Южный район',
      deliveryTime: '30-40 мин',
      deliveryFee: '200₽',
      minOrder: 1200,
      color: 'bg-orange-100 text-orange-800'
    },
    {
      id: 4,
      name: 'Восточный район',
      deliveryTime: '35-45 мин',
      deliveryFee: '250₽',
      minOrder: 1500,
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Зоны доставки
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы доставляем во все районы города. Узнайте условия доставки в вашем районе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone) => (
            <Card key={zone.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{zone.name}</h3>
                  <Badge className={zone.color}>
                    <MapPin className="h-3 w-3 mr-1" />
                    Зона
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Время доставки</span>
                    </div>
                    <span className="text-sm font-medium">{zone.deliveryTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Truck className="h-4 w-4" />
                      <span className="text-sm">Стоимость</span>
                    </div>
                    <span className="text-sm font-medium">{zone.deliveryFee}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Мин. заказ</span>
                    <span className="text-sm font-medium">от {zone.minOrder}₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryZones;