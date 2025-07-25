

export default function Section4() {
	return (
		<>


			<section id="benefits" className="pt-100 ct-01 content-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* TEXT BLOCK */}
						<div className="col-md-6 order-last order-md-2">
							<div className="txt-block left-columnt wow animate__animated animate__fadeInRight">
								{/* Section ID */}
								<span className="section-id">Encrypted Calls</span>
								{/* Title */}
								<h2 className="h2-md">Free and secure voice &amp; video calls</h2>
								{/* Text */}
								<p>Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
									luctus placerat magna and ligula cursus purus vitae purus an ipsum auris suscipit
								</p>
								{/* TEXT BOX */}
								<div className="txt-box">
									{/* Title */}
									<h5 className="h5-lg">Connect with people</h5>
									{/* Text */}
									<ul className="simple-list">
										<li className="list-item">
											<p>Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam ultrice ipsum aliquam
												congue and dolor cursus
											</p>
										</li>
										<li className="list-item">
											<p className="mb-0">Tempor sapien quaerat ipsum laoreet purus dolor a sapien turpis ultrice
												pulvinar congue aliquam an ispum congue
											</p>
										</li>
									</ul>
								</div>	{/* END TEXT BOX */}
							</div>
						</div>	{/* END TEXT BLOCK */}
						{/* IMAGE BLOCK */}
						<div className="col-md-6 order-first order-md-2">
							<div className="img-block right-column wow animate__animated animate__fadeInLeft">
								<img className="img-fluid" src="/images/img-10.png" alt="content-image" />
							</div>
						</div>
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
