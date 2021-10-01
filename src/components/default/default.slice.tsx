import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { getDataService } from "./default.service";
import { InitialStateType } from "./default.type";

// THUNK
export const getDefaultSettingsThunk = createAsyncThunk(
  "default/getDefaultSettings",
  async (props: number) => {
    try {
      const { data } = await getDataService();
      return data;
    } catch (e) {
      console.log(e);
      return {};
    }
  }
);

// REDUCER
const initialState: InitialStateType = {
  defaultData: { response: "no" },
  value: 0,
  status: "idle",
};

export const defaultSlice = createSlice({
  name: "default",
  initialState,
  // ACTIONS
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    // CHANGE SETTINGS
    builder
      .addCase(getDefaultSettingsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDefaultSettingsThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.defaultData = action.payload;
      })
      .addCase(getDefaultSettingsThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// IMPORT ACTIONS
export const { increment, decrement } = defaultSlice.actions;

export default defaultSlice.reducer;

// SELECTORS
export const changeSettingsSelector = (state: RootState) =>
  state.default.defaultData;

export const changeValueSelector = (state: RootState) => state.default.value;
