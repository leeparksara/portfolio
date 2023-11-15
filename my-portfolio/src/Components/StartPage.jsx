import React from 'react'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'

function Home() {
  return (
    <div className='home'>
    
<div  className='section'>
<div className='header'>

<header >
        <ul className='links'>
            <li>
                Home
            </li>
            <li>Resume</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
    </header>
</div>
 <div className='second-section'>
    <section>
    <div>
       <img src="/port4.png" alt="sara" />
       </div>
      
<div className='info'>
<h2>   Hello, 
        </h2>
        <p>
          <span> My name is Sara Leepark,</span>  I'm front-end developer and ux designer <br/> based in Stockholm, Sweden.
            I love to create an eye-catching, accessible <br/> and user-friendly websites and applications.
        I have passion for creating <br/> engaging designs and bringing the products to life. 
        
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
     

    
  )
}

export default Home