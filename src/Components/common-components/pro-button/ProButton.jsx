import React from 'react';
import '../../../assets/css/responsive.css'
// import '../../../assets/css/slicknav.min.css'

const ProButton = () => {
  return (
    <>
     {/* <!-- Get Pro Button --> */}
		<ul className="pro-features">
			<a className="get-pro" href="#">Get Pro</a>
			<li className="big-title">Essential Medical Features :</li>
			<li>⏩ Online Appointment</li>
			<li>⏩ Opening Hours</li>
			<li>⏩ Contact Info</li>
			<li>⏩ Specializations and services</li>
			<li>⏩ Emergency care Information</li>
			<li>⏩ Credentials of practitioners</li>
			<div className="button">
				<a href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879" target="_blank" className="btn">Pro Version Demo</a>
				<a href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910" target="_blank" className="btn">Buy Pro Version</a>
			</div>
		</ul>
        </>
  )
}

export default ProButton