
export const Movie = ({ movie }) => {
  
  return (
    <div> 
      <p>{ movie.id } </p>
      <h1>{movie.original_title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
      <p>{ movie.overview}</p>
    </div>
  )
}
