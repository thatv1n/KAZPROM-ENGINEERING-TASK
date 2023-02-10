import { configureStore } from '@reduxjs/toolkit';
import listSlice from '../components/List/listSlice';

export default configureStore({
  reducer: {
    data: listSlice,
  },
});
