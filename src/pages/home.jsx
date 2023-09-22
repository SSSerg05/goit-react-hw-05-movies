import { useEffect, useState } from "react";

import { Loader } from "components/Loader/Loader";

import { getTrendingForDay } from "../services/Api";
import { MoviesList } from "../components/MoviesList/MoviesList";
// import { testDataTrending} from "../data/trending-day.json";

export const Home = () => { 
  const [dataTrendsMovies, setDataTrensMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {

        const data = await getTrendingForDay(controller);
        if (!data.results.length) {
          throw new Error("List movies is empty");
        }

        setDataTrensMovies(data);
        setLoading(true);

      } catch (error) {
        // console.log(error);
      }
      finally { 
        setLoading(false);
      }
    
    }
    fetchData();

    return () => {controller.abort()};
  }, []);

  const { results: data } = dataTrendsMovies;
  return (
    <main>
      {loading && <Loader />}

      <h1>Trending movies for day</h1>
      { data?.length && (<MoviesList dataList={data} /> ) }
    </main>
  )
}