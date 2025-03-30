
import React from 'react';
import { categories } from '@/data/menuItems';
import { useNavigate } from 'react-router-dom';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface CategorySliderProps {
  filter?: "food" | "juice";
}

const CategorySlider: React.FC<CategorySliderProps> = ({ filter }) => {
  const navigate = useNavigate();
  
  const filteredCategories = filter 
    ? categories.filter(category => category.type === filter)
    : categories;
  
  return (
    <ScrollArea className="w-full">
      <div className="flex space-x-4 py-2 px-4">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="flex-shrink-0 w-24 flex flex-col items-center cursor-pointer"
            onClick={() => navigate(`/category/${category.id}`)}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100 mb-1">
              <img
                src={category.image || '/placeholder.svg'}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-medium text-center">{category.name}</span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CategorySlider;
