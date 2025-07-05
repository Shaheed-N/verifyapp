

export default function Section13() {
	return (
		<>


			<section className="pt-100 ct-01 content-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* IMAGE BLOCK */}
						<div className="col-md-6">
							<div className="img-block left-column wow animate__animated animate__fadeInRight">
								<img className="img-fluid" src="/images/img-01.png" alt="content-image" />
							</div>
						</div>
						{/* TEXT BLOCK */}
						<div className="col-md-6">
							<div className="txt-block right-column wow animate__animated animate__fadeInLeft">
								{/* ACCORDION WRAPPER */}
								<div className="accordion-1 accordion-wrapper">
									<ul className="accordion">
										{/* ACCORDION ITEM #1 */}
										<li className="accordion-item is-active">
											{/* Title */}
											<div className="accordion-thumb"><h5 className="h5-lg">Powerful Editing Tools</h5></div>
											{/* Text */}
											<div className="accordion-panel">
												<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor
													turpis vitae dolor laoreet luctus magna ligula and cursus purus vitae a dolor
													ipsum suscipit auris
												</p>
												<p className="mb-0">Sapien sodales tempor quaerat ipsum congue undo laoreet turpis
													neque auctor turpis vitae dolor laoreet luctus magna ligula and cursus dolor
													vitae purus congue ipsum suscipit
												</p>
											</div>
										</li>	{/* END ACCORDION ITEM #1 */}
										{/* ACCORDION ITEM #2 */}
										<li className="accordion-item">
											{/* Title */}
											<div className="accordion-thumb"><h5 className="h5-lg">Custom Integrations</h5></div>
											{/* Text */}
											<div className="accordion-panel">
												<ul className="simple-list">
													<li className="list-item">
														<p>Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam ultrice
															ipsum aliquam congue and dolor cursus dolor cursus purus congue an ipsum
															purus sapien blandit
														</p>
													</li>
													<li className="list-item">
														<p className="mb-0">Tempor sapien quaerat ipsum laoreet purus and sapien dolor
															diam ultrice ipsum aliquam congue and dolor cursus
														</p>
													</li>
												</ul>
											</div>
										</li>	{/* END ACCORDION ITEM #2 */}
										{/* ACCORDION ITEM #3 */}
										<li className="accordion-item">
											{/* Title */}
											<div className="accordion-thumb"><h5 className="h5-lg">Creative and Practical</h5></div>
											{/* Text */}
											<div className="accordion-panel">
												<p className="mb-0">Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque
													auctor turpis vitae dolor laoreet luctus magna ligula and cursus purus vitae a dolor ipsum suscipit an auris diam dapibus libero at fusce blandit neque sagittis
												</p>
											</div>
										</li>	{/* END ACCORDION ITEM #3 */}
									</ul>
								</div>	{/* END ACCORDION WRAPPER */}
							</div>
						</div>	{/* END TEXT BLOCK */}
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
