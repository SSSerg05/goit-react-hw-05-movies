import { useParams } from "react-router-dom"
import { getMovieFromId } from "../services/Api";

import { Movie } from "../components/MoviesList/Movie/Movie";
import { useEffect, useState } from "react";

export const MovieDetails = () => { 

  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {

    async function fetchData() {
      try {
        const data = await getMovieFromId(movieId);  
        if (data.length === 0) {
          throw new Error("Gallery empty");
        }

        setDataMovie(data);
      } catch (error) {
        console.log(error);
      }
    
    }
    fetchData();
  }, []); 

  return (
    // <div>This is Movie Details from:{ movieId }</div>
    <Movie movie={dataMovie} />
  );
}