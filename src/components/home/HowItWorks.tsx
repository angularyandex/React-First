import React from 'react';
import { Search, ShoppingCart, Truck, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <Search className="h-8 w-8" />,
      title: 'Выберите блюдо',
      description: 'Найдите любимое блюдо в нашем каталоге или воспользуйтесь поиском'
    },
    {
      id: 2,
      icon: <ShoppingCart className="h-8 w-8" />,
      title: 'Оформите заказ',
      description: 'Добавьте блюда в корзину и укажите адрес доставки'
    },
    {
      id: 3,
      icon: <Truck className="h-8 w-8" />,
      title: 'Ожидайте доставку',
      description: 'Наш курьер доставит заказ в течение 30 минут'
    },
    {
      id: 4,
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Наслаждайтесь',
      description: 'Получите свежую и горячую еду прямо к двери'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Заказать еду стало проще простого. Всего 4 шага до вкусного обеда
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center relative">
              {/* Соединительная линия */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-orange-200 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-orange-300 rounded-full"></div>
                </div>
              )}

              <div className="relative z-10">
                {/* Иконка */}
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {step.icon}
                </div>

                {/* Номер шага */}
                <div className="absolute -top-2 -right-2 bg-orange-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {step.id}
                </div>

                {/* Контент */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 bg-orange-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">30 мин</div>
              <div className="text-gray-700">Среднее время доставки</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700">Работаем круглосуточно</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-700">Ресторанов-партнеров</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;