import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import LatLngAndAddressReducer from "./LatLngAndAddress";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    nav: navReducer,
    lla: LatLngAndAddressReducer,
    user: userReducer,
  },
});
