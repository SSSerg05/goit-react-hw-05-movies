// import { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import PropTypes from 'prop-types';
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { ImSearch } from 'react-icons/im';

export const Searchbar = () => { 
// export const Searchbar = ({ onSubmit }) => { 

  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';
  console.log(query);



  // const handleChangeSearchQuery = event => {
  //   setSearchQuery( event.currentTarget.value.toLowerCase() )
  // }


  // const handleSubmit = event => { 
  //   event.preventDefault();

  //   if (searchQuery.trim() === '') {
  //     return toast.error('No search query');
      
  //   }

  //   onSubmit(searchQuery);
  //   setSearchQuery("");
  // }


  return (
    <div className="Searchbar">
      <form className="SearchForm" >
        {/* onSubmit={ handleSubmit }> */}
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
        <button className="SearchForm-button" type="submit">
          <ImSearch />
        </button>
        <ToastContainer
          autoClose={2500}
          theme="colored"/>
      </form>
    </div>
  )
  
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   searchQuery : PropTypes.string,
// };