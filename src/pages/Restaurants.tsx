import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Star, 
  Clock, 
  Truck,
  MapPin,
  Filter
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const cuisines = [
    { id: 'all', name: 'Все кухни' },
    { id: 'italian', name: 'Итальянская' },
    { id: 'japanese', name: 'Японская' },
    { id: 'american', name: 'Американская' },
    { id: 'russian', name: 'Русская' },
    { id: 'chinese', name: 'Китайская' },
    { id: 'indian', name: 'Индийская' },
    { id: 'mexican', name: 'Мексиканская' }
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Мама Мия',
      cuisine: 'Итальянская кухня',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      reviewCount: 1250,
      deliveryTime: '25-35 мин',
      deliveryFee: 'Бесплатно',
      minOrder: 800,
      distance: '1.2 км',
      isOpen: true,
      isNew: false,
      cuisineType: 'italian',
      specialties: ['Пицца', 'Паста', 'Ризотто'],
      priceRange: '₽₽'
    },
    {
      id: 2,
      name: 'Суши Мастер',
      cuisine: 'Японская кухня',
      image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      reviewCount: 890,
      deliveryTime: '30-40 мин',
      deliveryFee: '150₽',
      minOrder: 1200,
      distance: '2.1 км',
      isOpen: true,
      isNew: false,
      cuisineType: 'japanese',
      specialties: ['Суши', 'Роллы', 'Сашими'],
      priceRange: '₽₽₽'
    },
    {
      id: 3,
      name: 'Бургер Кинг',
      cuisine: 'Фастфуд',
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.6,
      reviewCount: 2100,
      deliveryTime: '20-30 мин',
      deliveryFee: 'Бесплатно',
      minOrder: 600,
      distance: '0.8 км',
      isOpen: true,
      isNew: false,
      cuisineType: 'american',
      specialties: ['Бургеры', 'Картофель фри', 'Наггетсы'],
      priceRange: '₽'
    },
    {
      id: 4,
      name: 'Пицца Хаус',
      cuisine: 'Пиццерия',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
      reviewCount: 1680,
      deliveryTime: '25-35 мин',
      deliveryFee: 'Бесплатно',
      minOrder: 900,
      distance: '1.5 км',
      isOpen: true,
      isNew: true,
      cuisineType: 'italian',
      specialties: ['Пицца', 'Калzone', 'Брускетта'],
      priceRange: '₽₽'
    },
    {
      id: 5,
      name: 'Дракон',
      cuisine: 'Китайская кухня',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.5,
      reviewCount: 750,
      deliveryTime: '35-45 мин',
      deliveryFee: '200₽',
      minOrder: 1000,
      distance: '3.2 км',
      isOpen: false,
      isNew: false,
      cuisineType: 'chinese',
      specialties: ['Лапша', 'Димсамы', 'Утка по-пекински'],
      priceRange: '₽₽'
    },
    {
      id: 6,
      name: 'Русская изба',
      cuisine: 'Русская кухня',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.4,
      reviewCount: 920,
      deliveryTime: '40-50 мин',
      deliveryFee: 'Бесплатно',
      minOrder: 1100,
      distance: '2.8 км',
      isOpen: true,
      isNew: false,
      cuisineType: 'russian',
      specialties: ['Борщ', 'Пельмени', 'Блины'],
      priceRange: '₽₽'
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesCuisine = selectedCuisine === 'all' || restaurant.cuisineType === selectedCuisine;
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'delivery-time':
        return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      case 'distance':
        return parseFloat(a.distance) - parseFloat(b.distance);
      case 'min-order':
        return a.minOrder - b.minOrder;
      default:
        return b.rating - a.rating;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер страницы */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Рестораны</h1>
          
          {/* Поиск и фильтры */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Поиск ресторанов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Тип кухни" />
              </SelectTrigger>
              <SelectContent>
                {cuisines.map((cuisine) => (
                  <SelectItem key={cuisine.id} value={cuisine.id}>
                    {cuisine.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">По рейтингу</SelectItem>
                <SelectItem value="delivery-time">По времени доставки</SelectItem>
                <SelectItem value="distance">По расстоянию</SelectItem>
                <SelectItem value="min-order">По мин. заказу</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Найдено {sortedRestaurants.length} ресторанов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedRestaurants.map((restaurant) => (
            <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
              <Card className={`group hover:shadow-lg transition-all duration-300 overflow-hidden ${
                !restaurant.isOpen ? 'opacity-75' : ''
              }`}>
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  
                  {/* Статус и бейджи */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {restaurant.isNew && (
                      <Badge className="bg-green-500 hover:bg-green-500">Новый</Badge>
                    )}
                    {!restaurant.isOpen && (
                      <Badge className="bg-red-500 hover:bg-red-500">Закрыт</Badge>
                    )}
                  </div>

                  {/* Рейтинг */}
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{restaurant.rating}</span>
                  </div>

                  {/* Ценовая категория */}
                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded px-2 py-1">
                    <span className="text-sm font-semibold">{restaurant.priceRange}</span>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {restaurant.cuisine}
                  </p>

                  {/* Специализации */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {restaurant.specialties.slice(0, 3).map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{restaurant.deliveryTime}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Truck className="h-4 w-4" />
                        <span>{restaurant.deliveryFee}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{restaurant.distance}</span>
                      </div>
                      <div className="text-gray-600">
                        от {restaurant.minOrder}₽
                      </div>
                    </div>

                    <div className="text-xs text-gray-500">
                      {restaurant.reviewCount} отзывов
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {sortedRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              По вашему запросу ничего не найдено
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setSelectedCuisine('all');
              }}
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;