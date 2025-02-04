import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const baseMockapi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

// Запит для отримання всіх кемперів
export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page, itemsPerPage }, { rejectWithValue }) => {
    try {
      const response = await baseMockapi.get("/campers", {
        params: {
          page,
          limit: itemsPerPage,
        },
      });
      console.log("Response status:", response.status); // Статус запиту
      console.log("Data from API:", response.data); // Дані від API
      console.log("Data from API:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching campers:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

// Запит для отримання кемпера
export const fetchCamperCardById = createAsyncThunk(
  "campers/fetchCamperCardById",
  async (id, { rejectWithValue }) => {
    try {
      console.log("Запит на отримання кемпера з ID:", id);
      const response = await baseMockapi.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching camper by ID:", error.message);
      return rejectWithValue(error.message);
    }
  }
);
