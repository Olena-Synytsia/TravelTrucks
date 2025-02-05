import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperCardById } from "./operations.js";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [], // список всіх кемперів
    camper: null, // інформація про один кемпер
    currentPage: 1, // поточна сторінка
    itemsPerPage: 4, // кількість елементів на сторінці
    loading: false, // стан завантаження
    error: null, // помилка
    selectedCampers: {}, // список обраних кемперів
    hasMore: true, // чи є ще елементи для завантаження
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      state.selectedCampers[id] = !state.selectedCampers[id]; // Перемикаємо стан обраності
    },
    setPage: (state, action) => {
      state.currentPage = action.payload; // Оновлення поточної сторінки
    },
    resetCampers: (state) => {
      state.campers = []; // Очищаємо список кемперів
      state.currentPage = 1; // Скидаємо поточну сторінку на 1
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload; // Оновлення стану hasMore
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        if (state.loading) return;
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.items.length < state.itemsPerPage) {
          state.hasMore = false; // Якщо сервер повернув менше елементів, ніж вказано в limit
        }
        state.campers = [...state.campers, ...action.payload.items];

        state.currentPage += 1; // оновлюємо сторінку для наступного запиту
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCamperCardById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCamperCardById.fulfilled, (state, action) => {
        state.loading = false;
        state.camper = action.payload;
      })
      .addCase(fetchCamperCardById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite, setPage, resetCampers, setHasMore } =
  campersSlice.actions;

export const campersReducers = campersSlice.reducer;
