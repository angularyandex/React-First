import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Пицца',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '120+ блюд',
      discount: '20%',
      href: '/menu?category=pizza'
    },
    {
      id: 2,
      name: 'Бургеры',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '85+ блюд',
      discount: '15%',
      href: '/menu?category=burgers'
    },
    {
      id: 3,
      name: 'Суши',
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '200+ блюд',
      discount: '25%',
      href: '/menu?category=sushi'
    },
    {
      id: 4,
      name: 'Паста',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '60+ блюд',
      discount: '10%',
      href: '/menu?category=pasta'
    },
    {
      id: 5,
      name: 'Салаты',
      image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '45+ блюд',
      discount: '12%',
      href: '/menu?category=salads'
    },
    {
      id: 6,
      name: 'Десерты',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '75+ блюд',
      discount: '18%',
      href: '/menu?category=desserts'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Популярные категории
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите любимую категорию блюд и наслаждайтесь вкусной едой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={category.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  
                  {/* Скидка */}
                  <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-500">
                    -{category.discount}
                  </Badge>

                  {/* Название и количество */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Посмотреть все категории
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;