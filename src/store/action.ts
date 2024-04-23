// actions.ts
import { setPageNumber } from './reducer';
import { AppDispatch } from '.';

export const changePageNumber = (pageNumber: number) => (dispatch: AppDispatch) => {
  dispatch(setPageNumber(pageNumber));
};
