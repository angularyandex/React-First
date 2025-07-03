import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, ArrowRight, Search, Clock } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все статьи' },
    { id: 'news', name: 'Новости' },
    { id: 'recipes', name: 'Рецепты' },
    { id: 'restaurants', name: 'Рестораны' },
    { id: 'health', name: 'Здоровое питание' },
    { id: 'tips', name: 'Советы' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Новое меню от шеф-повара Михаила Петрова',
      excerpt: 'Представляем эксклюзивные блюда авторской кухни от известного шеф-повара. Узнайте о новых вкусах и необычных сочетаниях.',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '15 января 2024',
      author: 'Анна Смирнова',
      category: 'news',
      categoryName: 'Новости',
      readTime: '3 мин',
      tags: ['новинки', 'шеф-повар', 'авторская кухня']
    },
    {
      id: 2,
      title: 'Секреты приготовления идеальной пиццы',
      excerpt: 'Раскрываем секреты приготовления настоящей итальянской пиццы. От выбора муки до температуры духовки.',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '14 января 2024',
      author: 'Марко Росси',
      category: 'recipes',
      categoryName: 'Рецепты',
      readTime: '5 мин',
      tags: ['пицца', 'рецепт', 'итальянская кухня']
    },
    {
      id: 3,
      title: 'Открытие нового ресторана в центре города',
      excerpt: 'Мы рады сообщить об открытии нашего нового партнера - ресторана "Гастрономия" с изысканной европейской кухней.',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '12 января 2024',
      author: 'Дмитрий Козлов',
      category: 'restaurants',
      categoryName: 'Рестораны',
      readTime: '2 мин',
      tags: ['открытие', 'ресторан', 'партнер']
    },
    {
      id: 4,
      title: 'Здоровое питание: мифы и реальность',
      excerpt: 'Разбираем популярные мифы о здоровом питании и рассказываем, как правильно составить сбалансированный рацион.',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '11 января 2024',
      author: 'Елена Волкова',
      category: 'health',
      categoryName: 'Здоровое питание',
      readTime: '7 мин',
      tags: ['здоровье', 'питание', 'советы']
    },
    {
      id: 5,
      title: 'Как выбрать идеальное вино к ужину',
      excerpt: 'Советы сомелье по выбору вина к различным блюдам. Узнайте, какое вино лучше всего подойдет к вашему ужину.',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '10 января 2024',
      author: 'Александр Виноградов',
      category: 'tips',
      categoryName: 'Советы',
      readTime: '4 мин',
      tags: ['вино', 'сомелье', 'сочетания']
    },
    {
      id: 6,
      title: 'Экологичная упаковка для всех заказов',
      excerpt: 'Мы переходим на 100% экологичную упаковку, заботясь о нашей планете. Узнайте о наших экологических инициативах.',
      content: 'Полный текст статьи...',
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '9 января 2024',
      author: 'Елена Волкова',
      category: 'news',
      categoryName: 'Новости',
      readTime: '4 мин',
      tags: ['экология', 'упаковка', 'забота о природе']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер страницы */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Блог</h1>
          <p className="text-gray-600 mb-6">
            Новости, рецепты, советы и интересные статьи о мире еды
          </p>
          
          {/* Поиск */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Поиск статей..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
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
                      {category.name}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Список статей */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                Найдено {filteredArticles.length} статей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-500">
                      {article.categoryName}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Теги */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <Link to={`/blog/${article.id}`}>
                      <Button variant="outline" size="sm" className="w-full group">
                        Читать далее
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  По вашему запросу ничего не найдено
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
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
    </div>
  );
};

export default Blog;