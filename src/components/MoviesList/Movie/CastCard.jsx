

export const CastCard = (data) => {
  const {name, character, profile_path} = data;

  // https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg
  return (
    <div>
      <h2>{ name }</h2>
      <h3>{ character }</h3>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name + "/" + character} />
    </div>
  )

} 