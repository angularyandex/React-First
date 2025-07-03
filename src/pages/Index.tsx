import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import PopularCategories from '@/components/home/PopularCategories';
import FeaturedRestaurants from '@/components/home/FeaturedRestaurants';
import PromotionsSection from '@/components/home/PromotionsSection';
import HowItWorks from '@/components/home/HowItWorks';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import DeliveryZones from '@/components/home/DeliveryZones';
import NewsSection from '@/components/home/NewsSection';
import PartnersSection from '@/components/home/PartnersSection';
import StatsSection from '@/components/home/StatsSection';
import AppDownloadSection from '@/components/home/AppDownloadSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PopularCategories />
        <FeaturedRestaurants />
        <PromotionsSection />
        <HowItWorks />
        <DeliveryZones />
        <StatsSection />
        <TestimonialsSection />
        <PartnersSection />
        <NewsSection />
        <AppDownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;