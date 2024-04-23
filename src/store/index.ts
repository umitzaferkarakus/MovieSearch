// store.ts
import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './reducer';
import formDatasReducer from './formDatasReducer';

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    formDatas: formDatasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
