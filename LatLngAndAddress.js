import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  latitude: 0,
  longitude: 0,
  addressReduxState: "Your Location",
};
export const LatLngAndAddress = createSlice({
  name: "lla",
  initialState,
  reducers: {
    setLat: (state, action) => {
      state.latitude = action.payload;
    },
    setLng: (state, action) => {
      state.longitude = action.payload;
    },
    setAddressReduxState: (state, action) => {
      state.addressReduxState = action.payload;
    },
  },
});
export const { setLat, setLng, setAddressReduxState } =
  LatLngAndAddress.actions;

export const selectLat = (state) => state.lla.latitude;

export const selectLng = (state) => state.lla.longitude;

export const selectAddress = (state) => state.lla.addressReduxState;

export default LatLngAndAddress.reducer;
