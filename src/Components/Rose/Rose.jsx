

import React from 'react';
import { Link } from 'react-router-dom';
import bananacalto from '../images/bananacalto.jpg';
import leafspot from '../images/leafspot.jpg'
import panamawilt from '../images/panamawilt.jpg'
import steakvirus from '../images/steakvirus.jpg'
import sigatokabana from '../images/sigatokabana.jpg'
import aphidsnana from '../images/aphidsbana.jpg'
import  '/src/Components/Grapes/Grapes.css'
import Footer from '/src/Pages/Footer';



const Rose = () => {
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
    <div className="main">
    <h1>Banana Disease</h1>
    </div>
       
      
     <div className="inn">
        
        <div className="bo">
          <Link to="/flower/rose">
            <img src={bananacalto} alt="Roses" />
          </Link>
          <h2>Calcium Toxicity</h2>
        </div>
        
        <div className="bo">
          <Link to="/flower/Leafspot">
            <img src={leafspot} alt="Leafspot" />
          </Link>
          <h2>Leafspot</h2>
        </div>
        
        <div className="bo">
          <Link to="/flower/Panamawilt">
            <img src={panamawilt} alt="panamawilt" />
          </Link>
          <h2>Panama Wilt</h2>
        </div>
         
        <div className="bo">
          <Link to="/flower/Aphidsnana">
            <img src={aphidsnana} alt="Aphidsnana" />
          </Link>
          <h2>Aphids</h2>
        </div>
        
       
        <div className="bo">
          <Link to="/flower/Sigatokabana">
            <img src={sigatokabana} alt="Daisy" />
          </Link>
          <h2>Sigatoka</h2>
        </div>

        <div className="bo">
          <Link to="/flower/Steakvirus">
            <img src={steakvirus} alt="Steakvirus" />
          </Link>
          <h2>Steak Virus</h2>
        </div>
      </div>
     <Footer/>
    </>
  );
};



export default Rose;