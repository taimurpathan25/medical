import React from 'react';
import './Portfolio.css';
// Importing Images 
import FeatureHeadingImg from '../../../assets/img/section-img.png';
import PortfolioImg1 from '../../../assets/img/pf1.jpg';
import PortfolioImg2 from '../../../assets/img/pf2.jpg';
import PortfolioImg3 from '../../../assets/img/pf3.jpg';
import PortfolioImg4 from '../../../assets/img/pf4.jpg';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
   <>
   {/* <!-- Start portfolio --> */}
		<section className="portfolio section" >
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
							<img src={FeatureHeadingImg} alt="Heading Img"/>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12 col-12">
						<div className="owl-carousel portfolio-slider">
							<div className="single-pf">
								<img src={PortfolioImg1}/>
								<Link to={'/portfolio-details'} className="btn">View Details</Link>
							</div>
							<div className="single-pf">
								<img src={PortfolioImg2}/>
								<Link to={'/portfolio-details'} className="btn">View Details</Link>
							</div>
							<div className="single-pf">
								<img src={PortfolioImg3}/>
								<Link to={'/portfolio-details'} className="btn">View Details</Link>
							</div>
							<div className="single-pf">
								<img src={PortfolioImg4}/>
								<Link to={'/portfolio-details'} className="btn">View Details</Link>
							</div>
							<div className="single-pf">
								<img src={PortfolioImg1}/>
								<Link to={'/portfolio-details'} className="btn">View Details</Link>
							</div>
							<div className="single-pf">
								<img src={PortfolioImg2}/>
								<Link to={'/portfolio-details'} className="btn">View Details</Link>
							</div>
							<div className="single-pf">
								<img src={PortfolioImg3}/>
								<Link to={'/portfolio-details'} className="btn">View Details</Link>
							</div>
							<div className="single-pf">
								<img src={PortfolioImg4}/>
								<Link to={'/portfolio-details'} className="btn">View Details</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End portfolio --> */}
        </>
  )
}

export default Portfolio