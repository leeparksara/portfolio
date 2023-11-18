import React from 'react'

function About() {
  return (
  
<div className='skill-container'>

<div className='skill-dev'>
<div className='divs'>
<div className='dev-ti'>
<img src='image/dev.png' id='dev-icon' alt='figma'/>
  <h3>
  Frontend Dev
  </h3>

</div>


  <p>
I find pleasure and satisfaction in coding <br></br>especially building projects from the ground up <br/> and transforming it into reality.</p>
 
<h3 className='h3'> Dev Tools:</h3>

<ul>
<li>HTML  </li>
<li>CSS </li>
<li>JavaScript</li>
<li>Sass</li>
<li>Git</li>
<li>PostgreSQL</li>
</ul>
 </div>

<div className='divs'>
<div className='dev-ti'>
<img src='image/design.png' className='tools' id='design-icon' alt='figma'/>
  <h3>
   Designer
  </h3>

</div>

  <p>
I prioritize and appreciate uncomplicated and <br></br>  minimalistic design, and well-considered user interactions. <br/> I enjoy designing ux/ui,web,apps,and logos. </p>
<h3 className='h3'> Design Tools:</h3>
<ul>
<li>Figma</li>
<li>Pen & Paper</li>
<li>GIMP</li>
<li>Font Awesome</li>
</ul>
 </div>
 
</div>

<div>
<div className='dev-tools-container'>
  
  <p>React.js</p>
  <p>Vue.js</p>
  <p>Node.js</p>
  <p>MongoDB</p>
  <p>Three.js</p>
  <p>TypeScript</p>
  


</div>
</div>
  </div>
  )
}

export default About