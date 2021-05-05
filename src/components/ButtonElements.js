import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    &:hover{
        transition: all 0.3s ease-in-out;
        background:white; 
        color: #996600
    }
    border-radius:50px;
    background:${({primary})=> (primary ? 'black': '#996600')};
    white-space:nowrap;
    padding: 12px 38px;
    color: white;
    font-size: 20px;
    outline: none;
    border: none;
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items:center;
    transition: all 0.3s ease-in-out;
`;

