import React from 'react'
import { Link } from 'react-router-dom'
import phosphorusdefsugar1 from '../images/phosphorusdefsugar1.jpg'
import redrootsugar from '../images/redrootsugar.jpg'
import aphidssugar from '../images/aphidssugar.png'
import brownspotsug1 from '../images/brownspotsug1.jpg'
import grassyshootsugar from '../images/grassyshootsugar.png'
import  '/src/Components/Grapes/Grapes.css'
import Footer from '/src/Pages/Footer';

const Sugar = () => {
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
    
    <div className="main">
    <h1>Sugarcane Diseases</h1>
    </div>
    <div className='inn'>
      <div className="bo">
        <Link to="/flow/Phosphorusdef">
          <img src={phosphorusdefsugar1} alt="Phosphorusdefsugar1" /> 
        </Link>
        <h2>Phosphorus Deficiency</h2>
        </div>

        <div className="bo">
        <Link to="/flow/Redrootsugar">
          <img src={redrootsugar} alt="redrootsugar" />
        </Link>
        <h2>Redroot</h2>
        </div>

        <div className="bo">
        <Link to="/flow/aphidssugar">
          <img src={aphidssugar} alt="aphidssugar" />
        </Link>
        <h2>Aphids</h2>
        </div>

        <div className="bo">
        <Link to="/flow/brownspotsug1">
          <img src={brownspotsug1} alt="brownspotsug1" />
        </Link>
        <h2>Brown spots</h2>
        </div>

        <div className="bo">
        <Link to="/flow/grassyshootsugar">
          <img src={grassyshootsugar} alt="grassyshootsugar" />
        </Link>
           <h2>Grassyshoot sugar</h2>
           </div>
       </div>
      <Footer/>
    </>
    ) 
}

export  default Sugar;