import React, { useState } from 'react';

// Import images for crops
//import riceImage from './rice.jpg';
//import wheatImage from './wheat.jpg';
import corn from '/src/assets/corn.jpg';

const CropManagement = () => {
  const [airHumidity, setAirHumidity] = useState('');
  const [airTemperature, setAirTemperature] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [soilHumidity, setSoilHumidity] = useState('');
  const [soilPH, setSoilPH] = useState('');
  const [cropName, setCropName] = useState('');
  
  // Define crop images
  const cropImages = {
   // Rice: riceImage,
   // Wheat: wheatImage,
    Corn: corn,
  };

  const calculateCrop = () => {
    let crop = 'Unknown';

    if (airHumidity > 60 && airTemperature > 25 && rainfall > 100 && soilHumidity > 60 && soilPH > 6.5) {
      crop = 'Rice';
    } else if (airHumidity > 50 && airTemperature > 20 && rainfall > 50 && soilHumidity > 40 && soilPH > 6.0) {
      crop = 'Wheat';
    } else if (airHumidity > 40 && airTemperature > 30 && rainfall > 150 && soilHumidity > 70 && soilPH > 7.0) {
      crop = 'Corn';
    }

    setCropName(crop);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Crop Calculator</h2>
      <div>
        <label htmlFor="airHumidity">Air Humidity:</label>
        <input
          type="number"
          id="airHumidity"
          value={airHumidity}
          onChange={(e) => setAirHumidity(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="airTemperature">Air Temperature:</label>
        <input
          type="number"
          id="airTemperature"
          value={airTemperature}
          onChange={(e) => setAirTemperature(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="rainfall">Rainfall:</label>
        <input
          type="number"
          id="rainfall"
          value={rainfall}
          onChange={(e) => setRainfall(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="soilHumidity">Soil Humidity:</label>
        <input
          type="number"
          id="soilHumidity"
          value={soilHumidity}
          onChange={(e) => setSoilHumidity(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="soilPH">Soil pH:</label>
        <input
          type="number"
          id="soilPH"
          value={soilPH}
          onChange={(e) => setSoilPH(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <button onClick={calculateCrop} style={{ padding: '10px 20px', backgroundColor: '#198754', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Calculate Crop</button>
      {/* Crop name and image */}
      {cropName && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p style={{ marginBottom: '10px' }}>Suitable Crop: {cropName}</p>
          <img src={cropImages[cropName]} alt={cropName} style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
        </div>
      )}
    </div>
  );
};

export default CropManagement;
