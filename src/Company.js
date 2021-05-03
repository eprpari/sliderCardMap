import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import CompanyService from "./service/CompanyService"
import './css/style.css'
import $ from 'jquery';
window.jQuery = $;



class Company extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        id: '',
        companyName:'',
        companyLogo:'',
        weAre1:'',
        weAre2:'',
        weAre3:'',
        service1:'',
        service2:'',
        service3:'',
        service4:'',
        serviceData1:'',
        serviceData2:'',
        serviceData3:'',
        serviceData4:'',
        team1:'',
        teamPhotos1:'',
        team2:'',
        teamPhotos2:'',
        companyRegNumber:'',
        companyGrading:'',
        phoneNumber:'',
        emailAddress:'',
        address:'',
        socialMediaAddress:'',
        webAddress:'',
        numberOfProject:'',
        projects:[]
       
    }
}

componentDidMount() {
  console.log("hiiiiii");


  const companyId = this.props.match.params.id;
  // console.log(companyId);
      
  CompanyService.fetchCompanyById(companyId)
  
      .then((res) => {
          let company = res.data;
          this.setState({
              id: company.id,
              companyName: company.companyName,
               companyLogo: company.companyLogo,
              weAre1:company.weAre1,
              weAre2:company.weAre2,
              weAre3:company.weAre3,
              service1:company.service1,
              service2:company.service2,
              service3:company.service3,
              service4:company.service4,
              serviceData1:company.serviceData1,
              serviceData2:company.serviceData2,
              serviceData3:company.serviceData3,
              serviceData4:company.serviceData4, 
              team1:company.team1,
              teamData1:company.teamData1,  
              team2:company.team2,
              teamData2:company.teamData2,
              companyRegNumber:company.companyRegNumber,
              companyGrading:company.companyGrading,
              phoneNumber:company.phoneNumber,
              emailAddress:company.emailAddress,
              webAddress:company.webAddress,
              address:company.address,
              socialMediaAddress:company.socialMediaAddress,
              numberOfProject:company.numberOfProject,
              projects:company.projects
              
          })
      });
}
    render(){
       
        return(

            <div className="body-inner">
          
             
          <div id="banner-area" className="banner-area red">
            <div className="banner-text">
              <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-heading">
                          <h1 className="banner-title">{this.state.companyName}</h1>
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="/home2">Home</a></li>
                                <li className="breadcrumb-item"><a href="/company">company</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{this.state.companyName}</li>
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
                    <p>{this.state.weAre1}</p>
                    <blockquote><p>{this.state.weAre2}</p></blockquote>
                    <p>{this.state.weAre3}</p>
          
                  </div>
                  {/* <!-- Col end --> */}
          
                  <div className="col-lg-6 mt-5 mt-lg-0">
                    
                  <img src={this.state.companyLogo}></img>
                  
          
                  </div>
                  {/* <!-- Col end --> */}
              </div>
              {/* <!-- Content row end --> */}
          
            </div>
            {/* <!-- Container end --> */}
         </section>


         {/* <!-- Service section --> */}
			<section id="service">
				<div className="container">
					<div className="row">
					
						<div className="col-md-12 col-sm-9 col-xs-12 sec-title text-center">
							<h2 className="wow animated bounceInLeft">Service</h2>
							<p className="wow animated bounceInRight">The Key Features of our Job</p>
						</div>
						
						<div className="col-md-3 col-sm-6 col-xs-12 text-center wow animated zoomIn">
							<div className="service-item">
								<div className="service-icon">
									<i className="fa fa-home fa-3x"></i>
								</div>
								<h3>{this.state.service1}</h3>
								<p>{this.state.serviceData1} </p>
							</div>
						</div>
					
						<div className="col-md-3 col-sm-6 col-xs-12 text-center wow animated zoomIn" data-wow-delay="0.3s">
							<div className="service-item">
								<div className="service-icon">
									<i className="fa fa-tasks fa-3x"></i>
								</div>
								<h3>{this.state.service2}</h3>
								<p>{this.state.serviceData2} </p>
							</div>
						</div>
					
						<div class="col-md-3 col-sm-6 col-xs-12 text-center wow animated zoomIn" data-wow-delay="0.6s">
							<div className="service-item">
								<div className="service-icon">
									<i className="fa fa-clock-o fa-3x"></i>
								</div>
								<h3>{this.state.service3}</h3>
								<p>{this.state.serviceData3} </p>
							</div>
						</div>
					
						<div className="col-md-3 col-sm-6 col-xs-12 text-center wow animated zoomIn" data-wow-delay="0.9s">
							<div className="service-item">
								<div className="service-icon">
									<i className="fa fa-heart fa-3x"></i>
								</div>
								
								<h3>{this.state.service4}</h3>
								<p>{this.state.serviceData4} </p>							
							</div>
						</div>
						
					</div>
				</div>
			</section>
			{/* <!-- end Service section --> */}





      {/* <!-- blog post --> */}
<section className="section1" >
  {
    this.state.projects!=null?
    this.state.projects.map(pro=> (
  <div className="container" >
    <div className="row masonry-container">
      <div className="col-lg-4 col-sm-6 mb-5">
        <article className="text-center">
          <img className="img-fluid mb-4" src={pro.projectPhotos} alt="post-thumb"/>
          {/* <p className="text-uppercase mb-2"></p> */}
          <h4 className="title-border"><a className="text-dark" href="blog-single.html">{pro.projectPlace}</a></h4>
          <p>{pro.projectDetails}</p>
          {/* <a href="blog-single.html" className="btn btn-transparent">read more</a> */}
        </article>
      </div>
     
      
      
    </div>
  
  </div>

)):"No Projects"

} 
</section>
{/* <!-- /blog post --> */}


{/* <!-- single pricing table --> */}
			<div className="col-md-4 col-sm-6 col-xs-12  ">
				<div className="pricing-item">

					{/* <!-- plan name & value --> */}
					<div className="price-title">
						<h3>Standard</h3>
						<strong className="value">$39</strong>
						<p>Suitable for small businesses with up to 5 employees</p>
					</div>
					{/* <!-- /plan name & value --> */}

					{/* <!-- plan description --> */}
					<ul>
						<li><i className="tf-ion-ios-arrow-forward"></i> 1GB Disk Space</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 50 Email Account</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> Script Installer</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 1 GB Storage</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 10 GB Bandwidth</li>
						<li><i className="tf-ion-ios-arrow-forward"></i> 24/7 Tech Support</li>
					</ul>
					{/* <!-- /plan description --> */}

					{/* <!-- signup button --> */}
					<a className="btn btn-main" href="#">Signup</a>
					{/* <!-- /signup button --> */}

				</div>
			</div>
			{/* <!-- end single pricing table --> */}

			{/* <!-- single pricing table --> */}
		


{/* <!-- Social section --> */}
			<section id="social" className="parallax">
				<div classNameName="overlay">
					<div className="container">
						<div className="row">

							<div className="sec-title text-center white wow animated fadeInDown">
								<h2>FOLLOW US</h2>
								<p>Beautifully simple follow buttons to help you get followers on</p>
							</div>

							<ul className="social-button">
								<li className="wow animated zoomIn"><a href={this.state.socialMediaAddress}><i class="fa fa-thumbs-up fa-2x"></i></a></li>
								<li className="wow animated zoomIn" data-wow-delay="0.3s"><a href={this.state.webAddress}><i class="fa fa-twitter fa-2x"></i></a></li>
								<li className="wow animated zoomIn" data-wow-delay="0.6s"><a href={this.state.emailAddress}><i class="fa fa-dribbble fa-2x"></i></a></li>
							</ul>

						</div>
					</div>
				</div>
			</section>
			{/* <!-- end Social section --> */}
     </div>
  
        )
    }
    
    
}export default Company;

         