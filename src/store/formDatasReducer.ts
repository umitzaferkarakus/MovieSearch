// reducers/formDatasReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieSearchFormProps } from '../types';

interface FormDatasState {
  formDatas: {
    movieName: string,
    movieYear: string,
    genre: string,
  }
}

const initialState: FormDatasState = {
  formDatas: {
    movieName: 'pokemon',
    movieYear: "",
    genre: '',
  },
};

const formDatasSlice = createSlice({
  name: 'formDatas',
  initialState,
  reducers: {
    setFormDatas: (state, action: PayloadAction<FormDatasState['formDatas']>) => {
      state.formDatas = action.payload;
    },
  },
});

export const { setFormDatas } = formDatasSlice.actions;
export default formDatasSlice.reducer;
