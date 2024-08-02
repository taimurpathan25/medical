import React from 'react';
import './Header.css';
// Css
import '../../../assets/css/bootstrap.min.css';
// import '../../../assets/css/style.css';
import '../../../assets/css/nice-select.css';
import '../../../assets/css/icofont.css';
import '../../../assets/css/font-awesome.min.css';
// import '../../../assets/css/slicknav.min.css';
// import '../../../assets/css/owl-carousel.css';
import '../../../assets/css/datepicker.css';
import '../../../assets/css/animate.min.css';
// import '../../../assets/css/magnific-popup.css';
import '../../../assets/css/responsive.css';
import '../../../assets/css/normalize.css';

// Images
import Logo from '../../../assets/img/logo.avif'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
        <>
        {/* <!-- Header Area --> */}
		<header className="header" >
			{/* <!-- Topbar --> */}
			<div className="topbar">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-5 col-12">
							{/* <!-- Contact --> */}
							<ul className="top-link">
								<li><Link to={'/about'}>About</Link></li>
								<li><Link to={'/doctor'}>Doctors</Link></li>
								<li><Link to={'/contact'}>Contact</Link></li>
								<li><Link to={'/faq'}>FAQ</Link></li>
							</ul>
							{/* <!-- End Contact --> */}
						</div>
						<div className="col-lg-6 col-md-7 col-12">
							{/* <!-- Top Contact --> */}
							<ul className="top-contact">
								<li><i className="fa fa-phone"></i><a href="tel:7618270346">+91 7618270346</a></li>
								<li><i className="fa fa-envelope"></i><a href="mailto:taimurpathan25@gmail.com">taimurpathan25@gmail.com</a></li>
							</ul>
							{/* <!-- End Top Contact --> */}
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Topbar --> */}
			{/* <!-- Header Inner --> */}
			<div className="header-inner">
				<div className="container">
					<div className="inner">
						<div className="row">
							<div className="col-lg-3 col-md-3 col-12">
								{/* <!-- Start Logo --> */}
								<div className="logo">
									<Link to={'/'}>
                    <img src={Logo} width={'30%'}  alt="Logo"/>
                     <span style={{fontSize:'30px', fontWeight:'600'}}>
                      <span style={{color:'#1A76D1'}}>Medi</span>cos
                      </span>
                      </Link>
								</div>
								{/* <!-- End Logo --> */}
								{/* <!-- Mobile Nav --> */}
								<div className="mobile-nav"></div>
								{/* <!-- End Mobile Nav --> */}
							</div>
							<div className="col-lg-7 col-md-9 col-12">
								{/* <!-- Main Menu --> */}
								<div className="main-menu">
									<nav className="navigation">
										<ul className="nav menu">
											<li className="active"><Link to={'/'}>Home</Link></li>
											<li><Link href="#">Doctors <i className="icofont-rounded-down"></i></Link>
												<ul className="dropdown">
													<li><Link to={"/doctor"}>Doctor 1</Link></li>
												</ul>
											</li>
											<li><Link to={'/services'}>Services </Link></li>
											<li><a href="#">Pages <i className="icofont-rounded-down"></i></a>
												<ul className="dropdown">
													<li><a href="404.html">404 Error</a></li>
												</ul>
											</li>
											<li><a href="#">Blogs <i className="icofont-rounded-down"></i></a>
												<ul className="dropdown">
													<li><Link to={'/blog-details'}>Blog Details</Link></li>
												</ul>
											</li>
											<li><Link to={'/contact'}>Contact Us</Link></li>
										</ul>
									</nav>
								</div>
								{/* <!--/ End Main Menu --> */}
							</div>
							<div className="col-lg-2 col-12">
								<div className="get-quote">
									<a href="appointment.html" className="btn">Book Appointment</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--/ End Header Inner --> */}
		</header>
		{/* <!-- End Header Area --> */}
        </>
  )
}

export default Header