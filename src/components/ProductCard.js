import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const Card = styled.div`
    background-color: #f7f7f7;
    padding: 32px;
    border-radius: 16px;
`

const Cover = styled.object`
    display: flex;
    width: 100%;
    justify-content: center;
    align-self: center;
    padding: 40px 0px;
`

const Details = styled.div`

`

const Name = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: black;
`
const Brand = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: black;
    margin: 2px 0px;
`

const ProductCard = (props) => {
    return (
        <Container>
            <Card>
                <Cover data={props.cover} />
                <Details>
                    <Name>{props.name}</Name>
                    <Brand>{props.brand}</Brand>
                </Details>
            </Card>
        </Container>
    )
}

export default ProductCard
