import React, { useEffect, useState } from "react";
import { MovieProps, SearchMoviesProps } from "../types";
import { Grid, Pagination, Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../store";
import { changePageNumber } from "../store/action";

const MovieList: React.FC<{ filteredList: SearchMoviesProps }> = ({
  filteredList,
}) => {

  const pageNumber = useSelector((state: RootState) => state.pagination.pageNumber);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
     dispatch(changePageNumber(value) as any);
  };

  return (
    <div>
      <Grid container spacing={2} width={"90%"}>
        {filteredList.Search.map((movie) => (
          <Grid item key={movie.imdbID} xs={6} sm={4} md={3}>
            <a href={"/movie/"+movie.imdbID}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "100%" }}
              />
              <Typography variant="subtitle1">{movie.Title}</Typography>
              <Typography variant="body2">{movie.Year}</Typography>
              <Typography variant="body2">{movie.imdbID}</Typography>
            </a>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={parseInt(filteredList.totalResults) / 10}
        page={pageNumber}
        onChange={handleChange}
        className="pagination"
      />
    </div>
  );
};

export default MovieList;
