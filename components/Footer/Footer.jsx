import React from 'react';
import './Footer.css';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer id='Footer' className='footer'>
      <div className='footer-container'>
        <div className='footer-section company-info'>
          <h2 className='footer-title'>Cocktail Craft</h2>
          <p>Your go-to place for the best cocktail recipes and mixology tips.</p>
        </div>
        <div className='footer-section quick-links'>
          <h3 className='footer-subtitle'>Quick Links</h3>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Recipes</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <div className='footer-section social-media'>
          <h3 className='footer-subtitle'>Follow Us</h3>
          <div className='social-icons'>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
              <FacebookIcon />
            </a>
            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
              <TwitterIcon />
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className='footer-section contact'>
          <h3 className='footer-subtitle'>Contact Us</h3>
          <p>Email: info@cocktailcraft.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Cocktail St, Mixology City, CA 12345</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 Cocktail Craft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
