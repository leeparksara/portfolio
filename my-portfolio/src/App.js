//import logo from './logo.svg';
import Home from './Pages/Home.jsx'
import './App.css';

//import {Link} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">

    <div className='logo'>
   <img src='image/myLogo.png' alt='my-logo'/>
  
    
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
