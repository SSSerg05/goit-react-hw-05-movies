import { useEffect, useState } from "react";

import { getTrendingForDay } from "../services/Api";
import { MoviesList } from "../components/MoviesList/MoviesList";
// import { testDataTrending} from "../data/trending-day.json";

export const Home = () => { 
  const [dataTrendsMovies, setDataTrensMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {

        const data = await getTrendingForDay(controller);
        if ( !data.results.length ) {
          throw new Error("List movies is empty");
        }

        setDataTrensMovies(data);
        setIsLoading(true);

      } catch (error) {
        // console.log(error);
      }
    
    }
    fetchData();

    return () => {controller.abort()};
  }, []);

  const { results: data } = dataTrendsMovies;
  return (
    <main>
      <h1>Trending movies for day</h1>
      { isLoading && (<MoviesList dataList={data} /> ) }
    </main>
  )
}