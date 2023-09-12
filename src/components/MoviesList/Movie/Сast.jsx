import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {getCreditsFromId} from "../../../services/Api"

export const Cast = () => {
  const {movieId} = useParams;
  const [dataMovieCredits, setDataMovieCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {

        const data = await getCreditsFromId(movieId);
        if (data.length === 0) {
          throw new Error("List credits movies is empty");
        }

        setDataMovieCredits(data);
        setIsLoading(true);

      } catch (error) {
        console.log(error);
      }
    
    }
    fetchData();
  }, [movieId]);


  return (
    <div>
      <h2>Cast</h2>
      { isLoading && (<div>{ dataMovieCredits }</div>) }
    </div>
  )

}