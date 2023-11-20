import React from 'react'
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
  return (
    <div className='footer'>
        <p>© Sara Leepark 2023</p>
        <div className='footer-links'>
        <SocialIcon href='https://github.com/leeparksara' url="www.github.com" />
        <SocialIcon  href='https://www.linkedin.com/in/sara-leepark-5ba013263/' url="www.linkedin.com" /> 
        </div>

    </div>
  )
}

export default Footer