

export default function Section6() {
	return (
		<>


			<section className="pt-30 features-4 features-section">
				<div className="container">
					<div className="fbox-4-wrapper bg--03 r-24 wow animate__animated animate__fadeInUp animate__delay-1">
						<div className="row d-flex align-items-center">
							{/* TEXT BLOCK */}
							<div className="col-md-6">
								<div className="fbox-4-txt right-column">
									{/* Title */}
									<h3 className="h3-lg">Share your doodles, stickers and photos in real-time</h3>
									{/* Text */}
									<p className="mb-0">Sodales tempor sapien diam quaerat congue primis ipsum laoreet turpis neque
										auctor vitae fusce dolor laoreet placerat magna ligula and cursus purus
									</p>
								</div>
							</div>
							{/* IMAGE BLOCK */}
							<div className="col-md-6">
								<div className="fbox-4-img left-column">
									<img className="img-fluid r-24" src="/images/img-16.jpg" alt="feature-image" />
								</div>
							</div>
						</div>   {/* End row */}
					</div>    {/* End fbox-wrapper */}
				</div>     {/* End container */}
			</section>

		</>
	)
}
