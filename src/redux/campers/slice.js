import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperCardById } from "./operations.js";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    filters: {
      location: "",
      form: "",
      transmission: "",
      AC: false,
      bathroom: false,
      kitchen: false,
      TV: false,
    },
    campers: [],
    camper: null,
    currentPage: 1,
    itemsPerPage: 4,
    loading: false,
    error: null,
    selectedCampers: {},
    hasMore: true,
    isFirstVisit: true,
  },
  reducers: {
    setCampers(state, action) {
      state.campers = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...action.payload };
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      state.selectedCampers[id] = !state.selectedCampers[id];
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    resetCampers: (state) => {
      state.campers = [];
      state.currentPage = 1;
      state.hasMore = true;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
    resetFilters: (state) => {
      state.filters = {
        location: "",
        form: "",
        transmission: "",
        AC: false,
        bathroom: false,
        kitchen: false,
        TV: false,
      };
    },
    setIsFirstVisit: (state, action) => {
      state.isFirstVisit = action.payload;
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
        if (action.payload.items.length < state.itemsPerPage) {
          state.hasMore = false;
        }
        if (action.payload.items?.length > 0) {
          state.campers = [...state.campers, ...action.payload.items];
        } else {
          console.log("No campers returned from API");
        }
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

export const {
  setFilters,
  setCampers,
  toggleFavorite,
  setPage,
  setItemsPerPage,
  resetCampers,
  setHasMore,
  resetFilters,
  setIsFirstVisit,
} = campersSlice.actions;

export const campersReducers = campersSlice.reducer;
