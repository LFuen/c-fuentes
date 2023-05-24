import React, {Component} from 'react'
import './Projects.css'
import whatsapp from './images/whatsapp.png'
import { ProjectDiv } from './styledP';


class Projects extends Component{
    render(){
        return (
        <ProjectDiv className='projects'>
            <h1 className='flexRow margin' id='Projects'>Projects</h1>
            <section className='flexColumn'>

                <h2>WhatsApp Pay</h2>
                    <div className='borderOne flexRow proj'>
                    <a href='https://s3.amazonaws.com/cfuen.com/WhatsApp+Project+Fuentes.docx' target='_blank' rel='noreferrer'><img src={whatsapp} alt='WhatsApp' className='whatsapp'/></a>
                </div>
                <br/>
                <p>You can click 
                <a href='https://s3.amazonaws.com/cfuen.com/WhatsApp+Project+Fuentes.docx'> here </a> 
                    for a downloaded copy of this project, or click the image above.
                </p>
                <p className='describe'>PROJECT SUMMARY</p>
                <p className='skills'><u><b>Skills:</b><br/></u> React / JavaScript / CSS / Node / PostgreSQL</p>
                <br/>
                <br/>
                <br/>
                {/* <h2>La Carte</h2>
                <div className='borderOne flexRow proj'>
                    <a href='https://la-carte.lfuen.vercel.app/' target='_blank' rel='noreferrer'><img src={chef} alt='LaCarte'/></a>
                </div>
                <br/>
                <a href='https://github.com/LFuen/laCarte' target='_blank' rel='noreferrer'>Project Repo</a>
                <p className='describe'>PROJECT SUMMARY</p>
                <p className='skills'><u><b>Skills:</b><br/></u> React / JavaScript / CSS / Node / PostgreSQL</p>
                <br/> */}
                <br/>
                <br/>
                {/* <h2>The Ridiculously Random Quiz</h2>
                <div className='borderOne flexRow proj'>
                    <a href='https://lfuen.github.io/QuizApp/' target='_blank' rel='noreferrer'><img src={random} alt='QuizApp'/></a>
                </div>
                <br/>
                <a href='https://github.com/LFuen/QuizApp'>Project Repo</a>                
                <p className='describe'>Fun and random quiz to show use with jQuery and Javascript.</p>
                <p className='skills'><u><b>Skills:</b><br/></u> jQuery / JavaScript / HTML / CSS</p> */}

            </section>
        </ProjectDiv>
        );
    }
}


export default Projects