import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {
  const {movieId} = useParams;

  useEffect(() => {
    // http request
  })

  return (
    <div>
      <h2>Cast</h2>
      {movieId}
    </div>
  )

}