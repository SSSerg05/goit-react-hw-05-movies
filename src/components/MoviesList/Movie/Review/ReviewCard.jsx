
export const ReviewCard = ({ data }) => {
  const {author, content, url} = data;

  if(!data) {
    return null;
  }

   return (
    <div>
      <h2>{author}</h2>
      <p>{ content }</p>
      <p>{ url }</p>         
    </div>
  )
}