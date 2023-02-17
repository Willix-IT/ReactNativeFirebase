import {ADD_TO_CART, REMOVE_FROM_CART, RESET_CART} from './actionTypes';
import {Product} from '../types/products';

export const addToCart = (product: Product) => {
  return {type: ADD_TO_CART, product: product};
};

export const removeFromCart = (productId: string) => {
  return {type: REMOVE_FROM_CART, pid: productId};
};

export const resetCart = () => {
  return {type: RESET_CART};
};
