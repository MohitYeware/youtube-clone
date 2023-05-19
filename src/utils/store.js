import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSuggestionSlice from "./searchSuggestionSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    searchSuggestions: searchSuggestionSlice,
    chat: chatSlice,
  },
});

export default store;
