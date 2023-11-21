import React from 'react'

const Header = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
  return (
    <div>
    
 
   
    <div className='logo'> <img
          id='im'
          src='image/log.png'
          alt='my-logo'
          onClick={scrollToTop} 
          style={{ cursor: 'pointer' }} 
        />
        </div>
        </div>
   
  )
}

export default Header