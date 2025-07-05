

export default function Section12() {
	return (
		<>


			<section className="pt-100 features-5 features-section">
				<div className="container">
					{/* FEATURES WRAPPER */}
					<div className="fbox-5-wrapper bg--tra-violet-red r-24 text-center">
						{/* SECTION TITLE */}
						<div className="row justify-content-center">
							<div className="col-lg-11 col-xl-10">
								<div className="section-title mb-60 text-center">
									{/* Title */}
									<h2 className="h2-xl">The Complete Solutions</h2>
									{/* Text */}
									<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
								</div>
							</div>
						</div>	{/* END SECTION TITLE */}
						<div className="row d-flex align-items-center">
							{/* FEATURE BOX #1 */}
							<div className="col-md-6">
								<div className="fbox-5 fb-1 bg--white r-24 block--shadow wow animate__animated animate__fadeInUp animate__delay-1">
									{/* IMAGE */}
									<div className="fbox-5-img">
										<img className="img-fluid" src="/images/f_01.png" alt="feature-image" />
									</div>
									{/* TEXT */}
									<div className="fbox-txt">
										{/* Title */}
										<h5 className="h5-md">Instant Notifications</h5>
										{/* Text */}
										<p className="mb-0">Lacinia quaerat ipsum in congue porttitor ipsum and cursus quaerat neque
											cursus
										</p>
									</div>
								</div>
							</div>	{/* END FEATURE BOX #1 */}
							{/* FEATURE BOX #2 */}
							<div className="col-md-6">
								<div className="fbox-5 fb-2 bg--white r-24 block--shadow wow animate__animated animate__fadeInUp animate__delay-2">
									{/* IMAGE */}
									<div className="fbox-5-img">
										<img className="img-fluid" src="/images/f_02.png" alt="feature-image" />
									</div>
									{/* TEXT */}
									<div className="fbox-txt">
										{/* Title */}
										<h5 className="h5-md">Improved Privacy</h5>
										{/* Text */}
										<p className="mb-0">Quaerat ipsum lacinia and congue porttitor ipsum and cursus sapien neque
											gravida
										</p>
									</div>	{/* END TEXT */}
								</div>
							</div>	{/* END FEATURE BOX #2 */}
						</div>   {/* End row */}
					</div>    {/* END FEATURES WRAPPER */}
				</div>     {/* End container */}
			</section>

		</>
	)
}
