// src/api.js
import axios from 'axios';

const API_KEY = 'ef5da9af51mshecd1819f39db358p15ff54jsnce7b4fdab7b4';
const BASE_URL = 'https://movie-database-alternative.p.rapidapi.com/';

export const searchMovies = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      s: query,
      r: 'json',
    },
    headers: {
      'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com',
      'x-rapidapi-key': API_KEY,
    },
  });
  return response.data;
};

export const getMovieDetails = async (id) => {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
        r: 'json',
      },
      headers: {
        'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com',
        'x-rapidapi-key': API_KEY,
      },
    });
    return response.data;
  };
  