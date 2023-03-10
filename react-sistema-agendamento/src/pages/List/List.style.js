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
    border-bottom: 1px solid black;
    padding-bottom: 15px;
`;

export const InputSearch = styled.input`
  width: 850px;
  height: 40px;
  margin: 20px;
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
    border-bottom: 1px solid black;
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
  margin-top: 10px;
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