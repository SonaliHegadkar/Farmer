import React from 'react';
import agri2 from './images/agri2.jpg'
import Sugarcane1 from './images/Sugarcane1.jpg';
import grapes1 from './images/grapes1.jpg'
import Pomegranate1 from './images/Pomegranate1.jpg'
import banana2 from './images/banana2.jpg'
import papaya1 from './images/papaya1.jpg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '/src/Pages/Footer';
import './Flower.css'; 


const Flower = () => {

  const navigate = useNavigate(); // Using useNavigate hook

  // Function to handle going to the previous page
  const goToPreviousPage = () => {
    navigate(-1); // Navigate back by one step
  };


  return (
    <>
    <header>
        <nav>
          <div className="logo">FarmFriend Connect</div>
          <ul>
            <li><Link to="/agriad" className="nav-link">AgriAdvisory</Link></li>
           </ul>
        </nav>
      </header>

    <button className="previous-button" onClick={goToPreviousPage} style={{
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "12px 24px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  }}>Previous</button>
      
      <h2>Agri Advisory</h2> 
      <div className="rrr"> 
      <div className="cont">
        <Link to="/rose">
        <img src={banana2} alt="banana2" />
        </Link>
        <h2>Banana</h2>
        </div>

        <div className="cont">
        <Link to="/sugar">
        <img src={Sugarcane1} alt="Sugarcane1" />
        </Link>
        <h2>Sugar Cane</h2>
        </div>

        <div className="cont">
        <Link to="/grapes">
        <img src={grapes1} alt="grapes1" />
        </Link>
        <h2>Grape</h2>
        </div>
        </div>

        <div className="rrr">
        <div className="cont">
        <Link to="/chili">
        <img src={agri2} alt="agri2" />
        </Link>
        <h2>Chili</h2>
        </div>

        <div className="cont">
        <Link to="/papaya">
        <img src={papaya1} alt="papaya1" />
        </Link>
        <h2>Papaya</h2>
        </div>

        <div className="cont">
        <Link to="/pome">
        <img src={Pomegranate1} alt="Pomegranate1" />
        </Link>
        <h2>Pomegranate</h2>
      </div>
      </div>
      <Footer/>
    </>  
  );
};

export default Flower;

