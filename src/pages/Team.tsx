import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Mail, Users, Award, Coffee } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      id: 1,
      name: 'Александр Петров',
      position: 'Генеральный директор',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Опыт в сфере технологий более 15 лет. Ранее работал в крупных IT-компаниях.',
      achievements: ['MBA Stanford', '15+ лет опыта', 'Эксперт в области технологий'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'a.petrov@vkusdelivery.ru'
      }
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      position: 'Технический директор',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Ведущий разработчик с опытом создания масштабируемых систем.',
      achievements: ['PhD Computer Science', 'Архитектор систем', '20+ проектов'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'm.sidorova@vkusdelivery.ru'
      }
    },
    {
      id: 3,
      name: 'Дмитрий Козлов',
      position: 'Директор по маркетингу',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Специалист по цифровому маркетингу с опытом работы в стартапах.',
      achievements: ['Growth Hacker', 'Digital Marketing Expert', '10+ лет опыта'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'd.kozlov@vkusdelivery.ru'
      }
    },
    {
      id: 4,
      name: 'Елена Волкова',
      position: 'Директор по операциям',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Эксперт в области логистики и управления операциями.',
      achievements: ['Logistics Expert', 'Operations Management', 'Process Optimization'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'e.volkova@vkusdelivery.ru'
      }
    }
  ];

  const departments = [
    {
      name: 'Разработка',
      count: 25,
      icon: <Coffee className="h-6 w-6" />,
      description: 'Frontend, Backend, Mobile, DevOps'
    },
    {
      name: 'Дизайн',
      count: 8,
      icon: <Award className="h-6 w-6" />,
      description: 'UX/UI, Графический дизайн, Брендинг'
    },
    {
      name: 'Маркетинг',
      count: 12,
      icon: <Users className="h-6 w-6" />,
      description: 'Digital, Content, Performance, PR'
    },
    {
      name: 'Операции',
      count: 35,
      icon: <Users className="h-6 w-6" />,
      description: 'Логистика, Поддержка, Качество'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Наша команда
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Мы — команда профессионалов, объединенных общей целью: 
              сделать доставку еды лучше для каждого клиента.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">80+</div>
                <div className="text-orange-200">Сотрудников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-orange-200">Отделов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4</div>
                <div className="text-orange-200">Года работы</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Руководство */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Руководство
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Опытные лидеры, которые направляют нашу компанию к успеху
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member) => (
              <Card key={member.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>

                  {/* Достижения */}
                  <div className="space-y-1 mb-4">
                    {member.achievements.map((achievement, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>

                  {/* Социальные сети */}
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отделы */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши отделы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Каждый отдел играет важную роль в достижении наших целей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-orange-500 mb-4 flex justify-center">
                    {dept.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {dept.name}
                  </h3>
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    {dept.count}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {dept.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Культура компании */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наша культура
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы создаем среду, где каждый может расти и развиваться
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Командная работа
              </h3>
              <p className="text-gray-600">
                Мы верим в силу коллективного разума и поддерживаем друг друга
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Стремление к совершенству
              </h3>
              <p className="text-gray-600">
                Постоянно улучшаем наши процессы и продукты
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Work-Life Balance
              </h3>
              <p className="text-gray-600">
                Поддерживаем баланс между работой и личной жизнью
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Хотите присоединиться к нам?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Мы всегда ищем талантливых и мотивированных людей для нашей команды
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Посмотреть вакансии
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Team;