import React from 'react';
import Layout from '../../Layout';
import slider from '../../assets/img/slider.jpg';
import slider2 from '../../assets/img/slider2.jpg';
import slider3 from '../../assets/img/slider3.jpg';
import FeatureHeadingImg from '../../assets/img/section-img.png';

// Importing Components
import ScheduledArea from '../../Components/base-components/ScheduledArea/ScheduledArea';
import Feature from '../../Components/base-components/FeatureSection/Feature';

// CSS
import './Index.css';
// import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/style.css';
// import '../../assets/css/nice-select.css';
// import '../../assets/css/icofont.css';
import '../../assets/css/font-awesome.min.css';
// import '../../assets/css/slicknav.min.css';
import '../../assets/css/owl-carousel.css';
import PricingTable from '../../Components/base-components/pricing-table/PricingTable';
import BlogSection from '../../Components/base-components/blog-section/BlogSection';
// import '../../assets/css/datepicker.css';
// import '../../assets/css/animate.min.css';
// import '../../assets/css/magnific-popup.css';
// import '../../assets/css/responsive.css';
import '../../assets/css/normalize.css';

const Home = () => {
  return (
    <>
    <Layout>
		{/* Slider Area */}
    <section className="slider">
          <div className="hero-slider">
            {/* Start Single Slider */}
            <div className="single-slider" style={{ backgroundImage: `url(${'https://e1.pxfuel.com/desktop-wallpaper/724/582/desktop-wallpaper-medicine-man-made-hq-medicine-medicines.jpg'})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>We Provide to a Best & Creative <span>MEDICAL HEALTHCARE AGENCY</span>!</h1>
                      <p>Purchasing medicine from a certified healthcare agency ensures that you are getting high-quality, authentic products. Certified agencies adhere to strict regulations and standards, which means their medicines are safe, effective, and reliable. Additionally, these agencies often have licensed pharmacists and healthcare professionals available to provide guidance and answer any questions you may have.</p>
                      <div className="button">
                        <a href="#" className="btn">Get Medicine</a>
                        <a href="#" className="btn primary">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Slider */}
            {/* Start Single Slider */}
            <div className="single-slider" style={{ backgroundImage: `url(${'https://img.freepik.com/premium-photo/medicine-capsules-isolated-from-white-background-global-healthcare-concept-antibiotics-drug-resistance-antimicrobial-capsule-pharmaceutical-industry-pharmacy-3d-render_1226542-2682.jpg'})` }}>
              <div className="container">
                <div className="row">
				<div className="col-lg-5">
                  </div>
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>We Provide <span>MEDICINE</span> Services That You Can <span>Trust!</span></h1>
                      <p>Our team of licensed pharmacists and healthcare professionals is always available to offer expert advice, answer your questions, and guide you through your treatment options. Our secure online ordering system, prompt delivery, and accessible support ensure a seamless and reliable experience for all your healthcare needs. Whether you need medication, medical advice, or health services</p>
                      <div className="button">
                        <a href="#" className="btn">Get Medicine</a>
                        <a href="#" className="btn primary">Contact Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Slider */}
            {/* Start Single Slider */}
            <div className="single-slider" style={{ backgroundImage: `url(${'https://img.freepik.com/premium-photo/blue-white-antibiotic-capsule-pill-capsule-pills-bottle-antibiotic-drug-resistance-pharmaceutics-concept-pharmaceutical-industry-pharmacy-product_33867-778.jpg'})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>We Care About <span>YOUR HEALTH</span>, &nbsp; and Give the <span>Best Services!</span></h1>
                      <p>Our dedicated team of healthcare professionals is committed to providing the highest quality services and the most effective treatments tailored to your needs. From personalized consultations and expert medical advice to the convenient and safe delivery of authentic medicines, we strive to ensure you receive the best care possible. Your health is our top priority, and we are here to support you every step of the way, making your journey to wellness seamless and reassuring.</p>
                      <div className="button">
                        <a href="#" className="btn">Get Medicine</a>
                        <a href="#" className="btn primary">About Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Slider */}
          </div>
        </section>
        {/* End Slider Area */}
        <ScheduledArea />
        <Feature/>

        {/* <!-- Start service --> */}
		<section className="services section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>We Offer Different Services To Improve Your Health</h2>
							<img src={FeatureHeadingImg} alt="Heading"/>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Start Single Service --> */}
						<div className="single-service">
							<i className="icofont icofont-prescription"></i>
							<h4><a href="service-details.html">General Treatment</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Start Single Service --> */}
						<div className="single-service">
							<i className="icofont icofont-tooth"></i>
							<h4><a href="service-details.html">Teeth Whitening</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Start Single Service --> */}
						<div className="single-service">
							<i className="icofont icofont-heart-alt"></i>
							<h4><a href="service-details.html">Heart Surgery</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Start Single Service --> */}
						<div className="single-service">
							<i className="icofont icofont-listening"></i>
							<h4><a href="service-details.html">Ear Treatment</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Start Single Service --> */}
						<div className="single-service">
							<i className="icofont icofont-eye-alt"></i>
							<h4><a href="service-details.html">Vision Problems</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						{/* <!-- End Single Service --> */}
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						{/* <!-- Start Single Service --> */}
						<div className="single-service">
							<i className="icofont icofont-blood"></i>
							<h4><a href="service-details.html">Blood Transfusion</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>	
						</div>
						{/* <!-- End Single Service --> */}
					</div>
				</div>
			</div>
		</section>
		{/* <!--/ End service --> */}
    <PricingTable/>
    <BlogSection/>
        </Layout>
    </>
  )
}

export default Home