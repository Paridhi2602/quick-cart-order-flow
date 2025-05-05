
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { toast } from '@/components/ui/sonner';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction = 
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.product.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item => 
            item.product.id === action.payload.id 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { product: action.payload, quantity: 1 }],
        };
      }
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item => 
          item.product.id === action.payload.productId 
            ? { ...item, quantity: action.payload.quantity } 
            : item
        ).filter(item => item.quantity > 0),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartItemsCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    toast.success("Item removed from cart");
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);
  
  const cartTotal = state.items.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  );

  const value = {
    state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartItemsCount,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
