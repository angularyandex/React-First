import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Анна Петрова',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      text: 'Отличный сервис! Еда всегда приходит горячей и вкусной. Курьеры очень вежливые и пунктуальные.',
      date: '2 дня назад'
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      text: 'Пользуюсь уже полгода. Большой выбор ресторанов, удобное приложение, быстрая доставка. Рекомендую!',
      date: '1 неделю назад'
    },
    {
      id: 3,
      name: 'Елена Козлова',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      text: 'Очень довольна качеством еды и скоростью доставки. Особенно нравятся акции и скидки для постоянных клиентов.',
      date: '3 дня назад'
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      text: 'Заказываю обеды в офис каждый день. Всё всегда свежее, упаковано аккуратно. Отличная работа!',
      date: '5 дней назад'
    },
    {
      id: 5,
      name: 'Ольга Морозова',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      text: 'Лучший сервис доставки в городе! Широкий выбор, приемлемые цены, быстрая доставка. Всем советую!',
      date: '1 день назад'
    },
    {
      id: 6,
      name: 'Александр Новиков',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      text: 'Пользуюсь регулярно, особенно по выходным. Качество еды на высоте, доставка точно в срок.',
      date: '4 дня назад'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят о нас довольные клиенты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <Quote className="h-5 w-5 text-orange-500" />
                    </div>
                    <div className="flex items-center space-x-1 mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="text-sm text-gray-500">
                  {testimonial.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Статистика */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
              <div className="text-gray-700">Средний рейтинг</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50,000+</div>
              <div className="text-gray-700">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-700">Положительных отзывов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-700">Выполненных заказов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;