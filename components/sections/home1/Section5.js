

export default function Section5() {
	return (
		<>


			<section id="features" className="pt-100 features-4 features-section">
				<div className="container">
					{/* SECTION TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-9 col-lg-8">
							<div className="section-title text-center mb-70">
								<h2 className="h2-xl">Save your time and effort with powerful features</h2>
							</div>
						</div>
					</div>
					{/* FEATURES WRAPPER */}
					<div className="fbox-wrapper text-center">
						<div className="row d-flex align-items-center">
							{/* FEATURE BOX #1 */}
							<div className="col-md-6">
								<div className="fbox-4 fb-7 bg--03 r-24 wow animate__animated animate__fadeInUp animate__delay-1">
									{/* TEXT */}
									<div className="fbox-txt">
										{/* Title */}
										<h5 className="h5-lg">Group Photo Sharing</h5>
										{/* Text */}
										<p className="mb-0">Lacinia quaerat ipsum congue in porttitor ipsum and cursus placerat neque
											cursus mollis dapibus
										</p>
									</div>
									{/* IMAGE */}
									<div className="fbox-4-img">
										<img className="img-fluid" src="/images/sharing.png" alt="feature-image" />
									</div>
								</div>
							</div>	{/* END FEATURE BOX #1 */}
							{/* FEATURE BOX #2 */}
							<div className="col-md-6">
								<div className="fbox-4 fb-8 bg--03 r-24 wow animate__animated animate__fadeInUp animate__delay-2">
									{/* TEXT */}
									<div className="fbox-txt">
										{/* Title */}
										<h5 className="h5-lg">Effective Communication</h5>
										{/* Text */}
										<p className="mb-0">Quaerat ipsum lacinia congue in porttitor ipsum and cursus placerat neque
											cursus magna gravida
										</p>
									</div>	{/* END TEXT */}
									{/* IMAGE */}
									<div className="fbox-4-img">
										<img className="img-fluid" src="/images/messaging.png" alt="feature-image" />
									</div>
								</div>
							</div>	{/* END FEATURE BOX #2 */}
						</div>  {/* End row */}
					</div>	{/* END FEATURES WRAPPER */}
				</div>     {/* End container */}
			</section>

		</>
	)
}
