import React from 'react'
// import Layout from '../../Layout'
// Css
// import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/style.css';
// import '../../assets/css/nice-select.css';
// import '../../assets/css/icofont.css';
// import '../../assets/css/slicknav.min.css';
// import '../../assets/css/owl-carousel.css';
// import '../../assets/css/datepicker.css';
// import '../../assets/css/animate.min.css';
// import '../../assets/css/magnific-popup.css';
// import '../../assets/css/font-awesome.min.css';
// import '../../assets/css/responsive.css';
// import '../../assets/css/normalize.css';

const Loader = () => {
  return (
  <>
  {/* <!-- Preloader --> */}
        <div className="preloader">
            <div className="loader">
                <div className="loader-outter"></div>
                <div className="loader-inner"></div>

                <div className="indicator"> 
                    <svg width="16px" height="12px">
                        <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                        <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
        {/* <!-- End Preloader --> */}
  </>
  )
}

export default Loader