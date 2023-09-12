
export const ReviewCard = ({ data }) => {
  const {author, content, url} = data;

  if(!data) {
    return null;
  }

  // "author": "Chris Sawin",
  // "author_details": {
  // "name": "Chris Sawin",
  // "username": "ChrisSawin",
  // "avatar_path": null,
  // "rating": 7
  // },
  // "content": "_Barbie_ reels you in with its silly humor and fantastical ideas. The war of Kens during the last half hour of the film is an all-timer because a battle full of handsome maneuvers, like showing off their naked chest and manly noogies, turns into a full on dance off between Ryan Gosling and Simu Liu.\r\n\r\nBut the second half of the film leaves a thought-provoking message in your brain regarding both men and women. The Kens gaining respect little by little mirrors how women eventually earned their rights to be respected individuals — after being considered as only being useful in the kitchen or for making babies — except with the gender roles reversed and nude blobs instead of genitalia.\r\n\r\n**Full review:** https://bit.ly/beachoff",
  // "created_at": "2023-07-21T22:04:12.071Z",
  // "id": "64bb00dc357c00021de27485",
  // "updated_at": "2023-07-21T22:04:12.156Z",
  // "url": "https://www.themoviedb.org/review/64bb00dc357c00021de27485"

  return (
    <div>
      <h2>{author}</h2>
      <p>{ content }</p>
      <p>{ url }</p>         
    </div>
  )
}