
/**
 * IMPORTANT: This is a mock file to demonstrate backend structure.
 * In a real project, this would be in a separate Node.js server application,
 * not in the browser-based React application.
 */

const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    isVegetarian: {
      type: Boolean,
      default: false,
    },
    isSpicy: {
      type: Boolean,
      default: false,
    },
    preparationTime: {
      type: Number, // in minutes
      default: 15,
    },
    ingredients: [String],
    nutritionalInfo: {
      calories: Number,
      protein: Number,
      carbohydrates: Number,
      fat: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
