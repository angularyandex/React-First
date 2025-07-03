import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Plus, Trash2, ShoppingCart } from 'lucide-react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Маргарита',
      description: 'Классическая пицца с томатным соусом, моцареллой и базиликом',
      price: 890,
      oldPrice: 1200,
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      restaurant: 'Пицца Хаус',
      category: 'Пицца'
    },
    {
      id: 2,
      name: 'Филадельфия',
      description: 'Лосось, сливочный сыр, огурец, авокадо, кунжут',
      price: 1250,
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      restaurant: 'Суши Мастер',
      category: 'Суши'
    },
    {
      id: 3,
      name: 'Карбонара',
      description: 'Спагетти с беконом, яйцом, пармезаном и черным перцем',
      price: 780,
      oldPrice: 950,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      restaurant: 'Мама Мия',
      category: 'Паста'
    }
  ]);

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const addToCart = (item: any) => {
    // Логика добавления в корзину
    console.log('Добавлено в корзину:', item);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хедер страницы */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="h-8 w-8 text-red-500 fill-current" />
            <h1 className="text-3xl font-bold text-gray-900">Избранные товары</h1>
          </div>
          <p className="text-gray-600">
            Ваши любимые блюда в одном месте
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {favorites.length > 0 ? (
          <>
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                {favorites.length} товаров в избранном
              </p>
              <Button 
                variant="outline" 
                onClick={() => setFavorites([])}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Очистить все
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Кнопка удаления из избранного */}
                    <button
                      onClick={() => removeFromFavorites(item.id)}
                      className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 hover:bg-red-50 transition-colors"
                    >
                      <Heart className="h-5 w-5 text-red-500 fill-current" />
                    </button>

                    {/* Скидка */}
                    {item.oldPrice && (
                      <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-500">
                        -{Math.round((1 - item.price / item.oldPrice) * 100)}%
                      </Badge>
                    )}

                    {/* Рейтинг */}
                    <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{item.rating}</span>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="mb-2">
                      <Badge variant="secondary" className="mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.restaurant}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">
                          {item.price}₽
                        </span>
                        {item.oldPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {item.oldPrice}₽
                          </span>
                        )}
                      </div>
                      
                      <Button 
                        size="sm" 
                        className="bg-orange-500 hover:bg-orange-600"
                        onClick={() => addToCart(item)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ваш список избранного пуст
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Добавляйте понравившиеся блюда в избранное, нажимая на иконку сердечка
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600"
              onClick={() => window.location.href = '/menu'}
            >
              Перейти к меню
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;