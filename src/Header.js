import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css'

import './css/style.css'

import axios from 'axios'


class Header extends React.Component {

  constructor(props){
    super(props);
    this.state ={
    
    companyNames:[],
    
    }
    }
    componentDidMount(){
    axios.get('http://localhost:8080/admin/company')
    .then(response => {
    console.log(response.data)
    this.setState({
    companyNames: response.data
    })
    })
    
    }

    render(){
       
        return(
            <div>

{/* <!-- Header start --> */}
<header id="header" className="header-one " >
  <div className="bg-white">
    <div className="container" >
      <div className="logo-area">
          <div className="row align-items-center">
            <div className=" col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                <a className="d-block" href="/" >
                  <img loading="lazy" src="images/logo.png" alt="E.P.R" className="logo"/>
                </a>
            </div>
            {/* <!-- logo end --> */}
  
            <div className="col-lg-9 header-right">
                <ul className="top-info-box">
                  <li>
                    <div className="info-box">
                      <div className="info-box-content">
                          <p className="info-box-title">Call Us</p>
                          <p className="info-box-subtitle">(+94) 74-17 17-119/118</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="info-box">
                      <div className="info-box-content">
                          <p className="info-box-title">Email Us</p>
                          <p className="info-box-subtitle">eprgroupers001@gmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li className="last">
                    <div className="info-box last">
                      <div className="info-box-content">
                          <p className="info-box-title">Global Certificate</p>
                          <p className="info-box-subtitle">ISO 443546:3029<br/> @ SL PV-00218757</p>
                      </div>
                    </div>
                  </li>
                  <li className="header-get-a-quote">
                    <a className="btn  btn-outline-dark " href="http">Get A Quote</a>
                  </li>
                </ul>
                {/* <!-- Ul end --> */}
            </div>
            {/* <!-- header right end --> */}
          </div>
          {/* <!-- logo area end --> */}
  
      </div>
      {/* <!-- Row end --> */}
    </div>
    {/* <!-- Container end --> */}
  </div>

  <div className="site-navigation navbar-fixed-top bg-dark  ">
    <div className="container ">
        <div className="row">
          <div className="col-lg-12 ">
              <nav className="navbar navbar-expand-lg   bg-dark navbar-dark p-0 ">
                
                <div className="logo">
                    <a className="d-block" href="/">
                      <img loading="lazy"  src="images/logo.png" alt="E.P.R"/>
                    </a>
                </div>
                {/* !-- logo end --> */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div id="navbar-collapse" className=" collapse navbar-collapse">
                    <ul className="nav navbar-nav ml-auto align-items-center">
                      <li className="nav-item dropdown " style={{color:"//#ff3433"}}>
                          <Link to="/" className="nav-link dropdown-toggle">Home</Link>
                          {/* <ul className="dropdown-menu" role="menu">
                            <li><a href="index.html">Home One</a></li>
                            <li className="active"><a href="index-2.html">Home Two</a></li>
                          </ul> */}
                      </li>

                      <li className="nav-item dropdown ">
                      <Link to="/company" className="nav-link dropdown-toggle " data-toggle="dropdown">Company
                          <i className="fa fa-angle-down"></i></Link>
                          <ul className="dropdown-menu" role="menu">
                          {this.state.companyNames.map(companyname =>
                           
                           <li>
                             
                              <a href={"/view-company/"+companyname.id} option key={companyname.id} value={companyname}> <center>{companyname.companyName} </center>
                              </a>
                            </li>
)
} 
                            {/* <li><a href="/company/{t/id}">About Us</a></li>
                            <li><a href="team.html">Our People</a></li>
                            <li><a href="testimonials.html">Testimonials</a></li>
                            <li><a href="faq.html">Faq</a></li> */}
                            
                          </ul>
                      </li>
{/*               
                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Projects <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="projects.html">Projects All</a></li>
                            <li><a href="projects-single.html">Projects Single</a></li>
                          </ul>
                      </li>
              
                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Services <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="services.html">Services All</a></li>
                            <li><a href="service-single.html">Services Single</a></li>
                          </ul>
                      </li> */}
              
                      <li className="nav-item dropdown ">
                          <Link to="/workforce" className="nav-link dropdown-toggle" >Work Force</Link>
      
                      </li>
              
                      {/* <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">News <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="news-left-sidebar.html">News Left Sidebar</a></li>
                            <li><a href="news-right-sidebar.html">News Right Sidebar</a></li>
                            <li><a href="news-single.html">News Single</a></li>
                          </ul>
                      </li> */}
                <li className="nav-item">
                        <Link to="/materials" className="nav-link">Material</Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/homeautomation" className="nav-link">Home Automation</Link>
                        </li>
                      
                        <li className="nav-item">
                        <Link to="/plant" className="nav-link">plant</Link>
                        </li>
                      

                      <li className="nav-item">
                        <Link to="/Contact" className="nav-link">Contact</Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/peoplesaid" className="nav-link">People Said</Link>
                        </li>
                      {/* <li className="header-get-a-quote">
                          <a className="btn btn-primary" href="contact.html">Get Free Quote</a>
                      </li> */}
                    </ul>
                </div>
              </nav>
          </div>
          {/* <!--/ Col end --> */}
        </div>
        {/* <!--/ Row end --> */}
    </div>
    {/* <!--/ Container end --> */}

  </div>
  {/* <!--/ Navigation end --> */}
</header>
{/* <!--/ Header end --> */}





            </div>


        )
    }
}
export default Header;