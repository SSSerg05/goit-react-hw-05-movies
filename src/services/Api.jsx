import axios from "axios";
import PropTypes from 'prop-types';

// Класс + ключ
const API_KEY = '347a4b587b74ee2a22d09434547acda6';
const URL = 'https://api.themoviedb.org/3';
//search
// https://api.themoviedb.org/3/search/movie?query=Batman&api_key=347a4b587b74ee2a22d09434547acda6

//selected from id video
// https://api.themoviedb.org/3/movie/157336/videos?api_key=API_KEY

//trending for day
// https://api.themoviedb.org/3/trending/movie/day?api_key=347a4b587b74ee2a22d09434547acda6&page=1

const params = {
  api_key: API_KEY,
  page: 1,
}

export const getTrendingForDay = async () => { 
  const url = URL + '/trending/movie/day';
  const responce = await axios.get(url, { params });

  return responce.data;
}

export const getMovieFromId = async (id) => { 
  const url = URL + `/trending/movie/day${id}`;
  const responce = await axios.get(url, { params });

  return responce.data;
}

export const fetchData = async (strQuery, page) => { 
  const query = `${URL}`;
  const responce = await axios.get(query, {params});

  return responce.data;
}

fetchData.propTypes = {
  strQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};