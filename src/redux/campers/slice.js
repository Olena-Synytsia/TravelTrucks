import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperCardById } from "./operations.js";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    camper: null,
    currentPage: 1,
    itemsPerPage: 4,
    loading: false,
    error: null,
    selectedCampers: {},
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = [...state.campers, ...action.payload.items];
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

export const { toggleFavorite, setPage, resetCampers } = campersSlice.actions;

export const campersReducers = campersSlice.reducer;
