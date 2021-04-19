import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css'


class Home extends React.Component {
    render(){
       
        return(
            <div className="body-inner">

    <div id="top-bar" calssName="top-bar">
        <div className="container">
          <div className="row">
              <div className="col-lg-8 col-md-8">
                <ul className="top-info text-center text-md-left">
                    <li><i className="fas fa-map-marker-alt"></i> <p className="info-text">709/1,k.k.s rd,Jaffna,Srilanga</p>
                    </li>
                </ul>
              </div>
              {/* <!--/ Top info end --> */}
  
              <div className="col-lg-4 col-md-4 top-social text-center text-md-right">
                <ul className="list-unstyled">
                    <li>
                      <a title="Facebook" href="https://www.facebook.com/EPR-Groupers-102105645212146">
                          <span className="social-icon"><i className="fab fa-facebook-f"></i></span>
                      </a>
                      <a title="Twitter" href="https://twitter.com/EGroupers">
                          <span className="social-icon"><i className="fab fa-twitter"></i></span>
                      </a>
                      <a title="Instagram" href="https://instagram.com/themefisher.com">
                          <span className="social-icon"><i className="fab fa-instagram"></i></span>
                      </a>
                      <a title="Linkdin" href="https://github.com/themefisher.com">
                          <span className="social-icon"><i className="fab fa-github"></i></span>
                      </a>
                    </li>
                </ul>
              </div>
              {/* <!--/ Top social end --> */}
          </div>
          {/* <!--/ Content row end --> */}
        </div>
        {/* <!--/ Container end --> */}
    </div>
    {/* <!--/ Topbar end --> */}
{/* <!-- Header start --> */}
<header id="header" className="header-one">
  <div className="bg-white">
    <div className="container">
      <div className="logo-area">
          <div className="row align-items-center">
            <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                <a className="d-block" href="index.html">
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
                          <p className="info-box-subtitle">ISO 443546:3029 @ SL PV-00218757</p>
                      </div>
                    </div>
                  </li>
                  <li className="header-get-a-quote">
                    <a className="btn btn-primary" href="contact.html">Get A Quote</a>
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

  <div className="site-navigation">
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div id="navbar-collapse" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav mr-auto">
                      <li className="nav-item dropdown active">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Home <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li className="active"><a href="index.html">Home One</a></li>
                            <li><a href="index-2.html">Home Two</a></li>
                          </ul>
                      </li>

                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Company <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="team.html">Our People</a></li>
                            <li><a href="testimonials.html">Testimonials</a></li>
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                          </ul>
                      </li>
              
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
                      </li>
              
                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Features <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="typography.html">Typography</a></li>
                            <li><a href="404.html">404</a></li>
                            <li className="dropdown-submenu">
                                <a href="#!" className="dropdown-toggle" data-toggle="dropdown">Parent Menu</a>
                                <ul className="dropdown-menu">
                                  <li><a href="#!">Child Menu 1</a></li>
                                  <li><a href="#!">Child Menu 2</a></li>
                                  <li><a href="#!">Child Menu 3</a></li>
                                </ul>
                            </li>
                          </ul>
                      </li>
              
                      <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">News <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="news-left-sidebar.html">News Left Sidebar</a></li>
                            <li><a href="news-right-sidebar.html">News Right Sidebar</a></li>
                            <li><a href="news-single.html">News Single</a></li>
                          </ul>
                      </li>
              
                      <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                    </ul>
                </div>
              </nav>
          </div>
          {/* <!--/ Col end --> */}
        </div>
        {/* <!--/ Row end --> */}

        <div className="nav-search">
          <span id="search"><i className="fa fa-search"></i></span>
        </div>
        {/* <!-- Search end --> */}

        <div className="search-block displaynone " >
          <label for="search-field" className="w-100 mb-0">
            <input type="text" className="form-control" id="search-field" placeholder="Type what you want and enter"/>
          </label>
          <span className="search-close">&times;</span>
        </div>
        {/* <!-- Site search end --> */}
    </div>
    {/* <!--/ Container end --> */}

  </div>
  {/* <!--/ Navigation end --> */}
</header>
{/* <!--/ Header end --> */}

<div className="banner-carousel banner-carousel-1 mb-0">
  <div className="banner-carousel-item bg1" /*style={{backgroundImage:url(images/slider-main/bg1.jpg)}} */>
    <div className="slider-content">
        <div className="container h-100">
          <div className="row align-items-center h-100">
              <div className="col-md-12 text-center">
                <h2 className="slide-title" data-animation-in="slideInLeft">5 Years of excellence in</h2>
                <h3 className="slide-sub-title" data-animation-in="slideInRight">Construction Industry</h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                    <a href="services.html" className="slider btn btn-primary">Our Services</a>
                    <a href="contact.html" className="slider btn btn-primary border">Contact Now</a>
                </p>
              </div>
          </div>
        </div>
    </div>
  </div>

  <div className="banner-carousel-item bg2">
    <div className="slider-content text-left">
        <div className="container h-100">
          <div className="row align-items-center h-100">
              <div className="col-md-12">
                <h2 className="slide-title-box" data-animation-in="slideInDown">World className Service</h2>
                <h3 className="slide-title" data-animation-in="fadeIn">When Service Matters</h3>
                <h3 className="slide-sub-title" data-animation-in="slideInLeft">Your Choice is Simple</h3>
                <p data-animation-in="slideInRight">
                    <a href="services.html" className="slider btn btn-primary border">Our Services</a>
                </p>
              </div>
          </div>
        </div>
    </div>
  </div>

  <div className="banner-carousel-item" >
    <div className="slider-content text-right">
        <div className="container h-100">
          <div className="row align-items-center h-100">
              <div className="col-md-12">
                <h2 className="slide-title" data-animation-in="slideInDown">Meet Our Engineers</h2>
                <h3 className="slide-sub-title" data-animation-in="fadeIn">We believe sustainability</h3>
                <p className="slider-description lead" data-animation-in="slideInRight">We will deal with your failure that determines how you achieve success.</p>
                <div data-animation-in="slideInLeft">
                    <a href="contact.html" className="slider btn btn-primary" aria-label="contact-with-us">Get Free Quote</a>
                    <a href="about.html" className="slider btn btn-primary border" aria-label="learn-more-about-us">Learn more</a>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</div>

<section className="call-to-action-box no-padding">
  <div className="container">
    <div className="action-style-box">
        <div className="row align-items-center">
          <div className="col-md-8 text-center text-md-left">
              <div className="call-to-action-text">
                <h3 className="action-title">We understand your needs on construction</h3>
              </div>
          </div>
          {/* <!-- Col end --> */}
          <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
              <div className="call-to-action-btn">
                <a className="btn btn-dark" href="#">Request Quote</a>
              </div>
          </div>
          {/* <!-- col end --> */}
        </div>
        {/* <!-- row end --> */}
    </div>
    {/* <!-- Action style box --> */}
  </div>
  {/* <!-- Container end --> */}
</section>
{/* <!-- Action end --> */}

<section id="ts-features" className="ts-features">
  <div className="container">
    <div className="row">
        <div className="col-lg-6">
          <div className="ts-intro">
              <h2 className="into-title">About Us</h2>
              <h3 className="into-sub-title">We deliver landmark projects</h3>
              <p>We are rethoric question ran over her cheek When she reached the first hills of the Italic Mountains,
                she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village
                and the subline of her own road, the Line Lane.</p>
          </div>
          {/* <!-- Intro box end --> */}

          <div className="gap-20"></div>

          <div className="row">
              <div className="col-md-6">
                <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-trophy"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">We've Repution for Excellence</h3>
                    </div>
                </div>
                {/* <!-- Service 1 end --> */}
              </div>
              {/* <!-- col end --> */}

              <div className="col-md-6">
                <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-sliders-h"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">We Build Partnerships</h3>
                    </div>
                </div>
                {/* <!-- Service 2 end --> */}
              </div>
              {/* <!-- col end --> */}
          </div>
          {/* <!-- Content row 1 end --> */}

          <div className="row">
              <div className="col-md-6">
                <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-thumbs-up"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">Guided by Commitment</h3>
                    </div>
                </div>
                {/* <!-- Service 1 end --> */}
              </div>
              {/* <!-- col end --> */}

              <div className="col-md-6">
                <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-users"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">A Team of Professionals</h3>
                    </div>
                </div>
                {/* <!-- Service 2 end --> */}
              </div>
              {/* <!-- col end --> */}
          </div>
          {/* <!-- Content row 1 end --> */}
        </div>
        {/* <!-- Col end --> */}

        <div className="col-lg-6 mt-4 mt-lg-0">
          <h3 className="into-sub-title">Our Values</h3>
          <p>Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur bitters. Pop-up occaecat taxidermy street art, tattooed beard literally.</p>

          <div className="accordion accordion-group" id="our-values-accordion">
              <div className="card">
                <div className="card-header p-0 bg-transparent" id="headingOne">
                    <h2 className="mb-0">
                      <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Safety
                      </button>
                    </h2>
                </div>
              
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#our-values-accordion">
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
                    </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-0 bg-transparent" id="headingTwo">
                    <h2 className="mb-0">
                      <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Customer Service
                      </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#our-values-accordion">
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
                    </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header p-0 bg-transparent" id="headingThree">
                    <h2 className="mb-0">
                      <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Integrity
                      </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#our-values-accordion">
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
                    </div>
                </div>
              </div>
          </div>
          {/* <!--/ Accordion end --> */}

        </div>
        {/* <!-- Col end --> */}
    </div>
    {/* <!-- Row end --> */}
  </div>
  {/* <!-- Container end --> */}
</section>
{/* <!-- Feature are end --> */}

<section id="facts" className="facts-area dark-bg">
  <div className="container">
    <div className="facts-wrapper">
        <div className="row">
          <div className="col-md-3 col-sm-6 ts-facts">
              <div className="ts-facts-img">
                <img loading="lazy" src="images/icon-image/fact1.png" alt="facts-img"/>
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-num"><span className="counterUp" data-count="1789">10</span></h2>
                <h3 className="ts-facts-title">Total Projects</h3>
              </div>
          </div>
          {/* <!-- Col end --> */}

          <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
              <div className="ts-facts-img">
                <img loading="lazy" src="images/icon-image/fact2.png" alt="facts-img"/>
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-num"><span className="counterUp" data-count="647">20</span></h2>
                <h3 className="ts-facts-title">Staff Members</h3>
              </div>
          </div>
          {/* <!-- Col end --> */}

          <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
              <div className="ts-facts-img">
                <img loading="lazy" src="images/icon-image/fact3.png" alt="facts-img"/>
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-num"><span className="counterUp" data-count="4000">8 Hr</span></h2>
                <h3 className="ts-facts-title">Hours of Work</h3>
              </div>
          </div>
          {/* <!-- Col end --> */}

          <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
              <div className="ts-facts-img">
                <img loading="lazy" src="images/icon-image/fact4.png" alt="facts-img"/>
              </div>
              <div className="ts-facts-content">
                <h2 className="ts-facts-num"><span className="counterUp" data-count="44">1</span></h2>
                <h3 className="ts-facts-title">Countries Experience</h3>
              </div>
          </div>
          {/* <!-- Col end --> */}

        </div>
         {/* <!-- Facts end --> */}
    </div>
    {/* <!--/ Content row end --> */}
  </div>
  {/* <!--/ Container end --> */}
</section>
{/* <!-- Facts end --> */}

<section id="ts-service-area" className="ts-service-area pb-0">
  <div className="container">
    <div className="row text-center">
        <div className="col-12">
          <h2 className="section-title">We Are Specialists In</h2>
          <h3 className="section-sub-title">What We Do</h3>
        </div>
    </div>
    {/* <!--/ Title row end --> */}

    <div className="row">
        <div className="col-lg-4">
          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="images/icon-image/service-icon1.png" alt="service-icon"/>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title"><a href="#">Home Construction</a></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
              </div>
          </div>
          {/* <!-- Service 1 end --> */}

          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="images/icon-image/service-icon2.png" alt="service-icon"/>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title"><a href="#">Building Remodels</a></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
              </div>
          </div>
          {/* <!-- Service 2 end --> */}

          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="images/icon-image/service-icon3.png"  alt="service-icon"/>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title"><a href="#">Interior Design</a></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
              </div>
          </div>
          
          {/* <!-- Service 3 end --> */}

        </div>
        {/* <!-- Col end --> */}

        <div className="col-lg-4 text-center">
          <img loading="lazy" className="img-fluid" src="images/services/service-center.jpg" alt="service-avater-image"/>
        </div>
        {/* <!-- Col end --> */}

        <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="images/icon-image/service-icon4.png" alt="service-icon"/>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title"><a href="#">Exterior Design</a></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
              </div>
          </div>
          {/* <!-- Service 4 end --> */}

          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="images/icon-image/service-icon5.png" alt="service-icon"/>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title"><a href="#">Renovation</a></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
              </div>
          </div>
          {/* <!-- Service 5 end --> */}

          <div className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <img loading="lazy" src="images/icon-image/service-icon6.png" alt="service-icon"/>
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title"><a href="#">Safety Management</a></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
              </div>
          </div>
          {/* <!-- Service 6 end --> */}
        </div>
        {/* <!-- Col end --> */}
    </div>
    {/* <!-- Content row end --> */}

  </div>
  {/* <!--/ Container end --> */}
</section>
{/* <!-- Service end --> */}

<section id="project-area" className="project-area solid-bg">
  <div className="container">
    <div className="row text-center">
      <div className="col-lg-12">
        <h2 className="section-title">Work of Excellence</h2>
        <h3 className="section-sub-title">Recent Projects</h3>
      </div>
    </div>
    {/* <!--/ Title row end --> */}

    <div className="row">
      <div className="col-12">
        <div className="shuffle-btn-group">
          <label className="active" for="all">
            <input type="radio" name="shuffle-filter" id="all" value="all" checked="checked"/>Show All
          </label>
          <label for="commercial">
            <input type="radio" name="shuffle-filter" id="commercial" value="commercial"/>Commercial
          </label>
          <label for="education">
            <input type="radio" name="shuffle-filter" id="education" value="education"/>Education
          </label>
          <label for="government">
            <input type="radio" name="shuffle-filter" id="government" value="government"/>Government
          </label>
          <label for="infrastructure">
            <input type="radio" name="shuffle-filter" id="infrastructure" value="infrastructure"/>Infrastructure
          </label>
          <label for="residential">
            <input type="radio" name="shuffle-filter" id="residential" value="residential"/>Residential
          </label>
          <label for="healthcare">
            <input type="radio" name="shuffle-filter" id="healthcare" value="healthcare"/>Healthcare
          </label>
        </div>
        {/* <!-- project filter end --> */}


        <div className="row shuffle-wrapper">
          <div className="col-1 shuffle-sizer"></div>

          <div className="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;government&quot;,&quot;healthcare&quot;]">
            <div className="project-img-container">
              <a className="gallery-popup" href="images/projects/project1.jpg" aria-label="project-img">
                <img className="img-fluid" src="images/projects/project1.jpg" alt="project-img"/>
                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">Capital Teltway Building</a>
                  </h3>
                  <p className="project-cat">Commercial, Interiors</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- shuffle item 1 end --> */}

          <div className="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;healthcare&quot;]">
            <div className="project-img-container">
              <a className="gallery-popup" href="images/projects/project2.jpg" aria-label="project-img">
                <img className="img-fluid" src="images/projects/project2.jpg" alt="project-img"/>
                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">Ghum Touch Hospital</a>
                  </h3>
                  <p className="project-cat">Healthcare</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- shuffle item 2 end --> */}

          <div className="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
            <div className="project-img-container">
              <a className="gallery-popup" href="images/projects/project3.jpg" aria-label="project-img">
                <img className="img-fluid" src="images/projects/project3.jpg" alt="project-img"/>
                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">TNT East Facility</a>
                  </h3>
                  <p className="project-cat">Government</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- shuffle item 3 end --> */}

          <div className="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;education&quot;,&quot;infrastructure&quot;]">
            <div className="project-img-container">
              <a className="gallery-popup" href="images/projects/project4.jpg" aria-label="project-img">
                <img className="img-fluid" src="images/projects/project4.jpg" alt="project-img"/>
                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">Narriot Headquarters</a>
                  </h3>
                  <p className="project-cat">Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- shuffle item 4 end --> */}

          <div className="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;education&quot;]">
            <div className="project-img-container">
              <a className="gallery-popup" href="images/projects/project5.jpg" aria-label="project-img">
                <img className="img-fluid" src="images/projects/project5.jpg" alt="project-img"/>
                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">Kalas Metrorail</a>
                  </h3>
                  <p className="project-cat">Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- shuffle item 5 end --> */}

          <div className="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;residential&quot;]">
            <div className="project-img-container">
              <a className="gallery-popup" href="images/projects/project6.jpg" aria-label="project-img">
                <img className="img-fluid" src="images/projects/project6.jpg" alt="project-img"/>
                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
              </a>
              <div className="project-item-info">
                <div className="project-item-info-content">
                  <h3 className="project-item-title">
                    <a href="projects-single.html">Ancraft Avenue House</a>
                  </h3>
                  <p className="project-cat">Residential</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- shuffle item 6 end --> */}
        </div>
        {/* <!-- shuffle end --> */}
      </div>

      <div className="col-12">
        <div className="general-btn text-center">
          <a className="btn btn-primary" href="projects.html">View All Projects</a>
        </div>
      </div>

    </div>
    {/* <!-- Content row end --> */}
  </div>
  {/* <!--/ Container end --> */}
</section>
{/* <!-- Project area end --> */}

<section className="content">
  <div className="container">
    <div className="row">
        <div className="col-lg-6">
          <h3 className="column-title">Testimonials</h3>

          <div id="testimonial-slide" className="testimonial-slide">
              <div className="item">
                <div className="quote-item">
                    <span className="quote-text">
                      Question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last
                      view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the
                      subline of her own road.
                    </span>

                    <div className="quote-item-footer">
                      <img loading="lazy" className="testimonial-thumb" src="images/clients/testimonial1.png" alt="testimonial"/>
                      <div className="quote-item-info">
                          <h3 className="quote-author">Gabriel Denis</h3>
                          <span className="quote-subtext">Chairman, OKT</span>
                      </div>
                    </div>
                </div>
                {/* <!-- Quote item end --> */}
              </div>
              {/* <!--/ Item 1 end --> */}

              <div className="item">
                <div className="quote-item">
                    <span className="quote-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris
                      nisi aliquip consequat.
                    </span>

                    <div className="quote-item-footer">
                      <img loading="lazy" className="testimonial-thumb" src="images/clients/testimonial2.png" alt="testimonial"/>
                      <div className="quote-item-info">
                          <h3 className="quote-author">Weldon Cash</h3>
                          <span className="quote-subtext">CFO, First Choice</span>
                      </div>
                    </div>
                </div>
                {/* <!-- Quote item end --> */}
              </div>
              {/* <!--/ Item 2 end --> */}

              <div className="item">
                <div className="quote-item">
                    <span className="quote-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris
                      nisi ut commodo consequat.
                    </span>

                    <div className="quote-item-footer">
                      <img loading="lazy" className="testimonial-thumb" src="images/clients/testimonial3.png" alt="testimonial"/>
                      <div className="quote-item-info">
                          <h3 className="quote-author">Minter Puchan</h3>
                          <span className="quote-subtext">Director, AKT</span>
                      </div>
                    </div>
                </div>
                {/* <!-- Quote item end --> */}
              </div>
              {/* <!--/ Item 3 end --> */}

          </div>
          {/* <!--/ Testimonial carousel end--> */}
        </div>
        {/* <!-- Col end --> */}

        <div className="col-lg-6 mt-5 mt-lg-0">

          <h3 className="column-title">Happy Clients</h3>

          <div className="row all-clients">
              <div className="col-sm-4 col-6">
                <figure className="clients-logo">
                    <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client1.png" alt="clients-logo" /></a>
                </figure>
              </div>
              {/* <!-- Client 1 end --> */}

              <div className="col-sm-4 col-6">
                <figure className="clients-logo">
                    <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client2.png" alt="clients-logo" /></a>
                </figure>
              </div>
              {/* <!-- Client 2 end --> */}

              <div className="col-sm-4 col-6">
                <figure className="clients-logo">
                    <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client3.png" alt="clients-logo" /></a>
                </figure>
              </div>
              {/* <!-- Client 3 end --> */}

              <div className="col-sm-4 col-6">
                <figure className="clients-logo">
                    <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client4.png" alt="clients-logo" /></a>
                </figure>
              </div>
              {/* <!-- Client 4 end --> */}

              <div className="col-sm-4 col-6">
                <figure className="clients-logo">
                    <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client5.png" alt="clients-logo" /></a>
                </figure>
              </div>
              {/* <!-- Client 5 end --> */}

              <div className="col-sm-4 col-6">
                <figure className="clients-logo">
                    <a href="#!"><img loading="lazy" className="img-fluid" src="images/clients/client6.png" alt="clients-logo" /></a>
                </figure>
              </div>
              {/* <!-- Client 6 end --> */}

          </div>
          {/* <!-- Clients row end --> */}

        </div>
        {/* <!-- Col end --> */}

    </div>
    {/* <!--/ Content row end --> */}
  </div>
  {/* <!--/ Container end --> */}
</section>
{/* <!-- Content end --> */}

<section className="subscribe no-padding">
  <div className="container">
    <div className="row">
        <div className="col-lg-4">
          <div className="subscribe-call-to-acton">
              <h3>Can We Help?</h3>
              <h4>(+9) 847-291-4353</h4>
          </div>
        </div>
        {/* <!-- Col end --> */}

        <div className="col-lg-8">
          <div className="ts-newsletter row align-items-center">
              <div className="col-md-5 newsletter-introtext">
                <h4 className="text-white mb-0">Newsletter Sign-up</h4>
                <p className="text-white">Latest updates and news</p>
              </div>

              <div className="col-md-7 newsletter-form">
                <form action="#" method="post">
                    <div className="form-group">
                      <label for="newsletter-email" className="content-hidden">Newsletter Email</label>
                      <input type="email" name="email" id="newsletter-email" className="form-control form-control-lg" placeholder="Your your email and hit enter" autocomplete="off"/>
                    </div>
                </form>
              </div>
          </div>
          {/* <!-- Newsletter end --> */}
        </div>
        {/* <!-- Col end --> */}

    </div>
    {/* <!-- Content row end --> */}
  </div>
  {/* <!--/ Container end --> */}
</section>
{/* <!--/ subscribe end --> */}

<section id="news" className="news">
  <div className="container">
    <div className="row text-center">
        <div className="col-12">
          <h2 className="section-title">Work of Excellence</h2>
          <h3 className="section-sub-title">Recent Projects</h3>
        </div>
    </div>
    {/* <!--/ Title row end --> */}

    <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="latest-post">
              <div className="latest-post-media">
                <a href="news-single.html" className="latest-post-img">
                    <img loading="lazy" className="img-fluid" src="images/news/news1.jpg" alt="img"/>
                </a>
              </div>
              <div className="post-body">
                <h4 className="post-title">
                    <a href="news-single.html" className="d-inline-block">We Just Completes $17.6 million Medical Clinic in Mid-Missouri</a>
                </h4>
                <div className="latest-post-meta">
                    <span className="post-item-date">
                      <i className="fa fa-clock-o"></i> July 20, 2017
                    </span>
                </div>
              </div>
          </div>
          {/* <!-- Latest post end --> */}
        </div>
        {/* <!-- 1st post col end --> */}

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="latest-post">
              <div className="latest-post-media">
                <a href="news-single.html" className="latest-post-img">
                    <img loading="lazy" className="img-fluid" src="images/news/news2.jpg" alt="img"/>
                </a>
              </div>
              <div className="post-body">
                <h4 className="post-title">
                    <a href="news-single.html" className="d-inline-block">Thandler Airport Water Reclamation Facility Expansion Project Named</a>
                </h4>
                <div className="latest-post-meta">
                    <span className="post-item-date">
                      <i className="fa fa-clock-o"></i> June 17, 2017
                    </span>
                </div>
              </div>
          </div>
          {/* <!-- Latest post end --> */}
        </div>
        {/* <!-- 2nd post col end --> */}

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="latest-post">
              <div className="latest-post-media">
                <a href="news-single.html" className="latest-post-img">
                    <img loading="lazy" className="img-fluid" src="images/news/news3.jpg" alt="img"/>
                </a>
              </div>
              <div className="post-body">
                <h4 className="post-title">
                    <a href="news-single.html" className="d-inline-block">Silicon Bench and Cornike Begin Construction Solar Facilities</a>
                </h4>
                <div className="latest-post-meta">
                    <span className="post-item-date">
                      <i className="fa fa-clock-o"></i> Aug 13, 2017
                    </span>
                </div>
              </div>
          </div>
          {/* <!-- Latest post end --> */}
        </div>
        {/* <!-- 3rd post col end --> */}
    </div>
    {/* <!--/ Content row end --> */}

    <div className="general-btn text-center mt-4">
        <a className="btn btn-primary" href="news-left-sidebar.html">See All Posts</a>
    </div>

  </div>
  {/* <!--/ Container end --> */}
</section>
{/* <!--/ News end --> */}

  <footer id="footer" className="footer bg-overlay">
    <div className="footer-main">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-6 footer-widget footer-about">
            <h3 className="widget-title">About Us</h3>
            <img loading="lazy" className="footer-logo" src="images/footer-logo.png" alt="Constra"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut
              labore et dolore magna aliqua.</p>
            <div className="footer-social">
              <ul>
                <li><a href="https://facebook.com/themefisher" aria-label="Facebook"><i
                      className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/themefisher" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </li>
                <li><a href="https://instagram.com/themefisher" aria-label="Instagram"><i
                      className="fab fa-instagram"></i></a></li>
                <li><a href="https://github.com/themefisher" aria-label="Github"><i className="fab fa-github"></i></a></li>
              </ul>
            </div>
            {/* <!-- Footer social end --> */}
          </div>
          {/* <!-- Col end --> */}

          <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
            <h3 className="widget-title">Working Hours</h3>
            <div className="working-hours">
              We work 7 days a week, every day excluding major holidays. Contact us if you have an emergency, with our
              Hotline and Contact form.
              <br/><br/> Monday - Friday: <span className="text-right">10:00 - 16:00 </span>
              <br/> Saturday: <span className="text-right">12:00 - 15:00</span>
              <br/> Sunday and holidays: <span className="text-right">09:00 - 12:00</span>
            </div>
          </div>
          {/* <!-- Col end --> */}

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
            <h3 className="widget-title">Services</h3>
            <ul className="list-arrow">
              <li><a href="service-single.html">Pre-Construction</a></li>
              <li><a href="service-single.html">General Contracting</a></li>
              <li><a href="service-single.html">Construction Management</a></li>
              <li><a href="service-single.html">Design and Build</a></li>
              <li><a href="service-single.html">Self-Perform Construction</a></li>
            </ul>
          </div>
          {/* <!-- Col end --> */}
        </div>
        {/* <!-- Row end --> */}
      </div>
      {/* <!-- Container end --> */}
    </div>
    {/* <!-- Footer main end --> */}

    <div className="copyright">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="copyright-info">
              <span>Copyright &copy; <script>
                  document.write(new Date().getFullYear())
                </script>, Designed &amp; Developed by <a href="https://themefisher.com">Themefisher</a></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="footer-menu text-center text-md-right">
              <ul className="list-unstyled mb-0">
                <li><a href="about.html">About</a></li>
                <li><a href="team.html">Our people</a></li>
                <li><a href="faq.html">Faq</a></li>
                <li><a href="news-left-sidebar.html">Blog</a></li>
                <li><a href="pricing.html">Pricing</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Row end --> */}

        <div id="back-to-top" data-spy="affix" data-offset-top="10" className="back-to-top position-fixed">
          <button className="btn btn-primary" title="Back to Top">
            <i className="fa fa-angle-double-up"></i>
          </button>
        </div>

      </div>
      {/* <!-- Container end --> */}
    </div>
    {/* <!-- Copyright end --> */}
  </footer>
  {/* <!-- Footer end --> */}


  {/* <!-- Javascript Files */}
  {/* ================================================== --> */}

  {/* <!-- initialize jQuery Library --> */}
  <script src="plugins/jQuery/jquery.min.js"></script>
  {/* <!-- Bootstrap jQuery --> */}
  <script src="plugins/bootstrap/bootstrap.min.js" defer></script>
  {/* <!-- Slick Carousel --> */}
  <script src="plugins/slick/slick.min.js"></script>
  <script src="plugins/slick/slick-animation.min.js"></script>
  {/* <!-- Color box --> */}
  <script src="plugins/colorbox/jquery.colorbox.js"></script>
  {/* <!-- shuffle --> */}
  <script src="plugins/shuffle/shuffle.min.js" defer></script>


  {/* <!-- Google Map API Key--> */}
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU" defer></script>
  {/* <!-- Google Map Plugin--> */}
  <script src="plugins/google-map/map.js" defer></script>

  {/* <!-- Template custom --> */}
  <script src="js/script.js"></script>

  </div>

  
        )
    }
}
export default Home