import { Link } from 'react-router-dom';

export const MoviesList = ({ dataList }) => {

  if(!dataList || !dataList.length) {
    return null;
  }

  return (
    <ul>
      {dataList.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>
              {movie.original_title}
            </Link> 
          </li>
        )
    })}
    </ul>
  )
}