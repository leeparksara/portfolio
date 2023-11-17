import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'

import Skills from './Skills'

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
            <li> <ScrollLink to="exp" smooth={true} duration={800} onClick={scrollToAbout}>
                  Skill
                  </ScrollLink></li>
            <li>Project</li>
           
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
<h2>   Hello, 
        </h2>
        <p>
       <span>  I'm Sara Leepark,</span> a passionate front-end developer and UX designer <br/> located in Stockholm, Sweden. I specialize in crafting visually appealing, <br/> accessible, and user-friendly websites and applications. My dedication lies <br/> in creating engaging designs that breathe life into products. Let's embark <br/> on a journey of innovation together
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
     <div className='exp'>

     <Skills/> 
     </div>
    
   
   
</div>
    
  )
}

export default Home