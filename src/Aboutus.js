import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './css/style.css'
import $ from 'jquery';
window.jQuery = $;

class Aboutus extends React.Component {
    render(){
       
        return(
            <div className="body-inner">
          
             
          <div id="banner-area" className="banner-area red">
            <div className="banner-text">
              <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-heading">
                          <h1 className="banner-title">About</h1>
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">company</a></li>
                                <li className="breadcrumb-item active" aria-current="page">About Us</li>
                              </ol>
                          </nav>
                        </div>
                    </div>
                    {/* <!-- Col end --> */}
                  </div>
                  {/* <!-- Row end --> */}
              </div>
              {/* <!-- Container end --> */}
            </div>
            {/* <!-- Banner text end --> */}
          </div>
          {/* <!-- Banner area end -->  */}
          
          <section id="main-container" className="main-container">
            <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                    <h3 className="column-title">Who We Are</h3>
                    <p>when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
                    <blockquote><p>Semporibus autem quibusdam et aut officiis debitis aut rerum est aut optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere ut</p></blockquote>
                    <p>He lay on his armour-like  back, and if he lifted. ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing.</p>
          
                  </div>
                  {/* <!-- Col end --> */}
          
                  <div className="col-lg-6 mt-5 mt-lg-0">
                    
                    <div id="page-slider" className="page-slider small-bg">
          
                        <div className="item" >
                        {/* style="background-image:url(images/slider-pages/slide-page1.jpg)" */}
                          <div className="container">
                              <div className="box-slider-content">
                                <div className="box-slider-text">
                                    <h2 className="box-slide-title">Leadership</h2>
                                </div>    
                              </div>
                          </div>
                        </div>
                        {/* <!-- Item 1 end --> */}
          
                        <div className="item" >
                        {/* style="background-image:url(images/slider-pages/slide-page2.jpg)" */}
                          <div className="container">
                              <div className="box-slider-content">
                                <div className="box-slider-text">
                                    <h2 className="box-slide-title">Relationships</h2>
                                </div>    
                              </div>
                          </div>
                        </div>
                        {/* <!-- Item 1 end --> */}
          
                        <div className="item" >
                        {/* style="background-image:url(images/slider-pages/slide-page3.jpg)" */}
                          <div className="container">
                              <div className="box-slider-content">
                                <div className="box-slider-text">
                                    <h2 className="box-slide-title">Performance</h2>
                                </div>    
                              </div>
                          </div>
                        </div>
                        {/* <!-- Item 1 end --> */}
                    </div>
                    {/* <!-- Page slider end-->           */}
                  
          
                  </div>
                  {/* <!-- Col end --> */}
              </div>
              {/* <!-- Content row end --> */}
          
            </div>
            {/* <!-- Container end --> */}
          </section>
          {/* <!-- Main container end --> */}
          
          
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
          
          <section id="ts-team" className="ts-team">
            <div className="container">
              <div className="row text-center">
                  <div className="col-lg-12">
                    <h2 className="section-title">Quality Service</h2>
                    <h3 className="section-sub-title">Professional Team</h3>
                  </div>
              </div>
              {/* <!--/ Title row end --> */}
          
              <div className="row">
                  <div className="col-lg-12">
                    <div id="team-slide" className="team-slide">
                        <div className="item">
                          <div className="ts-team-wrapper">
                              <div className="team-img-wrapper">
                                <img loading="lazy" className="w-100" src="images/team/team1.jpg" alt="team-img"/>
                              </div>
                              <div className="ts-team-content">
                                <h3 className="ts-name">Nats Stenman</h3>
                                <p className="ts-designation">Chief Operating Officer</p>
                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                                {/* <!--/ social-icons--> */}
                              </div>
                          </div>
                          {/* <!--/ Team wrapper end --> */}
                        </div>
                        {/* <!-- Team 1 end --> */}
          
                        <div className="item">
                          <div className="ts-team-wrapper">
                              <div className="team-img-wrapper">
                                <img loading="lazy" className="w-100" src="images/team/team2.jpg" alt="team-img"/>
                              </div>
                              <div className="ts-team-content">
                                <h3 className="ts-name">Angela Lyouer</h3>
                                <p className="ts-designation">Innovation Officer</p>
                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                                {/* <!--/ social-icons--> */}
                              </div>
                          </div>
                          {/* <!--/ Team wrapper end --> */}
                        </div>
                        {/* <!-- Team 2 end --> */}
          
                        <div className="item">
                          <div className="ts-team-wrapper">
                              <div className="team-img-wrapper">
                                <img loading="lazy" className="w-100" src="images/team/team3.jpg" alt="team-img"/>
                              </div>
                              <div className="ts-team-content">
                                <h3 className="ts-name">Mark Conter</h3>
                                <p className="ts-designation">Safety Officer</p>
                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                                {/* <!--/ social-icons--> */}
                              </div>
                          </div>
                          {/* <!--/ Team wrapper end --> */}
                        </div>
                        {/* <!-- Team 3 end --> */}
          
                        <div className="item">
                          <div className="ts-team-wrapper">
                              <div className="team-img-wrapper">
                                <img loading="lazy" className="w-100" src="images/team/team4.jpg" alt="team-img"/>
                              </div>
                              <div className="ts-team-content">
                                <h3 className="ts-name">Ayesha Stewart</h3>
                                <p className="ts-designation">Finance Officer</p>
                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                                {/* <!--/ social-icons--> */}
                              </div>
                          </div>
                          {/* <!--/ Team wrapper end --> */}
                        </div>
                        {/* <!-- Team 4 end --> */}
          
                        <div className="item">
                          <div className="ts-team-wrapper">
                              <div className="team-img-wrapper">
                                <img loading="lazy" className="w-100" src="images/team/team5.jpg" alt="team-img"/>
                              </div>
                              <div className="ts-team-content">
                                <h3 className="ts-name">Dave Clarkte</h3>
                                <p className="ts-designation">Civil Engineer</p>
                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                                {/* <!--/ social-icons--> */}
                              </div>
                          </div>
                          {/* <!--/ Team wrapper end --> */}
                        </div>
                        {/* <!-- Team 5 end --> */}
          
                        <div className="item">
                          <div className="ts-team-wrapper">
                              <div className="team-img-wrapper">
                                <img loading="lazy" className="w-100" src="images/team/team6.jpg" alt="team-img"/>
                              </div>
                              <div className="ts-team-content">
                                <h3 className="ts-name">Elton Joe</h3>
                                <p className="ts-designation">Site Supervisor</p>
                                <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                <div className="team-social-icons">
                                    <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                                    <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                                {/* <!--/ social-icons--> */}
                              </div>
                          </div>
                          {/* <!--/ Team wrapper end --> */}
                        </div>
                        {/* <!-- Team 6 end --> */}
          
                    </div>
                    {/* <!-- Team slide end --> */}
                  </div>
              </div>
              {/* <!--/ Content row end --> */}
            </div>
            {/* <!--/ Container end --> */}
          </section>
          {/* <!--/ Team end --> */}
          
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
            {/* =======/</div>=========================================== --> */}
          
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
    
    
}export default Aboutus;

         