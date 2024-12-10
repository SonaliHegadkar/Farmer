import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '/src/Pages/Footer';
import { Link ,useNavigate} from 'react-router-dom';
import './Tables.css';

const Schemes1 = () => {
  const [schemes, setSchemes] = useState([]);
  const [selectedScheme, setSelectedScheme] = useState(null);

  useEffect(() => {
    // Fetch schemes data from the server when the component mounts
    axios
      .get('http://localhost:3001/schemes')
      .then((response) => {
        setSchemes(response.data);
      })
      .catch((error) => {
        console.log('Error fetching schemes:', error);
      });
  }, []);

  const handleSchemeSelect = (schemeId) => {
    const scheme = schemes.find((s) => s._id === schemeId);
    setSelectedScheme(scheme);
  };
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
            
            <li><Link to="/schemes" className="nav-link">Schemes</Link></li>
            
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
    <div className="schemes-container">
      <h1 className="page-title">Government Schemes</h1>
      <div className="scheme-search">
        <label htmlFor="schemeSelect" className="search-label">
          Search for a scheme:
        </label>
        <select
          id="schemeSelect"
          className="search-select"
          onChange={(e) => handleSchemeSelect(e.target.value)}
        >
          <option value="">Select Scheme</option>
          {schemes.map((scheme) => (
            <option key={scheme._id} value={scheme._id}>
              {scheme.name}
            </option>
          ))}
        </select>
      </div>
      {selectedScheme && (
        <div className="scheme-details">
          <h2 className="scheme-title">{selectedScheme.name}</h2>
          <div className="scheme-info">
            <div className="info-section" style={{ backgroundColor: '#FFF9C4' }}>
              <h3>Description</h3>
              <p>{selectedScheme.description}</p>
            </div>
            <div className="info-section" style={{ backgroundColor: '#C8E6C9' }}>
              <h3>Eligibility Criteria</h3>
              <p>{selectedScheme.eligibility_criteria}</p>
            </div>
            <div className="info-section" style={{ backgroundColor: '#BBDEFB' }}>
              <h3>Benefit</h3>
              <p>{selectedScheme.benefit}</p>
            </div>
            <div className="info-section" style={{ backgroundColor: '#FFE0B2' }}>
              <h3>Application Process</h3>
              <p>{selectedScheme.application_process}</p>
            </div>
            <div className="info-section" style={{ backgroundColor: '#B3E5FC' }}>
              <h3>Website</h3>
              <a className="website-link" href={selectedScheme.website} target="_blank" rel="noopener noreferrer">
                {selectedScheme.website}
              </a>
            </div>
            <div className="info-section" style={{ backgroundColor: '#FFCDD2' }}>
              <h3>Implemented By</h3>
              <p>{selectedScheme.implemented_by}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Schemes1;