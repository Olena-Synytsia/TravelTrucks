import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Ініціалізація axios
export const baseMockapi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

// Запит для отримання кемперів з пагінацією
export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page, itemsPerPage }, { rejectWithValue, getState }) => {
    try {
      // Отримуємо фільтри з Redux store
      const { filters } = getState().campers;

      // Формуємо params для запиту
      const params = {
        page,
        limit: itemsPerPage, // Параметри пагінації
      };

      // Додаємо фільтри тільки якщо вони задані
      if (filters.location && filters.location.trim()) {
        params.location = encodeURIComponent(filters.location.trim());
      }
      if (filters.form && filters.form.trim()) {
        params.form = filters.form.trim();
      }
      if (filters.transmission === "automatic") {
        params.transmission = filters.transmission;
      }
      if (filters.AC === true) {
        params.AC = filters.AC;
      }
      if (filters.bathroom === true) {
        params.bathroom = filters.bathroom;
      }
      if (filters.kitchen === true) {
        params.kitchen = filters.kitchen;
      }
      if (filters.TV === true) {
        params.TV = filters.TV;
      }

      console.log("Request Params:", params);

      // Відправляємо запит
      const response = await baseMockapi.get("/campers", { params });

      // Перевірка, що відповідь успішна
      if (response.status === 200) {
        return response.data;
      }

      throw new Error("Server returned an error");
    } catch (error) {
      return rejectWithValue(error.message); // Відправка помилки в redux
    }
  }
);

// Запит для отримання кемпера за його ID
export const fetchCamperCardById = createAsyncThunk(
  "campers/fetchCamperCardById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await baseMockapi.get(`/campers/${id}`);
      if (!response.data) {
        throw new Error("No data received for the camper.");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
