
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">
              <span className="text-primary">Food</span>Cart
            </h3>
            <p className="text-muted-foreground">
              Your one-stop solution for delicious food ordering.
              Fast delivery, fresh ingredients, and a seamless experience.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-foreground transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Email: support@foodcart.com
              </li>
              <li className="text-muted-foreground">
                Phone: +91 98765 43210
              </li>
              <li className="text-muted-foreground">
                Hours: 10am - 10pm, All days
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FoodCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
