import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: "Nic" }, // İlk kullanıcı örneği
  isAuthenticated: true, // Uygulama başlarken giriş yapılmış gibi davranır
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
