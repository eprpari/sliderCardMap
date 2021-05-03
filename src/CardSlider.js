// import React , {Component} from 'react';
// import ReactDOM from 'react-dom';
// import './App.css'
// import $ from 'jquery';
// import './css/style.css'
// // import AwesomeSlider from 'react-awesome-slider';
// // import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation.scss';
// import "./lightslider.css"
// import "./JQuery3.3.1"
// import "./lightslider"
// import workersList from './Constant'
// // import '../public/css/';
// import console from './console.js'
// import ApiService from "./service/ApiService"

// class CardSlider extends React.Component {
//     constructor(props){
//         super(props)
//         this.state={
//             id:'',
//             name:'',
//             number: '',
//             address: '',
//             img: '',
//             city: '',
//             age: '',
//             salary: '',
//             data : '',            
//             workersList:[]        
//     }
//     }
//     onChange = (e) =>{this.setState({ [e.target.name]: e.target.value });}
    
//     componentDidMount(){
//       $(document).ready(function() {
//           $('#autoWidth').lightSlider({
//               autoWidth:true,
//               loop:true,
//               onSliderLoad: function() {
//                   $('#autoWidth').removeClass('cS-hidden');
//               }
//           });
//         })
//         this.loadAllWorkers();


//           var popupViews = document.querySelectorAll('popup-view');
//           var popupBtns = document.querySelectorAll('popup-btn')
//           var closeBtn = document.querySelectorAll('close-btn')    //   javaScriptForqucikbuttonviwe
//           var popup = function(popupClick){
//             popupViews[popupClick].classList.add('active');
//           }
//           popupBtns.forEach((popupBtn , i) => {
//             popupBtn.addEventListener("click",() => {
//                 popup(i);
//             })
//           })    //   javascript for close Btns      closeBtn.forEach((closeBtn)=>{
//           closeBtn.addEventListener("click",() => {
//               popupViews.forEach((popupView) => {
//                   popupView.classList.remove('active');
//               })
//           })
//     }


//     //   this.loadAllWorkers();
//     // const userId = this.props.match.params.id;
//     fetchUserById = (userId) => {
//         ApiService.fetchUserById(userId)
//         .then((res)=> {
//         // console.log(res);
//         const user = res.data;       
//         this.setState({ id: user.id,
//             name: user.name,
//             number: user.number,
//             address: user.address,
//             img: user.img,
//             city: user.city,
//             age: user.age,
//             salary: user.salary,
//             data: user.data
//           })
//         })
//       }

//       loadAllWorkers = () => {
//         ApiService.fetchUsers()
//         .then((res)=> {
//         //   console.log(res);
//           this.setState({workersList:res.data}) 
//         })       
//       }
    
//      // const userId = this.props.match.params.id;
// //         console.log (userId);
//     //   loadAllWorkers = () => {
//     //     ApiService.fetchUsers()
//     //     .then((res)=> {
//     //     // console.log(res);
//     //     // this.setState({workersList:res.data})  
//     //     const user = res.data;     
//     //     this.setState({ id: user.id,
//     //         name: user.name,
//     //         number: user.number,
//     //         address: user.address,
//     //         img: user.img,
//     //         city: user.city,
//     //         age: user.age,
//     //         salary: user.salary,
//     //         data: user.data
//     //       })
//     //     })
// //       }
//  render(){
//    return(
//     <div>          
//           <div className="container_card" >
//     {/* sider---- */}
//          <ul id="autoWidth" className="cs-hidden">
//     {this.state.workersList.map(workers=>(                  
//     <li className="item-a" key={workers.id}>
//                  {/* slider box start */}
//              <div className="box">                    
//               <p className="marvel" name="name" value={workers.name} onChange={this.onChange}></p>
//       {/* modle */}
//           <img src={workers.img}className="model"></img>
//           {/* details */}
//           <div className="details">
//               {/* logo-character */}
//               {/* <img src="images/team/team2.jpg" className="logo logo1"></img> */}
//               {/* character-details */}
//               <p>{workers.salary}</p>
//           </div>
//           {/* popupstat\rt */}
//           <utton className="popup-btn" onClick={() =>this.fetchUserById(workers.id)}>Quick View</Button>                        
//           <div className="popup-view">
//                  <div className="popup-card">
//                      <a><i className="fas fa-times close-btn"></i></a>
//                      <div className="product-img">
//                          <img src={this.state.img}
//                          ></img>
//                      </div>
//                      <div className="info">
//                          <h2 name="title" value={this.state.title}></h2>
//                          <p name="data" value={this.state.data} onChange={this.onChange}></p>
//                          <span className="price" name="salary" value={this.state.salary} onChange={this.onChange}> </span>
//                          <span className="phoneNumber"name="number" value={this.state.number} onChange={this.onChange}></span>
//                          </div>
//                  </div>                        </div>                </div>
//      {/* slider box end */}
//                      </li>                            

//                     ))}
//                    </ul>           
//                   </div>
//                 </div>
//                )
  
//              }
//           }
// export default CardSlider;