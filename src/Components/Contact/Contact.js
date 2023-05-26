import React, {Component} from 'react'
import './Contact.css'
import { ContactDiv } from './styledC';
import email from './images/email.png'
import linked from './images/linked.png'


class Contact extends Component{

    render(){
        return (
        <ContactDiv className='App'>
            <article className='margin'>
                <h1 id='Contact' className="text-[#ff8b8b]" >Contact</h1>
                <div>
                    <p>You can find links to my profile and E-Mail below:</p>
                    <div className='py-25 px-10'>
                        <p>
                            <a   
                                href='https://www.linkedin.com/in/cara-fuentes-2033a41b2/' 
                                target='_blank' 
                                rel='noreferrer'>
                                <span title='Cara Fuentes on LinkedIn' className="justify-center">
                                    <img    
                                        className='regSize' 
                                        alt='LinkedIn' 
                                        src={linked}/>
                                </span>
                            </a>
                        </p>
                        
                        <p>
                            <a
                                href='mailto:Cara@CFuen.com' 
                                target='_blank' 
                                rel='noreferrer'>
                                <span title='Cara@CFuen.com'>
                                    <img 
                                        className='regSize' 
                                        alt='Cara@CFuen.com' 
                                        src={email}/>
                                </span>
                            </a>
                        </p>
                    </div>
                </div>
            </article>
        </ContactDiv>
        );
    }
} 


export default Contact