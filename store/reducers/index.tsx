import {combineReducers} from 'redux';

import cartReducer from './cart';
import favoritesReducer from './favorites';
import productsReducer from './products';

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
