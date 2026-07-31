import type { Member } from "./member";
import type { Order } from "./order";
import type { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootStore {
  ordersPage: any;
  homePage: HomePageState;
  productsPage: ProductsPageState;
  orderPage: OrdersPageState;
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
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
