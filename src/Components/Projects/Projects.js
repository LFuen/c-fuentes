import React, {Component} from 'react'
import './Projects.css'
import whatsapp from './images/whatsapp.png'
import grill from './images/grill.png'
import canteen from './images/canteen.png'
import { ProjectDiv } from './styledP';


class Projects extends Component{
    render(){
        return (
        <ProjectDiv className='projects'>
            <h1 className='flexRow margin' id='Projects'>Projects</h1>
            <section className='flexColumn projectSect'>

                <h2>Capstone Project</h2>
                <div className='borderOne flexRow proj'>
                    <a href='https://s3.amazonaws.com/cfuen.com/Fuentes+BA+Capstone.docx' target='_blank' rel='noreferrer'><img src={grill} alt='Grill House'/></a>
                </div>

                <p> You can click 
                <a href='https://s3.amazonaws.com/cfuen.com/Fuentes+BA+Capstone.docx' target='_blank' rel='noreferrer'> here </a>
                    for a downloaded copy of this project, or click the image above.
                </p>
                
                <p className='describe'>PROJECT SUMMARY</p>
                <p className='skills'><u><b>Skills:</b><br/></u> React / JavaScript / CSS / Node / PostgreSQL</p>


                <h2>WhatsApp Pay</h2>
                    <div className='borderOne flexRow proj'>
                    <a href='https://s3.amazonaws.com/cfuen.com/WhatsApp+Project+Fuentes.docx' target='_blank' rel='noreferrer'><img src={whatsapp} alt='WhatsApp'/></a>
                </div>

                <p>You can click 
                <a href='https://s3.amazonaws.com/cfuen.com/WhatsApp+Project+Fuentes.docx'> here </a> 
                    for a downloaded copy of this project, or click the image above.
                </p>
                <p className='describe'>PROJECT SUMMARY</p>
                <p className='skills'><u><b>Skills:</b><br/></u> React / JavaScript / CSS / Node / PostgreSQL</p>


                <h2>Cantene Ordering</h2>
                <div className='borderOne flexRow proj'>
                    <a href='https://s3.amazonaws.com/cfuen.com/Canteen+Ordering+System+Fuentes.docx' target='_blank' rel='noreferrer'><img src={canteen} alt='Canteen Ordering'/></a>
                </div>

                <p> You can click 
                <a href='https://s3.amazonaws.com/cfuen.com/Fuentes+BA+Capstone.docx' target='_blank' rel='noreferrer'> here </a>
                    for a downloaded copy of this project, or click the image above.
                </p>
                
                <p className='describe'>PROJECT SUMMARY</p>
                <p className='skills'><u><b>Skills:</b><br/></u> React / JavaScript / CSS / Node / PostgreSQL</p>

            </section>
        </ProjectDiv>
        );
    }
}


export default Projects