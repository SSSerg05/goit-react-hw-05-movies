
import { useSearchParams } from "react-router-dom";

import { MoviesList } from "components/MoviesList/MoviesList"
import dataTrending from "../data/trending-day.json"

export const SearchMovies = () => { 

  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const name = searchParams.get("name");

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
      <p>{ name }</p>
       <MoviesList dataList={ data } />
    </div>
  )
}