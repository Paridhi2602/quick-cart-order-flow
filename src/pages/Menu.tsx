
import React, { useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { Input } from '@/components/ui/input';
import { categories, getProductsByCategory } from '@/services/productService';
import { Search, ChevronDown } from 'lucide-react';

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
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
        <p className="text-muted-foreground">
          Explore our wide range of delicious items and add your favorites to cart.
        </p>
      </div>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="md:flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 border rounded-md"
          />
        </div>
        
        <div className="relative w-full md:w-48">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full h-10 pl-4 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground h-4 w-4" />
        </div>
      </div>
      
      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
          <button 
            className="text-primary underline mt-2"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
