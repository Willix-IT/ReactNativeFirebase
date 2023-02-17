import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from '../actions/actionTypes';
import {Product} from './products';

export interface FavoritesState {
  items: Product[];
}

export interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  product: Product;
}

export interface RemoveFromFavoritesAction {
  type: typeof REMOVE_FROM_FAVORITES;
  pid: string;
}

export type FavoritesAction = AddToFavoritesAction | RemoveFromFavoritesAction;
