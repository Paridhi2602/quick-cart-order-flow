
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const { cartItemsCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl">
            <span className="text-primary">Food</span>Cart
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/menu" className="text-sm font-medium">
            Menu
          </Link>
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  <span>{user?.name || "prdkhkandelwal"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="cursor-default">
                  Signed in as {user?.email}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/account')}>
                  My Account
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { logout(); navigate('/'); }}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          )}

          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
