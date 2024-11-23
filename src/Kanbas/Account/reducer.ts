// WAY 1: Sign in everythime you refresh the page
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;

// WAY 2: Persist the user in localStorage -- I'm not sure which one is expected in this hw

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   currentUser: JSON.parse(localStorage.getItem("currentUser") || "null"),
// };

// const accountSlice = createSlice({
//   name: "account",
//   initialState,
//   reducers: {
//     setCurrentUser: (state, action) => {
//       state.currentUser = action.payload;
//       localStorage.setItem("currentUser", JSON.stringify(action.payload)); // Save to localStorage
//     },
//     logout: (state) => {
//       state.currentUser = null;
//       localStorage.removeItem("currentUser"); // Clear from localStorage
//     },
//   },
// });

// export const { setCurrentUser, logout } = accountSlice.actions;
// export default accountSlice.reducer;
