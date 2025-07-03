import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Search,
  Filter,
  Calendar,
  User,
  MessageCircle
} from 'lucide-react';

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRating, setSelectedRating] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const ratingFilters = [
    { id: 'all', name: 'Все оценки', count: 1250 },
    { id: '5', name: '5 звезд', count: 850 },
    { id: '4', name: '4 звезды', count: 280 },
    { id: '3', name: '3 звезды', count: 80 },
    { id: '2', name: '2 звезды', count: 30 },
    { id: '1', name: '1 звезда', count: 10 }
  ];

  const reviews = [
    {
      id: 1,
      userName: 'Анна Петрова',
      userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-01-15',
      title: 'Отличный сервис!',
      text: 'Заказываю уже несколько месяцев, всегда довольна качеством еды и скоростью доставки. Курьеры вежливые, еда приходит горячей. Особенно нравится пицца от "Мама Мия" - всегда свежая и вкусная!',
      restaurant: 'Мама Мия',
      orderItems: ['Пицца Маргарита', 'Салат Цезарь'],
      helpful: 24,
      notHelpful: 1,
      verified: true
    },
    {
      id: 2,
      userName: 'Михаил Сидоров',
      userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-01-14',
      title: 'Быстро и вкусно',
      text: 'Пользуюсь приложением уже полгода. Большой выбор ресторанов, удобный интерфейс, быстрая доставка. Рекомендую всем! Особенно хочу отметить работу службы поддержки - всегда помогают решить любые вопросы.',
      restaurant: 'Суши Мастер',
      orderItems: ['Филадельфия', 'Калифорния', 'Мисо суп'],
      helpful: 18,
      notHelpful: 0,
      verified: true
    },
    {
      id: 3,
      userName: 'Елена Козлова',
      userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      date: '2024-01-13',
      title: 'Хорошо, но есть нюансы',
      text: 'В целом довольна сервисом. Еда вкусная, доставка быстрая. Единственное - иногда бывают задержки в часы пик, но это понятно. Очень нравятся акции и скидки для постоянных клиентов.',
      restaurant: 'Бургер Кинг',
      orderItems: ['Воппер', 'Картофель фри', 'Кола'],
      helpful: 12,
      notHelpful: 2,
      verified: true
    },
    {
      id: 4,
      userName: 'Дмитрий Волков',
      userAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-01-12',
      title: 'Идеально для офиса',
      text: 'Заказываю обеды в офис каждый день. Всё всегда свежее, упаковано аккуратно, курьеры приезжают точно в срок. Отличная работа! Коллеги тоже перешли на ваш сервис.',
      restaurant: 'Здоровое питание',
      orderItems: ['Салат с курицей', 'Суп дня', 'Хлеб'],
      helpful: 15,
      notHelpful: 0,
      verified: true
    },
    {
      id: 5,
      userName: 'Ольга Морозова',
      userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-01-11',
      title: 'Лучший сервис в городе!',
      text: 'Пользуюсь уже больше года. Лучший сервис доставки в городе! Широкий выбор ресторанов, приемлемые цены, быстрая доставка. Мобильное приложение очень удобное. Всем советую!',
      restaurant: 'Пицца Хаус',
      orderItems: ['Пицца Пепперони', 'Гарлик брэд'],
      helpful: 31,
      notHelpful: 1,
      verified: true
    },
    {
      id: 6,
      userName: 'Александр Новиков',
      userAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      date: '2024-01-10',
      title: 'Качественно и надежно',
      text: 'Пользуюсь регулярно, особенно по выходным. Качество еды на высоте, доставка точно в срок. Иногда хотелось бы больше акций, но в целом всё отлично.',
      restaurant: 'Дракон',
      orderItems: ['Утка по-пекински', 'Жареный рис', 'Чай'],
      helpful: 9,
      notHelpful: 1,
      verified: true
    },
    {
      id: 7,
      userName: 'Мария Васильева',
      userAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 3,
      date: '2024-01-09',
      title: 'Средне',
      text: 'Заказывала несколько раз. В целом нормально, но один раз привезли холодную еду, а другой раз опоздали на час. Служба поддержки отработала хорошо, вернули деньги.',
      restaurant: 'Русская изба',
      orderItems: ['Борщ', 'Котлеты', 'Пюре'],
      helpful: 5,
      notHelpful: 8,
      verified: true
    },
    {
      id: 8,
      userName: 'Игорь Смирнов',
      userAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-01-08',
      title: 'Превосходно!',
      text: 'Заказал на день рождения для большой компании. Всё прошло идеально! Еда была вкусной, доставили точно в срок, упаковка красивая. Гости были в восторге. Спасибо!',
      restaurant: 'Мама Мия',
      orderItems: ['Пицца Маргарита x3', 'Пицца Пепперони x2', 'Салаты x5'],
      helpful: 22,
      notHelpful: 0,
      verified: true
    }
  ];

  const overallStats = {
    averageRating: 4.8,
    totalReviews: 1250,
    ratingDistribution: {
      5: 68,
      4: 22,
      3: 6,
      2: 2,
      1: 1
    }
  };

  const filteredReviews = reviews.filter(review => {
    const matchesRating = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const matchesSearch = review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.restaurant.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRating && matchesSearch;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'highest':
        return b.rating - a.rating;
      case 'lowest':
        return a.rating - b.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Отзывы клиентов
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Узнайте, что говорят о нас наши клиенты. Честные отзывы о качестве еды и сервиса.
            </p>
            
            {/* Общая статистика */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">{overallStats.averageRating}</div>
                <div className="flex justify-center mb-1">
                  {renderStars(Math.round(overallStats.averageRating))}
                </div>
                <div className="text-orange-200">Средний рейтинг</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{overallStats.totalReviews.toLocaleString()}</div>
                <div className="text-orange-200">Всего отзывов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{overallStats.ratingDistribution[5]}%</div>
                <div className="text-orange-200">5-звездочных отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Распределение рейтингов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Распределение оценок
            </h2>
            
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 w-20">
                    <span className="text-sm font-medium">{rating}</span>
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-orange-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${overallStats.ratingDistribution[rating as keyof typeof overallStats.ratingDistribution]}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 w-12">
                    {overallStats.ratingDistribution[rating as keyof typeof overallStats.ratingDistribution]}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель с фильтрами */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Фильтры</h3>
                
                {/* Поиск */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Поиск по отзывам
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Поиск..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Фильтр по рейтингу */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Рейтинг
                  </label>
                  <div className="space-y-2">
                    {ratingFilters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setSelectedRating(filter.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedRating === filter.id
                            ? 'bg-orange-100 text-orange-700'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{filter.name}</span>
                          <Badge variant="secondary">{filter.count}</Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Сортировка */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сортировка
                  </label>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="newest">Сначала новые</option>
                    <option value="oldest">Сначала старые</option>
                    <option value="highest">Высокий рейтинг</option>
                    <option value="lowest">Низкий рейтинг</option>
                    <option value="helpful">Самые полезные</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Форма добавления отзыва */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Оставить отзыв</h3>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Написать отзыв
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Список отзывов */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                Показано {sortedReviews.length} из {overallStats.totalReviews} отзывов
              </p>
            </div>

            <div className="space-y-6">
              {sortedReviews.map((review) => (
                <Card key={review.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900 flex items-center">
                              {review.userName}
                              {review.verified && (
                                <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                                  Проверенный
                                </Badge>
                              )}
                            </h4>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(review.date)}</span>
                              <span>•</span>
                              <span>{review.restaurant}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>

                        <h5 className="font-semibold text-gray-900 mb-2">
                          {review.title}
                        </h5>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {review.text}
                        </p>

                        {/* Заказанные блюда */}
                        <div className="mb-4">
                          <p className="text-sm text-gray-500 mb-1">Заказанные блюда:</p>
                          <div className="flex flex-wrap gap-1">
                            {review.orderItems.map((item, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Полезность отзыва */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-green-600 transition-colors">
                              <ThumbsUp className="h-4 w-4" />
                              <span>Полезно ({review.helpful})</span>
                            </button>
                            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600 transition-colors">
                              <ThumbsDown className="h-4 w-4" />
                              <span>Не полезно ({review.notHelpful})</span>
                            </button>
                          </div>
                          <Button variant="outline" size="sm">
                            Ответить
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedReviews.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Отзывы не найдены
                </h3>
                <p className="text-gray-600 mb-4">
                  По вашему запросу ничего не найдено
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedRating('all');
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}

            {/* Пагинация */}
            {sortedReviews.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Предыдущая</Button>
                  <Button variant="outline" size="sm" className="bg-orange-500 text-white">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Следующая</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;