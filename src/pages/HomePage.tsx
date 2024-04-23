import React, { useState } from 'react';
import MovieSearchForm from '../components/MovieSearchForm';
import MovieList from '../components/MovieList';
import { MovieSearchFormProps, SearchMoviesProps } from '../types';
import { getMovies } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const HomePage = () => {

    const [moviesList, setMoviesList] = useState<SearchMoviesProps>(
      {
        Response: "",
        Search: [],
        totalResults: "0"
      }
    )

    const pageNumber = useSelector((state: RootState) => state.pagination.pageNumber);

    const handleSearch = async (formData: MovieSearchFormProps) => {
        const { movieName, movieYear, genre } = formData;
        const movies = await getMovies(movieName, movieYear, genre, pageNumber);
        if(movies.Error){
            toast.error(movies.Error);
        }else{
          setMoviesList(movies)
        }
      };

    return (
        <div>
          <MovieSearchForm onSearch={handleSearch}/>
          <MovieList filteredList={moviesList} />
          <ToastContainer position="bottom-right" />
        </div>
      );
}

export default HomePage;