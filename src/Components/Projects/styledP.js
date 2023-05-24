import {fadeInRight} from 'react-animations'
import styled, {keyframes} from 'styled-components'

const fromRight = keyframes`${fadeInRight}`

const ProjectDiv = styled.div`
    animation: 1s ${fromRight};
    font-size: 16px;
`

export {
    ProjectDiv
}