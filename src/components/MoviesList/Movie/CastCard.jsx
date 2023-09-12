

export const CastCard = ({ dataCast }) => {
  const {name, character, profile_path} = dataCast;
  if(!dataCast) {
    return;
  }

  // https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg
  return (
    <div>
      <h2>{ name }</h2>
      <h3>{ character }</h3>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={`${name}/${character}`} />
    </div>
  )

} 