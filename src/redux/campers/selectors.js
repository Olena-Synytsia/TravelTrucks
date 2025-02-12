export const selectCampers = (state) => state.campers.campers; // Список всіх кемперів
export const selectCamper = (state) => state.campers.camper; // Один кемпер
export const selectSelectedCampers = (state) => state.campers.selectedCampers; // Список обраних кемперів
// export const selectIsCamperFavorite = (state, id) =>
//   state.campers.selectedCampers[id]; // Перевірити, чи кемпер обраний
export const selectLoading = (state) => state.campers.loading; // Стан завантаження
export const selectError = (state) => state.campers.error; // Помилка
export const selectHasMore = (state) => state.campers.hasMore; // Перевірка, чи є ще кемпери
export const selectCurrentPage = (state) => state.campers.currentPage; // Збереження поточної сторінки
export const selectFilters = (state) => state.campers.filters; // Збереження фільтрації
