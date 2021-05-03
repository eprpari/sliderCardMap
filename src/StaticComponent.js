	import React , {Component} from 'react';
import ReactDOM from 'react-dom';
// import './App.css'
// import $ from 'jquery';
// import './css/style.css'		
            
     function  StaticComponent(){      
           return(
                
            
            <section id="portfolio">
				<div className="container">
					<div className="row">
					
						<div className="sec-title text-center wow animated fadeInDown">
							<h2>FEATURED PROJECTS</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						

						<ul className="project-wrapper wow animated fadeInUp">
							<li className="portfolio-item">
								<img style={{height:"400px",width:"auto"}} src="https://developers.google.com/assistant/smarthome/images/smart-home.svg"/>
								<figcaption className="mask">
									<h3>Wall street</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. </p>
								</figcaption>
								<ul className="external">
									<li><a className="fancybox" title="Araund The world" data-fancybox-group="works" href="img/portfolio/item.jpg"><i class="fa fa-search"></i></a></li>
									<li><a href=""><i class="fa fa-link"></i></a></li>
								</ul>
							</li>
							
							<li className="portfolio-item">
								<img style={{height:"400px",width:"auto"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkERXaH8KVNIRfgVZ5bp56h_isfmnXBdlAAA&usqp=CAU "/>
								<figcaption className="mask">
									<h3>Wall street</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. </p>
								</figcaption>
								<ul class="external">
									<li><a class="fancybox" title="Wall street" href="img/slider/banner.jpg" data-fancybox-group="works" ><i class="fa fa-search"></i></a></li>
									<li><a href=""><i class="fa fa-link"></i></a></li>
								</ul>
							</li>
							<li className="portfolio-item">
								<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.advantageair.com.au%2Fmuch-can-really-save-smart-home%2F&psig=AOvVaw0Z4YoPCfC_XQx9c3dZy28g&ust=1619980549345000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjhwpeQqfACFQAAAAAdAAAAABAN"/>
								<figcaption className="mask">
									<h3>Wall street</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. </p>
								</figcaption>
								<ul className="external">
									<li><a className="fancybox" title="Behind The world" data-fancybox-group="works" href="img/portfolio/item3.jpg"><i class="fa fa-search"></i></a></li>
									<li><a href=""><i className="fa fa-link"></i></a></li>
								</ul>
							</li>
							
							<li className="portfolio-item">
								<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Fhome_automation.html&psig=AOvVaw0Z4YoPCfC_XQx9c3dZy28g&ust=1619980549345000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjhwpeQqfACFQAAAAAdAAAAABAV" className="img-responsive" alt="Lorem Ipsum is simply dummy text of the printing and typesetting ndustry."/>
								<figcaption className="mask">
									<h3>Wall street</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. </p>
								</figcaption>
								<ul className="external">
									<li><a className="fancybox" title="Wall street 4" data-fancybox-group="works" href="img/portfolio/item4.jpg"><i class="fa fa-search"></i></a></li>
									<li><a href=""><i className="fa fa-link"></i></a></li>
								</ul>
							</li>
							
							<li className="portfolio-item">
								<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fprimefeed.in%2Fmarket-reports%2F3930860%2Fsmart-home-solutions-market-size-demonstrates-immense-growth-potential-with-staggering-cagr-value-by-2026-siemens-united-technologies-general-electric-schneider-electric-honeywell-international%2F&psig=AOvVaw0Z4YoPCfC_XQx9c3dZy28g&ust=1619980549345000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjhwpeQqfACFQAAAAAdAAAAABAs" className="img-responsive" alt="Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. "/>
								<figcaption class="mask">
									<h3>Wall street</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. </p>
								</figcaption>
								<ul className="external">
									<li><a className="fancybox" title="Wall street 5" data-fancybox-group="works" href="img/portfolio/item5.jpg"><i class="fa fa-search"></i></a></li>
									<li><a href=""><i className="fa fa-link"></i></a></li>
								</ul>
							</li>
							
							<li className="portfolio-item">
								<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techradar.com%2Fnews%2Fthe-best-cheap-smart-home-gadgets-of-2019&psig=AOvVaw0Z4YoPCfC_XQx9c3dZy28g&ust=1619980549345000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjhwpeQqfACFQAAAAAdAAAAABBF" class="img-responsive" alt="Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. "/>
								<figcaption className="mask">
									<h3>Wall street</h3>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. </p>
								</figcaption>
								<ul className="external">
									<li><a className="fancybox" title="Wall street 6" data-fancybox-group="works" href="img/portfolio/item6.jpg"><i class="fa fa-search"></i></a></li>
									<li><a href=""><i className="fa fa-link"></i></a></li>
								</ul>
							</li>
						</ul>
						
					</div>
				</div>
			</section>
           );
          }
           
           
           export default StaticComponent