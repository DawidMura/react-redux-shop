import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    customerName: "",
    coupon: false,
  },
  reducers: {
    addItem: (state, action) => {
      action.payload.discountedPrice =
        action.payload.price * (state.coupon ? 0.9 : 1);
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    changeCustomerName: (state, action) => {
      state.customerName = action.payload;
    },

    addCoupon: (state) => {
      state.coupon = true;
      state.items.forEach((m) => (m.discountedPrice = m.price * 0.9));
    },
  },
});

export const { addItem, removeItem, addCoupon, changeCustomerName } =
  cartSlice.actions;
export default cartSlice.reducer;
