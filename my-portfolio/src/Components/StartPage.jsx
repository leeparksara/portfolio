import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'

import Skills from './Skills'
import Project from './Project';
function Home() {
    const scrollToAbout = () => {
        scroll.scrollTo('about', {
          duration: 800,
          smooth: 'easeInOutQuad',
        });
      };
  return (
    <div>
    <div className='home'>
    
<div  className='section'>
<div className='header'>

<header >
        <ul className='links'>
        
          
            
            <li>Resume</li>
            <li> <ScrollLink to="skill" smooth={true} duration={800} onClick={scrollToAbout}>
                  Skills
                  </ScrollLink></li>
                  <li> <ScrollLink to="project" smooth={true} duration={800} onClick={scrollToAbout}>
                  Project
                  </ScrollLink></li> 
          
           
                  <li>
             Contact
            </li>
        </ul>
    </header>
</div>
 <div className='second-section'>
    <section>
    <div>
       <img src="image/port.png" alt="sara" />
       </div>
      
<div className='info'>
<div className='intro'>
<span className='first-span'> Hello,  
        </span> <span className='second-span'> I'm Sara Leepark </span>
</div>

        <p>
     a passionate front-end developer & UX designer  located in Seoul,  <br/> South korea right now but I'm actively exploring new  opportunities  <br/>in my field and considering relocation for the right work opportunity.<br/>  I specialize in crafting visually appealing, accessible, and  user-friendly <br/>websites and applications. My dedication lies  in creating engaging <br/>designs that breathe life into products. Let's start the journey together.
        </p> 

        <div className='contact-links'>
         
            <SocialIcon href='https://github.com/leeparksara' url="www.github.com" />
            <SocialIcon href='https://www.linkedin.com/in/sara-leepark-5ba013263/' url="www.linkedin.com" />
         
       
       
           
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
</div>
    
  )
}

export default Home