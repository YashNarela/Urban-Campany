import React from 'react'

import fb from "../assets/Facebook.png"
import tw from "../assets/twitter.png"
import ig from "../assets/instagram.jpg"
const Footer = () => {
  return (
    <>



      <footer class="footer">
        <div class="container">
          <div class="footer-section company-info">
            <h3>About Us</h3>
            <p>We are a leading e-commerce platform providing the best products at affordable prices.</p>
          </div>
          <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section support">
            <h3>Customer Support</h3>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div class="footer-section social">
            <h3>Follow Us</h3>
            <div class="social-icons">
                <img src={fb} alt="Facebook"/>
              <img src={tw} alt="Twitter"/>
          <img src={ig} alt="Instagram"/>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 E-Commerce. All Rights Reserved.</p>
        </div>
      </footer>


    </>
  )
}

export default Footer
