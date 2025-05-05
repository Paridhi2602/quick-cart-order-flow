
import { Product } from "@/context/CartContext";

// Mock product data
export const products: Product[] = [
  {
    id: "1",
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheddar cheese, fresh lettuce, tomato, and our special sauce on a toasted brioche bun.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Burgers"
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil on our homemade thin crust.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Pizza"
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and our homemade Caesar dressing.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Salads"
  },
  {
    id: "4",
    name: "Garlic Naan",
    description: "Soft bread with garlic flavor, baked in tandoor",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1600655707843-bea2e10c1aaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Breads"
  },
  {
    id: "5",
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie served with vanilla ice cream and chocolate sauce",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Desserts"
  },
  {
    id: "6",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Main Course"
  },
  {
    id: "7",
    name: "Veggie Wrap",
    description: "Fresh vegetables, hummus, and feta cheese wrapped in a whole wheat tortilla",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1626700846055-8f095ca0593e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Sandwiches"
  },
  {
    id: "8",
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with mango pulp and a hint of cardamom",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1555949366-99c9af5aae80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Beverages"
  }
];

export const categories = [
  { id: "all", name: "All" },
  { id: "Burgers", name: "Burgers" },
  { id: "Pizza", name: "Pizza" },
  { id: "Salads", name: "Salads" },
  { id: "Main Course", name: "Main Course" },
  { id: "Sandwiches", name: "Sandwiches" },
  { id: "Breads", name: "Breads" },
  { id: "Desserts", name: "Desserts" },
  { id: "Beverages", name: "Beverages" }
];

// Function to get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === "all") {
    return products;
  }
  return products.filter(product => product.category === categoryId);
};

// Function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Mock function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};
