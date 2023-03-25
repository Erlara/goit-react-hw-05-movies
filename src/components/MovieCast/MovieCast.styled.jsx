import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 6 - 20px);
  display: flex;
  flex-direction: column;
  background-color: #f1c32b;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  color: #2c0231;
`;
