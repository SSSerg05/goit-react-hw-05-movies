import { useState, useEffect } from "react";

import { toast } from 'react-toastify';
import { Loader } from "components/Loader/Loader";

import { getMoviesFromQuery } from "../services/Api";
import { MoviesList } from "components/MoviesList/MoviesList"
import { Searchbar } from "components/Searchbar/Searchbar";

export const SearchMovies = () => { 

  const [dataQueryMovies, setDataQueryMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return
    } 

    const controller = new AbortController();
    setIsLoading(true);

    async function fetchData() {
      try {
        const data = await getMoviesFromQuery(searchQuery, controller);
        if (data.hits.length === 0) {
          throw new Error("Gallery empty");
        }
        
        setDataQueryMovies(data)
        console.log('data', data);

      } catch (error) {
        console.log(error.message);
        // setError(error.message);
        onError(error.message);
      }
      finally {
        setIsLoading(false);
      }
      return;
    }

    fetchData();
    return () => {controller.abort()};
  }, [searchQuery])



  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
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
      <Searchbar onSubmit={ handleFormSubmit } />

      {isLoading && <Loader />}

      <MoviesList dataList={ data } />
    </div>
  )
}