import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './slices/counterSlice';
import { todosApi } from './services/totos';
import { baseApi } from './services/api.endpoints';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
