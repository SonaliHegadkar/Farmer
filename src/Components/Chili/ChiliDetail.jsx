import React from 'react';
import { useParams } from 'react-router-dom';
import chilidie from '../images/chilidie.jpg'
import chilliborer from '../images/chilliborer.jpg'
import chillical from '../images/chillical.jpg'
import chillileafcurl from '../images/chillileafcurl.png'
import chilliwilt from '../images/chilliwilt.jpg'
import chillizinc from '../images/chillizinc.jpg'
 


const ChiliDetail = () => {
  const { id } = useParams();
  let name,category,category1,description, description1, image;
 
  switch (id) {
    case 'chilidie':
      name = 'Dieback';
      category='Preventive Measures:';
      description = <p>1. Seeds should be treated with carbendazim (0.25%) before sowing. <br/>
            2. Seedlings should be dipped in carbendazim (0.1%) before transplanting.</p>
      category1='Curative Measures:';
      description1 = <p>1. Prochloraz 26.7% + Tebuconazole 13.3% EW @ 1250 ml/ha. <br/>
      2. Kasugamacyin 3% SL @ 400-500 ml / Acre.
      <br/>
       3. difenoconazole 25% EC @ 50 ml in 200 litre of water/acre. <br/>
       4. tebuconazole 25% WG @ 200-300 g in 200 litre of water/acre</p>
      break;

    case 'chilliborer':
      name = 'Fruit Borer';
      category='Preventive Measures:';
      description = <p>1. Install pheromone traps @ 4-5/acre for monitoring adult moths activity. Replace the lures with fresh lures after every 2-3 weeks.<br/>
      2. Seed treatment with thiamethoxam 30% FS @ 7 g/kg seed <br/>
      3. Release of egg parasitoid Trichogramma pretiosum @ 50,000 adults (in the form of parasitized card)/acre/week commenced right from the start of flower initiation to till end of the crop</p>
      category1='Curative Measures:';
      description1 = <p>1.indoxacarb 14.5% + acetamiprid 7.7% W/W SC @ 160-200 ml in 200 I of water/acre. <br/>
      2. pyriproxyfen 5% + fenpropathrin 15% EC @ 200-300 ml in 200-300 I of water/acre. <br/>
      3. Emamectin benzoate 5% SG @ 80 g in 200 I of water/acre. <br/>
      4. fipronil 5% SC @ 320-400 ml in 200 I of water/ acre. <br/>
      5. novaluron 10% EC @ 150 ml in 200 I of water/ acre.</p>
      image = chilliborer;
      break;

    case 'chillical':
      name = 'Calcium Deficiency';
      category='Preventive Measures:';
      description = ' Application of fertilizers as per soil testing report.';
      category1='Curative Measures:';
      description1 = "1.Foliar spray of CaSO4 1%. 2. soil application of gypsum @ 25 kg/ha..";
      image = chillical;
      break;
      
    case 'chillileafcurl':
      name = 'Leaf Curl';
      category='Preventive Measures:';
      description = <p>1.Seed treatment with imidacloprid 70 WS (5 gm/ kg).<br/>
      2. Root dipping in Imidacloprid solution @ 4-5 ml per litre of water for one hour during transplanting of the seedlings.</p>
      category1='Curative Measures:';
      description1 =<p>1. Spray Neem seed kernal extract (5%)<br/>
      2. Two sprays of imidacloprid 17.8 SL (0.24 ml/lit) at 45 and 60 days after planting.</p>
      image = chillileafcurl;
      break;

    case 'chilliwilt':
      name = 'Wilt';
      category='Preventive Measures:';
      description = <p>1. Use a seed treatment on nursery plants by dipping the roots in 0.2% solution of mancozeb.<br/>
      2. Pseudomonas fluorescens root dipping treatment before transplanting.</p>
      category1='Curative Measures:';
      description1 = <p>1. Metalaxyl+mancozeb @ 250g/100 litre water / acre.<br/>
      2. Mancozeb @250 g/100 litre water / acre.</p>
      image =chilliwilt;
      break;

    case 'chillizinc':
      name = 'Zinc Deficiency';
      category='Preventive Measures:';
      description = 'Apply 10 kg of Zinc Sulphate /acre to soil in the final ploughing (if soil is deficient). Maintain neutral pH. Apply phosphorus fertilizers strictly according to the recommedation through soil testing.';
      category1='Curative Measures:';
      description1 = "Foliar spray of ZnSO4 @ 0.2-0.5% with 200 litres of spray solution per acre. Spraying should be repeated 2 times at an interval of 5-10 days.";
      image = chillizinc;
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

export default  ChiliDetail;
