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
import MaterialService from "./service/MaterialService";

class MatSlider2 extends React.Component {

    constructor(props){
        super(props)
        this.state={
            basicMat_List:[],
            paint_list:[]
           
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
  });

  this.loadAllMatList();
  this.loadAllPaint();
 
 

 }

    


 loadAllMatList = () => {
    MaterialService.fetchMaterialByMatType("basic")
    .then((res)=> {
      this.setState({basicMat_List:res.data})
    })
  }

  loadAllPaint = () => {
    MaterialService.fetchMaterialByMatType("paint")
    .then((res)=> {
      this.setState({paint_list:res.data})
    })
  }



    render(){

        
       
        return(
      <div>
 
           <div>
                {/* hearder start */}
                <div className="head_background">       
                    <div className="heading">
                    <h1>Basic &emsp; Materials </h1>
                    </div>  
                    
                      {/* sider---- */}
                    <div className="container_card" >
                   
                    <ul id="autoWidth " className="cs-hidden "> 
                        {this.state.basicMat_List.map(Mats=>(            
 
                        <li className="item-a" key={Mats.id}>
                            {/* slider box start */}
                            <div className="box">                    
                                <p className="marvel">{Mats.matName}</p>
                                 {/* modle */}
                                 <img src={Mats.MatImg} className="model"></img>
                                {/* details */}
                                <div className="details">
                                    {/* logo-character */}
                                    <img src="images/team/team2.jpg" className="logo logo1"></img>
                                    {/* character-details */}
                                    <p>{Mats.data}</p>
                                </div>

                            </div>   
                            {/* SliderEnd     */}
                        </li> 
                                           
                         ))}
                    </ul>  
                    </div>         
                </div> 
            </div> 

            <div>
                {/* hearder start */}
                <div className="head_background">       
                    <div className="heading">
                    <h1> Paint-List</h1>
                    </div>  
                    
                      {/* sider---- */}
                    <div className="container_card" >
    
                    <ul id="" className="cs-hidden"> 
                        {this.state.paint_list.map(Paint=>(            
 
                        <li className="item-a" key={Paint.id}>
                            {/* slider box start */}
                            <div className="box">                    
                                <p className="marvel">{Paint.matName}</p>
                                 {/* modle */}
                                 <img src={Paint.MatImg} className="model"></img>
                                {/* details */}
                                <div className="details">
                                    {/* logo-character */}
                                    {/* <img src="images/team/team2.jpg" className="logo logo1"></img> */}
                                    {/* character-details */}
                                    <p>{Paint.data}</p>
                                </div>

                            </div>   
                            {/* SliderEnd     */}
                        </li> 
                                           
                         ))}
                    </ul>   
                   
                    </div>        
                </div> 
            </div> 
                  
       







            </div>
        )
    }
    
}export default MatSlider2;
