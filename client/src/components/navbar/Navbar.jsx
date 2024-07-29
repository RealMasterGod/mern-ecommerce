import { Search, ShoppingBagOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 60px;
    ${mobile({height: '50px'})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: '10px 0'})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({justifyContent: 'flex-start'})}
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: 'none'})}
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: '5%'})}
`

const Input = styled.input`
    border: none;
    &:focus {
        outline: none;
    }
    ${mobile({width: '100%'})}
`

const Center= styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: 500;
    font-family: 'Alex Brush',sans-serif;
    font-size: 35px;
    ${mobile({fontSize: '24px', paddingLeft: '20%'})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 1, justifyContent: 'flex-end', marginRight: '3%'})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: '12px',marginLeft: '5%'})}
`

const Image = styled.img`
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 50%;
`
    

const Navbar = () => {
    const quantity = useSelector(store => store.cart.quantity)
    const user = useSelector(store => store.user.currentUser)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{color: 'gray',fontSize: '16px'}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo><Link to={"/"} className='link'>Stylix.</Link></Logo>
                </Center>
                <Right>
                    {!user ? (<MenuItem><Link to={"/register"} className='link'>REGISTER</Link></MenuItem>) : (<MenuItem>{user.username}</MenuItem>)}
                    {!user ? (<MenuItem><Link to={"/login"} className='link'>SIGN IN</Link></MenuItem>) : (<MenuItem style={{height: '40px', width: '40px', borderRadius: '50%', cursor: 'pointer'}}><Image src={!user.img ? "https://images.pexels.com/photos/7230975/pexels-photo-7230975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : user.img}/></MenuItem>)}
                    <Link style={{marginLeft: '5%'}} to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color='secondary'>
                                <ShoppingBagOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
