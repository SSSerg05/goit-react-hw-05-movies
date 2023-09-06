import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>SearchMovies</NavLink>
          </li>
          <li>
            <NavLink>MovieDetails</NavLink>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>SearchMovies</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        <Route path="/movies/:movieId/cast" element={<div>MovieDetailsCast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>MovieDetailsReviews</div>} />
      </Routes>

      
    </div>
  );
};
