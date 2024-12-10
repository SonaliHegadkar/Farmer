// components/FlowerDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import bananacalto from '../images/bananacalto.jpg';
import leafspot from '../images/leafspot.jpg'
import panamawilt from '../images/panamawilt.jpg'
import steakvirus from '../images/steakvirus.jpg'
import sigatokabana from '../images/sigatokabana.jpg'
import aphidsnana from '../images/aphidsbana.jpg'
import  '/src/Components/POME/PomeDetails.css'

const FlowerDetail = () => {
  const { id } = useParams();
  let name, category,category1,description,description1, image;
 
  switch (id) {
    
    case 'rose':
      name = 'Calcium Deficiency';
      category='Preventive measures';
      description = 'Go for soil testing before crops season. Dont sow the crop when free Calcium in soil is morethan 7 percent.';
      category1='Curative measures:';
      description1="There is no curative action available for this category.";
      image =bananacalto;
      break;

    case 'Leafspot':
      name = 'Leafspot';
      category='Preventive measures';
      description = 'Removal and destruction of affected leaves leaves followed by spraying with Bordeaux mixture 1.0 per cent + linseed oil 2.0 per cent is effective.';
      category1='Curative measures:';
      description1="Spraying of Carbendazim + Mancozeb (Fussion) 2 gm or thiophanate methyl (Difenso) 1 gm or Mancozeb (Zeal M 45) 2 gm per liter water at an interveal of 8 - 10 days depending on intensity of infection.";
      image =leafspot;
      break;

    case 'Panamawilt':
      name = 'Panamawilt';
      category='Preventive measures';
      description = <p>1.Crop rotation with paddy & Sugarcane.<br/>
      2.Sanitation by immediate removal of diseased plants with surrounding soil from the field.<br/>
      3.Cleaning of implements used in after planting the infested field before using it in other non infested field to prevent the spread of inoculums to other areas.<br/>
      4.Planting of healthy suckers extracted from healthy plantation.<br/>
      5.Care during cultivation to avoid root injury and control of nematodes.<br/>
      6.Application of powder formulation of bioagents such as Trichoderma spp., Pseudomonas fluorescens and Bacillus subtilis @ 15 gms for 4 times once at time of planting in the planting pits and remaining doses at 3rd 5 th and 7th months after planting around the plants.</p>
      category1='Curative measures:';
      description1=<p>1.corm injection with 2% Carbendazim 50 WP@3ml/plant.<br/>
      2.capsule application with Carbendazim 50 WP @50mg/capsule at 3rd, 5th and 7th month after planting</p>
      image = panamawilt;
      break;

    case 'Aphidsnana':
      name = 'Aphids';
      category='Preventive measures';
      description = 'Field sanitization.';
      category1='Curative measures:';
      description1="THIAMETHOXAM 25% WG @ 0.4 gm/Lit";
      image = aphidsnana;
      break;

    case 'Sigatokabana':
      name = 'Sigatoka';
      category='Preventive measures';
      description = <p>1. Regular field sanitation.<br/>
      2. Planting of banana strictly in the recommendation month i.e. June and October.<br/>
      3. Suckers should be removed in time.<br/>
      4. The drainage system should be proper; water logging will increase the humidity which favours infection.<br/>
      5. Removals of the infected leaves regularly once in a month starting from 2nd month of planting, destroys it by burning outside of field or dump it in manure pit and cover it with soil..</p>
      category1='Curative measures:';
      description1=<p>1.Carbendazim 50 WP@1g/lit water.<br/>
      2. Mancozeb 75WP@ 2 g/lit water.<br/>
      3. Copper oxychloride50 WP@ 2.5 g / lit water.<br/>
      4 Ziram 27 SC@2 ml / lit water.<br/>
      5. Chlorothalonil 75 WP 2 g / lit water</p>
      image = sigatokabana;
      break;

    case 'Steakvirus':
      name = 'Steakvirus';
      category='Preventive measures';
      description = 'Infected plants should be destroyed and replaces with virus-tested with virus-tested plants.';
      category1='Curative measures:';
      description1="Mealybug vectors should be controlled by spraying imidacloprid 0.5 ml per liter water if virus incidence is high.";
      image = steakvirus;
      break;

    default:
      name = '';
      category='';
      description = '';
      category1='';
      description1='';
      image = '';
  }

  return (
    <>
    <div className="inner">
    <h2>{name}</h2>
    
    <div className="box">
      <img src={image} alt={name} />
      </div>
      <div className="container">
       <h2>{category}</h2>
      <p>{description}</p>
      <h2>{category1}</h2>
      <p>{description1}</p>
      </div>
      
    </div>
    </>
  );
};

export default FlowerDetail;
