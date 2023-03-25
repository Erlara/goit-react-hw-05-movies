import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  color: #2c0231;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  &:nth-last-child(2) {
    margin-right: 30px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 5px 10px;
  width: 60px;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: #2c0231;
  background-color: #f1c32b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
  &.active {
    background-color: orange;
  }
`;
