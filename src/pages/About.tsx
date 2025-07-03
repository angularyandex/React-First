import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Award, Clock, Heart, Target, Eye, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Забота о клиентах',
      description: 'Мы всегда ставим потребности наших клиентов на первое место'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Качество',
      description: 'Работаем только с проверенными ресторанами и поставщиками'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Скорость',
      description: 'Быстрая доставка без ущерба для качества блюд'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Инновации',
      description: 'Постоянно развиваем технологии для улучшения сервиса'
    }
  ];

  const achievements = [
    { number: '50,000+', label: 'Довольных клиентов' },
    { number: '500+', label: 'Ресторанов-партнеров' },
    { number: '1,000,000+', label: 'Выполненных заказов' },
    { number: '4.8', label: 'Средний рейтинг' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                О нас
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Мы — команда энтузиастов, которая делает доставку еды быстрой, 
                удобной и вкусной для каждого клиента.
              </p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Наша команда
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="О нас"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Миссия и видение */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Наша миссия</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Сделать качественную еду доступной каждому, обеспечивая быструю 
                  и надежную доставку лучших блюд от проверенных ресторанов. 
                  Мы стремимся создать экосистему, где клиенты, рестораны и курьеры 
                  работают в гармонии для достижения общей цели.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-blue-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Наше видение</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Стать ведущей платформой доставки еды, которая объединяет людей 
                  через любовь к качественной пище. Мы видим будущее, где каждый 
                  может насладиться любимыми блюдами в любое время и в любом месте, 
                  не беспокоясь о качестве и скорости доставки.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе каждый день
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-orange-500 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши достижения
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Цифры, которые говорят о нашем успехе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* История компании */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наша история
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Путь от идеи до ведущего сервиса доставки
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Badge className="bg-orange-500 hover:bg-orange-500 text-white px-3 py-1">
                  2020
                </Badge>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Основание компании
                  </h3>
                  <p className="text-gray-600">
                    Идея создания сервиса доставки еды родилась во время пандемии, 
                    когда люди особенно нуждались в качественной доставке.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Badge className="bg-orange-500 hover:bg-orange-500 text-white px-3 py-1">
                  2021
                </Badge>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Первые партнеры
                  </h3>
                  <p className="text-gray-600">
                    Заключили договоры с 50 ресторанами и начали доставку в центральном районе города.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Badge className="bg-orange-500 hover:bg-orange-500 text-white px-3 py-1">
                  2022
                </Badge>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Расширение географии
                  </h3>
                  <p className="text-gray-600">
                    Охватили все районы города и достигли отметки в 10,000 довольных клиентов.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Badge className="bg-orange-500 hover:bg-orange-500 text-white px-3 py-1">
                  2023
                </Badge>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Мобильное приложение
                  </h3>
                  <p className="text-gray-600">
                    Запустили мобильное приложение и внедрили систему лояльности для клиентов.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Badge className="bg-orange-500 hover:bg-orange-500 text-white px-3 py-1">
                  2024
                </Badge>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Лидер рынка
                  </h3>
                  <p className="text-gray-600">
                    Стали ведущим сервисом доставки в городе с более чем 500 ресторанами-партнерами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Присоединяйтесь к нам!
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Станьте частью нашей истории успеха. Мы всегда ищем талантливых людей 
            для нашей команды.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Вакансии
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Стать партнером
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;