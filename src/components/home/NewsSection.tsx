import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Новое меню от шеф-повара Михаила Петрова',
      excerpt: 'Представляем эксклюзивные блюда авторской кухни от известного шеф-повара',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '15 января 2024',
      author: 'Анна Смирнова',
      category: 'Новости',
      readTime: '3 мин'
    },
    {
      id: 2,
      title: 'Открытие нового ресторана в центре города',
      excerpt: 'Мы рады сообщить об открытии нашего нового партнера - ресторана "Гастрономия"',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '12 января 2024',
      author: 'Дмитрий Козлов',
      category: 'Рестораны',
      readTime: '2 мин'
    },
    {
      id: 3,
      title: 'Экологичная упаковка для всех заказов',
      excerpt: 'Мы переходим на 100% экологичную упаковку, заботясь о нашей планете',
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '10 января 2024',
      author: 'Елена Волкова',
      category: 'Экология',
      readTime: '4 мин'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Новости и статьи
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Следите за последними новостями, акциями и интересными статьями о еде
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-500">
                  {article.category}
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
                  <span>{article.readTime}</span>
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

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Все новости и статьи
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;