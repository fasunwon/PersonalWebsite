import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    min-height:692px;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    top:0;
    z-index:0;
    overflow: hidden;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
`;

export const FormWrap = styled.div`
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    @media screen and (max-width:400px){
        height:80%;
    }
`;

export const Icon = styled(Link)`
    margin-left:32px;
    margin-top:32px;
    text-decoration:none;
    color:white;
    @media screen and (max-width: 400px){
        margin-left:16px;
        margin-top:8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    dsiplay:flex;
    flex-direction:column;
    justify-content:center;
    @media screen and (max-width:400px){
        padding:10px;
    }
`;

export const Form = styled.form`
    background:black;
    max-width:400px;
    height: auto;
    width:100%;
    z-index:1;
    dsiplay:grid;
    margin:0 auto;
    padding: 80px 32px;
    border-radius:4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    @media screen and (max-width:400px){
        padding:32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color:white;
    font-size:25px;
    font-weight:400;
    text-align:center;
`;

export const FormLabel = styled.label`
    margin-top:30px;
    font-size: 18px;
    text-align:center;
    color:#996600;
    font-weight:bold;
    @media screen and (max-width:400px){
        font-size:13px;
    }
    
`;
export const Picture = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right:0;
`