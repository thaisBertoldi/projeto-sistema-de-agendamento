import styled from "styled-components";
import { Link } from 'react-router-dom'

export const DivHome = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

export const DivInstructions = styled.div`
  width: 300px;
  line-height: 1.5;
  background: #bfbfc0;
  border-right: 1px solid #d3e2e8;
  font-family: 'Montserrat', sans-serif;
`;

export const DivSectionInstruction = styled.div`
  padding: 2em;
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const H2Instruction = styled.h2`
  margin: 0;
  font-size: 16px;
`;

export const UlInstruction = styled.ul`
  margin: 0;
  padding: 0 0 0 1.5em;
`;

export const LiInstruction = styled.li`
  margin: 1.5em 0;
  padding: 0;
  list-style: none;
`;

export const LinkHome = styled(Link)`
    text-decoration: none;
    color: white;
    border: 1px solid black;
    background-color: blue;
`;