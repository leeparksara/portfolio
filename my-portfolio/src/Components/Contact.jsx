import React, { useState } from 'react';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xgejbrlq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='form-wrap' >
    <div className='form-title'>
    <h1 >Contact me through form</h1>
      <p >Do you have a question? Go ahead and send me a message! </p>
    </div>
      
      <div className="contact-container"> 
      <form onSubmit={handleSubmit}>
      <div className='form-info-container'>
      <div className='form-info'>
      <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder='Enter your name'
        />
      
       </div>
       
       <div className='form-info'><label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='Enter your email address'
        /> </div>
      </div>
     

        <div className='form-info'>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder='Hi Sara, we are contacting you regarding...'
        ></textarea>
        </div>

       

        <button type="submit" >Send </button>
      </form>
      </div>
    </div>
  );
}

export default Contact;
