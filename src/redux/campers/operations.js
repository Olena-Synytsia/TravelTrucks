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
  async ({ page, itemsPerPage }, { rejectWithValue }) => {
    try {
      const response = await baseMockapi.get("/campers", {
        params: {
          page,
          limit: itemsPerPage, // Параметри пагінації
        },
      });

      // Перевірка, що відповідь успішна
      if (response.status === 200) {
        console.log("Response status:", response.status);
        console.log("Data from API:", response.data);
        return response.data;
      }

      throw new Error("Server returned an error");
    } catch (error) {
      console.error("Error fetching campers:", error.message);
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
      return response.data;
    } catch (error) {
      console.error("Error fetching camper by ID:", error.message);
      return rejectWithValue(error.message);
    }
  }
);
