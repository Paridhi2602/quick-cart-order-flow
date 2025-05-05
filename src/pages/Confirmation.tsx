
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Confirmation: React.FC = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 2);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-12 max-w-2xl">
      <Card className="text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-4">
            <Check className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl">Order Confirmed!</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Thank you for your order. We've received your payment and will process your order shortly.
          </p>
          
          <div className="bg-secondary p-6 rounded-lg">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">ORDER NUMBER</h3>
              <p className="text-lg font-bold">#{orderNumber}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">ESTIMATED DELIVERY</h3>
              <p className="text-lg font-bold">
                {estimatedDelivery.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to your email address.
            You can check the status of your order at any time in your account.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button onClick={() => navigate('/menu')}>
              Continue Shopping
            </Button>
            
            <Button variant="outline" onClick={() => navigate('/')}>
              Go to Homepage
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Confirmation;
