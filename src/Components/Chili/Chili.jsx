import React from 'react'
import {Link} from 'react-router-dom'
import chilidie from '../images/chilidie.jpg'
import chilliborer from '../images/chilliborer.jpg'
import chillical from '../images/chillical.jpg'
import chillileafcurl from '../images/chillileafcurl.png'
import chilliwilt from '../images/chilliwilt.jpg'
import chillizinc from '../images/chillizinc.jpg'
import  '/src/Components/Grapes/Grapes.css'
import Footer from '/src/Pages/Footer';


function Chili(){
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
        <div className='main'>
        <h1>Chilli Diseases</h1>
        </div>
        <div className='inn'>
          <div className="box">
            <Link to="/chil/chilidie">
              <img src={chilidie} alt="chilidie" />
              
            </Link>
            <h2>Dieback</h2>
            </div>
            <div className="bo">
            <Link to="/chil/chilliborer">
              <img src={chilliborer} alt="chilliborer" />
             
            </Link>
            <h2>Fruit Borer</h2>
            </div>
            <div className="bo">
            <Link to="/chil/chillical">
              <img src={chillical} alt="chillical" />
             
            </Link>
            <h2>Calcium Deficiency</h2>
            </div>
            <div className="bo">
            <Link to="/chil/chilliwilt">
              <img src={chilliwilt} alt="chilliwilt" />
            </Link>
            <h2>Wilt</h2>

            </div>
            <div className="bo">
            <Link to="/chil/chillizinc">
              <img src={chillizinc} alt="chillizinc" />
              
            </Link>
            <h2>Zinc Deficiency</h2>
            </div>
            <div className="bo">
            <Link to="/chil/chillileafcurl">
              <img src={chillileafcurl} alt="chillileafcurl" />
            </Link>
            <h2>Leaf Curl</h2>
            </div>
          </div>
          <Footer/>
        </>
    )
}
export default Chili;