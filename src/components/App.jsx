import { Route, Routes } from "react-router-dom";


import { Home } from "pages/Home";
import { SearchMovies } from "pages/SearchMovies";
import { MovieDetails } from "pages/MovieDetails";
import { SharedLayout } from "./SharedLayout";


export const App = () => {
  return (

    <Routes>
      <Route path="/" element={ <SharedLayout />}>
        <Route index element= {<Home />} />
        <Route path=":movieId" element={ <MovieDetails /> } />
        <Route path="movies" element={ <SearchMovies /> } />
        <Route path="movies/:movieId" element={ <MovieDetails /> }>
          <Route path="cast" element={<div>MovieDetailsCast</div>} />
          <Route path="reviews" element={<div>MovieDetailsReviews</div>} />
        </Route>
      </Route>
    </Routes>

  );
};
