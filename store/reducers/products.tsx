import {SET_PRODUCTS} from '../actions/actionTypes';
import {Product} from '../types/products';

interface ProductsState {
  availableProducts: Product[];
}

const initialState: ProductsState = {
  availableProducts: [],
};

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        availableProducts: action.products,
      };
    default:
      return state;
  }
};

export default productsReducer;
