import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Schemes1 from './Pages/Schemes1';
import Signup from './Signup';
import Login from './Login';
import CropManagement from './Cropmanagement';
import Flower from './Components/Flower';
import Rose from './Components/Rose/Rose'
import Grapes from './Components/Grapes/Grapes';
import FlowerDetail from './Components/Rose/FlowerDetail';
import Sugar from './Components/Sugar/Sugar';
import  Details from './Components/Sugar/Details'
import FlowerDetail2 from './Components/Grapes/FlowerDetail2'
import Pap from './Components/Papaya/Pap'
import Papaya from './Components/Papaya/Papaya'
import Chili from './Components/Chili/Chili';
import ChiliDetail from './Components/Chili/ChiliDetail'
import Harvest from './Pages/Harvest';
//import Weatherapp from './Components/Weatherapp.jsx';
import Pome from './Components/POME/Pome';
import PomeDetail from  './Components/POME/PomeDetail'
import FeedbackForm from './Components/FeedbackForm';
import Translate from './Components/Translate';

function App() {
  
  return (
    <div>
      <Translate />
    <BrowserRouter>
    
    <Routes>
    <Route path='/home' element={<Home/>}/>
      
      
      <Route path='/schemes' element={<Schemes1/>}/>
      
      <Route path='/harvest' element={<Harvest/>}/>
      <Route path='/register' element={<Signup />} />
      <Route path="/cropmanagement" element={<CropManagement/>} />
        
        <Route path='/' element={<Login />}></Route>

        <Route exact path="/agriad" element={<Flower />} />
        <Route path="/rose" element={<Rose />}  />
        <Route path="/sugar" element={<Sugar />} />
        <Route path="/flow/:id" element={<Details />} /> 
        <Route path="/flower/:id" element={<FlowerDetail />} />
        <Route path="/pap/:id" element={<Pap />} />
        <Route path="/papaya" element={<Papaya />} />
        <Route path="/grapes" element={<Grapes />} />
        <Route path="/flower1/:id" element={<FlowerDetail2 />} />
        <Route path="/chili" element={<Chili />} />
        <Route path="/chil/:id" element={<ChiliDetail />} />
        <Route path="/pome" element={<Pome />} />
        <Route path="/det/:id" element={<PomeDetail />} />
        <Route path='/feedback' element={<FeedbackForm/>}/>
        
     
    
     
     
     
    </Routes>
    
    </BrowserRouter>
        
    </div>
  );
}

export default App;
