import { Route, Routes } from "react-router-dom";


import { SharedLayout } from "./SharedLayout";
import { Home } from "pages/Home";
import { SearchMovies } from "pages/SearchMovies";
import { MovieDetails } from "pages/MovieDetails";
import { Cast } from "../components/MoviesList/Movie/Cast/Сast";
import { Reviews } from "../components/MoviesList/Movie/Review/Reviews";


export const App = () => {
  return (

    <Routes>
      <Route path="/" element={ <SharedLayout />}>
        <Route index element= {<Home />} />
        <Route path=":movieId" element={ <MovieDetails /> }>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={ <SearchMovies /> } />
        <Route path="movies/:movieId" element={ <MovieDetails /> }>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>

  );
};
