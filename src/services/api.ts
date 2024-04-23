import axios from "axios";

const API_KEY = "4cb9e9fd";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const getMovies = async (
  movieName: string,
  movieYear: string,
  genre: string,
  page: number
) => {
  const url = `${BASE_URL}`;
  try {
    const response = await axios.get(url, {
      params: {
        s: movieName,
        y: movieYear,
        type: genre,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getMoviesDetail = async (MovieId: string) => {
  const url = `${BASE_URL}`;
  try {
    const response = await axios.get(url, {
      params: {
        i: MovieId,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
