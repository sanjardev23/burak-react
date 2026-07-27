import type { Member } from "./member";
import type { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootStore {
  homePage: HomePageState;
  productsPage: ProductsPageState;
}

/** HOMEPAGE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE **/
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** ORDERS PAGE **/
