import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

import {getTrailerFromMovieId} from "../../../../services/Api"


export const Trailer = () => {
  const {movieId} = useParams();
  const [dataMovieTrailer, setDataMovieTrailer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    const controller = new AbortController();
    setLoading(true);
    setError(false);

    async function fetchData() {
      try {

        const data = await getTrailerFromMovieId(movieId, controller);
        // console.log(data);
        if (!data.length) {
          throw new Error("Official trailer not found");
        }

        setDataMovieTrailer(data);
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

    return () => {controller.abort()};
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && (<h2>{error.message}</h2>)} 
      {!error && !loading && (
        <>
          {
            dataMovieTrailer
              .filter(item => item.name === "Official Trailer")
              .map(item => 
                <a
                  key={item.id}
                  href={`https://www.${item.site}.com/watch?v=${item.key}`}
                  rel="noreferrer noopener"
                  target="_blank">
                  <h2>Official trailer</h2>
                </a>
              )
          }
        </>
      )}
    </>
  )

}

export default Trailer;