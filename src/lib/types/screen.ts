import type { Member } from "./member";
import type { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootStore {
  homePage: HomePageState;
}

/** HOMEPAGE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE **/

/** ORDERS PAGE **/
