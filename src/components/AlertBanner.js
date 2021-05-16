import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    width: 100%;

`


const AlertBanner = () => {
    return (
        <Container>
            <Info>Website revamping in progress, some pages may not be available.</Info>
            <button onClick={() => }>close</button>
        </Container>
    )
}

export default AlertBanner
