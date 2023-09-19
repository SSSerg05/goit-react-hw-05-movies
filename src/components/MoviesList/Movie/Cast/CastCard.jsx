import { Name, Character } from "./Cast.styled.js";


export const CastCard = ({ dataCast }) => {
  const {name, character, profile_path} = dataCast;
  if(!dataCast) {
    return;
  }

  // https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={`${name}/${character}`} />
      <Name>{ name }</Name>
      <Character>{ character }</Character>
    </div>
  )

} 