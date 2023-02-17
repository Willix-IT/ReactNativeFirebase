export interface Product {
  id: string;
  ownerId: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  isFavorite?: boolean;
}

export interface ProductsState {
  availableProducts: Product[];
}

export interface SetProductsAction {
  type: string;
  products: Product[];
}

export type ProductsAction = SetProductsAction;
