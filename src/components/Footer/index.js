import React from 'react'
import {FooterContainer, FooterLink, FooterWrap,
FooterLinkItems,FooterLinksContainer, FooterLinksWrapper,
FooterLinkTitle, SocialIconLink, SocialIcons, SocialLogo,
SocialMedia,SocialMediaWrap, WebsiteRights} from './footerElements';
import {ImageBg} from '../navbar/NavbarElements';
import Img from '../../img/HomeLogo.png';
import {FaFacebook,FaGithub,FaLinkedin} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
const Footer = () => {
    const toggleHome = ()=>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Page</FooterLinkTitle>
                                <FooterLink to="/contact">Contact Me</FooterLink>
                                <FooterLink to="/aboutPage">How it Works</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ='/' onClick={toggleHome}>
                            <ImageBg src={Img} type='image/png'/>
                        </SocialLogo>
                        <WebsiteRights> Fasunwon © {new Date().getFullYear({})} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://github.com/fasunwon" target="_blank" aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/favor-fasunwon-2538a0195/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.facebook.com/favor.fasunwon.5/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
