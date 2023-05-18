import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSuggestionResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export default searchSuggestionSlice.reducer;
export const { cacheSuggestionResults } = searchSuggestionSlice.actions;
