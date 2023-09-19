import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 12px;

  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  text-align: left;
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const Character = styled.h3`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;