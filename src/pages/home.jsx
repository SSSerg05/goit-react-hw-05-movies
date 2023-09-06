// import { queries } from "@testing-library/react";
import { useEffect } from "react"
import dataTrending from "../data/trending-day.json"

export const Home = () => { 
  useEffect(() => {
    //HTTP-queries
  }, []);

  // const arr = [{ id: 1, name: 'movie-01' }, { id: 2, name: 'movie-02' }, { id: 3, name: 'movie-03' }, { id: 4, name: 'movie-04' }]
  const { results: data } = dataTrending;
  console.log(data);
  return (
    <main>
      <h1>Trending movies for day</h1>
      <ul>
        { data.map(movie => {
          return (<li key={movie.id}>{movie.original_title}</li>)
        })}
      </ul>
    </main>
  )
}