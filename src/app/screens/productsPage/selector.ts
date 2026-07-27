import { createSelector } from "@reduxjs/toolkit";
import type { AppRootStore } from "../../../lib/types/screen";

export const selectProductsPage = (state: AppRootStore) => state.productsPage;

export const retrieveRestaurant = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.restaurant,
);

export const retrieveChosenProduct = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.chosenProduct,
);

export const retrieveProducts = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.products,
); 