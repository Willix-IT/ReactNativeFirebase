import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART,
} from '../actions/actionTypes';
import {Product} from './products';

export interface CartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  sum: number;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
}

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  product: Product;
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  pid: string;
}

export interface ResetCartAction {
  type: typeof RESET_CART;
  pid: string;
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | ResetCartAction;
