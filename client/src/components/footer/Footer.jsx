import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    font-weight: 500;
    font-family: 'Alex Brush',sans-serif;
    font-size: 40px;
    font-weight: 600;
`

const Desc = styled.p`
    margin: 20px 0;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: 'none'})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: '#fff9f2'})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`




const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Stylix.</Logo>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, exercitationem sit. Ipsam quibusdam nihil dolorum ipsa inventore cupiditate nostrum eum repellat mollitia, repellendus hic animi et voluptatibus nam a ad!
            </Desc>
            <SocialContainer>
                <SocialIcon color='3b5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='e4405f'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55acee'>
                    <Twitter />
                </SocialIcon>
                <SocialIcon color='e60023'>
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: '10px'}}/>93, Diagon Alley, London, England, Great Britain</ContactItem>
                <ContactItem><Phone style={{marginRight: '10px'}} />+1 233 XX XX</ContactItem>
                <ContactItem><MailOutline style={{marginRight: '10px'}} />stylixfashion@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
