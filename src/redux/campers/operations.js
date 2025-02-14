import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const baseMockapi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page, filters }, { getState }, thunkApi) => {
    try {
      const { itemsPerPage } = getState().campers;

      const params = {
        page,
        limit: itemsPerPage,
      };

      if (filters.location && filters.location.trim()) {
        params.location = encodeURIComponent(filters.location.trim());
      }

      if (filters.form && filters.form.trim()) {
        params.form = filters.form.trim();
      }

      if (filters.transmission === "automatic") {
        params.transmission = filters.transmission;
      }

      if (filters.AC) {
        params.AC = filters.AC;
      }

      if (filters.bathroom) {
        params.bathroom = filters.bathroom;
      }

      if (filters.kitchen) {
        params.kitchen = filters.kitchen;
      }

      if (filters.TV) {
        params.TV = filters.TV;
      }

      const response = await baseMockapi.get("/campers", { params });

      if (response.status === 200) {
        return response.data;
      }
      throw new Error("Server returned an error");
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperCardById = createAsyncThunk(
  "campers/fetchCamperCardById",
  async (id, thunkApi) => {
    try {
      const response = await baseMockapi.get(`/campers/${id}`);
      if (!response.data) {
        throw new Error("No data received for the camper.");
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
