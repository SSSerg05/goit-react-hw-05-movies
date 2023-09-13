
export const ReviewCard = ({ data }) => {
  const {author, content, url} = data;

  if(!data) {
    return null;
  }

   return (
    <div>
      <h2>{author}</h2>
      <p>{ content }</p>
      <a href={ url }  target="_blank" rel="noreferrer nofollow noopener">{ url }</a>         
    </div>
  )
}