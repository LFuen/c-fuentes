import React, {Component} from 'react'
import smile from './images/Cara.jpg'
import figma from './icons/figma.png'


import './Welcome.css'
import { WelcomeDiv, Images } from './styledW'


class Welcome extends Component{
    render(){
        return (
        <WelcomeDiv>
            <header id='Top' className='margin'>
                <h1 className='flexRow' >Cara Fuentes</h1>
            </header>      
            <div className='margin'> 
                <span title='Welcome!'><img className='badge centerImage' alt='Welcome' src={smile}/></span> 
            </div>
            <div>
                <h2 className='flexRow' id='Welcome'>Welcome</h2>
                <div className='flexColumn'>
                    <p>My name is Lili and I want to thank you for visiting my page. Let me take a minute here to share what it is that I do.</p>
                    <p>My official title is Software Engineer, but I'm versed in:</p>
                </div>
                <div className='borderOne' id='versed'>
                    <p><b>Front-end Development</b></p>
                    <p><b>UI Development / Design</b></p>
                </div>
                <Images>
                    <img className='badge' src={figma} alt='Figma' />
                </Images>
            </div>
        </WelcomeDiv>
        );
    }
}

export default Welcome