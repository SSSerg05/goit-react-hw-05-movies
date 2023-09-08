import { useParams } from "react-router-dom"
import { getMovieFromId } from "../services/Api";

import { Movie } from "../components/MoviesList/Movie/Movie";
import { useEffect, useState } from "react";

export const MovieDetails = async () => { 

  const { movieId } = useParams();
  console.log(movieId);

  const [dataMovie, setDataMovie] = useState([]);

  useEffect(async () => { 
    const data = await getMovieFromId(movieId);  
    setDataMovie(data);
  }, [])

  console.log(dataMovie);

  return (
    // <div>This is Movie Details</div>
    <Movie movie={dataMovie} />
  );
}