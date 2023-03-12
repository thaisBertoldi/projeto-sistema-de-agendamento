import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
    background-color: black;
    color: white;
`;

export const NavList = styled.div`
    display: flex;
    gap: 15px;
    padding: 30px;
    align-items: center;
`;

export const LinkNavBar = styled(Link)`
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
`;