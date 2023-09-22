
import { Genres } from "./Genres"
import { Card, Link, List } from "./Movie.styled";


export const Movie = ({ movie }) => {
 
 
  const realease_year = new Date(movie.release_date).getFullYear();

  return (
    <Card>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
      </div>

      <div>
        <h1>{movie.original_title} ({realease_year})</h1>
        <p>Vote: {movie.vote_average}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <Genres genres={movie.genres} />

        <List>
          <li>
            <Link to='cast'>Cast:</Link>
          </li>
          <li>
            <Link to='reviews'>Reviews:</Link>
          </li>
        </List>
      </div>
    </Card>
  )
}
