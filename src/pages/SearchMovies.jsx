import { MoviesList } from "components/MoviesList/MoviesList"

import dataTrending from "../data/trending-day.json"

export const SearchMovies = () => { 
  
  // useEffect(async () => {
  //   //HTTP-queries
  //   //const dataTrending = await ....
  // }, []);

  const { results: data } = dataTrending;
  return (
    <div>
      <h1>Search movie</h1>
      <input type='text'></input>
      <button></button>
       <MoviesList dataList={data} />
    </div>
  )
}