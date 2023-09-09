import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const {movieId} = useParams;

  useEffect(() => {
    // http request
  })

  return (
    <div>
      <h2>Review</h2>
      {movieId}
    </div>
  )

}