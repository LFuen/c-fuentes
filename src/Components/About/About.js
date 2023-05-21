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
            <p>Under here is where I've listed what I do</p>
            </div>
            
            <div className='borderOne' id='services'> 
                <p><b>Front End UI Design</b></p>
                <p><b>Application Development and Testing</b></p>
                <p><b>Systems Integration</b></p>
                <p><b>SEO</b></p>
            </div>
            </section>
        </AboutDiv>
        );
    }
}


export default About