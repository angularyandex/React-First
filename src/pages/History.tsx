import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Award, TrendingUp, MapPin, Smartphone } from 'lucide-react';

const History = () => {
  const milestones = [
    {
      year: '2020',
      quarter: 'Q1',
      title: 'Основание компании',
      description: 'Идея создания сервиса доставки еды родилась во время пандемии COVID-19, когда основатели поняли важность качественной доставки еды.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Users className="h-6 w-6" />,
      achievements: ['Регистрация компании', 'Первые инвестиции', 'Команда из 5 человек'],
      stats: { employees: 5, restaurants: 0, orders: 0 }
    },
    {
      year: '2020',
      quarter: 'Q3',
      title: 'Первые партнеры',
      description: 'Заключили договоры с первыми 10 ресторанами и запустили MVP версию платформы в тестовом режиме.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Award className="h-6 w-6" />,
      achievements: ['10 ресторанов-партнеров', 'Запуск MVP', 'Первые 100 заказов'],
      stats: { employees: 8, restaurants: 10, orders: 100 }
    },
    {
      year: '2021',
      quarter: 'Q1',
      title: 'Официальный запуск',
      description: 'Официальный запуск сервиса в центральном районе города с полноценной командой поддержки и курьерской службой.',
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <TrendingUp className="h-6 w-6" />,
      achievements: ['Официальный запуск', '50 ресторанов', '1,000 заказов в месяц'],
      stats: { employees: 15, restaurants: 50, orders: 1000 }
    },
    {
      year: '2021',
      quarter: 'Q4',
      title: 'Расширение географии',
      description: 'Расширили зону доставки на все районы города и увеличили количество ресторанов-партнеров до 150.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <MapPin className="h-6 w-6" />,
      achievements: ['Покрытие всего города', '150 ресторанов', '10,000 клиентов'],
      stats: { employees: 25, restaurants: 150, orders: 5000 }
    },
    {
      year: '2022',
      quarter: 'Q2',
      title: 'Первый миллион заказов',
      description: 'Достигли отметки в 1 миллион выполненных заказов и запустили программу лояльности для клиентов.',
      image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Award className="h-6 w-6" />,
      achievements: ['1 млн заказов', 'Программа лояльности', '250 ресторанов'],
      stats: { employees: 40, restaurants: 250, orders: 15000 }
    },
    {
      year: '2023',
      quarter: 'Q1',
      title: 'Мобильное приложение',
      description: 'Запустили мобильное приложение для iOS и Android, которое получило высокие оценки пользователей.',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Smartphone className="h-6 w-6" />,
      achievements: ['Мобильное приложение', 'Рейтинг 4.8', '100,000 скачиваний'],
      stats: { employees: 60, restaurants: 350, orders: 25000 }
    },
    {
      year: '2023',
      quarter: 'Q4',
      title: 'Экологические инициативы',
      description: 'Внедрили экологичную упаковку и запустили программу углеродной нейтральности доставки.',
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <Award className="h-6 w-6" />,
      achievements: ['Эко-упаковка', 'Углеродная нейтральность', '400 ресторанов'],
      stats: { employees: 70, restaurants: 400, orders: 35000 }
    },
    {
      year: '2024',
      quarter: 'Q1',
      title: 'Лидер рынка',
      description: 'Стали ведущим сервисом доставки в городе с более чем 500 ресторанами-партнерами и 50,000 активных клиентов.',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: <TrendingUp className="h-6 w-6" />,
      achievements: ['Лидер рынка', '500+ ресторанов', '50,000 клиентов'],
      stats: { employees: 80, restaurants: 500, orders: 50000 }
    }
  ];

  const keyFigures = [
    { label: 'Лет на рынке', value: '4+', icon: <Calendar className="h-6 w-6" /> },
    { label: 'Сотрудников', value: '80+', icon: <Users className="h-6 w-6" /> },
    { label: 'Ресторанов', value: '500+', icon: <Award className="h-6 w-6" /> },
    { label: 'Заказов в месяц', value: '50K+', icon: <TrendingUp className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              История нашей компании
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              От небольшого стартапа до ведущего сервиса доставки еды. 
              Узнайте, как мы прошли этот путь.
            </p>
            
            {/* Ключевые цифры */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {keyFigures.map((figure, index) => (
                <div key={index} className="text-center">
                  <div className="text-orange-200 mb-2 flex justify-center">
                    {figure.icon}
                  </div>
                  <div className="text-3xl font-bold">{figure.value}</div>
                  <div className="text-orange-200 text-sm">{figure.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Временная линия */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наш путь к успеху
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ключевые моменты в развитии нашей компании
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Изображение */}
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="rounded-lg shadow-lg w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="flex items-center space-x-2">
                          <div className="text-orange-500">
                            {milestone.icon}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{milestone.year}</div>
                            <div className="text-sm text-gray-600">{milestone.quarter}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Контент */}
                  <div className="lg:w-1/2">
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <Badge className="bg-orange-500 hover:bg-orange-500">
                            {milestone.year} {milestone.quarter}
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {milestone.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6">
                          {milestone.description}
                        </p>

                        {/* Достижения */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Ключевые достижения:</h4>
                          <div className="space-y-1">
                            {milestone.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-sm text-gray-600">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Статистика */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                          <div className="text-center">
                            <div className="text-lg font-bold text-orange-600">
                              {milestone.stats.employees}
                            </div>
                            <div className="text-xs text-gray-500">Сотрудников</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-orange-600">
                              {milestone.stats.restaurants}
                            </div>
                            <div className="text-xs text-gray-500">Ресторанов</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-orange-600">
                              {milestone.stats.orders}
                            </div>
                            <div className="text-xs text-gray-500">Заказов/мес</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Будущие планы */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши планы на будущее
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы не останавливаемся на достигнутом и продолжаем развиваться
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-orange-500 mb-4 flex justify-center">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Расширение в другие города
                </h3>
                <p className="text-gray-600 text-sm">
                  Планируем запуск в 5 новых городах к концу 2024 года
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-orange-500 mb-4 flex justify-center">
                  <Smartphone className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Новые технологии
                </h3>
                <p className="text-gray-600 text-sm">
                  Внедрение ИИ для оптимизации маршрутов и прогнозирования спроса
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-orange-500 mb-4 flex justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Новые сервисы
                </h3>
                <p className="text-gray-600 text-sm">
                  Запуск доставки продуктов и товаров первой необходимости
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;