import styled from "styled-components";

export const AllForm = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  border: 1px black dashed;
  background-color: #e5e5e5;
  padding: 50px;
  gap: 30px;
`;

export const DivForm = styled.div`
  display: flex;
	flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const LabelInput = styled.div`
  font-family: 'Montserrat', sans-serif;;
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 4px;
  border: 1px #e5e5e5 solid;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
`;
