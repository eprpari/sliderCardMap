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
class CardSlider extends React.Component {
    constructor(props){
        super(props)
        this.state={
            workersList:[]

        }
    }  


componentDidMount(){
    $(document).ready(function() {
        $('#autoWidth').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        });  
      });
    }

    render(){

        
       
        return(

    <div>

            <div className="container_card" >
               
                
                {/* sider---- */}
                    <ul id="autoWidth" className="cs-hidden">
                    

                    {this.state.workersList.map(workers=>(

                      
                    <li className="item-a" key={workers.id}> 
                            {/* slider box start */}
                        <div className="box">

                     <p className="marvel">{workers.title}</p>
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
                {/* slider box end */}
                                </li>
                             
        
                            ))}
               
                    </ul>  
                    
               
            </div>
    </div>
        )
    }
    
}export default CardSlider;
