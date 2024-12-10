import React from 'react'
import {Link} from 'react-router-dom'
import Anthracnosepap from '../images/Anthracnosepap.jpg';
import blackspotpap from '../images/blackspotpap.jpg'
import leafcurlpap from '../images/leafcurlpap.jpg'
import mealybugpap from '../images/mealybugpap.jpg'
import ringspotviruspap from '../images/ringspotviruspap.jpg'
import powderymildewpap from '../images/powderymildewpap.jpg'
import  '/src/Components/Grapes/Grapes.css'

import Footer from '/src/Pages/Footer';

function Papaya(){
    return(
        <>
        <header>
        <nav>
          <div className="logo">FarmFriend Connect</div>
          <ul>
            <li><Link to="/agriad" className="nav-link">AgriAdvisory</Link></li>
             </ul>
        </nav>
      </header>
        <div className='mai'><h1>Papaya Disease</h1>
        </div>
        
        <div className='inn'>
          <div className="bo">
            <Link to="/pap/Anthracnosepap">
              <img src={Anthracnosepap} alt="Roses" />
            </Link>
            <h2>Anthracnose</h2>
            </div>
            <div className="bo">
            <Link to="/pap/blackspotpap">
              <img src={blackspotpap} alt="blackspotpap" />
             
            </Link>
            <h2>Black Spot</h2>
            </div>
            <div className="bo">
            <Link to="/pap/leafcurlpap">
              <img src={leafcurlpap} alt="leafcurlpap" />
              
            </Link>
            <h2>Leaf Curl</h2>
            </div>
            <div className="bo">
            <Link to="/pap/mealybugpap">
              <img src={mealybugpap} alt="mealybugpap" />
              
            </Link>
            <h2>Mealy Bug</h2>
            </div>
            <div className="bo">
            <Link to="/pap/powderymildewpap">
              <img src={powderymildewpap} alt="powderymildewpap" />
             
            </Link>
            <h2>Powdery Mildew </h2>
            </div>
            <div className="bo">
            <Link to="/pap/ringspotviruspap">
              <img src={ringspotviruspap} alt="ringspotviruspap" />
              
            </Link>
            <h2>RingSpot Virus</h2>
          </div>
          </div>
          <Footer/>
        </>
    )
}
export default Papaya;