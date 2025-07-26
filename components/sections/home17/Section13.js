

export default function Section13() {
	return (
		<>
			<section className="pt-100 ct-01 content-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* IMAGE BLOCK */}
						<div className="col-md-6">
							<div className="img-block left-column wow animate__animated animate__fadeInRight">
								<img className="img-fluid" src="/images/img-03.png" alt="content-image" />
							</div>
						</div>
						{/* TEXT BLOCK */}
						<div className="col-md-6">
							<div className="txt-block right-column wow animate__animated animate__fadeInLeft">
								{/* Title */}
								<h2 className="h2-md">Compare with Confidence,<br/>Share with Ease</h2>
								{/* Text */}
								<p>VerifAI enables users to go beyond single-item authentication by offering a powerful side-by-side comparison feature. Whether you're choosing between similar styles or evaluating authenticity signals across multiple products, our intelligent comparison tool helps you make smarter, faster decisions.</p>
								{/* TEXT BOX */}
								<div className="txt-box">
									<ul className="simple-list">
										<li className="list-item">
											<p>Easily compare multiple items across key criteria like authenticity score, brand, era, material, and design highlights.</p>
										</li>
										<li className="list-item">
											<p>View side-by-side insights in a clean, mobile-optimized layout tailored for collectors, shoppers, and resellers.</p>
										</li>
										<li className="list-item">
											<p>Highlight “Best Item” recommendations based on AI analysis, style relevance, and trend positioning.</p>
										</li>
										<li className="list-item">
											<p>Share comparison results with friends or communities directly from the app for collaborative decision-making.</p>
										</li>
									</ul>
								</div>
							</div>
						</div>	{/* END TEXT BLOCK */}
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>
		</>
	)
}
