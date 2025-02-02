// src/redux/wishlistSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistState {
  items: any[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<any>) => {
      const itemExists = state.items.some(item => item._id === action.payload._id);
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    setWishlist: (state, action: PayloadAction<any[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
