import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Phone,
  MessageCircle,
  Mail
} from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'Все вопросы', count: 24 },
    { id: 'orders', name: 'Заказы', count: 8 },
    { id: 'delivery', name: 'Доставка', count: 6 },
    { id: 'payment', name: 'Оплата', count: 5 },
    { id: 'account', name: 'Аккаунт', count: 3 },
    { id: 'restaurants', name: 'Рестораны', count: 2 }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'orders',
      question: 'Как оформить заказ?',
      answer: 'Для оформления заказа выберите понравившиеся блюда, добавьте их в корзину, укажите адрес доставки и способ оплаты. После подтверждения заказа вы получите SMS с номером заказа и временем доставки.',
      tags: ['заказ', 'оформление', 'корзина']
    },
    {
      id: 2,
      category: 'delivery',
      question: 'Сколько стоит доставка?',
      answer: 'Стоимость доставки зависит от района: в центральном районе доставка бесплатная при заказе от 800₽, в других районах от 150₽ до 250₽. Точную стоимость вы увидите при оформлении заказа.',
      tags: ['доставка', 'стоимость', 'районы']
    },
    {
      id: 3,
      category: 'delivery',
      question: 'Сколько времени занимает доставка?',
      answer: 'Среднее время доставки составляет 25-35 минут. В часы пик (12:00-14:00, 18:00-21:00) время может увеличиться до 45 минут. Точное время доставки указывается при оформлении заказа.',
      tags: ['время', 'доставка', 'часы пик']
    },
    {
      id: 4,
      category: 'orders',
      question: 'Можно ли отменить заказ?',
      answer: 'Заказ можно отменить в течение 5 минут после оформления бесплатно. После начала приготовления отмена возможна только с согласия ресторана, при этом может взиматься комиссия 50% от стоимости заказа.',
      tags: ['отмена', 'заказ', 'комиссия']
    },
    {
      id: 5,
      category: 'payment',
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), через Apple Pay, Google Pay, а также наличными курьеру. Онлайн-оплата проходит через защищенный шлюз.',
      tags: ['оплата', 'карты', 'наличные']
    },
    {
      id: 6,
      category: 'orders',
      question: 'Как отследить статус заказа?',
      answer: 'После оформления заказа вы получите SMS с ссылкой для отслеживания. Также статус заказа можно посмотреть в личном кабинете или мобильном приложении. Мы уведомляем о каждом этапе: принят, готовится, в пути, доставлен.',
      tags: ['отслеживание', 'статус', 'уведомления']
    },
    {
      id: 7,
      category: 'delivery',
      question: 'В какие районы осуществляется доставка?',
      answer: 'Мы доставляем во все районы города: Центральный, Северный, Южный и Восточный. Зона доставки постоянно расширяется. Проверить возможность доставки по вашему адресу можно при оформлении заказа.',
      tags: ['районы', 'зона доставки', 'адрес']
    },
    {
      id: 8,
      category: 'payment',
      question: 'Можно ли получить чек?',
      answer: 'Да, чек отправляется на email, указанный при оформлении заказа. Также можно запросить бумажный чек у курьера при получении заказа. Все чеки соответствуют требованиям ФЗ-54.',
      tags: ['чек', 'email', 'документы']
    },
    {
      id: 9,
      category: 'account',
      question: 'Как создать личный кабинет?',
      answer: 'Для создания личного кабинета нажмите "Войти" в правом верхнем углу сайта, затем "Регистрация". Укажите номер телефона и email. После подтверждения номера телефона аккаунт будет создан.',
      tags: ['регистрация', 'аккаунт', 'телефон']
    },
    {
      id: 10,
      category: 'orders',
      question: 'Есть ли минимальная сумма заказа?',
      answer: 'Минимальная сумма заказа зависит от района доставки: в центральном районе - от 800₽, в северном - от 1000₽, в южном - от 1200₽, в восточном - от 1500₽.',
      tags: ['минимальная сумма', 'районы', 'ограничения']
    },
    {
      id: 11,
      category: 'delivery',
      question: 'Работаете ли вы ночью?',
      answer: 'Да, мы работаем круглосуточно! Ночью (с 23:00 до 7:00) доступен ограниченный список ресторанов, но вы всегда можете заказать еду. Время доставки ночью может быть увеличено до 60 минут.',
      tags: ['круглосуточно', 'ночь', 'время работы']
    },
    {
      id: 12,
      category: 'payment',
      question: 'Возможен ли возврат средств?',
      answer: 'Возврат средств возможен в случае отмены заказа по вине ресторана или службы доставки. Средства возвращаются на карту в течение 3-5 рабочих дней. При отмене по инициативе клиента возврат зависит от времени отмены.',
      tags: ['возврат', 'отмена', 'средства']
    },
    {
      id: 13,
      category: 'restaurants',
      question: 'Как стать партнером-рестораном?',
      answer: 'Для подключения к нашей платформе заполните заявку на сайте в разделе "Для ресторанов" или свяжитесь с нами по телефону. Наш менеджер расскажет об условиях сотрудничества и поможет с подключением.',
      tags: ['партнерство', 'ресторан', 'подключение']
    },
    {
      id: 14,
      category: 'orders',
      question: 'Можно ли заказать на определенное время?',
      answer: 'Да, при оформлении заказа вы можете выбрать "Доставить к определенному времени". Заказ можно запланировать на срок до 7 дней вперед. Минимальное время предзаказа - 1 час от текущего времени.',
      tags: ['предзаказ', 'время доставки', 'планирование']
    },
    {
      id: 15,
      category: 'delivery',
      question: 'Что делать, если курьер не может найти адрес?',
      answer: 'Если курьер не может найти адрес, он свяжется с вами по телефону. Убедитесь, что указали правильный адрес и номер телефона. Вы также можете отследить местоположение курьера в приложении.',
      tags: ['адрес', 'курьер', 'контакт']
    },
    {
      id: 16,
      category: 'account',
      question: 'Как изменить данные в профиле?',
      answer: 'Войдите в личный кабинет, перейдите в раздел "Профиль" и отредактируйте необходимые данные. Изменения сохраняются автоматически. Для смены номера телефона потребуется подтверждение по SMS.',
      tags: ['профиль', 'данные', 'редактирование']
    },
    {
      id: 17,
      category: 'orders',
      question: 'Можно ли добавить комментарий к заказу?',
      answer: 'Да, при оформлении заказа есть поле "Комментарий к заказу", где вы можете указать особые пожелания: степень прожарки, остроту блюд, аллергии и другие важные детали.',
      tags: ['комментарий', 'пожелания', 'особенности']
    },
    {
      id: 18,
      category: 'payment',
      question: 'Безопасна ли оплата картой?',
      answer: 'Да, все платежи проходят через сертифицированный платежный шлюз с использованием протокола SSL. Мы не храним данные ваших карт. Все транзакции соответствуют стандарту безопасности PCI DSS.',
      tags: ['безопасность', 'карта', 'SSL']
    },
    {
      id: 19,
      category: 'delivery',
      question: 'Можно ли заказать доставку в офис?',
      answer: 'Конечно! При оформлении заказа укажите адрес офиса, этаж и номер офиса в комментарии. Курьер свяжется с вами по прибытии. Для больших офисных заказов действуют специальные условия.',
      tags: ['офис', 'корпоративные заказы', 'адрес']
    },
    {
      id: 20,
      category: 'account',
      question: 'Есть ли программа лояльности?',
      answer: 'Да, у нас есть программа лояльности! За каждый заказ вы получаете баллы, которые можно тратить на скидки. Также действуют специальные предложения для постоянных клиентов.',
      tags: ['лояльность', 'баллы', 'скидки']
    },
    {
      id: 21,
      category: 'orders',
      question: 'Что делать, если в заказе не хватает блюда?',
      answer: 'Если в заказе чего-то не хватает, немедленно свяжитесь с поддержкой по телефону или в чате. Мы либо довезем недостающее блюдо, либо вернем деньги за него.',
      tags: ['недостача', 'поддержка', 'возврат']
    },
    {
      id: 22,
      category: 'restaurants',
      question: 'Как выбираются рестораны-партнеры?',
      answer: 'Мы тщательно отбираем ресторанов-партнеров по критериям качества еды, соблюдения санитарных норм, скорости приготовления и отзывов клиентов. Все партнеры проходят регулярные проверки.',
      tags: ['отбор', 'качество', 'партнеры']
    },
    {
      id: 23,
      category: 'delivery',
      question: 'Можно ли встретить курьера на улице?',
      answer: 'Да, если вам удобнее встретить курьера на улице или у подъезда, укажите это в комментарии к заказу или сообщите курьеру по телефону. Это поможет ускорить доставку.',
      tags: ['встреча', 'курьер', 'улица']
    },
    {
      id: 24,
      category: 'payment',
      question: 'Можно ли оплатить частично картой, частично наличными?',
      answer: 'К сожалению, смешанная оплата не поддерживается. Вы можете оплатить заказ либо полностью картой онлайн, либо полностью наличными курьеру при получении.',
      tags: ['смешанная оплата', 'ограничения', 'способы оплаты']
    }
  ];

  const filteredFAQ = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Часто задаваемые вопросы
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Найдите ответы на самые популярные вопросы о нашем сервисе доставки еды
            </p>
            
            {/* Поиск */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Поиск по вопросам..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель с категориями */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Категории</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-orange-100 text-orange-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Контакты поддержки */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Не нашли ответ?</h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Позвонить
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Онлайн-чат
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Написать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Список вопросов */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                Найдено {filteredFAQ.length} вопросов
              </p>
            </div>

            <div className="space-y-4">
              {filteredFAQ.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {item.question}
                      </h3>
                      {openItems.includes(item.id) ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openItems.includes(item.id) && (
                      <div className="px-6 pb-6">
                        <div className="border-t pt-4">
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {item.answer}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredFAQ.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Вопросы не найдены
                </h3>
                <p className="text-gray-600 mb-4">
                  По вашему запросу ничего не найдено
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Остались вопросы?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Наша служба поддержки работает круглосуточно и готова помочь вам в любое время
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="h-5 w-5 mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline">
              <MessageCircle className="h-5 w-5 mr-2" />
              Открыть чат
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;