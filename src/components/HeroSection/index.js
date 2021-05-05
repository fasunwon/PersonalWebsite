import React, {useState} from 'react';
import Typed from 'react-typed';
import Video from '../../video/video.mp4';
import {HeroContainer, HeroBg, VideoBg,
HeroContent, HeroH1, HeroP,
HeroBtnWrapper, ArrowForward,
ArrowRight} from './HeroElements';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover]= useState(false);

    const onHover = () =>{
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Welcome to Favor Fasunwon's Website!!
                </HeroH1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development","ReactJS!!!", "UI/UX Design"]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />
                <HeroP>
                “If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, 
                but whatever you do you have to keep moving forward.” - Martin Luther King Jr.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to ="about" onMouseEnter={onHover} onMouseLeave={onHover}
                    smooth={true}
                    duration={400} spy={true} exact='true'
                    offset={-80}>
                        More Info  {hover ? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
