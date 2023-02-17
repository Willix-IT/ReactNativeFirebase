import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from './actionTypes';
import {Product} from '../types/products';

export const addToFavorites = (product: Product) => {
  return {type: ADD_TO_FAVORITES, product: product};
};

export const removeFromFavorites = (productId: string) => {
  return {type: REMOVE_FROM_FAVORITES, pid: productId};
};
