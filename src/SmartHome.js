import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import $ from 'jquery';
import './css/style.css'
import DeviceService from "./service/DeviceService";
import { BrowserRouter as Router } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import StaticComponent from './StaticComponent';

class SmartHome extends React.Component {
   
  constructor(props){
    super(props)
    this.state={
        devices_list:[]
    }
}
 componentDidMount() {
this.loadAllDevices();
}
loadAllDevices = () => {
DeviceService.fetchDevices()

.then((res)=> {
  console.log(res);
  this.setState({devices_list : res.data})
})
}

  render(){

    return(
      <Router> 
        <div>
            
<section  className="service-2 section">
<div className="container">
<div className="row">

  <div className="col-12">
    {/* <!-- section title --> */}
    <div className="title text-center">
      <h2>Home Automation </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Voluptates, earum.
        <br/>
         </p>
      <div className="border"></div>
    </div>
    {/* <!-- /section title --> */}
  </div>

  <div className="col-md-4 text-center">
    <img src="https://www.gurita.co.uk/images/sam1.jpeg" style={{ height: "200px" }}  className="inline-block" alt="HomeAutomation"/>
  </div>
  <div className="col-md-8">
    <div className="row text-center">
    {this.state.devices_list.map(device =>(
      <div   key={device.id}className="col-md-6 col-sm-6 col-xs-12">
        <div className="service-item">
          <i className="tf-ion-ios-alarm-outline"></i>
          <h4>{device.title}</h4>
          <p>{device.description}
              <br/><br/>
              {/* <button  href={"/view-more/"+device.id}> Like More
            </button> */}
             <Button variant="h5" href={"/view-more/"+device.id} >
                                            More
                                        </Button>
          </p>
        </div>
      </div>
    ))}
      
    </div>
  </div>
</div> 
{/* <!-- End row --> */}
</div> 
{/* <!-- End container --> */}
</section>
{/* <!-- End section --> */}

</div>
<div>
<StaticComponent/>
</div>
</Router>
      )
}
    
}export default SmartHome;