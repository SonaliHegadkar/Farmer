import { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import Footer from '/src/Pages/Footer';
import './Login.scss';
function Login(){
    
    const[email,setEmail] = useState()
    const[password,setPassword] = useState()
    const [error, setError] = useState("");
    const navigate=useNavigate()

const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => {
        console.log(result)
        if(result.data==="Success"){
            navigate('/home')
        }
        else {
          setError("Incorrect phone number or password");
        }
    
    })
    .catch(err =>console.log(err))
}
    return(
      <>
<header>
        <nav>
          <div className="logo">FarmFriend Connect</div>
          <ul>
            
            <li><Link to="/" className="nav-link">Login</Link></li>
            
          </ul>
        </nav>
      </header>
        <div className="login">
        <div className="login_content">
          <form className="login_content_form" onSubmit={handleSubmit}>
            <input
              type="tel"
              placeholder="Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error">{error}</p>}
          <button type="submit">LOG IN</button>
          </form>
          <Link to="/register">Don't have an account? Sign In </Link>
        </div>
      </div>
<Footer/>
      </>
    );
  };
export default Login;