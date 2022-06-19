import { configureStore } from "@reduxjs/toolkit";
import kahootReducer from "./redux/reducers/kahootReducer";

// combineReducers qisqartmasi
const store = configureStore({
  reducer: {
    kahootReducer,
  },
});

export default store;
