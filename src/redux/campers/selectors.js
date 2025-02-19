export const selectCampers = (state) => state.campers.campers;
export const selectCamper = (state) => state.campers.camper;
export const selectSelectedCampers = (state) => state.campers.selectedCampers;
export const selectShowFavoritesOnly = (state) =>
  state.campers.showFavoritesOnly;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectItemsPerPage = (state) => state.campers.itemsPerPage;
export const selectHasMore = (state) => state.campers.hasMore;
export const selectFilters = (state) => state.campers.filters;
export const selectIsFirstVisit = (state) => state.campers.isFirstVisit;
