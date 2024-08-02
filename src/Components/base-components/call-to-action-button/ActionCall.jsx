import React from 'react';
import './ActionCall.css';
import Portfolio from '../Portfolio/Portfolio';
import { Link } from 'react-router-dom';

const ActionCall = () => {
  return (
    <>
    {/* <!-- Start Call to action --> */}
		<section className="call-action overlay" data-stellar-background-ratio="0.5">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-12">
						<div className="content">
							<h2>Do you need Emergency Medical Care? Call Us <a href="tel:+91 7618270346">+91 7618270346</a></h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</p>
							<div className="button">
								<Link to={'/contact'} className="btn">Contact Now</Link>
								<Link to={''} className="btn second">Learn More<i className="fa fa-long-arrow-right"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End Call to action --> */}
        <Portfolio/>
        </>
  )
}

export default ActionCall