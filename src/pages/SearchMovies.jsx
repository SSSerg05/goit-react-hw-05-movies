import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// import { ImSearch } from 'react-icons/im';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from "components/Loader/Loader";

import { getMoviesFromQuery } from "../services/Api";
import { MoviesList } from "components/MoviesList/MoviesList"
import { Searchbar } from "components/Searchbar/Searchbar";


export const SearchMovies = () => { 

  const [dataQueryMovies, setDataQueryMovies] = useState([]);
  // const [strQuery, setStrQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputQuery, setInputQuery] = useSearchParams();

  // const location = useLocation()
 //==========================
  useEffect(() => {
    const query = inputQuery.get('query') ?? '';
    if (!query) {
      setInputQuery("");
    }

    const controller = new AbortController();
    setLoading(true);
    setError(false);
    
    async function fetchData() {
      try {
        
        const data = await getMoviesFromQuery(query, controller);
        if (data.results.length === 0) {
          throw new Error("Movies not found");
        }
      
        setDataQueryMovies(data);
        setLoading(true);

      } catch (error) {
        // console.log(error);
        if (error.message !== 'canceled') {
          setError(error);
        }
      }
      finally { 
        setLoading(false);
      }
    
    }
    fetchData();

    return () => {controller.abort()};
  }, [inputQuery]);


  const { results: data } = dataQueryMovies;
  return (
    <div>
      <h1>Search movie</h1>
      <Searchbar /> 

      { loading && <Loader />}
      {error && !loading && (<div>Wrong query. No data. { error.message }</div>) }
      
      { !error && 
        <MoviesList dataList={data} />
      }
    </div>
  )
}

export default SearchMovies;