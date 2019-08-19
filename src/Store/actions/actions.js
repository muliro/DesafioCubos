export const types = {
  SEARCH_MOVIE: 'SEARCH_MOVIE',
  SEARCH_MOVIE_SUCCESS: 'SEARCH_MOVIE_SUCCESS',
  GET_MOVIE_DETAILS_SUCCESS: 'GET_MOVIE_DETAILS_SUCCESS',
  GET_MOVIE_TRAILER: 'GET_MOVIE_TRAILER'
};


export const searchMovie = (query) =>
({
  type: types.SEARCH_MOVIE,
  payload: query
});

export const searchMovieSuccess = moviesResult =>
({
  type: types.SEARCH_MOVIE_SUCCESS,
  payload: moviesResult
});


export const getMovieDetailsSuccess = (movie) =>
({
  type: types.GET_MOVIE_DETAILS_SUCCESS,
  payload: movie
});

export const getMovieTrailerSuccess = (key) =>
({
  type: types.GET_MOVIE_TRAILER,
  payload: key
});

