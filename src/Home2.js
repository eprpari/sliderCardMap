import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import $ from 'jquery';
import './css/style.css'
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation.scss';

// import '../public/css/';
import console from './console.js'
import epr from "./video/epr.mp4"
import AddSlider from './HomeSlider1';



class Home2 extends React.Component {
   
       
 


     
        
    
      
    // componentDidMount(){
    //   var counter=1;
    //   setInterval(() => {

    //   document.getElementById('radio' + counter).checked = true;
    //   counter ++;
    //      if (counter > 4) {
    //        counter = 1;
    //      }
    // }, 5000);
    // }



      render(){

        return(

            <div className="body-inner">
    

         
          <AddSlider/>
          

            <video autoPlay loop  muted>
              <source src={epr} type="video/mp4"/>
            </video>
           

         


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
                        <h3 className="action-title">You can contact us 24/7. We are waiting to provide the best service for you</h3>
                      </div>
                  </div>
                  {/* <!-- Col end --> */}
                  <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                      <div className="call-to-action-btn">
                        <a className="btn btn-outline-light " href="https://web.whatsapp.com/send?phone=94741717119&text=Hey%20Olai!" target="_blank"><i class='fab fa-whatsapp-square' style={{fontSize:"40px"}}></i></a>
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
                        <img loading="lazy" className="w-100" src="https://i.dlpng.com/static/png/372495_preview.png"/>
                      </div>
                      <div className="d-flex">
                        <div className="ts-service-box-img">
                            <img loading="lazy" src="images/icon-image/service-icon1.png" alt="service-icon" />
                        </div>
                        <div className="ts-service-info">
                            <h3 className="service-box-title"><a href="/company">Company</a></h3>
                            <p>You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. </p>
                            <a className="learn-more d-inline-block" href="/company" aria-label="service-details"><i className="fa fa-caret-right"></i> Learn more</a>
                        </div>
                      </div>
                  </div>
                  {/* <!-- Service1 end --> */}
                </div>
                {/* <!-- Col 1 end --> */}
        
                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="ts-service-box">
                      <div className="ts-service-image-wrapper">
                        <img loading="lazy" className="w-100" src="https://i0.wp.com/tridenstechnology.com/wp-content/uploads/2019/07/Smart-home.png" alt="service-image"/>
                      </div>
                      <div className="d-flex">
                        <div className="ts-service-box-img">
                            <img loading="lazy" src="images/icon-image/service-icon2.png" alt="service-icon" />
                        </div>
                        <div className="ts-service-info">
                            <h3 className="service-box-title"><a href="/homeautomation">Home Automation</a></h3>
                            <p>Get the best technology in our media in your dream home.Get the foundation for your dreams with a low cost mindset</p>
                            <a className="learn-more d-inline-block" href="/homeautomation" aria-label="service-details"><i className="fa fa-caret-right"></i> Learn more</a>
                        </div>
                      </div>
                  </div>
                  {/* <!-- Service2 end --> */}
                </div>
                {/* <!-- Col 2 end --> */}
        
                <div className="col-lg-4 col-md-6 mb-5">
                  <div className="ts-service-box">
                      <div className="ts-service-image-wrapper">
                        <img loading="lazy" className="w-100" src="https://bluecollarpeople.com/wp-content/uploads/contract-workers.jpg" alt="service-image"/>
                      </div>
                      <div className="d-flex">
                        <div className="ts-service-box-img">
                            <img loading="lazy" src="images/icon-image/service-icon3.png" alt="service-icon" />
                        </div>
                        <div className="ts-service-info">
                            <h3 className="service-box-title"><a href="/workforce">Work Force</a></h3>
                            <p>The workforce or labour force is the labour pool either in employment or unemployed. It is generally used to describe </p>
                            <a className="learn-more d-inline-block" href="/workforce" aria-label="service-details"><i className="fa fa-caret-right"></i> Learn more</a>
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
        
        {/* <section id="facts" className="facts-area dark-bg">
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
                 
        
                  <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
                      <div className="ts-facts-img">
                        <img loading="lazy" src="images/icon-image/fact2.png" alt="facts-img"/>
                      </div>
                      <div className="ts-facts-content">
                        <h2 className="ts-facts-num"><span className="counterUp" data-count="647">0</span></h2>
                        <h3 className="ts-facts-title">Staff Members</h3>
                      </div>
                  </div>
                  
        
                  <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                      <div className="ts-facts-img">
                        <img loading="lazy" src="images/icon-image/fact3.png" alt="facts-img"/>
                      </div>
                      <div className="ts-facts-content">
                        <h2 className="ts-facts-num"><span className="counterUp" data-count="4000">0</span></h2>
                        <h3 className="ts-facts-title">Hours of Work</h3>
                      </div>
                  </div>
               
        
                  <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                      <div className="ts-facts-img">
                        <img loading="lazy" src="images/icon-image/fact4.png" alt="facts-img"/>
                      </div>
                      <div className="ts-facts-content">
                        <h2 className="ts-facts-num"><span className="counterUp" data-count="44">0</span></h2>
                        <h3 className="ts-facts-title">Countries Experience</h3>
                      </div>
                  </div>
                  
        
                </div> 
              
            </div>
         
          </div>
      
        </section>
       */}
        
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
                        <h3 className="service-box-title"><a href="/company">Company</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                      </div>
                  </div>
                  {/* <!-- Service 1 end --> */}
        
                  <div className="ts-service-box d-flex">
                      <div className="ts-service-box-img">
                        <img loading="lazy" src="images/icon-image/service-icon2.png" alt="service-icon"/>
                      </div>
                      <div className="ts-service-box-info">
                        <h3 className="service-box-title"><a href="/smartautomation">Smart Automation</a></h3>
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
                  <img loading="lazy" className="img-fluid" src="https://st.depositphotos.com/1037178/1537/v/600/depositphotos_15370661-stock-illustration-cartoon-electrician-character.jpg" alt="service-avater-image"/>
                </div>
                {/* <!-- Col end --> */}
        
                <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
                  <div className="ts-service-box d-flex">
                      <div className="ts-service-box-img">
                        <img loading="lazy" src="images/icon-image/service-icon4.png" alt="service-icon"/>
                      </div>
                      <div className="ts-service-box-info">
                        <h3 className="service-box-title"><a href="/plant">Plant</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                      </div>
                  </div>
                  {/* <!-- Service 4 end --> */}
        
                  <div className="ts-service-box d-flex">
                      <div className="ts-service-box-img">
                        <img loading="lazy" src="images/icon-image/service-icon5.png" alt="service-icon"/>
                      </div>
                      <div className="ts-service-box-info">
                        <h3 className="service-box-title"><a href="/materials">Materials</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                      </div>
                  </div>
                  {/* <!-- Service 5 end --> */}
        
                  <div className="ts-service-box d-flex">
                      <div className="ts-service-box-img">
                        <img loading="lazy" src="images/icon-image/service-icon6.png" alt="service-icon"/>
                      </div>
                      <div className="ts-service-box-info">
                        <h3 className="service-box-title"><a href="/workforce">Work Force</a></h3>
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
        
        





<section className="portfolio section-sm" id="portfolio">
	<div className="container-fluid">
		<div className="row ">
			<div className="col-lg-12">







<div className="title text-center">
					<h2>Our Works</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, veritatis. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Minima, vitae? </p>
					<div className="border"></div>
				</div>
			

				<div className="row filtr-container">
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design">
						<div className="portfolio-block">
							<img className="img-fluid" style={{height:"200px",width:"400px"}} src="http://cdn.home-designing.com/wp-content/uploads/2017/05/wood-white-and-charcoal-modern-exterior-paint-themes.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Row Desing - 60 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, ios">
						<div className="portfolio-block">
							<img className="img-fluid " style={{height:"200px",width:"400px"}} src="https://i.pinimg.com/originals/66/d9/f5/66d9f5afdc5337d3f9eac362b970c426.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-2.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Box Desing -80 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography, development">
						<div className="portfolio-block">
							<img className="img-fluid" style={{height:"200px",width:"400px"}} src="https://cdn.jhmrad.com/wp-content/uploads/low-budjet-single-floor-house-design-two-side-views_363753.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-3.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Two Side Designs -45 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography, ios">
						<div className="portfolio-block">
							<img className="img-fluid" style={{height:"200px",width:"400px"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-4.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Stunning House - 100 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design">
						<div className="portfolio-block">
							<img className="img-fluid"  style={{height:"200px",width:"400px"}} src="https://drummondhouseplans.com/assets/_entemp_/plan-split-levels-3153-v2-front-base-model-845px-46467db1.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-5.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Box 3 Designs - 50 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, development">
						<div className="portfolio-block">
							<img className="img-fluid"  style={{height:"200px",width:"400px"}} src="https://i.ytimg.com/vi/B7h1GxyK1iE/maxresdefault.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-6.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Arrow Designs - 60 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography">
						<div className="portfolio-block">
							<img className="img-fluid" style={{height:"200px",width:"400px"}} src="https://2.bp.blogspot.com/-KPfuqREQxTo/WesEGL1WJcI/AAAAAAABFVE/pmOhz4cLtKk26i4-G0OTWKxY-F_7WLfCgCLcBGAs/s1600/single-floor-splendind-look.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-7.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Low Designs - 35 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, development">
						<div className="portfolio-block">
							<img className="img-fluid" style={{height:"200px",width:"400px"}} src="https://cdn.trendir.com/wp-content/uploads/2016/06/Modern-house-in-Auckland-New-Zealand.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">New Zealand House - 150 Lakhs</a></h4>
							</div>
						</div>
					</div>
				</div>




        <div className="row filtr-container">
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design">
						<div className="portfolio-block">
							<img className="img-fluid" style={{height:"200px",width:"400px"}} src="http://visualresistance.org/wp-content/uploads/2014/09/best-modern-home-design.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Lab House - 200 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, ios">
						<div className="portfolio-block">
							<img className="img-fluid " style={{height:"200px",width:"400px"}} src="https://i.pinimg.com/originals/97/f7/96/97f796e3117ab391a925b680f1e6f066.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-2.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Box Lab House -175 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography, development">
						<div className="portfolio-block">
							<img className="img-fluid" style={{height:"200px",width:"400px"}} src="https://i.pinimg.com/originals/fb/30/66/fb3066bdb953ac5608ef10a8c4e7476b.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-3.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Lab House - 300 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography, ios">
						<div className="portfolio-block">
							<img className="img-fluid" style={{height:"200px",width:"400px"}} src="https://i.pinimg.com/originals/21/0b/55/210b5561ead069cc5099fa129df34d69.png" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-4.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Lab  House - 300 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design">
						<div className="portfolio-block">
							<img className="img-fluid"  style={{height:"200px",width:"400px"}} src="https://i.pinimg.com/originals/00/77/5f/00775feba9b1ae96b23b7b11d22874d5.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-5.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Sway House - 500 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, development">
						<div className="portfolio-block">
							<img className="img-fluid"  style={{height:"200px",width:"400px"}} src="https://i.ytimg.com/vi/B7h1GxyK1iE/maxresdefault.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-6.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Arrow Designs - 60 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, photography">
						<div className="portfolio-block">
							<img className="img-fluid" style={{height:"200px",width:"400px"}} src="https://2.bp.blogspot.com/-KPfuqREQxTo/WesEGL1WJcI/AAAAAAABFVE/pmOhz4cLtKk26i4-G0OTWKxY-F_7WLfCgCLcBGAs/s1600/single-floor-splendind-look.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-7.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">Low Designs - 35 Lakhs</a></h4>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design, development">
						<div className="portfolio-block">
							<img className="img-fluid" style={{height:"200px",width:"400px"}} src="https://cdn.trendir.com/wp-content/uploads/2016/06/Modern-house-in-Auckland-New-Zealand.jpg" alt=""/>
							<div className="caption">
								<a className="search-icon" href="images/portfolio/portfolio-1.jpg" data-lightbox="image-1">
									<i className="tf-ion-ios-search-strong"></i>
								</a>
								<h4><a href="">New Zealand House - 150 Lakhs</a></h4>
							</div>
						</div>
					</div>
				</div>






























			</div> 
      {/* <!-- /end col-lg-12 --> */}
		</div>
     {/* <!-- end row --> */}
	</div>
   {/* <!-- end container --> */}
</section>
 {/* <!-- End section --> */}


















    

 
















        
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