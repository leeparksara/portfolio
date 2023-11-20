import React from 'react'
import 'react-social-icons/linkedin'
import { SocialIcon } from 'react-social-icons'
const Resume = () => {
  return (
    
    <div className='resume-container'>

     <div className='core'>
     
     <div>
     <h3> Core Technologies:</h3>
            <ul className='core-list'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Sass</li>
                <li>React.js</li>
                <li>Vue.js</li>
                <li>TypeScript</li>
                <li>Three.js</li>
                <li>NodeJS</li>
                <li>PostgreSQL</li>
                <li>Figma</li>
                <li>Bootstrap</li>
                <li>Php</li>
            </ul>
   
     </div>
     <div>
     <h3> Other Experiences:</h3>
            <ul className='core-list'>
                <li>Video Editor 2019 - 2022</li>
                <li>Content Creator 2019 - 2023</li>
                <li>English Tutor 2012 - 2022</li>
                <li>Restaurant Assistan, 2018 - 2019</li>
                <li>Cashier 2016 - 2017</li>
                <li>Student Assistant 2017-2018</li>
               
            </ul>
   
     </div>
  <div>
    <h3> Languages:</h3>
    <ul className='core-list'>
                <li>Swedish</li>
                <li>English</li>
                <li>Arabic</li>
                <li>intermidate korea</li>
                
                
            </ul>
  </div>
  <div className='contact-div'>
  <div className='contact'>
  <h3> Contact</h3>
    <span></span>
    
  </div>
  <div  className='contact-info'>
    <div className='personal-info'><h4>Email:</h4> <p>saraleepark1994@gmail.com</p></div>
    <div className='personal-info'><h4>Address:</h4> <p>Sweden, Stockholm</p></div>
      <SocialIcon  href='https://www.linkedin.com/in/sara-leepark-5ba013263/' url="www.linkedin.com" /> 

  </div>
   
  </div>
  
        </div>
       
    <div className='resume-wrap'>
        <div  >
        <div > 
        <div className='social'>
        <h1>
    Sara Leepark
</h1>
{/*  <div className='download'>       <img src='image/download.png' alt='icon'></img> <p>Download</p></div>*/}
 


       
        </div>
    
<h5>Newly graduated passionate and self-motivated front-end developer</h5>
<p>I am dedicated to master the skills needed for front-end development and <br/> UX/Ui design.</p>
 </div>

<div className='experinces'>
    <h3>
        Experiences

    </h3>
    <p>In addition to my school projects, I have gained practical experience through <br/>an internship  at Smode, a company specializing in website and app development <br/> services.During this  internship, I actively contributed to various projects, honing <br/>  my skills in coding and project  management. </p>
    <div className='con'>
    <div className='exp1'>
    <div className='exp-period'> <h4> Smode - Intern Frontend developer</h4> August 2023- October </div>
    <ul className='exp-list'>


    <li> Creating different UX/UI-based designs for an online customized portraits store. </li>
    <li>Implemented part of the design in the Shopify store. </li>
    <li>I created a user login account and a gallery section to upload and save the logged-in user images in Shopify </li>
    <li>I also worked on another task for an online website that sells acoustic panels </li> 
    <li>I successfully implemented the module using HTML, CSS, vanilla JS, and Three.js.</li>
      
     
    </ul>
    </div>

    <div className='exp2'>
    <div className='exp-period'> <h4> Freelance - UX designer</h4> June 2023- July </div>
    <ul className='exp-list'>
    <li>Contributed to a part of a calendar/planner app.</li>
<li>Had the responsibility to conduct customer interviews and then perform user research.</li>
<li>Took part in the design and created a note section with a color palette where customers can select a date and write a note.</li>

    </ul>
    </div>
    </div>
</div>
        </div>
        
        </div>
       
       
      
    </div>
  )
}

export default Resume