
export const Movie = ({ movie }) => {
  
  const realease_year = new Date(movie.release_date).getFullYear()

  return (
    <div> 
      <p>Back Home</p>
      <div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
        </div>
        <div>
          <h1>{movie.original_title} ({realease_year})</h1>
          <p>Vote: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            
            {
              movie.genres.map(item => {
                return (
                  <li key={item.id}>
                    {item.name}
                  </li>
                )
              })
            }

          </ul>
        </div>
      </div>
    </div>
  )
}
