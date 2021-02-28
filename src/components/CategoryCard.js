import React from 'react'
import styled from 'styled-components'
import icon_bookmark from '../assets/icon_bookmark.svg'
import icon_laptop from '../assets/laptop-outline.svg'
import { FeatureIcon, Description } from './Collection'

const Container = styled.div`

`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    background-color: #151515;
    border-radius: 16px;

`

const Label = styled.div`
    font-weight: 500;
    margin-top: 2px;
`

const CategoryCard = ({ icon, label }) => {
    return (
        <Container>
            <Card>
                <FeatureIcon data={icon} />
                <Label><Description>{label}</Description></Label>
            </Card>
        </Container>
    )
}
export default CategoryCard