import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: [],
  token: "",
  isLoading: false,
  isError: false,
};


export const UserLogin = createAsyncThunk("user", async (config) => {
  return axios(config)
  .then((response) => {
    if(response.data){
        // showToast('error', response.data.message);
        console.log('errorrrrrr',response.data.message)
    }
    return response.data;
  })
  .catch(function (error){
    console.log(error)
  })
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SignIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.token = ""
       state.user = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UserLogin.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(UserLogin.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
    });
    builder.addCase(UserLogin.rejected, (state, action)=>{
      console.log('action erorrrrrrrrrrrrrr', action.payload )
    })
  },
});

export const {SignIn, logOut} = authSlice.actions;
export default authSlice.reducer;
