import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;  // Adjust this if you're using a number or another type for the ID
  title: string;
  price: number;
  imageUrl: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
    remove(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clear(state) {
      state.items = [];
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;

export default cartSlice.reducer;
