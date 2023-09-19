import { useSearchParams } from "react-router-dom";
// import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getMoviesFromQuery } from "../../services/Api";


import { ImSearch } from 'react-icons/im';

//export const Searchbar = () => { 
export const Searchbar = ({ onSubmit }) => { 

  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';
  console.log(query);

  const handleSubmit = event => { 
    event.preventDefault();

    onSubmit(searchQuery);
    setSearchQuery({ query: "" });
  }

  const onSearch = async () => { 
    const query = searchQuery.get('query') ?? '';
    const controller = new AbortController();
    
    try {
        const data = await getMoviesFromQuery(query, controller);
        if (data.hits.length === 0) {
          throw new Error("Gallery empty");
        }

        console.log('data', data);

    } catch (error) {
        console.log(error.message);
        // setError(error.message);
        // onError(error.message);
    }
    finally {
      // setIsLoading(false);
    }

    setSearchQuery({ query: '' });
  }

  return (
    <div className="Searchbar">
      <input
        className="SearchForm-input"
        type="text"
        name="searchQuery"
        value={ query }
        onChange={ event => { 
          searchQuery.set('query', event.target.value.toLowerCase());
          setSearchQuery(searchQuery);
        }}
        placeholder="Search title movie: HW-5 Hook"
      />
      <button onClick={onSearch}>
        <ImSearch />
      </button>
      <ToastContainer
        autoClose={2500}
        theme="colored"/>
    </div>
  )
  
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   searchQuery : PropTypes.string,
// };