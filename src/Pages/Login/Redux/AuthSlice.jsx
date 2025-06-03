// store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../ClinicStore/DataBaseClient/SupaBaseClient.jsx';

// Async thunk for logging in
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        return rejectWithValue(error.message);
      }
      return data.session.user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Async thunk for signing up
export const signUpUser = createAsyncThunk(
  'auth/signupUser',
  async ({ email, password, fullName }, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { fullName },
        },
      });
      if (error) return rejectWithValue(error.message);
      return data.user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);


// Async thunk for fetching logged-in user info
export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await supabase.auth.getSession();
      const user = data?.session?.user;
      if (user) {
        return user;
      }
      return rejectWithValue("No user session found");
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Async thunk for logging out
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await supabase.auth.signOut();
      dispatch(logout());
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const storedUser = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: storedUser || null,
    isLoggedIn: !!storedUser,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null;
        state.isLoggedIn = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
