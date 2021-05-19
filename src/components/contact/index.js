import React from 'react'
import { Container, FormContent, FormWrap, Icon,
Form, FormH1, FormLabel,FormMessage, FormInput, FormButton} from './contactElements'
import Img from '../../img/HomeLogo.png';
// import Img2 from '../../img/contact.svg';
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
                    <Form action="https://www.formbackend.com/f/96215af300a6b8da" method="POST">
                    {/* <Picture src={Img2} type = 'image/svg'/> */}
                    <FormH1>Contact Me!!</FormH1>
                    <FormLabel htmlFor='for'>Name</FormLabel><br></br>
                        <FormInput type='text' name="_name"placeholder="First and Last name" required /><br></br>
                    <FormLabel htmlFor='for'>Email</FormLabel><br></br>
                        <FormInput type='email' name="_email"placeholder="Email address....." required /><br></br>
                    <FormLabel htmlFor='for'>Message</FormLabel><br></br>
                        <FormMessage type='text' name="_subject" placeholder="Message....." required /><br></br>
                    <FormButton type='submit'>Send ✈</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default Contact
