import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Workforce from "./Workforce";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
// import styles from './mystyle.module.css'; 
import Header from "./Header";
import Home2 from "./Home2"
import Footer from "./Footer"
import Contact from "./Contact"
import Company from "./Company"
import CardSlider from "./CardSlider"
// import AppRouter from "./components/RouterComponent";
// import NavBar from "./components/NavBar";
import Container from '@material-ui/core/Container';
import AdminPage from './AdminPage'

import './css/style.css'
import MatSlider from  './MatSlider'
import WorkForceSlider from "./WorkForceSlider.js"
import CompanyHome from './CompanyHome';
import MatSlider2 from './MatSlider2';
import SmartHome from './SmartHome';
import SmartHomeMore from './SmartHomeMore';
import ListworkerComponent from './components/WorkForce/ListWorkerComponent';
import AddWorkerComponent from './components/WorkForce/AddWorkerComponent';
import EditWorkerComponent from './components/WorkForce/EditWorkerComponent';
import ListMaterial from './components/MaterialAdmin/ListMaterial';
import EditMaterialComponent from './components/MaterialAdmin/EditMaterial';
import AddMaterial from './components/MaterialAdmin/AddMaterial';
import ListWorkerComponent from './components/WorkForce/ListWorkerComponent';
import AddDeviceComponent from './components/DevicesAdmin/AddDeviceComponent';
import ListDeviceComponent from './components/DevicesAdmin/ListDeviceComponent';
import EditDeviceComponent from './components/DevicesAdmin/EditDeviceComponent';
import AddPlantComponent from './components/PlantAdmin/AddPlantComponent';
import EditPlantComponent from './components/PlantAdmin/EditPlantComponent';
import ListPlantComponent from './components/PlantAdmin/ListPlantComponent';
import AddProjectComponent from './components/ConstructionAdmin/AddProjectComponent';
import AddCompanyComponent from './components/ConstructionAdmin/AddConstruction';
import EditCompanyComponent from './components/ConstructionAdmin/EditConstruction';
import ListCompanyComponent from './components/ConstructionAdmin/ListConstruction';
import ListPeoplesaidComponent from './components/PeopleSaid/ListPeoplesaidComponent';
import AddPeoplesaidComponent from './components/PeopleSaid/AddPeoplesaidComponent';
import EditPeoplesaidComponent from './components/PeopleSaid/EditPeoplesaidComponent';
import PeopleHome from './PeopleHome';
import Plant from './Plant';
import Peoplesaid from './Peoplesaid';
import SimpleMap from './SimpleMap';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import DemoCarousel from './DemoCarousel';
import FinalSlider from './FinalSlider';
import AddSlider from './HomeSlider1';







function App() {
  return (
  <>
  <div>
  </div>
     <div>       
    
      <Router>
     
        {/* <FinalSlider/> */}
        {/* <Plant/> */}
        <Header/>
        {/* <SimpleMap/> */}

        
        
     <Switch>
        <Route exact path="/" component ={Home2} />
        <Route path="/Workforce" component ={Workforce} />
        <Route path="/Contact" component ={Contact} />
        <Route path="/company" component ={CompanyHome} />
        <Route path="/homeautomation" component ={SmartHome} />
        <Route path="/materials" component={MatSlider2}/>
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/admin/worker" component={ListWorkerComponent}/>
        <Route exact path="/admin/add-worker" component={AddWorkerComponent}/>
        <Route exact path="/admin/edit-worker:id" component={EditWorkerComponent}/>
        <Route exact path="/admin/mat" component={ListMaterial}/>
        <Route exact path="/admin/edit-mat/:id" component={EditMaterialComponent}/>
        <Route exact path="/admin/add-mat" component={AddMaterial}/>
        <Route path="/admin/add-devices" component={AddDeviceComponent} />
        <Route path="/admin/devices" component={ListDeviceComponent} />
        <Route path="/admin/edit-devices/:id" component={EditDeviceComponent} />
        <Route path="/admin/plants" component={ListPlantComponent} />
        <Route path="/admin/add-plant" component={AddPlantComponent} />
        <Route path="/admin/edit-plant/:id" component={EditPlantComponent} />
        <Route exact path="/view-more/:id" component={SmartHomeMore}/>
        <Route exact path="/admin/add-project" component={AddProjectComponent}/>
        <Route exact path="/admin/add-company" component={AddCompanyComponent}/>
        <Route exact path="/admin/edit-company/:id" component={EditCompanyComponent}/>
        <Route exact path="/admin/company" component={ListCompanyComponent}/>
        <Route exact path="/view-company/:id" component={Company}/>
        <Route exact path="/plant" component={Plant}/>
        <Route path="/admin/peoplesaid" component={ListPeoplesaidComponent} />
        <Route path="/admin/add-peoplesaid" component={AddPeoplesaidComponent} />
        <Route path="/admin/edit-peoplesaid/:id" component={EditPeoplesaidComponent} />
        <Route exact path="/peoplesaid" component={PeopleHome}/>
        <Route exact path="/peoplesaid/view-peoplesaidmore/:id" component={Peoplesaid}/>
        


        

      </Switch>
     <Footer/> 

     </Router> 
   </div>
   
   </> 
   
  );
}

export default App;
