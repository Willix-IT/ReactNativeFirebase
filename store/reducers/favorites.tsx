import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from '../actions/actionTypes';
import {FavoritesState, FavoritesAction} from '../types/favorites';

const initialState: FavoritesState = {
  items: [],
};

const favoritesReducer = (state = initialState, action: FavoritesAction) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const existingIndex = state.items.findIndex(
        (item: any) => item.id === action.product.id,
      );
      if (existingIndex >= 0) {
        return state;
      } else {
        const updatedItems = state.items.concat(action.product);
        return {...state, items: updatedItems};
      }
    case REMOVE_FROM_FAVORITES:
      const filteredItems = state.items.filter(
        (item: any) => item.id !== action.pid,
      );
      return {...state, items: filteredItems};
    default:
      return state;
  }
};

export default favoritesReducer;
