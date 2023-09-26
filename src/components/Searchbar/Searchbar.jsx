import { useSearchParams } from "react-router-dom";


export const Searchbar = () => { 

  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

    return (
    <>
      <input
        className="SearchForm-input"
        type="text"
        value={query}
        onChange={ event => { 
          searchQuery.set('query', event.target.value.toLowerCase());
          setSearchQuery(searchQuery);
        }}
        placeholder="Search title movie: HW-5 Hook"
      />
    </>
  )
  
}
