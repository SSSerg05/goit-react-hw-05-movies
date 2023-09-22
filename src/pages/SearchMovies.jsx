import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

// import { ImSearch } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
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

  const location = useLocation()
 //==========================
  useEffect(() => {
    const query = inputQuery.get('query') ?? '';
    if (!query) {
      setInputQuery("");
    }

    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);

        const data = await getMoviesFromQuery(query, controller);
        // if (data.results.length === 0) {
        //   throw new Error("Gallery empty");
        // }
      
        setDataQueryMovies(data)
      } catch (error) {
        setError(true);
        // onError(error.message);
      }
      finally {
        setLoading(false);
      }
    
    }
    fetchData();

    return () => {controller.abort()};
  }, [inputQuery]);


  // container Toast in component Searchbar
  // const onError = (error) => {
  //   // toast.error(error);
  // }

  const { results: data } = dataQueryMovies;
  return (
    <div>
      <h1>Search movie</h1>
      <Searchbar /> 

      {loading && <Loader />}
      {/* { error && !loading && (<div>Wrong query. No data</div>) } */}

      <MoviesList dataList={data} />
      
      <ToastContainer
        autoClose={2500}
        theme="colored"/>
    </div>
  )
}