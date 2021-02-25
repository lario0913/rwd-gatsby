import React from 'react'
import styled from 'styled-components'
import ContactBg from "../assets/images/email-1.jpg"
import {Button} from "../components/Button"

const ContactUs = () => {
    return (
        <ContactUsContainer>
            <ContactUsContent>
                <h1>Get Access to Exclusive Offers</h1>
                <p>Sign up for your newsletter below to get $100 off your first trip</p>

                <form action="#">
                    <FormWrap>
                        <label htmlFor="email">
                            <input type="email" placeholder="Enter your email" id="email" />
                        </label>
                        <Button 
                            as="button" 
                            type="submit" 
                            primary="true"
                            round="true"
                            css={`
                                height: 48px

                                @media screen and (max-width: 768px) {
                                    width: 100%;
                                    min-width: 350px;
                                }
                                
                                @media screen and (max-width: 400px) {
                                    width: 100%;
                                    min-width: 250px;
                                }
                                `
                            }
                            >
                            Sign Up
                        </Button>
                    </FormWrap>
                </form>
            </ContactUsContent>
        </ContactUsContainer>
    )
}

export default ContactUs


const ContactUsContainer = styled.div`
    background: linear-gradient(
        180deg,
        rgba(0,0,0,0.5) 0%,
        rgba(0,0,0,0.5) 35%,
        rgba(0,0,0,0.1) 100%
    ),
    url(${ContactBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem, calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`


const ContactUsContent = styled.div`
    display: flex:
    flex-direction: column;
    align-items: center;

    h1{
        text-align: center;
        margin-top: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }

    p{
        text-align: center;
        font-size: clamp(1rem, 2.5w, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }

    form{
        z-index: 10;
    }
`
const FormWrap = styled.div`

    input{
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 48px;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        input{
            margin-bottom: 1rem;
            width: 100%;
            margin-right: 0;
        }
    }
`