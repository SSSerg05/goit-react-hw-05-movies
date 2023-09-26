import axios from "axios";
import PropTypes from 'prop-types';

// Класс + ключ
const API_KEY = '347a4b587b74ee2a22d09434547acda6';
const URL = 'https://api.themoviedb.org/3';

const params = {
  api_key: API_KEY,
  page: 1,
}

//trending for day
// https://api.themoviedb.org/3/trending/movie/day?api_key=347a4b587b74ee2a22d09434547acda6&page=1
export const getTrendingForDay = async (controller) => { 
  const url = URL + '/trending/movie/day';

  const responce = await axios.get(url, { params, signal:controller.signal });
  // console.log(responce);

  return responce.data;
}

//https://api.themoviedb.org/3/movie/157336?api_key=347a4b587b74ee2a22d09434547acda6
//https://api.themoviedb.org/3/movie/157336/videos?api_key=347a4b587b74ee2a22d09434547acda6
export const getMovieFromId = async (id, controller) => { 
  const url = URL + `/movie/${id}`;
  // console.log(url + `?api_key=${API_KEY}`);
  
  const responce = await axios.get(url, { params, signal:controller.signal });

  return responce.data;
}

// получить список актеров
// https://api.themoviedb.org/3/movie/346698/credits?api_key=347a4b587b74ee2a22d09434547acda6&language=en-US
export const getCreditsFromId = async (id, controller) => {
  const url = URL + `/movie/${id}/credits`;

  const responce = await axios.get(url, { params, signal:controller.signal });
  // console.log(responce.data.cast);

  return responce.data.cast;
}


// получить обзоры для страницы кинофильма.
// https://api.themoviedb.org/3/movie/346698/reviews?api_key=347a4b587b74ee2a22d09434547acda6&language=en-US&page=1
export const getReviewsFromId = async (id, controller) => {
  const url = URL + `/movie/${id}/reviews`;
  
  const responce = await axios.get(url, { params, signal:controller.signal });
  // console.log(responce.data.results);

  return responce.data.results;
}


//search
// https://api.themoviedb.org/3/search/movie?query=Batman&api_key=347a4b587b74ee2a22d09434547acda6
export const getMoviesFromQuery = async (strQuery, controller) => { 
  const query = `${URL}/search/movie?query=${strQuery}`;
  
  const responce = await axios.get(query, { params, signal:controller.signal });

  return responce.data;
}

getMoviesFromQuery.propTypes = {
  strQuery: PropTypes.string.isRequired,
  controller: PropTypes.object.isRequired,
};

// video for movie
// 'https://api.themoviedb.org/3/movie/820609/videos?language=en-US' \
export const getTrailerFromMovieId = async (id, controller) => {
  const url = URL + `/movie/${id}/videos`;
  
  const responce = await axios.get(url, { params, signal: controller.signal });
  // console.log(responce.data.results);

  return responce.data.results.filter(item => item.name === "Official Trailer");
};
