import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoIosQuote } from 'react-icons/io';
import './Home.css'
import CarouselPage from './Carousel'
import ServicesSection from '/src/Pages/ServicesSection';
import {Link,useNavigate} from 'react-router-dom'
import Weather from './Weather';




function Home() {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);
    setTimeout(() => {
      localStorage.clear();
      navigate('/', { replace: true });
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div className={`homepage ${loggingOut ? 'logging-out' : ''}`}>
      <header>
        <nav>
          <div className="logo">FarmFriend Connect</div>
          <ul>
            <li><Link to="/home" className="nav-link">Home</Link></li>
            <li><Link to="/schemes" className="nav-link">Schemes</Link></li>
            <li><Link to="/agriad" className="nav-link">AgriAdvisory</Link></li>
            <li><Link to="/weatherapp" className="nav-link">Weather</Link></li>
            <li><Link to="/feedback" className="nav-link">Feedback</Link></li>
           <li> <div className="logout-container">
                {loggingOut ? (
                  <div className="d-flex align-items-center">
                    <div className="spinner-border text-light" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                    <span className="ml-2">Logging out...</span>
                  </div>
                ) : (
                  <button type="button"  className="logout-button" onClick={handleLogout}>Logout</button>
                )}
              </div></li>
          </ul>
        </nav>
      </header>

      <main>
      <CarouselPage/>
     
      
        <section className="featured-products">
          <h2>Personalized Weather Insights</h2>
          <Weather/>
        </section>
        
        <ServicesSection/>
        <section className="testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <IoIosQuote className="quote-icon" />
              <p>Ever since I started using FarmFriend Connect, managing my farm has become a breeze. The weather forecasts are spot-on, the crop management tools are intuitive, and the expert advice has been invaluable. I've seen a noticeable improvement in my yields and overall farm efficiency. Highly recommend!</p>
              <div className="customer-info">
                <img src="/src/assets/customer1.jpg" alt="Customer 1" />
                <div>
                  <h4>Jane Smith</h4>
                  <p>Local Customer</p>
                </div>
              </div>
            </div>
            {/* Add more testimonial cards here */}
          </div>
        </section>

        <section className="sustainable-practices">
          <h2>Our Sustainable Practices For Farmers</h2>
          <div className="practices-grid">
            <div className="practice-card">
              <img src="/src/assets/organic.jpg" alt="Organic Farming" />
              <h3>Environment Friendly Farming </h3>
              <p>We suggest to use environment friendly practices such as crop rotation,integrated pest management, or organic farming methods.</p>
            </div>
            <div className="practice-card">
              <img src="/src/assets/drip1.jpg" alt="Water Conservation" />
              <h3>Water Conservation</h3>
              <p>Drip irrigation systems deliver water directly to the root zone of plants, minimizing evaporation and runoff.</p>
            </div>
            <div className="practice-card">
              <img src="/src/assets/solar1.jpg" alt="Renewable Energy" />
              <h3>Renewable Energy</h3>
              <p>We suggest to harness the power of solar and wind energy to reduce carbon footprint.</p>
            </div>
          </div>
        </section>

        <section className="farm-location">
          <h2>Our Location</h2>
          <div className="map-container">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9395680286527!2d-73.99395758459595!3d40.75891847932582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25900a58ec631%3A0x4ec50e64e8d83b43!2sProspect%20Park!5e0!3m2!1sen!2sus!4v1682410604048!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Farm Location"
            ></iframe>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We are a team dedicated to work for farmers problem and introduce them to various policies and technologies related to farming.</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>123 Sonavari Road,Saswad,Pune</p>
            <p>Email: contact@farmerfriendconnect.com</p>
            <p>Phone: (+91) 8572639615 </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FarmFriend Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;  