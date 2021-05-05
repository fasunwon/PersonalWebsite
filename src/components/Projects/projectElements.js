import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    @media screen and (max-width:768px){
       height: 1350px; 
    }
    @media screen and (max-width:480px){
        height: 1300px; 
     }
     @media screen and (max-width:653px){
        height: 1400px; 
     }

    height:800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
`;

export const ProjectsWrapper = styled.div`
    max-width:1000px;
     margin: 0 auto;
     display:grid;
     grid-template-columns: 1fr 1fr 1fr 1fr;
     align-items: center;
     grid-gap: 16px;
     padding:0 50px;
     @media screen and (max-width:1000px){
        grid-template-columns: 1fr 1fr;
    } 
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectsCard = styled.a`

    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

`;

export const ProjectsIcon = styled.img`
    height:160px;
    width:160px;
    margin-bottom:10px;
`;

export const ProjectsH1 = styled.h1`
    @media screen and (max-width:480px){
        font-size:2rem;
        margin-left:35px;
    }
    font-size: 2.5rem;
    color: white;
    margin-bottom:64px;
    
`;

export const ProjectsH2 = styled.h2`
    font-size:1rem;
    margin-bottom:10px;
`;

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align:center;
`