

import React from 'react';
import { Link } from 'react-router-dom';
import Aphidspome from '../images/Aphidspome.jpg';
import fruitcrackingpome from '../images/fruitcrackingpome.jpg'
import Sunscaldpome from '../images/Sunscaldpome.jpg'
import whiteflypome1 from '../images/whiteflypome1.jpg'
import  '/src/Components/Grapes/Grapes.css'
import Footer from '/src/Pages/Footer';

const Pome = () => {
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
        <h1>Pomegranate Disease</h1>
      </div>
      <div className='inn'>
        <div className="box">
          <Link to="/det/Aphidspome">
            <img src={Aphidspome} alt="Aphidspome" />

          </Link>
          <h2>Aphidspome Pomegranate</h2>
        </div>

        <div className="bo">
          <Link to="/det/fruitcrackingpome">
            <img src={fruitcrackingpome} alt="fruitcrackingpome" />

          </Link>
          <h2>fruitcracking Pomegranate</h2>
        </div>
        <div className="bo">
          <Link to="/det/Sunscaldpome">
            <img src={Sunscaldpome} alt="Sunscaldpome" />

          </Link>
          <h2>Sunscald Pomegranate</h2>
        </div>
        <div className="bo">
          <Link to="/det/whiteflypome1">
            <img src={whiteflypome1} alt="whiteflypome1" />
          </Link>
          <h2>whitefly Pomegranate</h2>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};



export default Pome;