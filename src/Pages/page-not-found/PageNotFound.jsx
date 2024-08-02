import React from 'react';
import './PageNotFound.css';
import Layout from '../../Layout';

const PageNotFound = () => {
  return (
    <>
	<Layout>
    {/* <!-- Error Page --> */}
		<section className="error-page section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3 col-12">
						{/* <!-- Error Inner --> */}
						<div className="error-inner">
							<h1>404<span>Oop's  sorry we can't find that page!</span></h1>
							<p>Aenean eget sollicitudin lorem, et pretium felis. Nullam euismod diam libero, sed dapibus leo laoreet ut. Suspendisse potenti. Phasellus urna lacus</p>
							<form className="search-form">
								<input placeholder="Search from Here" type="text"/>
								<button className="btn" type="submit"><i className="fa fa-search"></i></button>
							</form>
						</div>
						{/* <!--/ End Error Inner --> */}
					</div>
				</div>
			</div>
		</section>	
		{/* <!--/ End Error Page --> */}
		</Layout>
        </>
  )
}

export default PageNotFound