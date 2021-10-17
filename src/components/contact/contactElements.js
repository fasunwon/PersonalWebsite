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
    background-color: grey;
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
    margin-top:-5px;
    text-decoration:none;
    color:white;
    font-weight:700px;
    @media screen and (max-width: 480px){
        margin-left:16px;
        margin-top:8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    dsiplay:flex;
    flex-direction:column;
    justify-content:center;
    @media screen and (max-width:480px){
        padding:10px;
    }
`;

export const Form = styled.form`
    background:black;
    max-width:400px;
    height: 515px;
    padding:20px 20px 20px;
    width:100%;
    z-index:1;
    dsiplay:grid;
    margin:0 auto;
    padding: 80px 32px;
    border-radius:10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    @media screen and (max-width:400px){
        padding:32px 32px;
    }
    @media screen and (max-width:900px){
        height:550px;
    }

`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color:white;
    font-size:40px;
    font-weight:400;
    text-align:center;
    @media screen and (min-width:900px){
        margin-top:-50px;
    }
    @media screen and (max-width:768px){
        margin-top:-15px;
    }
`;

export const FormLabel = styled.label`
    margin-bottom:8px;
    font-size: 20px;
    color:#996600;
`;
export const FormInput = styled.input`
    Padding: 16px 16px;
    margin-bottom:32px;
    border:none;
    border-radius:10px;
    width:100%;
    
`;

export const FormButton = styled.button`
    background: #996600;
    padding: 16px 0;
    border: none;
    width:100%;
    border-radius: 15px;
    color: #fff;
    font-size: 20px;
    cursor:pointer;
    &:hover{
        background:white;
        color:#996600;
        transition: all 0.3s ease-in-out;
    }
`;

export const Text = styled.span`
    text-align:center;
    margin-top: 24px;
    color:#996600;
    font-size:14px;
`;

export const FormMessage = styled.input`
    Padding: 16px 16px;
    margin-bottom:32px;
    border:none;
    border-radius:10px;
    width:100%;
`;