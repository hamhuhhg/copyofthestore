
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MenuItemCard from '@/components/MenuItemCard';
import CategorySlider from '@/components/CategorySlider';
import CartButton from '@/components/CartButton';
import BottomNavigation from '@/components/BottomNavigation';
import { getPopularItems, getFoodItems, getJuiceItems } from '@/data/menuItems';

const Index: React.FC = () => {
  const navigate = useNavigate();
  const popularItems = getPopularItems();
  const foodItems = getFoodItems().slice(0, 4); // Limit to 4 items
  const juiceItems = getJuiceItems().slice(0, 4); // Limit to 4 items

  return (
    <div className="pb-20" dir="rtl">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white">
        <div className="flex items-center justify-between p-4">
          <div>
            <h1 className="text-xl font-bold">منشي جوسر</h1>
            <p className="text-sm text-gray-500">طعام لذيذ ومشروبات منعشة</p>
          </div>
          <CartButton />
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-2">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="ابحث عن طعام، مشروبات..." 
              className="pr-10 bg-gray-100 border-none"
              onClick={() => navigate('/search')}
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-4">
        {/* Hero Section */}
        <div className="relative h-40 mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-4 flex flex-col justify-center">
            <h2 className="text-white text-2xl font-bold">عرض خاص</h2>
            <p className="text-white/90 mb-3">احصل على خصم 20% على طلبك الأول</p>
            <Button 
              className="bg-white text-brand-600 hover:bg-white/90 w-36"
              onClick={() => navigate('/category/burgers')}
            >
              اطلب الآن
            </Button>
          </div>
        </div>

        {/* Food Categories */}
        <div className="mb-6">
          <div className="px-4 flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">أقسام الطعام</h2>
            <Button 
              variant="link" 
              className="text-brand-500 p-0 h-auto"
              onClick={() => navigate('/categories/food')}
            >
              عرض الكل
            </Button>
          </div>
          <CategorySlider filter="food" />
        </div>

        {/* Popular Items */}
        <div className="mb-6">
          <div className="px-4 flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">الأكثر مبيعاً</h2>
            <Button 
              variant="link" 
              className="text-brand-500 p-0 h-auto"
              onClick={() => navigate('/popular')}
            >
              عرض الكل
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3 px-4">
            {popularItems.map(item => (
              <MenuItemCard key={item.id} item={item} compact />
            ))}
          </div>
        </div>

        {/* Food Section */}
        <div className="mb-6">
          <div className="px-4 flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">وجبات سريعة</h2>
            <Button 
              variant="link" 
              className="text-brand-500 p-0 h-auto"
              onClick={() => navigate('/food')}
            >
              عرض الكل
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3 px-4">
            {foodItems.map(item => (
              <MenuItemCard key={item.id} item={item} compact />
            ))}
          </div>
        </div>

        {/* Juice Section */}
        <div className="mb-6">
          <div className="px-4 flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">عصائر طازجة</h2>
            <Button 
              variant="link" 
              className="text-juice-500 p-0 h-auto"
              onClick={() => navigate('/juices')}
            >
              عرض الكل
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3 px-4">
            {juiceItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
