import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieFromId } from "../services/Api";

import { Movie } from "../components/MoviesList/Movie/Movie";


export const MovieDetails = () => {

  const [dataMovie, setDataMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  
  useEffect(() => {
    async function fetchData() {
      try {

        const data = await getMovieFromId(movieId);
        if (data.length === 0) {
          throw new Error("List movies is empty");
        }

        setDataMovie(data);
        setIsLoading(true);

      } catch (error) {
        console.log(error);
      }
    
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      { isLoading && (<Movie movie={dataMovie} />) }
    </>
  );
}