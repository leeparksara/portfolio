//import logo from './logo.svg';
import React, {useState} from 'react';
import Home from './Pages/Home.jsx'
import './App.css';
import { BiLogoGmail } from "react-icons/bi";
import Header from './Components/Header.jsx';
import { MdModeNight, MdWbSunny } from "react-icons/md"; 
function App() {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode(!nightMode)
  }


  return (
    <div className={`App ${nightMode ? 'night-mode' : ''}`}>

<Header/>

  <div className='navbar'>
    

    <BiLogoGmail className='mail'/>   <a  className='mail-link' href='mailto:saraleepark1994@gmail.com' target='-blank' rel="noopener noreferrer">    </a>

    {nightMode? (
      <MdWbSunny className='navbar-icons' onClick={toggleNightMode}/>
    ) : (<MdModeNight className='navbar-icons' onClick={toggleNightMode}/>
    )}
    
 
    </div>
  
  <div className='tools-container '> <img className='tools' src='image/figma.png' alt='figma' />
  <img className='tools' src='image/react.png' alt='figma' />
  <img className='tools' src='image/vs.png' alt='figma' />
  <img className='tools' src='image/html.png' alt='figma' />
  <img className='tools' src='image/node.png' alt='figma' />
  <img className='tools' src='image/css.png' alt='figma' />
  <img className='tools' src='image/bootstrap.png' alt='figma' />

  <img className='tools' src='image/js.png' alt='figma' />
  </div>
     <Home/>
    </div>
  );
}

export default App;
