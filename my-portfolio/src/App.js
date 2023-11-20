//import logo from './logo.svg';
import Home from './Pages/Home.jsx'
import './App.css';
import { BiLogoGmail } from "react-icons/bi";
import { MdModeNight } from "react-icons/md";
function App() {
  
  return (
    <div className="App">

    <div className='logo'>

   <img id='im' src='image/log.png' alt='my-logo'/>

  <div className='navbar'>
    

    <BiLogoGmail className='mail'/>   <a  className='mail-link' href='mailto:saraleepark1994@gmail.com' target='-blank' rel="noopener noreferrer">    </a>
    <MdModeNight className='navbar-icons' />
    </div>
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
