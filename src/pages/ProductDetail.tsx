import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Star, 
  Heart, 
  Plus, 
  Minus, 
  Clock, 
  Flame,
  ChevronLeft,
  ChevronRight,
  User,
  Calendar,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, text: '' });

  // Моковые данные товара
  const product = {
    id: id || '1',
    name: 'Пицца Маргарита',
    description: 'Классическая итальянская пицца с томатным соусом, моцареллой и свежим базиликом. Приготовлена на тонком тесте в дровяной печи.',
    price: 890,
    oldPrice: 1200,
    images: [
      'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviewCount: 156,
    restaurant: {
      id: 'rest-1',
      name: 'Пицца Хаус',
      rating: 4.7,
      deliveryTime: '25-35 мин'
    },
    category: 'Пицца',
    isSpicy: false,
    isVegetarian: true,
    calories: 280,
    weight: 450,
    ingredients: ['Тесто', 'Томатный соус', 'Моцарелла', 'Базилик', 'Оливковое масло'],
    allergens: ['Глютен', 'Молочные продукты'],
    nutritionFacts: {
      proteins: 12,
      fats: 8,
      carbs: 35,
      calories: 280
    },
    sizes: [
      { id: 'small', name: 'Маленькая (25 см)', price: 690, weight: 350 },
      { id: 'medium', name: 'Средняя (30 см)', price: 890, weight: 450 },
      { id: 'large', name: 'Большая (35 см)', price: 1190, weight: 600 }
    ],
    extras: [
      { id: 'cheese', name: 'Дополнительный сыр', price: 150 },
      { id: 'mushrooms', name: 'Грибы', price: 100 },
      { id: 'pepperoni', name: 'Пепперони', price: 200 },
      { id: 'olives', name: 'Оливки', price: 80 }
    ]
  };

  const reviews = [
    {
      id: 1,
      userName: 'Анна Петрова',
      userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-01-15',
      text: 'Отличная пицца! Тесто тонкое, ингредиенты свежие. Доставили быстро и горячей.',
      helpful: 12,
      notHelpful: 1
    },
    {
      id: 2,
      userName: 'Михаил Сидоров',
      userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      date: '2024-01-14',
      text: 'Хорошая пицца, но хотелось бы больше базилика. В целом рекомендую.',
      helpful: 8,
      notHelpful: 0
    }
  ];

  const similarProducts = [
    {
      id: '2',
      name: 'Пицца Пепперони',
      price: 990,
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      restaurant: 'Пицца Хаус'
    },
    {
      id: '3',
      name: 'Пицца Четыре сыра',
      price: 1190,
      image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      restaurant: 'Пицца Хаус'
    }
  ];

  const selectedSizeData = product.sizes.find(size => size.id === selectedSize);
  const extrasPrice = selectedExtras.reduce((sum, extraId) => {
    const extra = product.extras.find(e => e.id === extraId);
    return sum + (extra?.price || 0);
  }, 0);
  const totalPrice = (selectedSizeData?.price || product.price) + extrasPrice;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: totalPrice,
      image: product.images[0],
      restaurant: product.restaurant.name,
      restaurantId: product.restaurant.id,
      options: {
        size: selectedSizeData?.name,
        extras: selectedExtras.map(id => product.extras.find(e => e.id === id)?.name).filter(Boolean) as string[],
        notes: notes || undefined
      }
    });
  };

  const handleExtraToggle = (extraId: string) => {
    setSelectedExtras(prev =>
      prev.includes(extraId)
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Главная</Link>
            <span>/</span>
            <Link to="/menu" className="hover:text-orange-600">Меню</Link>
            <span>/</span>
            <Link to={`/restaurants/${product.restaurant.id}`} className="hover:text-orange-600">
              {product.restaurant.name}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Галерея изображений */}
          <div>
            <div className="relative mb-4">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              
              {/* Навигация по изображениям */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Индикаторы */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>

              {/* Бейджи */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.oldPrice && (
                  <Badge className="bg-red-500 hover:bg-red-500">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </Badge>
                )}
                {product.isVegetarian && (
                  <Badge className="bg-green-500 hover:bg-green-500">
                    Вегетарианское
                  </Badge>
                )}
                {product.isSpicy && (
                  <Badge className="bg-red-500 hover:bg-red-500">
                    <Flame className="h-3 w-3 mr-1" />
                    Острое
                  </Badge>
                )}
              </div>

              {/* Избранное */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
              </button>
            </div>

            {/* Миниатюры */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex ? 'border-orange-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Информация о товаре */}
          <div>
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(Math.round(product.rating))}
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviewCount} отзывов)
                  </span>
                </div>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Информация о ресторане */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{product.restaurant.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          {renderStars(Math.round(product.restaurant.rating))}
                          <span>{product.restaurant.rating}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{product.restaurant.deliveryTime}</span>
                        </div>
                      </div>
                    </div>
                    <Link to={`/restaurants/${product.restaurant.id}`}>
                      <Button variant="outline" size="sm">
                        Перейти в ресторан
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Выбор размера */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Размер</h3>
              <div className="grid grid-cols-1 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedSize === size.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{size.name}</div>
                        <div className="text-sm text-gray-600">{size.weight}г</div>
                      </div>
                      <div className="font-semibold">{size.price}₽</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Дополнения */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Дополнения</h3>
              <div className="grid grid-cols-1 gap-2">
                {product.extras.map((extra) => (
                  <button
                    key={extra.id}
                    onClick={() => handleExtraToggle(extra.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedExtras.includes(extra.id)
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{extra.name}</span>
                      <span className="font-semibold">+{extra.price}₽</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Комментарий */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Комментарий к заказу</h3>
              <Textarea
                placeholder="Особые пожелания к приготовлению..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </div>

            {/* Цена и добавление в корзину */}
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {totalPrice}₽
                    </span>
                    {product.oldPrice && selectedSize === 'medium' && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.oldPrice}₽
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {selectedSizeData?.weight}г • {product.calories} ккал
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleAddToCart}
                className="w-full bg-orange-500 hover:bg-orange-600"
                size="lg"
              >
                Добавить в корзину • {totalPrice * quantity}₽
              </Button>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Состав */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Состав</h3>
              <div className="space-y-2">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="text-sm text-gray-600">
                    • {ingredient}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Пищевая ценность */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Пищевая ценность (на 100г)</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Белки</span>
                  <span className="font-medium">{product.nutritionFacts.proteins}г</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Жиры</span>
                  <span className="font-medium">{product.nutritionFacts.fats}г</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Углеводы</span>
                  <span className="font-medium">{product.nutritionFacts.carbs}г</span>
                </div>
                <div className="flex justify-between text-sm border-t pt-2">
                  <span className="text-gray-600">Калории</span>
                  <span className="font-medium">{product.nutritionFacts.calories} ккал</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Аллергены */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Аллергены</h3>
              <div className="space-y-2">
                {product.allergens.map((allergen, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
                    {allergen}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Отзывы */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Отзывы ({product.reviewCount})
              </h3>
              <div className="flex items-center space-x-2">
                {renderStars(Math.round(product.rating))}
                <span className="font-semibold">{product.rating}</span>
              </div>
            </div>

            {/* Форма добавления отзыва */}
            {user && (
              <Card className="mb-6">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3">Оставить отзыв</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Оценка
                      </label>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            onClick={() => setNewReview({ ...newReview, rating })}
                            className="p-1"
                          >
                            <Star
                              className={`h-6 w-6 ${
                                rating <= newReview.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Поделитесь впечатлениями о блюде..."
                        value={newReview.text}
                        onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Отправить отзыв
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Список отзывов */}
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <img
                      src={review.userAvatar}
                      alt={review.userName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h5 className="font-semibold text-gray-900">{review.userName}</h5>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(review.date).toLocaleDateString('ru-RU')}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{review.text}</p>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-green-600">
                          <ThumbsUp className="h-4 w-4" />
                          <span>Полезно ({review.helpful})</span>
                        </button>
                        <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600">
                          <ThumbsDown className="h-4 w-4" />
                          <span>Не полезно ({review.notHelpful})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Похожие товары */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Похожие блюда</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{item.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{item.restaurant}</p>
                    <div className="text-lg font-bold text-gray-900">{item.price}₽</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;