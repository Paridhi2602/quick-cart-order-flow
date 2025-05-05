
import { Product } from "@/context/CartContext";

// Mock product data
export const products: Product[] = [
  {
    id: "1",
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheddar cheese, fresh lettuce, tomato, and our special sauce on a toasted brioche bun.",
    price: 199,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Burgers"
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil on our homemade thin crust.",
    price: 249,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Pizza"
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and our homemade Caesar dressing.",
    price: 159,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Salads"
  },
  {
    id: "4",
    name: "Garlic Naan",
    description: "Soft bread with garlic flavor, baked in tandoor",
    price: 49,
    image: "https://images.unsplash.com/photo-1600655707843-bea2e10c1aaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Breads"
  },
  {
    id: "5",
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie served with vanilla ice cream and chocolate sauce",
    price: 129,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Desserts"
  },
  {
    id: "6",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs",
    price: 299,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Main Course"
  },
  {
    id: "7",
    name: "Veggie Wrap",
    description: "Fresh vegetables, hummus, and feta cheese wrapped in a whole wheat tortilla",
    price: 149,
    image: "https://images.unsplash.com/photo-1626700846055-8f095ca0593e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Sandwiches"
  },
  {
    id: "8",
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with mango pulp and a hint of cardamom",
    price: 89,
    image: "https://images.unsplash.com/photo-1555949366-99c9af5aae80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Beverages"
  },
  {
    id: "9",
    name: "Butter Chicken",
    description: "Tender chicken pieces in rich tomato and butter gravy with aromatic spices",
    price: 279,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Main Course"
  },
  {
    id: "10",
    name: "Paneer Tikka",
    description: "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions",
    price: 229,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Starters"
  },
  {
    id: "11",
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato filling served with sambar and chutney",
    price: 149,
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f45e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Breakfast"
  },
  {
    id: "12",
    name: "Vegetable Pulao",
    description: "Fragrant basmati rice cooked with mixed vegetables and mild spices",
    price: 179,
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Main Course"
  },
  {
    id: "13",
    name: "Gulab Jamun",
    description: "Soft milk solid dumplings soaked in rose-flavored sugar syrup",
    price: 99,
    image: "https://images.unsplash.com/photo-1627628450905-8662b094f10d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Desserts"
  },
  {
    id: "14",
    name: "Veg Manchurian",
    description: "Crispy vegetable balls tossed in spicy, tangy sauce with bell peppers and onions",
    price: 189,
    image: "https://images.unsplash.com/photo-1626102553511-2f19bdcc59fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Starters"
  },
  {
    id: "15",
    name: "Cold Coffee",
    description: "Smooth and creamy cold coffee topped with whipped cream",
    price: 119,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Beverages"
  },
  {
    id: "16",
    name: "Tandoori Roti",
    description: "Whole wheat flatbread baked in tandoor, perfect with curry dishes",
    price: 25,
    image: "https://images.unsplash.com/photo-1626074355886-0f447d644b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Breads"
  }
];

export const categories = [
  { id: "all", name: "All" },
  { id: "Breakfast", name: "Breakfast" },
  { id: "Starters", name: "Starters" },
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
  return [products[0], products[5], products[9], products[12]];
};
