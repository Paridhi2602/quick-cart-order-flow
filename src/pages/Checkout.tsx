
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Check, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Checkout: React.FC = () => {
  const { state, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Payment Successful",
      description: "Your order has been placed successfully. Food will be ready in 30 minutes.",
      duration: 5000,
    });
    
    clearCart();
    navigate('/confirmation');
    setIsProcessing(false);
  };
  
  if (state.items.length === 0) {
    navigate('/');
    return null;
  }
  
  const gst = Math.round(cartTotal * 0.05);
  const deliveryFee = 49;
  const grandTotal = cartTotal + gst + deliveryFee;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input 
                    id="address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      name="city" 
                      value={formData.city} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input 
                      id="state" 
                      name="state" 
                      value={formData.state} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="zip">PIN Code</Label>
                    <Input 
                      id="zip" 
                      name="zip" 
                      value={formData.zip} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="card">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="card">Credit Card</TabsTrigger>
                    <TabsTrigger value="upi">UPI</TabsTrigger>
                    <TabsTrigger value="cod">Cash on Delivery</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="card" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input 
                        id="cardName" 
                        name="cardName" 
                        value={formData.cardName} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input 
                        id="cardNumber" 
                        name="cardNumber" 
                        value={formData.cardNumber} 
                        onChange={handleChange} 
                        required 
                        placeholder="XXXX XXXX XXXX XXXX"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expDate">Expiration Date</Label>
                        <Input 
                          id="expDate" 
                          name="expDate" 
                          value={formData.expDate} 
                          onChange={handleChange} 
                          required 
                          placeholder="MM/YY"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input 
                          id="cvv" 
                          name="cvv" 
                          value={formData.cvv} 
                          onChange={handleChange} 
                          required 
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="upi">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input 
                          id="upiId" 
                          placeholder="yourname@upi"
                          required 
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">You will receive a payment request on your UPI app.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="cod">
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        Pay in cash when your order is delivered.
                      </p>
                      <div className="text-sm text-muted-foreground">Please keep exact change if possible.</div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Button 
              className="w-full mt-8" 
              size="lg" 
              type="submit"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </Button>
          </form>
        </div>
        
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {state.items.map(item => (
                  <li key={item.product.id} className="flex justify-between">
                    <div>
                      <span className="font-medium">{item.product.name}</span>
                      <span className="text-muted-foreground ml-2">× {item.quantity}</span>
                    </div>
                    <span>₹{(item.product.price * item.quantity)}</span>
                  </li>
                ))}
              </ul>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST (5%)</span>
                  <span>₹{gst}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
