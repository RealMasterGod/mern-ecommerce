import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar'
import Announcement from '../../components/announcement'
import Products from '../../components/products'
import Newsletter from '../../components/newsletter'
import Footer from '../../components/footer'
import { mobile } from '../../responsive'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
    
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.h1`
    margin: 20px;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({width: '0 20px', display: 'flex', flexDirection: 'column'})}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: '0px'})}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: '10px 0'})}
`

const Option = styled.option`

`

const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split('/')[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")
    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name]: value 
        })
    }
    return (
        <div>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled >Color</Option>
                        <Option value='black' >Black</Option>
                        <Option value='white'>White</Option>
                        <Option value='red'>Red</Option>
                        <Option value='blue'>Blue</Option>
                        <Option value='yellow'>Yellow</Option>
                        <Option value='green'>Green</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option >XS</Option>
                        <Option >S</Option>
                        <Option >M</Option>
                        <Option >L</Option>
                        <Option >XL</Option>
                        <Option >XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={e => setSort(e.target.value)}>
                        <Option value="newsest" >Newest</Option>
                        <Option value="asc">Price (ASC)</Option>
                        <Option value="desc">Price (DESC)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList
