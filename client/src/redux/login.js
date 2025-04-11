// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock User Database
const usersDB = [
  { userName: 'admin', password: 'admin123' },
  { userName: 'user', password: 'user123' },
];

// Async Thunk for Login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    console.log(username, password);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay

      const user = usersDB.find(
        (u) => u.userName === username && u.password === password
      );

      if (user) {
        return { userName: user.userName };
      } else {
        return rejectWithValue('Invalid username or password');
      }
    } catch (error) {
      return rejectWithValue('Something went wrong');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
