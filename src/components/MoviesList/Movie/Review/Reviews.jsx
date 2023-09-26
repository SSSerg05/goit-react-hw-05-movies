import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {getReviewsFromId} from "../../../../services/Api"
import { ReviewsList } from "./ReviewList";
import { Header, Title } from "./Reviews.styled";


export const Reviews = () => {
  const {movieId} = useParams();
  const [dataMovieReviews, setDataMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(false);

    async function fetchData() {
      try {

        const data = await getReviewsFromId(movieId, controller);
        if (!data.length) {
          throw new Error("List credits movies is empty");
        }

        setDataMovieReviews(data);
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
    <div>
      <Header>
        <Title>Review</Title>
      </Header>
      { error && !loading && (<h2>{ error.message }</h2>) }
      { !error && !loading && (
        <div>
          <ReviewsList dataList={ dataMovieReviews } />
        </div>
      )}
    </div>
  )
}

export default Reviews;