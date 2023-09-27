import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  text-align: left;
`;

export const Author = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: left;
`;

export const List = styled.ul`

  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

export const Item = styled.li`

    :nth-child(even) {
      background: rgba(0,0,0,.2);
    }
`;