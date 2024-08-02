import React from 'react';
import './BlogSection.css';
import FeatureHeading from '../../../assets/img/section-img.png';
import Blog1 from '../../../assets/img/blog1.jpg';
import Blog2 from '../../../assets/img/blog2.jpg';
import Blog3 from '../../../assets/img/blog3.jpg';
import Appointment from '../appointment-section/Appointment';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (
    <>
    {/* <!-- Start Blog Area --> */}
		<section className="blog section" id="blog">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>Keep up with Our Most Recent Medical News.</h2>
							<img src={FeatureHeading} alt="Heading"/>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Blog --> */}
						<div className="single-news">
							<div className="news-head">
								<img src={Blog1} alt="Blog 1"/>
							</div>
							<div className="news-body">
								<div className="news-content">
									<div className="date">22 Aug, 2020</div>
									<h2><Link to={'/blog-details'}>We have annnocuced our new product.</Link></h2>
									<p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
								</div>
							</div>
						</div>
						{/* <!-- End Single Blog --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Blog --> */}
						<div className="single-news">
							<div className="news-head">
								<img src={Blog2} alt="Blog 2"/>
							</div>
							<div className="news-body">
								<div className="news-content">
									<div className="date">15 Jul, 2020</div>
									<h2><Link to={'/blog-details'}>Top five way for solving teeth problems.</Link></h2>
									<p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
								</div>
							</div>
						</div>
						{/* <!-- End Single Blog --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Single Blog --> */}
						<div className="single-news">
							<div className="news-head">
								<img src={Blog3} alt="Blog 3"/>
							</div>
							<div className="news-body">
								<div className="news-content">
									<div className="date">05 Jan, 2020</div>
									<h2><Link to={'/blog-details'}>We provide highly business soliutions.</Link></h2>
									<p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
								</div>
							</div>
						</div>
						{/* <!-- End Single Blog --> */}
					</div>
				</div>
			</div>
		</section>
		{/* <!-- End Blog Area --> */}
        <Appointment/>
        </>
  )
}

export default BlogSection