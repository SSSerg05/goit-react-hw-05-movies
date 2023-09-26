import { useEffect, useState, Suspense  } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

import { getMovieFromId } from "../services/Api";
import { Movie } from "../components/MoviesList/Movie/Movie";
import { GoBack } from "./MovieDetails.styled";
// import { testDataMovie } from "../data/movie-id-346698.json"; 


export const MovieDetails = () => {

  const [dataMovie, setDataMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  // Movie from Id
  useEffect(() => {

    const controller = new AbortController();
    setLoading(true);
    setError(false);
    
    async function fetchData() {
      try {

        const data = await getMovieFromId(movieId, controller);
        if (data.length === 0) {
          throw new Error("List movies is empty");
        }

        setDataMovie(data);
        setLoading(true);

      } catch (error) {
        // console.log(error);
        if (error.message !== 'canceled') {
          setError(error);
        }

      }
      finally { 
        setLoading(false);
      }
    
    }
    fetchData();
  }, [movieId]);

  const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      <GoBack to={backLinkHref}>Go Back</GoBack>
      { loading && <Loader />}
      { error && !loading && (<h2>{ error.message }</h2>) }
      { !error && !loading && (<Movie movie={dataMovie} />) }
      <Suspense fallback={<div>LOADING Subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetails;