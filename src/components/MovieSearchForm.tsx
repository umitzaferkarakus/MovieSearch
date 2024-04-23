import React, { useEffect } from 'react';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { FILTER_OPTIONS, SEARCH_FILTER } from '../constants';
import { MovieSearchFormProps } from '../types';
import { setFormDatas } from '../store/formDatasReducer';
import "./style.scss"
import { changePageNumber } from '../store/action';


const MovieSearchForm: React.FC<{ onSearch: (data: MovieSearchFormProps) => void }> = ({ onSearch }) => {

  const formDatas = useSelector((state: RootState) => state.formDatas.formDatas);
  const pageNumber = useSelector((state: RootState) => state.pagination.pageNumber);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    onSearch(formDatas);
  }, [pageNumber])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(changePageNumber(1))
    onSearch(formDatas);
  };

  return (
    <form onSubmit={handleSubmit} className="movieForm">
      <TextField
        label="Search for a movie..."
        variant="outlined"
        className="movieName"
        value={formDatas.movieName}
        onChange={(e) => dispatch(setFormDatas({ ...formDatas, movieName: e.target.value }))}
      />
      <TextField
        label="Year"
        variant="outlined"
        className="movieYear"
        type="number"
        value={formDatas.movieYear}
        onChange={(e) => dispatch(setFormDatas({ ...formDatas, movieYear: e.target.value }))}
        InputProps={{
          inputProps: { min: SEARCH_FILTER.MIN_YEAR, max: SEARCH_FILTER.MAX_YEAR }
        }}
      />
      <Select
        labelId="filter-label"
        id="filter-select"
        value={formDatas.genre}
        onChange={(e) => dispatch(setFormDatas({ ...formDatas, genre: e.target.value }))}
        className="movieFilter"
      >
        {FILTER_OPTIONS.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <Button type="submit" variant="contained" color="primary" className="button">
        Search
      </Button>
    </form>
  );
};

export default MovieSearchForm;
