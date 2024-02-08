import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_PRODUCTS } from "../dummy-products";
const initialState = {
  items: [],
};

const handelSlicee = createSlice({
  name: "Cart",
  initialState,

  reducers: {
    handleAddItemToCart(state, action) {
      const FoundItem = state.items.find(
        (items) => items.id === action.payload
      );

      if (!FoundItem) {
        const product = DUMMY_PRODUCTS.find(
          (product) => product.id === action.payload
        );

        return {
          ...state,

          items: [
            ...state.items,
            {
              id: action.payload,
              name: product.title,
              price: product.price,
              quantity: 1,
            },
          ],
        };
      } else if (FoundItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item }
          ),
        };
      }
    },
    onUpdateItemQuantity(state, action) {
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId /* productId */
      );
      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };
      updatedItem.quantity += action.payload.amount;
      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
      };
    },
  },
});

export const { handleAddItemToCart, onUpdateItemQuantity } =
  handelSlicee.actions;

export default handelSlicee.reducer;
