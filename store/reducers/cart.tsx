import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART,
} from '../actions/actionTypes';
import {CartState, CartAction} from '../types/cart';

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;
      let updatedOrNewCartItem;
      const existingCartItemToAdd = state.items.find(
        (item: any) => item.id === addedProduct.id,
      );
      if (existingCartItemToAdd) {
        updatedOrNewCartItem = {
          ...existingCartItemToAdd,
          quantity: existingCartItemToAdd.quantity + 1,
          sum: existingCartItemToAdd.sum + productPrice,
        };
        return {
          ...state,
          items: [
            ...state.items.filter((item: any) => item.id !== addedProduct.id),
            updatedOrNewCartItem,
          ],
          totalAmount: state.totalAmount + productPrice,
        };
      } else {
        updatedOrNewCartItem = {
          id: addedProduct.id,
          title: productTitle,
          quantity: 1,
          price: productPrice,
          sum: productPrice,
        };
        return {
          ...state,
          items: [...state.items, updatedOrNewCartItem],
          totalAmount: state.totalAmount + productPrice,
        };
      }
    case REMOVE_FROM_CART:
      const existingCartItemIndex = state.items.findIndex(
        (item: any) => item.id === action.pid,
      );
      const existingCartItemToRemove = state.items[existingCartItemIndex];
      const updatedTotalAmount =
        state.totalAmount - existingCartItemToRemove.sum;
      let updatedCartItems;
      if (existingCartItemToRemove.quantity === 1) {
        updatedCartItems = state.items.filter(
          (item: any) => item.id !== action.pid,
        );
      } else {
        const updatedCartItem = {
          ...existingCartItemToRemove,
          quantity: existingCartItemToRemove.quantity - 1,
          sum: existingCartItemToRemove.sum - existingCartItemToRemove.price,
        };
        updatedCartItems = [...state.items];
        updatedCartItems[existingCartItemIndex] = updatedCartItem;
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: updatedTotalAmount,
      };
    case RESET_CART:
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
