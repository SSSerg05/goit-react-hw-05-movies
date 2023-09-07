import { Link } from 'react-router-dom';

export const MoviesList = ({ dataList }) => {

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