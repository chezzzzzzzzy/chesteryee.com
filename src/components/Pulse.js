import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const duration = '2.75s'

const Wrapper = styled.div`
    position: relative;
    width: 20px;
    height: 20px;

`

const sharedStyles = css` p
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

const pulse = (scale) => keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(${scale});
        opacity: 1;
    }
    80%{
        transform: scale(1);
        opacity: 1;
    }

`


const iconBeat = keyframes`
    0% {
        transform: scale(1);
    }
    10%{
        transform: scale(1.15);
    }
    30%{
        transform: scale(1);
    }
`

const Icon = styled.div`
    ${sharedStyles};
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f2f2f2;
    background: #d9d9d9;
    border: 5px solid #e6e6e6;
    animation: ${iconBeat} ${duration} infinite;

`


const Pulsate = styled.div`
    ${sharedStyles};
    z-index: 1;
    background: #f2f2f2;
    animation:
        ${p => pulse(p.scale)}
        ${duration}
        infinite;
`

const Pulse = () => {
    return (
        <Wrapper>
            <Pulsate scale={4} />
            <Pulsate scale={3} />
            <Pulsate scale={2} />
        </Wrapper>
    )
}

export default Pulse
