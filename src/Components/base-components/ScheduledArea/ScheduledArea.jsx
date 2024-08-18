import React from 'react'
import './ScheduledArea.css'
import { Link } from 'react-router-dom'

const ScheduledArea = () => {
  return (
    <>
    {/* <!-- Start Schedule Area --> */}
		<section className="schedule">
			<div className="container">
				<div className="schedule-inner">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-12 ">
							{/* <!-- single-schedule --> */}
							<div className="single-schedule first">
								<div className="inner">
									<div className="icon">
										<i className="fa fa-ambulance"></i>
									</div>
									<div className="single-content">
										{/* <span>Lorem Amet</span> */}
										<h4>Public Health</h4>
										<p>Public health intersects closely with medicine and pharmacy, focusing on disease prevention, health promotion, and ensuring access to safe and effective medications.</p>
										<Link to={'/learn-more'}>LEARN MORE<i className="fa fa-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12">
							{/* <!-- single-schedule --> */}
							<div className="single-schedule middle">
								<div className="inner">
									<div className="icon">
										<i className="icofont-prescription"></i>
									</div>
									<div className="single-content">
										{/* <span>Fusce Porttitor</span> */}
										<h4>Human Services</h4>
										<p>Human Services focuses on meeting human needs through an interdisciplinary knowledge base, aiming to improve the quality of life for individuals and communities.</p>
										<Link to={'/learn-more'}>LEARN MORE<i className="fa fa-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 col-12">
							{/* <!-- single-schedule --> */}
							<div className="single-schedule last">
								<div className="inner">
									<div className="icon">
										<i className="icofont-ui-clock"></i>
									</div>
									<div className="single-content">
										{/* <span>Donec luctus</span> */}
										<h4>24X7 Availability</h4>
										<p>Continuing with the theme of 24/7 Availability in Medical Services, here are more aspects that highlight the importance and scope of round-the-clock healthcare.</p>
										{/* <h4>Opening Hours</h4>
										<ul className="time-sidual">
											<li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
											<li className="day">Saturday <span>9.00-18.30</span></li>
											<li className="day">Monday - Thusday <span>9.00-15.00</span></li>
										</ul> */}
										<Link to={'/learn-more'}>LEARN MORE<i className="fa fa-long-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!--/End Start schedule Area --> */}
    </>
  )
}

export default ScheduledArea