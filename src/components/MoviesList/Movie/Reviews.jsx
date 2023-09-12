import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {getReviewsFromId} from "../../../services/Api"

export const Reviews = () => {
  const {movieId} = useParams();
  const [dataMovieReviews, setDataMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {

        const data = await getReviewsFromId(movieId);
console.log('Reviews',data);

        if (data.length === 0) {
          throw new Error("List credits movies is empty");
        }

        setDataMovieReviews(data);
        setIsLoading(true);

      } catch (error) {
        console.log(error);
      }
    
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <h2>Review</h2>
      {/* { isLoading && (<div>{ dataMovieReviews }</div>) } */}
    </div>
  )

}