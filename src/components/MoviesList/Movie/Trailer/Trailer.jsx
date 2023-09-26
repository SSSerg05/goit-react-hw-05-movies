import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {getTrailerFromMovieId} from "../../../../services/Api"


export const Trailer = () => {
  const {movieId} = useParams();
  const [dataMovieTrailer, setDataMovieTrailer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {

        const data = await getTrailerFromMovieId(movieId, controller);
        console.log(data);
        if (!data.length) {
          throw new Error("Official trailer not found");
        }

        setDataMovieTrailer(data);
        setIsLoading(true);

      } catch (error) {
        console.log(error);
      }
    
    }
    fetchData();

    return () => {controller.abort()};
  }, [movieId]);

  const { key } = dataMovieTrailer??[0];
  return (
    <>
      {error && !dataMovieTrailer[0] && (<h2>{error.message}</h2>)} 
      {!error && isLoading && (
        <a
          href={`https://www.youtube.com/watch?v=${key}`}
          target='_blank'>
          <h2>Official trailer</h2>
        </a>
      )}
    </>
  )

}

export default Trailer;