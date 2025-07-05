

export default function Section6() {
	return (
		<>


			<section className="pt-100 ct-03 content-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* TEXT BLOCK */}
						<div className="col-md-6 order-last order-md-2">
							<div className="txt-block left-column wow animate__animated animate__fadeInRight">
								{/* Title */}
								<h2 className="h2-md">Work smarter with powerful features</h2>
								{/* Text */}
								<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
									luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit auris
								</p>
								{/* Text */}
								<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
									luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit aliquet in dapibus
									libero at blandit fusce neque sagittis
								</p>
								{/* STATISTIC */}
								<div className="txt-block-stat mt-35">
									{/* STATISTIC BLOCK #1 */}
									<div id="sb-3-1" className="statistic-block wow animate__animated animate__fadeInUp">
										<div className="statistic-block">
											<h2 className="statistic-number"><span className="count-element">65</span>k</h2>
											<p>Porta justo integer <br /> a velna vitae auctor</p>
										</div>
									</div>
									{/* STATISTIC BLOCK #2 */}
									<div id="sb-3-2" className="statistic-block wow animate__animated animate__fadeInUp">
										<div className="statistic-block">
											<h2 className="statistic-number"><span className="count-element">86</span>%</h2>
											<p>Porta justo integer <br /> velna a vitae auctor</p>
										</div>
									</div>	{/* END STATISTIC BLOCK #2 */}
								</div>	{/* END STATISTIC */}
							</div>
						</div>	{/* END TEXT BLOCK */}
						{/* IMAGE BLOCK */}
						<div className="col-md-6 order-first order-md-2">
							<div className="img-block wow animate__animated animate__fadeInLeft">
								<img className="img-fluid" src="/images/tablet-02.png" alt="content-image" />
							</div>
						</div>
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
