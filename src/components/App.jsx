import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
    // }}
    >
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
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        <Route path="/movies/:movieId/cast" element={<div>MovieDetailsCast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>MovieDetailsReviews</div>} />
      </Routes>

      
    </div>
  );
};
