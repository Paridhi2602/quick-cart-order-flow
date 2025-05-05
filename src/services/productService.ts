
import { Product } from "@/context/CartContext";

// Mock product data
export const products: Product[] = [
  {
    id: "1",
    name: "Organic Bananas",
    description: "Bunch of fresh organic bananas",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Fruits"
  },
  {
    id: "2",
    name: "Avocado",
    description: "Ripe and ready to eat avocados",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1574009604692-7d1476b722c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Fruits"
  },
  {
    id: "3",
    name: "Organic Milk",
    description: "1 gallon of fresh organic whole milk",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Dairy"
  },
  {
    id: "4",
    name: "Fresh Bread",
    description: "Artisan sourdough bread loaf",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Bakery"
  },
  {
    id: "5",
    name: "Organic Eggs",
    description: "Dozen free-range organic eggs",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Dairy"
  },
  {
    id: "6",
    name: "Apples",
    description: "Pack of 4 fresh Honeycrisp apples",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Fruits"
  },
  {
    id: "7",
    name: "Bell Peppers",
    description: "Organic red, yellow and green bell peppers",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Vegetables"
  },
  {
    id: "8",
    name: "Spinach",
    description: "Fresh organic baby spinach",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Vegetables"
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "Fruits", name: "Fruits" },
  { id: "Vegetables", name: "Vegetables" },
  { id: "Dairy", name: "Dairy" },
  { id: "Bakery", name: "Bakery" }
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
