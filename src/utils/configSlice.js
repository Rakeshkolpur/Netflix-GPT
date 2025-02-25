import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers:{
    changLanguage :(state,action)=>{
      state.lang = action.payload;
    }   ,
  },
});
export const { changLanguage } = configSlice.actions;
export default configSlice.reducer;