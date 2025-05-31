import React from 'react';
import CategoryTile from './CategoryTile';

const categories = [
  {
    title: 'E-commerce',
    
    imageSrc: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    altText: 'E-commerce website templates and solutions'
  },
  {
    title: 'Social Media',
   
    imageSrc: 'https://images.pexels.com/photos/3850250/pexels-photo-3850250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    altText: 'Social media templates and assets'
  },
  {
    title: 'Stock Video',
    imageSrc: 'https://images.pexels.com/photos/2833666/pexels-photo-2833666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    altText: 'Stock video collection'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Websites working with us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryTile 
              key={index}
              title={category.title}
              count={category.count}
              imageSrc={category.imageSrc}
              altText={category.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;