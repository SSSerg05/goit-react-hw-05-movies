import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getMovieFromId } from "../services/Api";

import { Movie } from "../components/MoviesList/Movie/Movie";
// import { testDataMovie } from "../data/movie-id-346698.json"; 


export const MovieDetails = () => {

  const [dataMovie, setDataMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  
  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {

        const data = await getMovieFromId(movieId, controller);
        if (data.length === 0) {
          throw new Error("List movies is empty");
        }

        setDataMovie(data);
        setIsLoading(true);

      } catch (error) {
        console.log(error);

        console.log("Use local Database movie with id=346698");
        // setDataMovie(testDataMovie);
        // setIsLoading(true);
      }
    
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      { isLoading && (<Movie movie={dataMovie} />) }

      <ul>
        <li>
          <Link to='cast'>Cast:</Link>
        </li>
        <li>
          <Link to='reviews'>Reviews:</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}