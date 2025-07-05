

export default function Section4() {
	return (
		<>


			<section id="benefits" className="pt-100 bc-01 ws-wrapper content-section">
				<div className="container">
					<div className="bc-01-wrapper bg--whitesmoke r-24">
						<div className="section-overlay bg--fixed">
							<div className="row d-flex align-items-center">
								{/* TEXT BLOCK */}
								<div className="col-md-6 order-last order-md-2">
									<div className="txt-block left-column wow animate__animated animate__fadeInRight">
										{/* Title */}
										<h2 className="h2-md">Best editor for your media files</h2>
										{/* Text */}
										<p>Sodales tempor sapien diam quaerat congue primis ipsum laoreet turpis neque auctor vitae
											fusce dolor laoreet placerat magna ligula auctor sagittis cursus
										</p>
										{/* Text */}
										<p className="mb-0">Tempor sapien sodales diam quaerat congue primis ipsum laoreet turpis neque
											auctor vitae fusce dolor laoreet placerat magna ligula auctor cursus sagittis luctus placerat magna and ligula cursus purus
										</p>
									</div>
								</div>	{/* END TEXT BLOCK */}
								{/* IMAGE BLOCK */}
								<div className="col-md-6 order-first order-md-2">
									<div className="img-block right-column wow animate__animated animate__fadeInLeft">
										<img className="img-fluid" src="/images/img-06.png" alt="content-image" />
									</div>
								</div>
							</div>   {/* End row */}
						</div>    {/* End section overlay */}
					</div>    {/* End content wrapper */}
				</div>     {/* End container */}
			</section>

		</>
	)
}
