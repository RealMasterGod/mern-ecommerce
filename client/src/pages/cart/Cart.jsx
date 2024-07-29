import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar'
import Announcement from '../../components/announcement'
import Footer from '../../components/footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../../responsive'
import {useDispatch, useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../../requestMethod'
import { useNavigate } from 'react-router-dom'
import { deleteProduct, updateProductQuantity } from '../../features/cart/cartSlice'

const KEY = import.meta.env.VITE_REACT_APP_STRIPE

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: '10px'})}
    height: fit-content;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`

const TopTexts = styled.div`
    ${mobile({display: 'none'})}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}
    
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const PriceDetail = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({marginLeft: '60px'})}
`
const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;

`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize= styled.span``

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: '5px 15px'})}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: '20px', paddingRight: '27px' })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 5px 0;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50%;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const Cart = () => {
    const cart = useSelector(store => store.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onToken = (token) => {
        setStripeToken(token);
    };
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post('/checkout/payment',{
                    tokenId: stripeToken.id,
                    amount: cart.total*100
                })
                navigate('/success', {state: {stripeData: res.data, cart}})
            }  catch (err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest()
    },[stripeToken, cart.total, navigate])
    console.log(cart)
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag ({cart?.products.length})</TopText>
                        <TopText>Your Wishlist</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (<Product>
                            <ProductDetail>
                                <Image src={product.img} />
                                <Details>
                                    <ProductName><b>Product:</b> {product.title}</ProductName>
                                    <ProductId><b>Id:</b> {product._id}</ProductId>
                                    <ProductColor color={product.color} />
                                    <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add onClick={() => dispatch(updateProductQuantity({id: product._id,inc: 1}))}/>
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove onClick={() => {product.quantity === 1 ? dispatch(deleteProduct({id: product._id})) : dispatch(updateProductQuantity({id: product._id}))}}/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>))}
                        <Hr />
                        
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Stylix Store"
                            image="https://avatars.githubusercontent.com/u/128622386?v=4&size=64"
                            billingAddress
                            shippingAddress
                            description={`Your total is $ ${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                        <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
