import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSuggestionSlice from "./searchSuggestionSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    searchSuggestions: searchSuggestionSlice,
  },
});

export default store;
