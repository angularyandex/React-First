import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Search,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Award,
  TrendingUp
} from 'lucide-react';

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'Все отделы' },
    { id: 'development', name: 'Разработка' },
    { id: 'design', name: 'Дизайн' },
    { id: 'marketing', name: 'Маркетинг' },
    { id: 'operations', name: 'Операции' },
    { id: 'support', name: 'Поддержка' },
    { id: 'management', name: 'Менеджмент' }
  ];

  const vacancies = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'development',
      departmentName: 'Разработка',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '200,000 - 300,000 ₽',
      experience: '3+ лет',
      description: 'Ищем опытного Frontend разработчика для работы над нашей платформой доставки еды.',
      requirements: [
        'Опыт работы с React/TypeScript 3+ лет',
        'Знание современных инструментов разработки',
        'Опыт работы с REST API',
        'Понимание принципов UX/UI'
      ],
      benefits: ['Гибкий график', 'ДМС', 'Обучение', 'Офис в центре']
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'design',
      departmentName: 'Дизайн',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '150,000 - 250,000 ₽',
      experience: '2+ лет',
      description: 'Создавайте интуитивные и красивые интерфейсы для миллионов пользователей.',
      requirements: [
        'Портфолио с проектами мобильных и веб-приложений',
        'Владение Figma, Sketch, Adobe Creative Suite',
        'Понимание принципов UX исследований',
        'Опыт работы в команде разработки'
      ],
      benefits: ['Творческая свобода', 'ДМС', 'Современное оборудование', 'Конференции']
    },
    {
      id: 3,
      title: 'Performance Marketing Manager',
      department: 'marketing',
      departmentName: 'Маркетинг',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '120,000 - 200,000 ₽',
      experience: '2+ лет',
      description: 'Управляйте рекламными кампаниями и привлекайте новых клиентов.',
      requirements: [
        'Опыт работы с Google Ads, Facebook Ads',
        'Знание аналитических инструментов',
        'Понимание метрик эффективности',
        'Опыт A/B тестирования'
      ],
      benefits: ['Бонусы от результатов', 'ДМС', 'Обучение', 'Гибкий график']
    },
    {
      id: 4,
      title: 'Backend Developer',
      department: 'development',
      departmentName: 'Разработка',
      location: 'Москва / Удаленно',
      type: 'Полная занятость',
      salary: '180,000 - 280,000 ₽',
      experience: '3+ лет',
      description: 'Разрабатывайте масштабируемые серверные решения для нашей платформы.',
      requirements: [
        'Опыт работы с Node.js/Python/Go',
        'Знание баз данных (PostgreSQL, Redis)',
        'Опыт работы с микросервисной архитектурой',
        'Понимание принципов DevOps'
      ],
      benefits: ['Удаленная работа', 'ДМС', 'Обучение', 'Современный стек']
    },
    {
      id: 5,
      title: 'Customer Support Lead',
      department: 'support',
      departmentName: 'Поддержка',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '100,000 - 150,000 ₽',
      experience: '2+ лет',
      description: 'Руководите командой поддержки клиентов и обеспечивайте высокое качество сервиса.',
      requirements: [
        'Опыт руководства командой',
        'Отличные коммуникативные навыки',
        'Знание CRM систем',
        'Стрессоустойчивость'
      ],
      benefits: ['Управленческий опыт', 'ДМС', 'Обучение лидерству', 'Бонусы']
    },
    {
      id: 6,
      title: 'Operations Manager',
      department: 'operations',
      departmentName: 'Операции',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '130,000 - 180,000 ₽',
      experience: '3+ лет',
      description: 'Оптимизируйте операционные процессы и управляйте логистикой.',
      requirements: [
        'Опыт в логистике или операциях',
        'Аналитическое мышление',
        'Знание Excel/Google Sheets',
        'Опыт работы с KPI'
      ],
      benefits: ['Влияние на процессы', 'ДМС', 'Обучение', 'Карьерный рост']
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Забота о здоровье',
      description: 'ДМС, спортивные компенсации, психологическая поддержка'
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Развитие и обучение',
      description: 'Конференции, курсы, внутренние тренинги, менторство'
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: 'Комфортная среда',
      description: 'Современный офис, гибкий график, удаленная работа'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Признание достижений',
      description: 'Бонусы, премии, программы мотивации, карьерный рост'
    }
  ];

  const filteredVacancies = vacancies.filter(vacancy => {
    const matchesDepartment = selectedDepartment === 'all' || vacancy.department === selectedDepartment;
    const matchesSearch = vacancy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vacancy.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Карьера в ВкусДоставка
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Присоединяйтесь к команде профессионалов, которая меняет индустрию доставки еды. 
              Мы предлагаем интересные задачи, рост и отличные условия работы.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">80+</div>
                <div className="text-orange-200">Сотрудников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-orange-200">Открытых вакансий</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-orange-200">Рейтинг работодателя</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Преимущества работы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему стоит работать с нами
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы создаем среду, где каждый может раскрыть свой потенциал
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-orange-500 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Вакансии */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Открытые вакансии
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Найдите позицию, которая подходит именно вам
            </p>
          </div>

          {/* Поиск и фильтры */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Поиск вакансий..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {departments.map((dept) => (
                <Button
                  key={dept.id}
                  variant={selectedDepartment === dept.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={selectedDepartment === dept.id ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  {dept.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-600">
              Найдено {filteredVacancies.length} вакансий
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredVacancies.map((vacancy) => (
              <Card key={vacancy.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {vacancy.title}
                      </h3>
                      <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                        {vacancy.departmentName}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {vacancy.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{vacancy.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{vacancy.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span>{vacancy.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4 text-gray-400" />
                      <span>{vacancy.experience}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Требования:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {vacancy.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Мы предлагаем:</h4>
                    <div className="flex flex-wrap gap-1">
                      {vacancy.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Откликнуться на вакансию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVacancies.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Вакансии не найдены
              </h3>
              <p className="text-gray-600 mb-4">
                По вашему запросу ничего не найдено
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Процесс найма */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Процесс найма
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Простой и прозрачный процесс отбора кандидатов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Отклик</h3>
              <p className="text-gray-600 text-sm">
                Отправьте резюме на интересующую вакансию
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Скрининг</h3>
              <p className="text-gray-600 text-sm">
                HR-интервью для знакомства и обсуждения ожиданий
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Интервью</h3>
              <p className="text-gray-600 text-sm">
                Техническое интервью с будущими коллегами
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Оффер</h3>
              <p className="text-gray-600 text-sm">
                Обсуждение условий и оформление
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Не нашли подходящую вакансию?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Отправьте нам свое резюме, и мы свяжемся с вами, когда появится подходящая позиция
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Отправить резюме
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;