import { createSlice } from "@reduxjs/toolkit";

export type stateType = {
  document: {
    title: string;
    content: string;
  }[];
};
const initialState: stateType = {
  document: [],
};

const MyReducer = createSlice({
  name: "MyReducer",
  initialState,
  reducers: {
    ADD: (state, action) => {
      state.document.push(action.payload);
    },
    DELETE: (state, action) => {
      state.document.splice(action.payload, 1);
    },
    UPDATE: (state, action) => {
      state.document[action.payload.index] = action.payload.object;
    },
  },
});

export default MyReducer.reducer;
export const { ADD, DELETE, UPDATE } = MyReducer.actions;
