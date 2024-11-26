import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/contact.css';
import { Link } from 'react-router-dom';
const Contact = () => {
  const Navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    concern: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    Navigate('/login');
    // try {
    //   // const response = await fetch('/contact', {
    //   //   method: 'POST',
    //   //   headers: {
    //   //     'Content-Type': 'application/json'
    //   //   },
    //   //   body: JSON.stringify(formData)
    //   // });

    //   // const result = await response.json();
    //   // if (response.ok) {
    //   //   alert(result.message);
    //   //   setFormData({
    //   //     firstname: '',
    //   //     lastname: '',
    //   //     email: '',
    //   //     mobile: '',
    //   //     concern: ''
    //   //   });
    //   // } else {
    //   //   alert('Error: ' + result.message);
    //   // }
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert('An error occurred while submitting the form.');
    // }
  };

  return (
    <div className="contact-page">
      <header>
      <nav id="nav" className="nav">
          <div className="logo" id="logo">Elite Designs</div>
          <button
          className="hamburger"
          onClick={() =>{ setNavOpen(!navOpen);console.log("Hamburger clicked. navOpen state:", !navOpen);}}
          aria-expanded={navOpen}
          aria-controls="navitems"
        >
          ☰
        </button>
          <div className={!navOpen ? 'navitems' : 'notnavitems'} id="navitems">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <button onClick={() => Navigate('/login')} className="uploadbtn">Get Started</button>
            </ul>
          </div>
        </nav>
      </header>

      <div className="contact-container">
        <form id="contact-form" onSubmit={handleSubmit} className="feedback">
          <h2>Contact Us</h2>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <h4>Share Your Thoughts</h4>
          <textarea
            name="concern"
            id="concern"
            placeholder="Your message..."
            value={formData.concern}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Send" id="button" />
        </form>
      </div>
      <footer style={{ backgroundColor: "black", color: "white", position: "fixed", bottom: "0", width: "100%", height: "4vh", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "0.8rem"}}className='lfooter'>
        <div className="footer">
          <p>©2024 Elite Designs</p>
          <p className="socialmedia">E-mail, Instagram, X</p>
          <p>elitedesigns@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
