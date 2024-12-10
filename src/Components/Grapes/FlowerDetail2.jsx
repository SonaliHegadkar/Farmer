// components/FlowerDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blackrotgrape1 from '../images/grapes/blackrotgrape1.jpg'
import fleabeetlegrape from '../images/grapes/fleabeetlegrape.jpg'
import fruitcrackinggr from '../images/grapes/fruitcrackinggr.jpg'
import phosphorousdefgrape from '../images/grapes/phosphorousdefgrape.jpg'
import rustgrape1 from '../images/grapes/rustgrape1.jpg'
import thirpsgrape1 from '../images/grapes/thirpsgrape1.jpg'


const FlowerDetail = () => {
  const { id } = useParams();
  let name, category,category1,description,description1, image;
 
  switch (id) {
    
    case 'blackrotgrape1':
      name = 'Blackrot';
      category='Preventive Measures:';
      description = '1. Mummified berries left on vines should be collected and destroyed. 2. Cultivation practices should ensure free circulation of air.';
      category1='Curative Measures:';
      description1="1. Spraying Bordeaux mixture (4:4:100) once or twice on young bunches prevents the infection. 2.Copper fungicides are preferred for spraying on bunches, as they do not leave any visible deposits on the fruit surface.";
      image=blackrotgrape1;
      break;

    case 'fleabeetlegrape':
      name = 'Flea Beetle';
      category='Preventive Measures:';
      description = '1. Remove the loose bark at the time of pruning to prevent egg laying. 2. Shake vines to dislodge adult beetles, collect into trays containing kerosenated water (1 kerosene: 9 water) and destroy them.3. Put bundles of dry shreds of banana on the pruned end of the vines in the evening. Beetles, which take shelter on these at night, can be shaken and collected in the morning and kill them. 4. Use high quality, large, vigorous seed- the quicker a seedling can establish itself the more damage it can withstand from flea beetles. 5. Seed early a plant that establishes quickly can ward off flea beetles more effectively. Caution advised if high populations are seen early in fields when planting. Crops must be monitored daily upon emergence for damage.';
      category1='Curative Measures:';
      description1="Imidacloprid 17.8%SL@120-160 ml in 400 I of water/acre or lambdaCyhalothrin 4.9%CS @100 g in 200-400 I of water/acre or malathion50% EC@400 ml in 600-800 I of water/acre.";
      image=fleabeetlegrape;
      break;

    case 'fruitcrackinggr':
      name = 'Fruit Cracking';
      category='Preventive Measures:';
      description = '1. Application of recommended basal dose of fertilizer as per soil type. 2. Manage the pest and disease. 3. Irrigate the orchard at regular intervals.';
      category1='Curative Measures:';
      description1="Spray Borax 1 gm per liter water will be helpful.";
      image = fruitcrackinggr;
      break;

      case 'phosphorousdefgrape':
      name = 'PhosphorousDeficiency';
      category='Preventive Measures:';
      description = '1. Application of recommended basal dose offertilizer as per soil type. 2. If soil is calcareous use DAP instead of SSP.';
      category1='Curative Measures:';
      description1="Spraying of 12:61:00 @ 5 gm per liter water will be helpful.";
      image =phosphorousdefgrape;
      break;

    case 'rustgrape1':
      name = 'Rust';
      category='Preventive Measures:';
      description = 'Growing early maturing varieties.';
      category1='Curative Measures:';
      description1="Application of Mancozeb 2.5 OR thiphanate methyl 1 gm or propiconazole 1 ml per liter water.";
      image =rustgrape1;
      break;

    case 'thirpsgrape1':
      name = 'Thirps';
      category='Preventive Measures:';
      description = '1. Use blue sticky traps for thrips @ 4-20 traps/ acre. 2. Install pheromone traps @ 4-5 traps/acre 3. Use light trap @ 1/acre and operate between 6 pm and 10 pm 4. Erecting of bird perches @ 20/ acre for encouraging predatory birds such as King crow, common mynah etc. 5. Set up bonfire during evening hours at 7-8 pm.';
      category1='Curative Measures:';
      description1="Emamectin benzoate 5% SG @ 88 g in 200-400 I of water/acre or fipronil 80%WG @ 20-25 g in 300-400 I of water/acre or lambdacyhalothrin 4.9% CS @100 g in 200-400 I of water/acre";
      image = thirpsgrape1;
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
  );
};

export default FlowerDetail;
