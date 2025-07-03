import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, Star } from 'lucide-react';

const AppDownloadSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Скачайте наше приложение
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Заказывайте еду еще быстрее и удобнее с нашим мобильным приложением. 
              Получайте эксклюзивные скидки и уведомления о новых акциях.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 p-2 rounded-full">
                  <Smartphone className="h-5 w-5" />
                </div>
                <span>Удобный интерфейс и быстрое оформление заказов</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 p-2 rounded-full">
                  <Download className="h-5 w-5" />
                </div>
                <span>Эксклюзивные акции только для пользователей приложения</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 p-2 rounded-full">
                  <Star className="h-5 w-5" />
                </div>
                <span>Рейтинг 4.8 в App Store и Google Play</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-8" />
              </Button>
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-8" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Мобильное приложение"
                className="rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;