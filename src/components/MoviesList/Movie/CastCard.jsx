

export const CastCard = (data) => {
  const {name, character, profile_path} = data;

  // https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg
  return (
    <div>
      <h1>{ name }</h1>
      <h2>{ character }</h2>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name + "/" + character}> </img>
    </div>
  )

} 