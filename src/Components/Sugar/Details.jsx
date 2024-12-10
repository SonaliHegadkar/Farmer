import React from 'react';
import { useParams } from 'react-router-dom';
import phosphorusdefsugar1 from '../images/phosphorusdefsugar1.jpg'
import redrootsugar from '../images/redrootsugar.jpg'
import aphidssugar from '../images/aphidssugar.png'
 import brownspotsug1 from '../images/brownspotsug1.jpg'
 import grassyshootsugar from '../images/grassyshootsugar.png'


const Details = () => {
  const { id } = useParams();
  let name, category,category1,description, description1, image;
 
  switch (id) {
    case 'Phosphorusdef':
      name = 'Phosphorus deficiency';
      category='Preventive Measures:';
      description = <p>1.Apply organic manures @ 8 to 10 tonnes/acre.<br/>
      2.Application of fertilizers on soil testing report.<br/>
      3.Application of biofertilizer PSB @5 Kg /acre.</p>
      category1='Curative Measures:';
      description1 = "Foliar spray of DAP 2% twice at fortnight interval.";
      image = phosphorusdefsugar1;
      break;

    case 'Redrootsugar':
      name = 'Redroot';
      category='Preventive Measures:';
      description = <p>1. Avoid planting of highly susceptible varieties.<br/>
      2. Planting material should be collected from disease free seed nursery.<br/>
      3. Before cane planting treat the setts by dipping them for 15 minutes into solution containing carbendazim 50% WP @ 100 gram in 100 liters of water.<br/>
      4. After the harvest of the diseased crop, left over trash with stools should be burnt immediately.<br/>
      5. Avoid ratooning of the diseased crop.</p>
      category1='Curative Measures:';
      description1 = <p>1. Rogue out the affected clumps & destroy it by burning.Stools should not be buried in the soil or should not be kept or thrown on bunds.<br/>
      2. After rouging, drench the spot with Carbendazim 50% WP @1gm/liter of water.<br/>
      3. Spray the crop with Carbendazim 50% WP @1gm/liter of water 2 to 3 times at an interval of 10 to 12 days can be useful to suppress the disease incidence.</p>
      image = redrootsugar;
      break;

    case 'aphidssugar':
      name = 'Aphids';
      category='Preventive Measures:'
      description = <p>1.De-trashing of canes if infestation exceeds low intensity and remove water shoots.<br/>
      2.Paired row system of planting.<br/>
      3.Avoid excessive use of nitrogenous fertilizers.<br/>
      4.Use of organic fertilizers.<br/>
      5.Rapping of canes all along the rows.<br/>
      6.Do not transport Infested tops.<br/>
      7.Infested canes should not be used as seed for planting.</p>
      category1='Curative Measures:';
      description1 = "1. Carbofuron 3G @ 30 kg/ha.";
      image = aphidssugar;
      break;
    case 'brownspotsug1':
      name = 'Brownspot sugar';
      category='Preventive Measures:';
      description = <p>1. Use of healthy diseased free planting material collected from seed nursery for planting.<br/>
      2.Before cane planting treat the setts by dipping them for 10 to 15 minutes into solution containing carbendazim 50% WP @ 100 gram in 100 liters of water. Dry them before planting.<br/>
      3.Make proper water drainage facility at field to drain out excess water in rainy season</p>
      category1='Curative Measures';
      description1 = "Spray the crop with Propiconazole 10% EC @ 1 ml per liter or Mancozeb 72% WP @ 3 gm/liter of water immediately after disease symptoms appear into field at few places. Repeat the spray 7 days after first application.";
      image = brownspotsug1;
      break;
    case 'grassyshootsugar':
      name = 'Grassyshoot sugar';
      category='Preventive Measures:';
      description = <p>1.Use of healthy diseased free planting material collected from seed nursery for planting.<br/>
      2.Roguing of affected stools and destruction Mass eradication may help consistent reduction in inoculum in the area.<br/>
      3.Heat therapy: seed/planting material should be treated with hot water (50°C for 120 Min.) or moist hot air (54°C for 21/2 hrs.).<br/>
      4.Ratooning of affected crop must be avoided.</p>
      category1='Curative Measures';
      description1 = "1. Since grassy shoot is a mycoplasma disease there is no curative measure present against for the management of disease. Follow Preventive measures.";
      image = grassyshootsugar;
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

export default  Details;
