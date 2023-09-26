import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {getCreditsFromId} from "../../../../services/Api"
import { CastList } from "./CastList";
import { Header, Title } from "./Cast.styled";


export const Cast = () => {
  const {movieId} = useParams();
  const [dataMovieCredits, setDataMovieCredits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(false);

    async function fetchDataCredits() {
      try {

        const data = await getCreditsFromId(movieId, controller);
        if (!data.length) {
          throw new Error("List credits/cast movies is empty");
        }

        setDataMovieCredits(data);
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
    fetchDataCredits();

    return () => {controller.abort()};
  }, [movieId]);


  return (
    <div>
      <Header>
        <Title>Cast</Title>
      </Header>
      { error && !loading && (<h2>{ error.message }</h2>) }
      { !error && !loading && (<CastList dataList={ dataMovieCredits } />) }

    </div>
  )

}

export default Cast;