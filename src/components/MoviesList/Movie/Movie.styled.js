import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Card = styled.div`
  display: flex;
  gap: 24px;
`;


export const Link = styled(NavLink)`
  display: block;
  margin-bottom: 12px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.focus, &.active {
    color: orangered;
  }
`;