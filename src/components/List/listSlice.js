import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'List',
  initialState: {
    list: [{ id: 0, text: 'здесь какой то текст' }],
  },
  reducers: {
    addItemList: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    remove: (state, action) => {
      state.list = state.list.filter((item) => !action.payload.includes(item.id));
    },
  },
});

export const { addItemList, remove } = listSlice.actions;

export default listSlice.reducer;
