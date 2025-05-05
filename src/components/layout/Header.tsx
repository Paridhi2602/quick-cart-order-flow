
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header: React.FC = () => {
  const { cartItemsCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium">Home</Link>
                <Link to="/menu" className="text-lg font-medium">Menu</Link>
                {isAuthenticated ? (
                  <>
                    <Link to="/account" className="text-lg font-medium">My Account</Link>
                    <Button 
                      variant="ghost" 
                      onClick={() => { logout(); navigate('/'); }}
                      className="justify-start px-2"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link to="/login" className="text-lg font-medium">Login / Signup</Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="font-bold text-xl">
            <span className="text-primary">Quick</span>Cart
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium">
            Home
          </Link>
          <Link to="/menu" className="text-sm font-medium">
            Menu
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
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
              className="hidden md:flex"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
