import React from 'react'
import styled from 'styled-components'

const Trips = () => {
    return (
        <ProductContainer>
            <ProductHeading>Heading</ProductHeading>
            <ProductWrapper>Wrapper</ProductWrapper>
        </ProductContainer>
    )
}

export default Trips

const ProductContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #fff;
    color: #fff;
`
const ProductHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`
const ProductWrapper = styled.div``
