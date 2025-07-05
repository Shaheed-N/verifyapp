

export default function Section12() {
	return (
		<>


			<section className="py-100 features-6 features-section division">
				<div className="container">
					{/* SECTION TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="section-title text-center mb-80">
								{/* Title */}
								<h2 className="h2-title">Everything in One Place</h2>
								{/* Text */}
								<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
							</div>
						</div>
					</div>
					{/* FEATURES WRAPPER */}
					<div className="fbox-wrapper text-center">
						<div className="row row-cols-1 row-cols-md-3">
							{/* FEATURE BOX #1 */}
							<div className="col">
								<div className="fbox-6 fb-1 wow animate__animated animate__fadeInUp animate__delay-1">
									{/* Image */}
									<div className="fbox-img h-180">
										<img className="img-fluid" src="/images/f_05.png" alt="feature-image" />
									</div>
									{/* Text */}
									<div className="fbox-txt">
										<h6 className="h6-xl">Available Everywhere</h6>
										<p>Egestas luctus augue undo ultrice quisque in lacus cursus feugiat eget ultrice
											laoreet cubilia sagittis
										</p>
									</div>
								</div>
							</div>	{/* END FEATURE BOX #1 */}
							{/* FEATURE BOX #2 */}
							<div className="col">
								<div className="fbox-6 fb-2 wow animate__animated animate__fadeInUp animate__delay-2">
									{/* Image */}
									<div className="fbox-img h-180">
										<img className="img-fluid" src="/images/f_07.png" alt="feature-image" />
									</div>
									{/* Text */}
									<div className="fbox-txt">
										<h6 className="h6-xl">Intuitive Editing Tools</h6>
										<p>Augue egestas luctus undo ultrice quisque in lacus cursus feugiat eget ultrice
											sagittis cubilia laoreet
										</p>
									</div>
								</div>
							</div>	{/* END FEATURE BOX #2 */}
							{/* FEATURE BOX #3 */}
							<div className="col">
								<div className="fbox-6 fb-3 wow animate__animated animate__fadeInUp animate__delay-3">
									{/* Image */}
									<div className="fbox-img h-180">
										<img className="img-fluid" src="/images/f_08.png" alt="feature-image" />
									</div>
									{/* Text */}
									<div className="fbox-txt">
										<h6 className="h6-xl">AI-Powered Algorithm</h6>
										<p>Egestas luctus augue undo ultrice quisque in lacus cursus feugiat eget ultrice
											laoreet sagittis cubilia
										</p>
									</div>
								</div>
							</div>	{/* END FEATURE BOX #3 */}
						</div>  {/* End row */}
					</div>	{/* END FEATURES WRAPPER */}
				</div>     {/* End container */}
			</section>

		</>
	)
}
