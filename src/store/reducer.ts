// paginationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaginationState {
  pageNumber: number;
}

const initialState: PaginationState = {
  pageNumber: 1, 
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setPageNumber } = paginationSlice.actions;
export default paginationSlice.reducer;
