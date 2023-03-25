import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '31387222f9d913a960cb8ee3c225d2d3';

async function fetchTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response;
}

async function fetchMoviesById(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response;
}

async function fetchMoviesCast(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
}

async function fetchMoviesReviews(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response;
}

async function fetchMoviesSearch(query) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response;
}

export {
  fetchTrendingMovies,
  fetchMoviesById,
  fetchMoviesCast,
  fetchMoviesSearch,
  fetchMoviesReviews,
};
