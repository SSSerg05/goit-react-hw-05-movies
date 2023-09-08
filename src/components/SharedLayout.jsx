import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link, List } from "./SharedLayout.styled.js";


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

      <Outlet />
    </Container>
  )
}