import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import $ from 'jquery';
import './css/style.css'
import DeviceService from './service/DeviceService';
import StaticComponent from './StaticComponent';

class SmartHomeMore extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            id: '',
            title: '',
            price: '',
            description:'',
            avatarUrl: '',
            imageUrl01 :'',
           imageUrl02 :'',
           imageUrl03 :'',
           imageUrl04:'',
           leDescrip01:'',
           leDescrip02:'',
           leDescrip03:'',
           riDescrip04:'',
        }
    }

    componentDidMount() {
        // console.log("hiiiiii");


        const deviceId = this.props.match.params.id;
        console.log(deviceId);
            
        DeviceService.fetchDeviceById(deviceId)
        
            .then((res) => {
                let device = res.data;
                this.setState({
                    id: device.id,
                    title: device.title,
                    price: device.price,
                    description: device.description,
                   avatarUrl: device.avatarUrl,
                   imageUrl01: device. imageUrl01,
                   imageUrl02: device. imageUrl02,
                   imageUrl03: device. imageUrl03,
                   imageUrl04: device. imageUrl04,
                   leDescrip01:device.leDescrip01,
                   leDescrip02:device.leDescrip02,
                  leDescrip03:device.leDescrip03,
                   riDescrip04:device.riDescrip04,
                })
            });
    }

   
      render(){

        return(

            <>
           
           	<section id="about"  key={this.state.id}>
                <div  className="container">
					<div className="row">
						<div className="col-md-4 wow animated fadeInLeft">
							<div className="recent-works">
								<h3>{this.state.title}</h3>
								<div id="works">
									<div className="work-item">
										<p> {this.state.leDescrip01}</p>
									</div>
									<div className="work-item">
										<p>  {this.state.leDescrip02}</p>
									</div>
									<div className="work-item">
										<p>  {this.state.leDescrip03}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-7 col-md-offset-1 wow animated fadeInRight">
							<div className="welcome-block">
								<h3>Welcome To Our Site</h3>								
						     	 <div className="message-body">
									<img src={this.state.avatarUrl} className="pull-left" alt="member"/>
						       		<p>  {this.state.riDescrip04} </p>
						     	 </div>
                                  
						    </div>
                             <div>
                                         <img src={this.state.imageUrl01}></img>
									    <img src={this.state.imageUrl02}></img>
										 <img src={this.state.imageUrl03}></img>
										  <img src={this.state.imageUrl04}></img>
                                       
                                   </div>
                             </div>
					    </div>
                     </div>
			</section>
           
         <div>
		 <StaticComponent/>
         </div>
        
</>
        )
    }
    
    
}export default SmartHomeMore;