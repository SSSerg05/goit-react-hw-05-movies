import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImSearch } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Input } from "./Searchbar.styled";


export const Searchbar = () => {
  
  const [searchQuery, setSearchQuery] = useSearchParams();
  const strQuery = searchQuery.get('query') ?? '';

  const [searchInput, setSearchInput] = useState(strQuery);
  
  // onChange
  const handleChangeSearchQuery = event => {
    setSearchInput(event.currentTarget.value.toLowerCase())
  }

// onSubmit
  const handleSubmit = event => { 
    event.preventDefault();

    if (searchInput.trim() === '') {
      return toast.error('No search query');
    }

    searchQuery.set('query', searchInput);
    setSearchQuery(searchQuery);
    const query = searchQuery.get('query') ?? '';
    setSearchInput(query);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <Input
        className="SearchForm-input"
        type="text"
        value={ searchInput }
        onChange={ handleChangeSearchQuery }
        placeholder="Search title movie"
      />
      <Button type="submit">
          <ImSearch />
      </Button>
      
      <ToastContainer
        autoClose={1500}
        theme="colored"/>
    </form>
  )
  
}
