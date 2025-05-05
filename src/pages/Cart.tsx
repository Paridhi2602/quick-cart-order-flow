
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Plus, Minus, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const Cart: React.FC = () => {
  const { state, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  if (state.items.length === 0) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-muted-foreground mb-6">Your cart is currently empty.</p>
        <Button onClick={() => navigate('/menu')}>
          Browse Menu
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {state.items.map(item => (
            <Card key={item.product.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center p-4">
                  <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.product.description}</p>
                    <p className="font-bold text-primary mt-1">₹{item.product.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <span className="w-8 text-center">{item.quantity}</span>
                    
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="ml-2 text-muted-foreground" 
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>₹49</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST (5%)</span>
                  <span>₹{Math.round(cartTotal * 0.05)}</span>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹{cartTotal + 49 + Math.round(cartTotal * 0.05)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6" 
                size="lg"
                onClick={() => {
                  if (isAuthenticated) {
                    navigate('/checkout');
                  } else {
                    navigate('/login', { state: { returnTo: '/checkout' } });
                  }
                }}
              >
                {isAuthenticated ? 'Proceed to Checkout' : 'Login to Checkout'}
              </Button>
              
              <Button 
                variant="link" 
                className="w-full mt-2" 
                onClick={() => navigate('/menu')}
              >
                Continue Ordering
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
