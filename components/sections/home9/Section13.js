

export default function Section13() {
	return (
		<>


			<section className="py-100 statistic-2 statistic-section division">
				<div className="container">
					{/* STATISTIC WRAPPER */}
					<div className="statistic-2-wrapper">
						<div className="row">
							{/* TEXT BLOCK */}
							<div className="col-md-7 col-xl-6">
								<div className="txt-block right-column wow animate__animated animate__fadeInUp animate__delay-1">
									<h3>More than 890K users worldwide using Pintex</h3>
								</div>
							</div>
							{/* STATISTIC BLOCK #1 */}
							<div className="col-sm-5 col-md-3 offset-sm-1 offset-md-0 offset-xl-1">
								<div id="sb-2-1" className="statistic-block wow animate__animated animate__fadeInUp animate__delay-2">
									{/* Text */}
									<h2 className="h2-md statistic-number"><span className="count-element">99</span>%</h2>
									<p>Satisfied Users <br /> Worldwide</p>
								</div>
							</div>
							{/* STATISTIC BLOCK #2 */}
							<div className="col-sm-5 col-md-2">
								<div id="sb-2-2" className="statistic-block wow animate__animated animate__fadeInUp animate__delay-3">
									{/* Text */}
									<h2 className="h2-md statistic-number">
										<span className="count-element">4</span>.<span className="count-element">93</span>
									</h2>
									{/* Rating */}
									<div className="txt-block-rating ico-15 color--yellow">
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star-half-empty" />
									</div>
									<p>5,376 Rating</p>
								</div>
							</div>
						</div>  {/* End row */}
					</div>	{/* END STATISTIC WRAPPER */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
