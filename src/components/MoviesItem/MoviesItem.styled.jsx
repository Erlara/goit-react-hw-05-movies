import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 4 - 20px);
  background-color: #f1c32b;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  :hover {
    box-shadow: 0px 10px 10px #072f13;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.h3`
  padding: 5px;
  color: #2c0231;
`;
