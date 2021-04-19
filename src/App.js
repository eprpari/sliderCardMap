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
import Aboutus from "./Aboutus"
import CardSlider from "./CardSlider"


import './css/style.css'



function App() {
  return (
              
      <Router>
        <CardSlider/>
        <Header/>
      <Switch>
        <Route exact path="/" component ={Home2} />
        <Route path="/Workforce" component ={Workforce} />
        <Route path="/Contact" component ={Contact} />
        <Route path="/Aboutus" component ={Aboutus} />
        
      </Switch>
      
      <Footer/>

      </Router>
     
    // </div>
  );
}

export default App;
