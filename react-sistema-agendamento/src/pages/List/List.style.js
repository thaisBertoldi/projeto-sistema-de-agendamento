import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-top: 40px;
    gap: 50px;
`;

export const DivNameUser = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding-bottom: 15px;
`;

export const InputSearch = styled.input`
  width: 850px;
  height: 40px;
  border-radius: 6px;
`;

export const DivData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    justify-content: center;
`;

export const DivTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const DivTime = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const DivName = styled.div`
    font-size: 30px;
`;

export const DivEmail = styled.div`

`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
`;

export const DivFinish = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const DivCard = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  padding: 15px;
`;

export const AllCards = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 15px;
  margin: 0 30px 30px 0;
`;

export const DivSearch = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;