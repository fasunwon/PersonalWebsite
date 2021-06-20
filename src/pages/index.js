import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/navbar';
import SideBar from '../components/SideBar';
import {homeObjOne, homeObjThree, homeObjFour} from '../components/InfoSection/Data';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
const Home = () => {
    const [isOpen, setIsOpen]= useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }


    return (
        <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <Projects/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
        <Footer/>
        </>
    )
}

export default Home
