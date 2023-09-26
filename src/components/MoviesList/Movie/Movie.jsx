import { Genres } from "./Genres"
import { Card, ContainerImg, Link, List } from "./Movie.styled";
import { Trailer } from "./Trailer/Trailer";
import NoPhoto from "../../../images/no-picture.jpg";

export const Movie = ({ movie }) => {

  const realease_year = new Date(movie.release_date).getFullYear();
  const srcImage = movie.poster_path ?
    `https://image.tmdb.org/t/p/w500${movie.poster_path}` : NoPhoto;

  return (
    <Card>
      <ContainerImg>
        <img
          src={srcImage}
          alt={movie.title}
          loading="lazy"
        />
      </ContainerImg>

      <div>
        <h1>{movie.title} ({realease_year})</h1>
        <p>Vote: {movie.vote_average}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <Trailer />
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
