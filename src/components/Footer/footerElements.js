import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color:#101522;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin:0 auto;
`;

export const FooterLinksContainer = styled.div`
    @media screen and (max-width: 820px){
        padding-top:32px;
    }
    display: flex;
    justify-content: center;
`;


export const FooterLinksWrapper = styled.div`
    @media screen and (max-width: 820px){
        fkex-direction: column;
    }
    display: flex;
`;

export const FooterLinkItems = styled.div`
    @media screen and (max-width:420px){
        margin:0;
        width:100%;
        padding:10px;
    }
    @media screen and (max-width:768px){
        margin:0;
        width:100%;
        padding:10px;
        align-items:center;

    }
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    margin: 16px;
    text-align:left;
    width: 160px;
    box-sizing: border-box;
    color:white;
`;


export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;


export const FooterLink = styled(Link)`
    color:white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size:14px;
    &:hover{
        color:#996600;
        transition: 0.3s ease-in-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width:100%;
`;

export const SocialMediaWrap = styled.div` 
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width:1100px;
    margin:40px auto 0 auto;
    @media screen and (max-width:820px){
        flex-direction:column;
    }
`;

export const SocialLogo = styled(Link)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 5px;
    text-decoration: none;
`;

export const WebsiteRights = styled.small`
    color:white;
    margin-bottom:16px;
`;

export const SocialIcons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:240px;
`;

export const SocialIconLink = styled.a`
    &:hover{
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        color:#996600;
    }
    color:white;
    font-size:24px;
`;
export const PageStats = styled.a`
    color:white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size:14px;
    &:hover{
        color:#996600;
        transition: 0.3s ease-in-out;
    }
`

