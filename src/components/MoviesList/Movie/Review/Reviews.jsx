import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {getReviewsFromId} from "../../../../services/Api"
import { ReviewsList } from "./ReviewList";
import { Title } from "./Reviews.styled";
import { Header } from "components/SharedLayout.styled";


export const Reviews = () => {
  const {movieId} = useParams();
  const [dataMovieReviews, setDataMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {

        const data = await getReviewsFromId(movieId, controller);
        if (!data.length) {
          throw new Error("List credits movies is empty");
        }

        setDataMovieReviews(data);
        setIsLoading(true);

      } catch (error) {
        console.log(error);
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
      { isLoading && (
        <div>
          <ReviewsList dataList={ dataMovieReviews } />
        </div>
      )}
    </div>
  )
}