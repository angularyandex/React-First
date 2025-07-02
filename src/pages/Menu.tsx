import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Star, 
  Plus,
  Clock,
  Flame
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Menu = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'Все категории', count: 450 },
    { id: 'pizza', name: 'Пицца', count: 120 },
    { id: 'burgers', name: 'Бургеры', count: 85 },
    { id: 'sushi', name: 'Суши', count: 200 },
    { id: 'pasta', name: 'Паста', count: 60 },
    { id: 'salads', name: 'Салаты', count: 45 },
    { id: 'desserts', name: 'Десерты', count: 75 },
    { id: 'drinks', name: 'Напитки', count: 65 }
  ];

  const dishes = [
    {
      id: 1,
      name: 'Маргарита',
      description: 'Классическая пицца с томатным соусом, моцареллой и базиликом',
      price: 890,
      oldPrice: 1200,
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'pizza',
      rating: 4.8,
      cookTime: '25-30 мин',
      isSpicy: false,
      isNew: false,
      isPopular: true,
      restaurant: 'Пицца Хаус'
    },
    {
      id: 2,
      name: 'Чизбургер Делюкс',
      description: 'Сочная котлета из говядины, сыр чеддер, салат, помидор, лук',
      price: 650,
      oldPrice: null,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'burgers',
      rating: 4.6,
      cookTime: '15-20 мин',
      isSpicy: false,
      isNew: true,
      isPopular: false,
      restaurant: 'Бургер Кинг'
    },
    {
      id: 3,
      name: 'Филадельфия',
      description: 'Лосось, сливочный сыр, огурец, авокадо, кунжут',
      price: 1250,
      oldPrice: null,
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'sushi',
      rating: 4.9,
      cookTime: '20-25 мин',
      isSpicy: false,
      isNew: false,
      isPopular: true,
      restaurant: 'Суши Мастер'
    },
    {
      id: 4,
      name: 'Карбонара',
      description: 'Спагетти с беконом, яйцом, пармезаном и черным перцем',
      price: 780,
      oldPrice: 950,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'pasta',
      rating: 4.7,
      cookTime: '20-25 мин',
      isSpicy: false,
      isNew: false,
      isPopular: false,
      restaurant: 'Мама Мия'
    },
    {
      id: 5,
      name: 'Цезарь с курицей',
      description: 'Салат романо, куриная грудка, пармезан, сухарики, соус цезарь',
      price: 520,
      oldPrice: null,
      image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'salads',
      rating: 4.5,
      cookTime: '10-15 мин',
      isSpicy: false,
      isNew: false,
      isPopular: true,
      restaurant: 'Здоровое питание'
    },
    {
      id: 6,
      name: 'Тирамису',
      description: 'Классический итальянский десерт с маскарпоне и кофе',
      price: 380,
      oldPrice: null,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'desserts',
      rating: 4.8,
      cookTime: '5 мин',
      isSpicy: false,
      isNew: true,
      isPopular: false,
      restaurant: 'Сладкий рай'
    }
  ];

  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = selectedCategory === 'all' || dish.category === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dish.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedDishes = [...filteredDishes].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return b.isPopular ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер страницы */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Меню</h1>
          
          {/* Поиск и фильтры */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Поиск блюд..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="rating">По рейтингу</SelectItem>
                <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                <SelectItem value="name">По названию</SelectItem>
              </SelectContent>
            </Select>
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
          </div>

          {/* Список блюд */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Найдено {sortedDishes.length} блюд
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedDishes.map((dish) => (
                <Card key={dish.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Бейджи */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {dish.isNew && (
                        <Badge className="bg-green-500 hover:bg-green-500">Новинка</Badge>
                      )}
                      {dish.isPopular && (
                        <Badge className="bg-orange-500 hover:bg-orange-500">Популярное</Badge>
                      )}
                      {dish.oldPrice && (
                        <Badge className="bg-red-500 hover:bg-red-500">
                          -{Math.round((1 - dish.price / dish.oldPrice) * 100)}%
                        </Badge>
                      )}
                    </div>

                    {/* Рейтинг */}
                    <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{dish.rating}</span>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {dish.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {dish.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        {dish.restaurant}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{dish.cookTime}</span>
                      </div>
                      {dish.isSpicy && (
                        <div className="flex items-center space-x-1 text-red-500">
                          <Flame className="h-4 w-4" />
                          <span>Острое</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">
                          {dish.price}₽
                        </span>
                        {dish.oldPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {dish.oldPrice}₽
                          </span>
                        )}
                      </div>
                      
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        <Plus className="h-4 w-4 mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedDishes.length === 0 && (
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

export default Menu;