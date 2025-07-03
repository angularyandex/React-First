import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Headphones,
  Users,
  Building
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Телефон поддержки',
      description: 'Круглосуточная горячая линия',
      contact: '+7 (999) 123-45-67',
      availability: '24/7',
      type: 'urgent'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Онлайн-чат',
      description: 'Быстрые ответы в чате',
      contact: 'Чат на сайте',
      availability: '8:00 - 22:00',
      type: 'fast'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email поддержка',
      description: 'Подробные ответы на email',
      contact: 'support@vkusdelivery.ru',
      availability: 'Ответ в течение часа',
      type: 'detailed'
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: 'Обратный звонок',
      description: 'Мы перезвоним вам',
      contact: 'Заказать звонок',
      availability: '9:00 - 21:00',
      type: 'callback'
    }
  ];

  const offices = [
    {
      name: 'Главный офис',
      address: 'г. Москва, ул. Примерная, 123',
      phone: '+7 (999) 123-45-67',
      email: 'info@vkusdelivery.ru',
      hours: 'Пн-Пт: 9:00-18:00',
      type: 'main',
      departments: ['Руководство', 'HR', 'Маркетинг', 'Разработка']
    },
    {
      name: 'Центр поддержки',
      address: 'г. Москва, ул. Центральная, 45',
      phone: '+7 (999) 123-45-68',
      email: 'support@vkusdelivery.ru',
      hours: 'Круглосуточно',
      type: 'support',
      departments: ['Поддержка клиентов', 'Операции']
    },
    {
      name: 'Логистический центр',
      address: 'г. Москва, ул. Складская, 78',
      phone: '+7 (999) 123-45-69',
      email: 'logistics@vkusdelivery.ru',
      hours: 'Пн-Вс: 6:00-24:00',
      type: 'logistics',
      departments: ['Логистика', 'Курьерская служба']
    }
  ];

  const faqCategories = [
    {
      title: 'Заказы и доставка',
      questions: [
        'Как оформить заказ?',
        'Сколько стоит доставка?',
        'Можно ли отменить заказ?',
        'Как отследить заказ?'
      ]
    },
    {
      title: 'Оплата',
      questions: [
        'Какие способы оплаты доступны?',
        'Можно ли оплатить картой?',
        'Как получить чек?',
        'Возможен ли возврат средств?'
      ]
    },
    {
      title: 'Для ресторанов',
      questions: [
        'Как стать партнером?',
        'Какие условия сотрудничества?',
        'Как работает система заказов?',
        'Какая комиссия?'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Мы всегда готовы помочь! Выберите удобный способ связи или посетите наши офисы.
            </p>
          </div>
        </div>
      </div>

      {/* Способы связи */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Способы связи
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите наиболее удобный для вас способ связи
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {method.description}
                  </p>
                  <div className="text-orange-600 font-semibold mb-2">
                    {method.contact}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {method.availability}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Форма обратной связи и контакты */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Форма */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Напишите нам
              </h2>
              
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Имя *
                        </label>
                        <Input placeholder="Ваше имя" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Телефон *
                        </label>
                        <Input placeholder="+7 (999) 123-45-67" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Тема обращения
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>Выберите тему</option>
                        <option>Вопрос по заказу</option>
                        <option>Техническая проблема</option>
                        <option>Предложение сотрудничества</option>
                        <option>Жалоба</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Сообщение *
                      </label>
                      <Textarea 
                        placeholder="Опишите ваш вопрос или проблему..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Быстрые ответы */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Частые вопросы
              </h2>
              
              <div className="space-y-6">
                {faqCategories.map((category, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        {category.title}
                      </h3>
                      <div className="space-y-2">
                        {category.questions.map((question, qIndex) => (
                          <button
                            key={qIndex}
                            className="w-full text-left p-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  Посмотреть все вопросы
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши офисы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши офисы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Посетите нас лично в одном из наших офисов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Building className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {office.name}
                    </h3>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                      <span className="text-sm text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{office.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{office.hours}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Отделы:</h4>
                    <div className="flex flex-wrap gap-1">
                      {office.departments.map((dept, dIndex) => (
                        <Badge key={dIndex} variant="secondary" className="text-xs">
                          {dept}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как нас найти
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы находимся в центре города, удобно добираться на любом транспорте
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Здесь будет интерактивная карта</p>
                <p className="text-sm text-gray-500">с отмеченными офисами</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;