import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout";

const Home = lazy(() => import('../pages/Home'));
const SearchMovies = lazy(() => import('../pages/SearchMovies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/MoviesList/Movie/Cast/Сast'));
const Reviews = lazy(() => import('../components/MoviesList/Movie/Review/Reviews'));



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
