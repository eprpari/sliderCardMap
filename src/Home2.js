import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import $ from 'jquery';
import './css/style.css'
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation.scss';

// import '../public/css/';
import console from './console.js'




class Home2 extends React.Component {
   
       
 


     
        
    
      
    componentDidMount(){
      var counter=1;
      setInterval(() => {

      document.getElementById('radio' + counter).checked = true;
      counter ++;
         if (counter > 4) {
           counter = 1;
         }
    }, 5000);
    }



      render(){

        return(

            <div className="body-inner">
    

         

          {/* image silder start */}
          <div className="slider silder_body">
            <div className="sliders">
              {/* redio button start */}
              <input type="radio" name="radio-name-1" id="radio1"/>
              <input type="radio" name="radio-name-1" id="radio2"/>
              <input type="radio" name="radio-name-1" id="radio3"/>
              <input type="radio" name="radio-name-1" id="radio4"/>

              {/* redio button end */}


            {/* slider image start */}
            <div className="slide first">
              <img src="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" alt="  "/>
            </div>


            <div className="slide">
              <img src="https://ljhollowayphotographytraining.com/wp-content/uploads/2016/09/AO3A9520Edit-1X.jpg" alt=""/>
            </div>

            <div className="slide">
              <img src="https://ljhollowayphotographytraining.com/wp-content/uploads/2016/09/AO3A9520Edit-1X.jpg" alt=""/>
            </div>

            <div className="slide">
              <img src="https://ljhollowayphotographytraining.com/wp-content/uploads/2016/09/AO3A9520Edit-1X.jpg" alt=""/>
            </div>



            {/* slider image End */}

              {/* automation navgesion start */}
              <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
              </div>
              {/* automation navgesion end */}

            </div>
              {/* manual navigation start */}
                <div className="navigation-manual">
                  <label for="radio1" className="manual-btn"></label>
                  <label for="radio2" className="manual-btn"></label>
                  <label for="radio3" className="manual-btn"></label>
                  <label for="radio4" className="manual-btn"></label>


                </div>




              {/* manual navigation end */}
            
          </div>
          {/* image silder end */}


            
           

         


        {/* <div className="banner-carousel banner-carousel-2 mb-0">
          <div className="banner-carousel-item imgggbg4">
            <div className="container">
                <div className="box-slider-content">
                  <div className="box-slider-text">
                      <h2 className="box-slide-title">17 Years Of Excellence In</h2>
                      <h3 className="box-slide-sub-title">Construction Industry</h3>
                      <p className="box-slide-description">You have ideas, goals, and dreams. We have a culturally diverse, forward
                        thinking team looking for talent like.</p>
                      <p>
                        <a href="services.html" className="slider btn btn-primary">Our Service</a>
                      </p>
                  </div>
                </div>
            </div>
          </div>
        
          <div className="banner-carousel-item bg5">
            <div className="slider-content text-left">
                <div className="container">
                  <div className="box-slider-content">
                      <div className="box-slider-text">
                        <h2 className="box-slide-title">When Services Matters</h2>
                        <h3 className="box-slide-sub-title">Your Choice is Simple</h3>
                        <p className="box-slide-description">You have ideas, goals, and dreams. We have a culturally diverse, forward
                            thinking team looking for talent like.</p>
                        <p><a href="about.html" className="slider btn btn-primary" aria-label="about-us">Know Us</a></p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div> */}
        
        <section className="call-to-action no-padding">
          <div className="container">
            <div className="action-style-box">
                <div className="row">
                  <div className="col-md-8 text-center text-md-left">
                      <div className="call-to-action-text">
                        <h3 className="action-title">We understand your needs on construction</h3>
                      </div>
                  </div>
                  {/* <!-- Col end --> */}
                  <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                      <div className="call-to-action-btn">
                        <a className="btn btn-primary" href="contact.html">Request Quote</a>
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
        
        <section id="ts-features" className="ts-features pb-2">
          <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="ts-service-box">
                      <div className="ts-service-image-wrapper">
                        <img loading="lazy" className="w-100" src="images/services/service1.jpg" alt="service-image"/>
                      </div>
                      <div className="d-flex">
                        <div className="ts-service-box-img">
                            <img loading="lazy" src="images/icon-image/service-icon1.png" alt="service-icon" />
                        </div>
                        <div className="ts-service-info">
                            <h3 className="service-box-title"><a href="service-single.html">Zero Harm Everyday</a></h3>
                            <p>You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.</p>
                            <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i className="fa fa-caret-right"></i> Learn more</a>
                        </div>
                      </div>
                  </div>
                  {/* <!-- Service1 end --> */}
                </div>
                {/* <!-- Col 1 end --> */}
        
                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="ts-service-box">
                      <div className="ts-service-image-wrapper">
                        <img loading="lazy" className="w-100" src="images/services/service2.jpg" alt="service-image"/>
                      </div>
                      <div className="d-flex">
                        <div className="ts-service-box-img">
                            <img loading="lazy" src="images/icon-image/service-icon2.png" alt="service-icon" />
                        </div>
                        <div className="ts-service-info">
                            <h3 className="service-box-title"><a href="service-single.html">Virtual Construction</a></h3>
                            <p>You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.</p>
                            <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i className="fa fa-caret-right"></i> Learn more</a>
                        </div>
                      </div>
                  </div>
                  {/* <!-- Service2 end --> */}
                </div>
                {/* <!-- Col 2 end --> */}
        
                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="ts-service-box">
                      <div className="ts-service-image-wrapper">
                        <img loading="lazy" className="w-100" src="images/services/service3.jpg" alt="service-image"/>
                      </div>
                      <div className="d-flex">
                        <div className="ts-service-box-img">
                            <img loading="lazy" src="images/icon-image/service-icon3.png" alt="service-icon" />
                        </div>
                        <div className="ts-service-info">
                            <h3 className="service-box-title"><a href="service-single.html">Build To Last</a></h3>
                            <p>You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.</p>
                            <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i className="fa fa-caret-right"></i> Learn more</a>
                        </div>
                      </div>
                  </div>
                  {/* <!-- Service3 end --> */}
                </div>
                {/* <!-- Col 3 end --> */}
            </div>
            {/* <!-- Content row end --> */}
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
                        <h2 className="ts-facts-num"><span className="counterUp" data-count="1789">0</span></h2>
                        <h3 className="ts-facts-title">Total Projects</h3>
                      </div>
                  </div>
                  {/* <!-- Col end --> */}
        
                  <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
                      <div className="ts-facts-img">
                        <img loading="lazy" src="images/icon-image/fact2.png" alt="facts-img"/>
                      </div>
                      <div className="ts-facts-content">
                        <h2 className="ts-facts-num"><span className="counterUp" data-count="647">0</span></h2>
                        <h3 className="ts-facts-title">Staff Members</h3>
                      </div>
                  </div>
                  {/* <!-- Col end --> */}
        
                  <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                      <div className="ts-facts-img">
                        <img loading="lazy" src="images/icon-image/fact3.png" alt="facts-img"/>
                      </div>
                      <div className="ts-facts-content">
                        <h2 className="ts-facts-num"><span className="counterUp" data-count="4000">0</span></h2>
                        <h3 className="ts-facts-title">Hours of Work</h3>
                      </div>
                  </div>
                  {/* <!-- Col end --> */}
        
                  <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                      <div className="ts-facts-img">
                        <img loading="lazy" src="images/icon-image/fact4.png" alt="facts-img"/>
                      </div>
                      <div className="ts-facts-content">
                        <h2 className="ts-facts-num"><span className="counterUp" data-count="44">0</span></h2>
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
        
         
        
        
          {/* <!-- Javascript Files
          ================================================== -->
        
          <!-- initialize jQuery Library --> */}
          <script src="./../bower_components/jquery/dist/jquery.min.js"></script>
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
export default Home2