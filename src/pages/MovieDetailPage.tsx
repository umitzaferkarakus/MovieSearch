import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesDetail } from "../services/api";
import { toast } from "react-toastify";

const MovieDetailPage = () => {
  const [selectedMovie, setSelectedMovie] = useState({
    Title: "",
    Poster: "",
    Plot: "",
    Director: "",
    Actors: "",
    Genre: "",
    Released: "",
    imdbRating: "",
  });
  const { id } = useParams();
  const movieId = id || "";

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const movie = await getMoviesDetail(movieId);
      console.log("🚀 ~ fetchMovieDetail ~ movie:", movie);
      if (movie.Error) {
        toast.error(movie.Error);
      } else {
        setSelectedMovie(movie);
      }
    };

    fetchMovieDetail();
  }, []);

  return (
    <div>
      <h2>{selectedMovie.Title}</h2>
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      <p>{selectedMovie.Plot}</p>
      <p>Director: {selectedMovie.Director}</p>
      <p>Actors: {selectedMovie.Actors}</p>
      <p>Genre: {selectedMovie.Genre}</p>
      <p>Released: {selectedMovie.Released}</p>
      <p>IMDB Rating: {selectedMovie.imdbRating}</p>
    </div>
  );
};

export default MovieDetailPage;
