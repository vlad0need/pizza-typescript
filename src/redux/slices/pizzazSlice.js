import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { activeCategory, activeSort } = params;
  const { data } = await axios.get(
    `https://63e5669e6eded7dd448758ff.mockapi.io/pizza/?${
      activeCategory > 0 ? `category=${activeCategory}` : ''
    }&sortBy=${activeSort.sort}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: '',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      console.log(action, 'fulfilled');
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state, action) => {
      console.log(action, 'rejected');
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
