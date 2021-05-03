import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import $ from 'jquery';
import './css/style.css'
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation.scss';
import "./lightslider.css"
import "./JQuery3.3.1"
import "./lightslider"
import workersList from './Constant'
// import '../public/css/';
import console from './console.js'

import WorkerService from './service/WorkerService';


class WorkForceSlider extends React.Component {

    constructor(props){
        super(props)
        this.state={
            eng_List:[],
            meson_List:[]
        }

    }
   
    componentDidMount(){

       
        

        // JavaScript Document
        $(document).ready(function() {
         $('#autoWidth').lightSlider({
            autoWidth:true,
            loop:true,
              onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');


            
        } 
    });
    
    
    $('#autoWidth1').lightSlider({
        autoWidth1:true,
        loop:true,
          onSliderLoad: function() {
        $('#autoWidth1').removeClass('cS-hidden');


        
    } 
});  
  });

  this.loadAllEngWorkers();
  this.loadAllMesonWorkers();
 

 }

    


 loadAllEngWorkers = () => {
    //  console.log("PArimalan")
    WorkerService.fetchWorkerByTitle("eng")
    .then((res)=> {
      this.setState({eng_List:res.data})
    })
  }

  loadAllMesonWorkers = () => {
    //  console.log("PArimalan")
    WorkerService.fetchWorkerByTitle("mesan")
    .then((res)=> {
      this.setState({meson_List:res.data})
    })
  }

    render(){

        
       
        return(

    <>
     
           <div>
                {/* hearder start */}
                <div className="head_background">       
                    <div className="heading">
                    <h1>E N G I N E E R I N G &emsp; E1</h1>
                    </div>  
                    
                      {/* sider---- */}
                    <div className="container_card" >
                    
                    <ul id="autoWidth" className="cs-hidden "> 
                        {this.state.eng_List.map(workers=>(            
 
                        <li className="item-a" key={workers.id}>
                            {/* slider box start */}
                            <div className="box">                    
                                <p className="marvel">{workers.name}</p>
                                 {/* modle */}
                                 <img src={workers.img} className="model"></img>
                                {/* details */}
                                <div className="details">
                                    {/* logo-character */}
                                    {/* <img src="images/team/team2.jpg" className="logo logo1"></img> */}
                                    {/* character-details */}
                                    <p>{workers.data}</p>
                                </div>

                            </div>   
                            {/* SliderEnd     */}
                        </li> 
                                           
                         ))}
                    </ul>           
                </div> 
            </div> 

            <div>
                       {/* hearder start */}
                <div className="head_background">       
                    <div className="heading">
                    <h1>M E S O N  &emsp;</h1>
                    </div> 
                </div>      
                     {/* sider---- */}
                    <div className="container_card" >
    
    <ul id="autoWidth1" className="cs-hidden"> 
        {this.state.meson_List.map(workers=>(            

        <li className="item-a" key={workers.id}>
            {/* slider box start */}
            <div className="box">                    
                <p className="marvel">{workers.name}</p>
                 {/* modle */}
                 <img src={workers.img} className="model"></img>
                {/* details */}
                <div className="details">
                    {/* logo-character */}
                    {/* <img src="images/team/team2.jpg" className="logo logo1"></img> */}
                    {/* character-details */}
                    <p>{workers.data}</p>
                </div>

            </div>   
            {/* SliderEnd     */}
        </li> 
     
                           
         ))}
    </ul>    
         
</div>        



            </div>
                  

           
       

</div>







</>

        )
    }
    
}export default WorkForceSlider;
