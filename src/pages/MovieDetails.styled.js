import styled from "styled-components";
import { Link } from "react-router-dom";

export const GoBack = styled(Link)`
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
