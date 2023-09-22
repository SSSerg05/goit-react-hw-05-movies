import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ dataList }) => {
  const location = useLocation();

  if(!dataList || !dataList.length) {
    return null;
  }

  return (
    <ul>
      {dataList.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{from: location}}>
              {movie.original_title}
            </Link> 
          </li>
        )
    })}
    </ul>
  )
}