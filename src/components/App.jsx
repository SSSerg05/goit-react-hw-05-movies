import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { SearchMovies } from "pages/SearchMovies";
import { MovieDetails } from "pages/MovieDetails";

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/movies'>SearchMovies</NavLink>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<div>{<Home />}</div>} />
        <Route path="/movies" element={<div>{ <SearchMovies /> }</div>} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<div>MovieDetailsCast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>MovieDetailsReviews</div>} />
      </Routes>

      
    </div>
  );
};
