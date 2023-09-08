import { useParams } from "react-router-dom"
import { getMovieFromId } from "../services/Api";

import { Movie } from "../components/MoviesList/Movie/Movie";
import { useEffect, useState } from "react";

export const MovieDetails = () => {

  const [dataMovie, setDataMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { movieId } = useParams();
        const data = await getMovieFromId(movieId);
        if (data.length === 0) {
          throw new Error("List movies is empty");
        }

        setDataMovie(data);
        setIsLoading(true)

      } catch (error) {
        console.log(error);
      }
    
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading} < Movie movie={dataMovie} />
    </>
  );
}