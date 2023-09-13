import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {getCreditsFromId} from "../../../../services/Api"
import { CastList } from "./CastList";

export const Cast = () => {
  const {movieId} = useParams();
  const [dataMovieCredits, setDataMovieCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchDataCredits() {
      try {

        const data = await getCreditsFromId(movieId, controller);
        if (!data.length) {
          throw new Error("List credits/cast movies is empty");
        }

        setDataMovieCredits(data);
        setIsLoading(true);

      } catch (error) {
        console.log(error);
      }
    
    }
    fetchDataCredits();

    return () => {controller.abort()};
  }, [movieId]);


  return (
    <div>
      <h2>Cast</h2>
      { isLoading && (<CastList dataList={ [...dataMovieCredits].slice(0, 10) } />) }
    </div>
  )

}