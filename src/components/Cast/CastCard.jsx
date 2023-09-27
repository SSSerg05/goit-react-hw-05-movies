import { Name, Character, Card, Img } from "./Cast.styled.js";
import NoPhoto from "../../images/no-picture.jpg"

export const CastCard = ({ dataCast }) => {
  const {name, character, profile_path} = dataCast;

  const srcImage = profile_path ?
    `https://image.tmdb.org/t/p/w200${profile_path}` : NoPhoto;
  
  // https://image.tmdb.org/t/p/w200/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg
  return (
    <Card>
      <Img
        src={srcImage}
        alt={`${name}/${character}`}
        loading="lazy"
      />
      <Name>{ name }</Name>
      <Character>{ character }</Character>
    </Card>
  )

} 