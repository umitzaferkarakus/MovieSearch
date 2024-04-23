export interface MovieSearchFormProps {
  movieName: string;
  movieYear: string;
  genre: string;
}


export interface MovieProps {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface SearchMoviesProps {
  Response: string;
  Search: MovieProps[];
  totalResults: string;
}
