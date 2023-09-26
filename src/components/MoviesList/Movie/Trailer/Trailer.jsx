import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {getTrailerFromMovieId} from "../../../../services/Api"


export const Trailer = () => {
  const {movieId} = useParams();
  const [dataMovieTrailer, setDataMovieTrailer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {

        const data = await getTrailerFromMovieId(movieId, controller);
        if (!data.length) {
          throw new Error("Official trailer not found");
        }

        setDataMovieTrailer(data);
        setIsLoading(true);

      } catch (error) {
        // console.log(error);
      }
    
    }
    fetchData();

    return () => {controller.abort()};
  }, [movieId]);

  const { key } = dataMovieTrailer[0];
  return (
    <>
      {isLoading && (
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