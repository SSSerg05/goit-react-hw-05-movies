import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
    // }}
    >
      <nav>
        <NavLink>Home</NavLink>
        <NavLink>SearchMovies</NavLink>
        <NavLink>MovieDetails</NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        
          React homework template  
      </Routes>

      
    </div>
  );
};
