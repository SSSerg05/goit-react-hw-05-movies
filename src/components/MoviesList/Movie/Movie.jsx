import { Link } from 'react-router-dom';

import { Genres } from "./Genres"


export const Movie = ({ movie }) => {
 
  console.log(movie);
  console.log(movie.genres);
  const realease_year = new Date(movie.release_date).getFullYear();

  return (
    <div> 
      <Link to='/'>Back Home</Link>
      <div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
        </div>
        <div>
          <h1>{movie.original_title} ({realease_year})</h1>
          <p>Vote: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <Genres genres={ movie.genres } />
        </div>
      </div>
    </div>
  )
}
