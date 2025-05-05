
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product, useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <Card className="overflow-hidden border shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </div>
      </div>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <p className="font-semibold text-primary">₹{product.price}</p>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 gap-2" 
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
