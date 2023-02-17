import {SET_PRODUCTS} from './actionTypes';
import {Product, SetProductsAction} from '../types/products';
import dbRef from '../../utils/firebase';
import {child, get} from 'firebase/database';
import store from '../store';

export const setProducts = (products: Product[]) => {
  return {type: SET_PRODUCTS, products: products};
};

export const fetchProducts = async () => {
  try {
    const response = await get(child(dbRef, '/'));
    const loadedProducts: Product[] = response.val();
    store.dispatch(setProducts(loadedProducts));
    return loadedProducts;
  } catch (err) {
    throw err;
  }
};
