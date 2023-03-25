import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #2c0231;
`;
export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #f1c32b;
`;

export const MovieDescr = styled.p`
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 10px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;
