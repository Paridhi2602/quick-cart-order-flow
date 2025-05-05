
import React, { useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories, getProductsByCategory } from '@/services/productService';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = getProductsByCategory(selectedCategory);
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="md:flex-1">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
          <Button 
            variant="link" 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Menu;
