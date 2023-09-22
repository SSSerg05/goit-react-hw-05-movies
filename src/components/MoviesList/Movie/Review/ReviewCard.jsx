import { Author,  } from "./Reviews.styled";

export const ReviewCard = ({ data }) => {
  const {author, content, url} = data;

  if(!data) {
    return null;
  }

   return (
    <div>
      <Author>{author}</Author>
      <p>{ content }</p>
       <a
         href={url}
         target="_blank"
         rel="noreferrer nofollow noopener">{url}
       </a>         
    </div>
  )
}