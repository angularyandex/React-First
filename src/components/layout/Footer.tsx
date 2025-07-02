import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-500 text-white p-2 rounded-lg">
                <span className="text-xl font-bold">🍕</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">ВкусДоставка</h3>
                <p className="text-xs text-gray-400">Быстро и вкусно</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Мы доставляем самую вкусную еду из лучших ресторанов города. 
              Быстро, качественно и с заботой о каждом клиенте.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/menu" className="text-gray-400 hover:text-white transition-colors">Меню</Link></li>
              <li><Link to="/restaurants" className="text-gray-400 hover:text-white transition-colors">Рестораны</Link></li>
              <li><Link to="/promotions" className="text-gray-400 hover:text-white transition-colors">Акции</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white transition-colors">Доставка</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Вакансии</Link></li>
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Помощь</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">Частые вопросы</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Условия использования</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">info@vkusdelivery.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">Москва, ул. Примерная, 123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">Круглосуточно</span>
              </div>
            </div>

            {/* Подписка на новости */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">Подписка на новости</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Ваш email" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ВкусДоставка. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Конфиденциальность
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;