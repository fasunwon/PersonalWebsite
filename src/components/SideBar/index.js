import React from 'react'
import {
    SideBarContainer, Icon, 
    CloseIcon, SideBarWrapper, 
    SideBarMenu, SideBarLink,
    SideBarRoute, SideBtnWrap } from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                    <SideBarLink to="projects" onClick={toggle}>Projects</SideBarLink>
                    <SideBarLink to="interests" onClick={toggle}>Interests</SideBarLink>
                    <SideBarLink to="belief" onClick={toggle}>Belief</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/contact">
                        Contact Me
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
