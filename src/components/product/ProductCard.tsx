
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Product, useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg truncate">{product.name}</h3>
          <p className="font-bold text-primary">₹{product.price}</p>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
