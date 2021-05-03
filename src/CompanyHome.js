import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import $ from 'jquery';
import './css/style.css'
import "./lightslider.css"
import "./JQuery3.3.1"
import "./lightslider"
import console from './console.js'

import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CompanyService from "./service/CompanyService"


class CompanyHome extends React.Component {


	constructor(props){
		super(props)
		this.state={
			company_list:[]
		
		}}



		componentDidMount() {
		this.loadAllCompany();
	}
	
	loadAllCompany = () => {
	CompanyService.fetchCompanies()
	.then((res)=> {
	this.setState({company_list : res.data})
})
} 



    render(){



        return(
            <div>

{/* <!--
		Start Blog Section
		=========================================== --> */}

<section className="blog" id="blog">
	<div className="container">
		<div className="row">

			{/* <!-- section title --> */}
			<div className="col-12">
				<div className="title text-center ">
					<h2> Latest <span className="color">Posts</span></h2>
					<div className="border"></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere accusamus, reprehenderit libero
						inventore nam.</p>
				</div>
			</div>
			{/* <!-- /section title --> */}
			{/* <!-- single blog post --> */}
			{this.state. company_list.map(company=>
			<article className="col-md-4 col-sm-6 col-xs-12 clearfix " key={company.id}>
				<div className="post-item">
					<div className="media-wrapper">
						<a href={"/view-company/"+company.id}><img src={company.companyLogo} className="img-fluid"/></a>
					</div>

					<div className="content">
						<h3><a href={"/view-company/"+company.id}>{company.companyName}</a></h3>
						<p>{company.weAre1}</p>
							<Button href={"/view-company/"+company.id} className="btn btn-main">Read more</Button>
					</div>
				</div>
			</article>
			
			)}
		</div> 
        {/* <!-- end row --> */}
	</div> 
    {/* <!-- end container --> */}
</section>
 {/* <!-- end section --> */}

















            </div>
        )
    }
}export default CompanyHome;

