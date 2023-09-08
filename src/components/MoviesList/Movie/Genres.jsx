
export const Genres = ({ genres }) => { 
  console.log(genres);

  return (
    <div>
      <h2>Genres</h2>
      <ul>
        {
          genres.map(item => {
            return (
              <li key={item.id}>
                {item.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}