import React from "react";
import { Element, scroller } from "react-scroll";

import { Genres } from "./Genres"
import { Card, ContainerImg, LinkSubpage, List } from "./Movie.styled";
import { Trailer } from "./Trailer/Trailer";
import NoPhoto from "../../../images/no-picture.jpg";

export const Movie = ({ movie }) => {

  const realease_year = new Date(movie.release_date).getFullYear();
  const srcImage = movie.poster_path ?
    `https://image.tmdb.org/t/p/w500${movie.poster_path}` : NoPhoto;

  const scrollToElement = (name) => {
    scroller.scrollTo(name, {
      duration: 1500,
      delay: 100,
      smooth: true,
    })
  }
  
  return (
    <>
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
              <LinkSubpage to='cast' onClick={() => scrollToElement('castElement')}>Cast:</LinkSubpage>
            </li>
            <li>
              <LinkSubpage to='reviews' onClick={() => scrollToElement('reviewsElement')}>Reviews:</LinkSubpage>
            </li>
          </List>
        </div>
      </Card>
      <Element name="castElement"></Element>
      <Element name="reviewsElement"></Element>
    </>
  )
}
