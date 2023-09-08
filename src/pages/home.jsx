// import { queries } from "@testing-library/react";
// import { useState, useEffect } from "react"

import dataTrending from "../data/trending-day.json"
// import { MoviesList } from "components/MoviesList/MoviesList";

export const Home = () => { 
  // const [moviesList, setMoviesList] = useState([]);
  // const [movieId, setMovieId] = useState('');
  // const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(0);

  // useEffect( async () => {
  //   //HTTP-queries
  //   //const dataTrending = await ....
  // }, []);


  // const onSelect = (id) => { 
  //   setMovieId(id);

  // }

  // const arr = [{ id: 1, name: 'movie-01' }, { id: 2, name: 'movie-02' }, { id: 3, name: 'movie-03' }, { id: 4, name: 'movie-04' }]
  const { results: data } = dataTrending;
  return (
    <main>
      <h1>Trending movies for day</h1>
      {/* <MoviesList dataList={data} /> */}
    </main>
  )
}