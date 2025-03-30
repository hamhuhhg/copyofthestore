
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getItemsByCategory, categories } from '@/data/menuItems';
import MenuItemCard from '@/components/MenuItemCard';
import CartButton from '@/components/CartButton';
import BottomNavigation from '@/components/BottomNavigation';

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const items = id ? getItemsByCategory(id) : [];
  const category = id ? categories.find(c => c.id === id) : undefined;
  
  if (!category) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-4">Category not found</h2>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }
  
  return (
    <div className="pb-20">
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">{category.name}</h1>
          </div>
          <CartButton />
        </div>
      </div>
      
      <div className="p-4">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-lg font-semibold mb-2">No items found</h2>
            <p className="text-gray-500 mb-6">This category is currently empty</p>
            <Button 
              className="bg-brand-500 hover:bg-brand-600"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {items.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Category;
