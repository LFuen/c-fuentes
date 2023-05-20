import {fadeInDown} from 'react-animations'
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`${fadeInDown}`

const WelcomeDiv = styled.div`
    animation: 2s ${fadeIn};
`
const Images = styled.div`
    float: center;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;

.badge {
    object-fit: scale-down;
    width: fit-content
}

.badge:hover {
    animation-duration: .3s, 1.5s;
    animation-delay: 0s, .3s;
    animation-timing-function: ease-out, ease-in-out;
    animation-iteration-count: 1, infinite;
    animation-fill-mode: forwards;
    animation-direction: normal, alternate;
}

@media screen and (max-width: 1020px) {
    float: none;
    text-align: center;
}
`

export {
    WelcomeDiv,
    Images
}