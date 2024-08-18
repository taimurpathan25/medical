import React from 'react';
import '../../../assets/css/responsive.css'
// import '../../../assets/css/slicknav.min.css'

const ProButton = () => {
  return (
    <>
     {/* <!-- Get Pro Button --> */}
		<ul className="pro-features">
			<a className="get-pro" href="#">Features</a>
			<li className="big-title">Essential Medical Features :</li>
			<li>⏩ Online Booking</li>
			<li>⏩ Opening Hours</li>
			<li>⏩ Contact Information</li>
			<li>⏩ Specializations and services</li>
			<li>⏩ Emergency care Information</li>
			<li>⏩ Enquiry for Medicine</li>
			<li>⏩ Direct Call with our Pharmacist</li>
			<div className="button">
				{/* <a href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879" target="_blank" className="btn">Pro Version Demo</a> */}
				<a href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910" target="_blank" className="btn">Know More About</a>
			</div>
		</ul>
        </>
  )
}

export default ProButton