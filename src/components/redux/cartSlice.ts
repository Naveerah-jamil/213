import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a cart item
interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
  description?: string; 

}

// Define the structure of the cart state
interface CartState {
  items: CartItem[];
}

// Initial state of the cart, starts with an empty cart
const initialState: CartState = {
  items: [],
};

// Create the cart slice with actions for adding, removing, decreasing quantity, and clearing the cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart (or increment quantity if it already exists)
    add(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // If item exists, increase quantity by 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Otherwise, add new item with quantity 1
      }
    },
    
    // Remove an item from the cart
    remove(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    
    // Decrease the quantity of an item in the cart
    decreaseQuantity(state, action: PayloadAction<string>) {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrease quantity if greater than 1
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload); // If quantity is 1, remove the item
        }
      }
    },

    // Clear the cart (remove all items)
    clear(state) {
      state.items = [];
    },
  },
});

// Export the actions so they can be dispatched from components
export const { add, remove, decreaseQuantity, clear } = cartSlice.actions;

// Export the reducer to be included in the store
export default cartSlice.reducer;
