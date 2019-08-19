const MOVIE_DB_API_KEY = 'e294151ed6d780d8469fc8399ec721d5';
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';
// 'https://api.themoviedb.org/3/search/movie?api_key=e294151ed6d780d8469fc8399ec721d5&language=en-US&=m'
const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
   }
   console.log(baseUrl)
  return baseUrl;
}
export const getTopMovies = async ({page}) => {
  const fullUrl = createMovieDbUrl('/movie/top_rated', {
    page
  });
  return fetch(fullUrl);
}

export const searchMovies = async ({ query}) => {
  const fullUrl = createMovieDbUrl('/search/movie',{query});
  return fetch(fullUrl);
}

export const getMovieDetails = async ({movieId}) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
  return fetch(fullUrl);
}

export const getMovieTrailer = async ({movieId}) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}/videos`);
  return fetch(fullUrl);
}


// export default getTopMovies
