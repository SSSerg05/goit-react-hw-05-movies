
export const Movie = ({ movie }) => {
  
  return (
    <div> 
      <p>{ movie.id } </p>
      <h1>{movie.original_title}</h1>
      <img src={movie.poster_path} />
      <p>{ movie.overview}</p>
    </div>
  )
}
