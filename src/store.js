import { configureStore } from "@reduxjs/toolkit";
import kahootReducer from "./redux/reducers/kahootReducer";

const store = configureStore({
  reducer: {
    kahootReducer,
  },
});

export default store;
