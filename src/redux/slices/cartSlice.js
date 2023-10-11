import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  sum: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.sum = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusCount( state, action){
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      if(findItem.count === 0) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
        state.sum = 0;
        
      }
      state.sum = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.sum = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.sum = 0;
    },
  },
});

export const { clearItems, removeItems, addItem, minusCount } = cartSlice.actions;

export default cartSlice.reducer;
