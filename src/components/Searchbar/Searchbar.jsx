import { useSearchParams } from "react-router-dom";
// import PropTypes from 'prop-types';


// import { getMoviesFromQuery } from "../../services/Api";




export const Searchbar = () => { 
// export const Searchbar = ({ onSubmit }) => { 

  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

    return (
    <>
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
    </>
  )
  
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   searchQuery : PropTypes.string,
// };