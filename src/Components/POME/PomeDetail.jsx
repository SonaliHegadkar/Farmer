import React from 'react';
import { useParams } from 'react-router-dom';
import Aphidspome from '../images/Aphidspome.jpg';
import fruitcrackingpome from '../images/fruitcrackingpome.jpg'
import Sunscaldpome from '../images/Sunscaldpome.jpg'
import whiteflypome1 from '../images/whiteflypome1.jpg'
import './PomeDetails.css';

const PomeDetail = () => {
  const { id } = useParams();
  let name, category,category1,description, description1, image;
 
  switch (id) {
    case 'Aphidspome':
      name = 'Aphidspome';
      category='Preventive Measures:';
      description ='Collect and destroy the damaged plant parts. Maintain adequate aeration by proper training and pruning.Release first instar larva of Chrysoperla zastrowi sillemi @ 15 / flowering branch (four times) at 10 days.Interval from flower initiation during April.';
      category1='Curative measures';
      description1 = "Spray cyantraniliprole 10.26% OD @ 360 ml in 400 I of water / acre .Oxydemeton methyl 25% EC 3 ml/Liter of water";
      image = Aphidspome;
      break;

    case 'Sunscaldpome':
      name = 'Sunscaldpome';
      category='Preventive Measures:';
      description = '1. Proper irrigation management with optimum interval.2. Use required quantity of micro nutrients.';
      category1='Curative Measures:';
      description1 = "1. spray borax 1 gram per liter of water.";
      image = Sunscaldpome;
      break;

    case 'fruitcrackingpome':
      name = 'fruitcrackingpome';
      category='Preventive Measures:'
      description = '1).Bagging of fruits. Manage the Bahar as per local climatic conditions.2).Apply additional MOP to sustain excessive drought and heat.';
      category1='Curative Measures:';
      description1 = "1. There is no curative action available for this category.";
      image = fruitcrackingpome;
      break;
    case 'whiteflypome1':
      name = 'whiteflypome1';
      description = '1)Field sanitation. 2)Removal of host plants.  3)Installation of yellow sticky traps.  4)Spray neem oil 3% or NSKE 5%.  5)Release of predators viz., Coccinellid predator, Cryptolaemus montrouzieri and lace wing fly,';
      category1='Curative Measures:';
      description1 = "1. Spray Dimethoate 30 EC @1.7 ml or Oxydemeton methyl 25 EC @ 1.5 ml or imidacloprid 17.8 SC @ 0.3 ml per liter of water.Roses are red.";
      image = whiteflypome1;
      break;
    
      
    default:
      name = '';
      description = '';
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

export default   PomeDetail;
