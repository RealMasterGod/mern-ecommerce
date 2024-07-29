import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import { login } from '../../features/apiCalls'
import {useDispatch, useSelector} from 'react-redux'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('https://images.pexels.com/photos/7533323/pexels-photo-7533323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`
const Wrapper = styled.div`
    padding: 20px;
    padding-top: 0;
    width: 35%;
    background-color: rgba(255,255,255,0.2);
    ${mobile({width: '75%'})}
`

const Title= styled.h1`
    font-size: 24px;
    font-weight: 500;
    opacity: 1;
    margin: 10px 0;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    opacity: 1;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    background-color: rgba(0,0,0,0.9);
    color: white;
    border: none;
    &:focus {
        outline: none;
    }
    /* opacity: 0.7; */
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: rebeccapurple;
    color: white;
    letter-spacing: 1.5px;
    cursor: pointer;
    margin: 10px 0;
    &:disabled {
        color: rebeccapurple;
        cursor: not-allowed;
    }
`

const Logo = styled.h1`
    font-family: 'Alex Brush',sans-serif;
    color: white;
    padding-top: 10px;
    font-weight: 500;
`

const Link = styled.a`
    margin: 10px 0;
    font-size: 10px;
    text-decoration: underline;
    cursor: pointer;
    letter-spacing: 1px;
`

const Error = styled.span`
    color: #ff9595;
    font-size: 10px;
    letter-spacing: 1px;
`

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const {isFetching,error} = useSelector(store => store.user)
    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch,{username,password})
    }
    return (
        <Container>
            <Wrapper>
                <Logo>Stylix.</Logo>
                <Title>SIGN IN</Title>
                <Form>
                    <Input ype='text' placeholder='username' onChange={e => setUsername(e.target.value)}/>
                    <Input type='password' placeholder='password'onChange={e => setPassword(e.target.value)}/>
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Link style={{fontSize: '8px',marginTop: '5px'}}>HAVING TROUBLE REMEMBERING YOUR PASSWORD?</Link>
                    <Link style={{color: 'pink'}}>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
