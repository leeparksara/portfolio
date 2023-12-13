import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import 'react-social-icons/github'
//import 'react-social-icons/linkedin'

import Skills from './Skills'
import Project from './Project';
import Resume from './Resume'
import Contact from './Contact';
import Footer from './Footer';

function Home() {
    const scrollToAbout = () => {
        scroll.scrollTo('about', {
          duration: 800,
          smooth: 'easeInOutQuad',
        });
      };
  return (
    <div class="home-page">
    <div className='home'>
    
<div  className='section'>
<div className='header'>

<header >
        <ul className='links'>
        
           
            
            <li>
            <ScrollLink className='link' to="resume" smooth={true} duration={800} onClick={scrollToAbout}>
            Resume
            </ScrollLink>
            </li>
            <li> <ScrollLink className='link' to="skill" smooth={true} duration={800} onClick={scrollToAbout}>
                  Skills
                  </ScrollLink></li>
                  <li> <ScrollLink className='link' to="project" smooth={true} duration={800} onClick={scrollToAbout}>
                  Project
                  </ScrollLink></li> 
          
           
                  <li>
                  <ScrollLink className='link' to="contact" smooth={true} duration={800} onClick={scrollToAbout}>
                 Contact
                  </ScrollLink>
           
            </li>
        </ul>
    </header>
</div>
 <div className='second-section'>
    <section>
    <div>
       <img src="image/portPic.png" alt="sara" />
       </div>
      
<div className='info'>
<div className='intro'>
<span className='first-span'> Hello,  
        </span> <span className='second-span'> I'm Sara Leepark </span>
</div>

        <p>
     a passionate front-end developer & UX designer  located in Seoul,  <br/> South korea right now but I'm actively exploring new  opportunities  <br/>in my field and considering relocation for the right work opportunity.<br/>  I specialize in crafting visually appealing, accessible, and  user-friendly <br/>websites and applications. My dedication lies  in creating engaging <br/>designs that bring life into the website. Let's start the journey together.
        </p> 

        <div className='contact-links'>
         

       
           
        </div>
     
</div>
      
    </section>
 </div>
</div>
   
  
     </div>
     <div className='exp' id='skill'>

     <Skills/> 
     </div>
    
   
   <div className='exp' id='project'>
    <Project/>
   </div>
   <div className='exp' id='resume'>
    <Resume/>
   </div>
   <div className='exp' id='contact'> 
   <Contact/>
   </div>
   <Footer/>
</div>
    
  )
}

export default Home