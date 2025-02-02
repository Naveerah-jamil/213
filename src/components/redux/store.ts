import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "@/components/redux/WishListSlice"; // Import the wishlist reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer, // Add the wishlist reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
