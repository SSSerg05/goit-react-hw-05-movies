import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Card = styled.div`
  display: flex;
  gap: 24px;
`;


export const LinkSubpage = styled(NavLink)`
  display: block;
  margin-bottom: 12px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover,
  &:focus {
    color: orangered;
  }
  &:active {
    color: red;
  }
`;

export const List = styled.ul`

  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

export const ContainerImg = styled.div`
  min-width: 500px;
`