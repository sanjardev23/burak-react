import { createSelector } from "@reduxjs/toolkit";
import type { AppRootStore } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootStore) => state.homePage;

export const selectPopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes,
);

export const selectNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes,
);

export const selectTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers,
);
