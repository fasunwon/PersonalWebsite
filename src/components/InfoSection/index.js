import React from 'react'
import { Button } from '../ButtonElements';
import { ImgWrap, InfoContainer, InfoWrapper, InfoRow,
Column1, Column2, Heading, Subtitle,
 BtnWrap, TopLine, TextWrapper, Image} from './infoElements' ;
const InfoSection = ({LightBg, id, imgStart, topLine,darkText,LightText,
headLine, description, description2, buttonLabel,alt, primary, dark, dark2,img}) => {
    return (
        <>
        <InfoContainer LightBg ={LightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart ={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading LightText={LightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <Subtitle style={{color: "black", fontWeight:"bold"}}>{description2}</Subtitle>
                            <BtnWrap>
                                <Button to ='home' 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark ={dark ? 1: 0}
                                dark2= {dark2 ? 1: 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Image src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default InfoSection
