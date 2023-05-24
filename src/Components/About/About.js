import React, {Component} from 'react'
import './About.css'
import { AboutDiv } from './styledA';

class About extends Component{
    render(){
        return (
        <AboutDiv className='about'>
            <section className='bg-color'>
            <h1 id='About'>About</h1>
            
            <div className='flexColumn'>
            <p className='item'>ABOUT ME SECTION WHERE A PARAGRAPH GOES</p>
            <p>I have training in the following areas:</p>
            </div>
            
            <div className='borderOne' id='services'> 
                <p><b>SQL</b></p>
                <p><b>Excel</b></p>
                <p><b>Tableau</b></p>
                <p><b>Figma</b></p>
                <p><b>Python (for Data Analysis)</b></p>
            </div>
            </section>
        </AboutDiv>
        );
    }
}


export default About