import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ImSearch } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from "components/Loader/Loader";

import { getMoviesFromQuery } from "../services/Api";
import { MoviesList } from "components/MoviesList/MoviesList"
import { Searchbar } from "components/Searchbar/Searchbar";

export const SearchMovies = () => { 

  const [dataQueryMovies, setDataQueryMovies] = useState([]);
  // const [searchQuery, setSearchQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputQuery] = useSearchParams();


  const onSearch = async () => {
    const query = inputQuery.get('query') ?? '';
    console.log(query);

    const controller = new AbortController();
    setIsLoading(true);

    try {
      const data = await getMoviesFromQuery(query, controller);
      if (data.results.length === 0) {
        throw new Error("Gallery empty");
      }
      
      setDataQueryMovies(data)

    } catch (error) {
      console.log(error.message);
      onError(error.message);
    }
    finally {
      setIsLoading(false);
    }
    
    return () => {controller.abort()}
  }

  // container Toast in component Searchbar
  const onError = (error) => {
    toast.error(error);
    console.log(error);
  }

  const { results: data } = dataQueryMovies;
  return (
    <div>
      <h1>Search movie</h1>
      <div>
        <Searchbar /> 
        <button onClick={onSearch}>
          <ImSearch />
        </button>
      </div>

      {isLoading && <Loader />}

      <MoviesList dataList={ data } />
      <ToastContainer
        autoClose={2500}
        theme="colored"/>
    </div>
  )
}