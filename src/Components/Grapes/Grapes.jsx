import React from 'react'
import {Link} from 'react-router-dom'
import blackrotgrape1 from '../images/grapes/blackrotgrape1.jpg'
import fleabeetlegrape from '../images/grapes/fleabeetlegrape.jpg'
import fruitcrackinggr from '../images/grapes/fruitcrackinggr.jpg'
import phosphorousdefgrape from '../images/grapes/phosphorousdefgrape.jpg'
import rustgrape1 from '../images/grapes/rustgrape1.jpg'
import thirpsgrape1 from '../images/grapes/thirpsgrape1.jpg'
import './Grapes.css'
import Footer from '/src/Pages/Footer';

function Grapes(){
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
        
        
      <div className='mai'><h1>Grapes Disease</h1>
        </div>
        <div className='inn'>
        
          <div className="bo">
            <Link to="/flower1/blackrotgrape1">
              <img src={blackrotgrape1} alt="Roses" />
              
            </Link>
            <h2>Blackrot</h2>
            </div>
            
            <div className="bo">
            <Link to="/flower1/fleabeetlegrape">
              <img src={fleabeetlegrape} alt="fleabeetlegrape" />
              
            </Link>
            <h2>Flea Beetle</h2>
            </div>
            <div className="bo">
            <Link to="/flower1/fruitcrackinggr">
              <img src={fruitcrackinggr} alt="fruitcrackinggr" />
              
            </Link>
            <h2>Fruit Cracking</h2>
            </div>
            <div className="bo">
            <Link to="/flower1/phosphorousdefgrape">
              <img src={phosphorousdefgrape} alt="phosphorousdefgrapedsnana" />
              
            </Link>
            <h2>Phosphorous Deficiency</h2>
            </div>
            <div className="bo">
            <Link to="/flower1/rustgrape1">
              <img src={rustgrape1} alt="rustgrape1" />
              
            </Link>
            <h2>Rust</h2>
            </div>
            <div className="bo">
            <Link to="/flower1/thirpsgrape1">
              <img src={thirpsgrape1} alt="thirpsgrape1" />
            </Link>
            <h2>Thirps</h2>
          </div>
          </div>
          <Footer/>
        </>
    )
}
export default Grapes;