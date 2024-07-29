import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg') center ;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    /* align-items: center; */
    justify-content: flex-start;
    /* color: white; */
`
const Wrapper = styled.div`
    padding: 20px;
    padding-top: 0;
    width: 35%;
    background-color: rgba(0,0,0,0.2);
    ${mobile({height: '100%', width: '60%', backgroundColor: 'rgba(255,255,255,0.5)'})}

`

const Title= styled.h1`
    font-size: 22px;
    font-weight: 500;
    opacity: 1;
    margin-top: 10px;
    ${mobile({fontSize: '18px', marginBottom: '7px'})}
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    opacity: 1;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 32px 20px 0 0;
    padding: 10px;
    background-color: rgba(0,0,0,0.9);
    color: white;
    border: none;
    &:focus {
        outline: none;
    }
    ${mobile({margin: '15px 0', width: '100%'})}
    /* opacity: 0.7; */
`

const Agreement = styled.span`
    font-size: 11px;
    font-weight: 500;
    color: white;
    letter-spacing: 2px;
    margin: 20px 0;
    ${mobile({fontSize: '12px', color: 'black', fontWeight: 600})}
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: rebeccapurple;
    color: white;
    letter-spacing: 1.5px;
    cursor: pointer;
    ${mobile({width: '60%', padding: '15px 10px'})}
`

const Logo = styled.h1`
    font-family: 'Alex Brush',sans-serif;
    color: white;
    padding-top: 10px;
    font-weight: 500;
    ${mobile({color: 'black'})}
`

const Register = () => {
    const navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault()
        if(passRef.current.value !== passAgainRef.current.value) {
            passAgainRef.current.setCustomValidity("Passwords don't match!")
        } else {
            const formData = new FormData(e.currentTarget)
            const {confirmPassword, ...user} = Object.fromEntries(formData)
            try {
                const res = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}auth/register`, user)
                navigate("/login")
            } catch(err) {
                window.alert('Something went wrong...This username may be taken')
                console.log(err)
            }
        }
        
    }
    const passRef = useRef()
    const passAgainRef = useRef()
    return (
        <Container>
            <Wrapper>
                <Logo>Stylix.</Logo>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleRegister}>
                    <Input name="firstName" required placeholder='first name'/>
                    <Input name="lastName" required placeholder='last name'/>
                    <Input name="username" required placeholder='username'/>
                    <Input name="email" required placeholder='email'/>
                    <Input name="password" type="password" required placeholder='password' ref={passRef}/>
                    <Input name="confirmPassword" type="password" required placeholder='confirm password' ref={passAgainRef}/>
                    <Agreement>By creating am account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button type="submit">CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
