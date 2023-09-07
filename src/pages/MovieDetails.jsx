import { useParams } from "react-router-dom"
import { getMovieFromId } from "services/Api";

import { Movie } from "components/MoviesList/Movie/Movie";

export const MovieDetails = async () => { 

  const params = useParams();
  const data = await getMovieFromId(params.id);
  console.log(data);

  return (
    // <div>This is Movie Details</div>
    <Movie movie={data} />
  );
}