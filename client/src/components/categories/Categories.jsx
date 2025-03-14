import React from 'react'
import styled from 'styled-components'
import { categories } from '../../data'
import CategoryItem from '../categoryItem'
import { mobile } from '../../responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({flexDirection: 'column', padding: '0'})}
`

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </Container>
    )
}

export default Categories
