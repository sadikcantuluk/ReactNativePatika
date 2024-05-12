import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textList: [],
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    getText: (state, action) => {
      state.textList = [...state.textList, action.payload];
    },
  },
});

export default textSlice.reducer;
export const { getText } = textSlice.actions;





