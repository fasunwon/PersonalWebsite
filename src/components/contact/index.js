import React from 'react'
import { Container, FormContent, FormWrap, Icon,
Form, FormH1, FormLabel, Picture } from './contactElements'
import Img from '../../img/HomeLogo.png';
import Img2 from '../../img/contact.svg';
import {ImageBg} from '../navbar/NavbarElements';
const Contact = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">
                <ImageBg src={Img} type='image/png'/>
                </Icon>
                <FormContent>
                    <Form action="#">
                    <Picture src={Img2} type = 'image/svg'/>
                    <FormH1>Ways to contact me!!</FormH1>
                    <FormLabel htmlFor='for'>Email:
                    favor_fasunwon21@hotmail.com</FormLabel>
                    <br></br>
                    <br></br>
                    <FormLabel htmlFor='for'>Phone Number:
                    (306)501-9442</FormLabel>
                    <br></br>
                    <br></br>
                    <FormLabel htmlFor='for'>Mail:
                    1445 Royal St Regina, SK S4T5A4</FormLabel>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default Contact
