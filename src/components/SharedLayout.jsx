import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

import { Container, Header, Link, List } from "./SharedLayout.styled.js";


export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <List>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/movies'>SearchMovies</Link></li>
          </List>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...<Loader /></div> }>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  )
}