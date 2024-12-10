import React from 'react';
import { useParams } from 'react-router-dom';
import Anthracnosepap from '../images/Anthracnosepap.jpg';
import blackspotpap from '../images/blackspotpap.jpg'
import leafcurlpap from '../images/leafcurlpap.jpg'
import mealybugpap from '../images/mealybugpap.jpg'
import ringspotviruspap from '../images/ringspotviruspap.jpg'
import powderymildewpap from '../images/powderymildewpap.jpg'


const Pap = () => {
  const { id } = useParams();
  let name,category,category1, description, description1, image;
 
  switch (id) {
    case 'Anthracnosepap':
      name = 'Anthracnosepap';
      category='Preventive Measures:';
      description = 'Field sanitation by destroying fallen fruits and leaves as fungus survives in this plant debris.';
      category1='Curative Measures:';
      description1 = "Foliar spraying with carbendazim 1 gm per liter water at 45 days interval or Chlorothalonil 2 gm per liter at 10 to 15 days interval or thiophanate-methyl 1 gm per liter water controls the disease.";
      image = Anthracnosepap;
      break;

    case 'blackspotpap':
      name = 'blackspotpap';
      category='Preventive Measures:';
      description = 'Remove any infected leaves and fruit at the first sign of infection.';
      category1='Curative Measures:';
      description1 = "Spray the crop with copperoxy chloride (Blue dot) 2 gm or mancozeb M 45 (Zeal M 45) 2.5 gm or chlorothalonil 2 gm per liter water. When using fungicides, be sure to spray the undersides of the leaves where the spores are produced.";
      image = blackspotpap;
      break;

    case 'leafcurlpap':
      name = 'leafcurlpap';
      category='Preventive Measures:';
      description = 'Infected plants should be destroyed even in the nursery. In the orchard the affected plants should be rouged and destroyed.';
      category1='Curative Measures:';
      description1 = "Spraying with dimethoate 2 ml per liter water controls the insect vector and reduces the disease in the field.";
      image = leafcurlpap;
      break;

    case 'mealybugpap':
      name = 'mealybugpap';
      category='Preventive Measures:';
      description = 'All crop residues in previously infested fields should be removed and burnt.';
      category1='Curative Measures:';
      description1 = "chlorpyriphos 20 EC @ 2 ml/l or imidacloprid 200 SL @ 1ml/l.";
      image = mealybugpap;
      break;

    case 'ringspotviruspap':
      name = 'ringspotviruspap';
      category='Preventive Measures:';
      description = 'Daisies are simple yet elegant flowers commonly found in gardens.';
      category1='Curative Measures:';
      description1 = "1. For contol of vector.a) Methyl demeton 25 EC @1lit/ha. b) Dimethoate 30 EC @1lit/ha.";
      image = ringspotviruspap;
      break;

      case 'powderymildewpap':
      name = 'powderymildewpap';
      category='Preventive Measures:';
      description = 'Application of fertilizers as per soil testing report. 2. Avoid planting in areas having high humidity and temperature below 24 oC.3. Planting at sufficient spacing between plants. 4. Irrigation at root zone..';
      category1='Curative Measures:';
      description1 = "Spray Wettable Sulphur 0.25% or Dinocap 0.05% or Chinomethionate 0.1%.";
      image = powderymildewpap;
      break;
      
    default:
      name = '';
      category='';
      description = '';
      category1='';
      description1 = '';
      image = '';
  }

  return (
    <div className="inner">
      <div className="box">
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </div>
      <div className="container">
      <h2>{category}</h2>
        <p>{description}</p>
        <h2>{category1}</h2>
        <p>{description1}</p>
      </div>
    </div>
  )
}

export default  Pap;
