import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/Calculator/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
