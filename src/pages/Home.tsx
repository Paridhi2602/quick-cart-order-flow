
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/ProductCard';
import { getFeaturedProducts } from '@/services/productService';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="rounded-lg bg-gradient-to-r from-primary/90 to-primary p-6 md:p-10 text-white">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Fresh groceries delivered to your door</h1>
          <p className="text-lg opacity-90">
            Shop our wide selection of fresh, organic produce and everyday essentials.
            Fast delivery, great prices, and secure checkout.
          </p>
          <div className="pt-4">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => navigate('/menu')}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mt-12 md:mt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Button 
            variant="outline" 
            onClick={() => navigate('/menu')}
          >
            View All
          </Button>
        </div>
        
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mt-12 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fresh Products</h3>
            <p className="text-muted-foreground">
              We source our products directly from local farms and suppliers to ensure freshness.
            </p>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Get your groceries delivered to your doorstep within hours of placing your order.
            </p>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Secure Checkout</h3>
            <p className="text-muted-foreground">
              Shop with confidence using our secure payment gateway and OTP verification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
