
import { Product } from "@/context/CartContext";

// Mock product data
export const products: Product[] = [
  {
    id: "1",
    name: "Butter Chicken",
    description: "Tender chicken cooked in a rich tomato and butter gravy",
    price: 299,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Main Course"
  },
  {
    id: "2",
    name: "Paneer Tikka",
    description: "Chunks of paneer marinated in spices and grilled to perfection",
    price: 249,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Starters"
  },
  {
    id: "3",
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato filling, served with sambar and chutney",
    price: 199,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "South Indian"
  },
  {
    id: "4",
    name: "Garlic Naan",
    description: "Soft bread with garlic flavor, baked in tandoor",
    price: 99,
    image: "https://images.unsplash.com/photo-1600655707843-bea2e10c1aaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Breads"
  },
  {
    id: "5",
    name: "Gulab Jamun",
    description: "Soft milk solids balls soaked in sugar syrup",
    price: 149,
    image: "https://images.unsplash.com/photo-1601303896603-8efa0fc7be3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Desserts"
  },
  {
    id: "6",
    name: "Biryani",
    description: "Fragrant rice dish with spices and choice of meat or vegetables",
    price: 349,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Main Course"
  },
  {
    id: "7",
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: 79,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Starters"
  },
  {
    id: "8",
    name: "Rasmalai",
    description: "Soft cottage cheese dumplings in sweetened, thickened milk",
    price: 179,
    image: "https://images.unsplash.com/photo-1633933703119-fee0c0e5896c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Desserts"
  }
];

export const categories = [
  { id: "all", name: "All Menu" },
  { id: "Starters", name: "Starters" },
  { id: "Main Course", name: "Main Course" },
  { id: "South Indian", name: "South Indian" },
  { id: "Breads", name: "Breads" },
  { id: "Desserts", name: "Desserts" }
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
