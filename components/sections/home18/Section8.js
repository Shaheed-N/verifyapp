

export default function Section8() {
	return (
		<>


			<section className="pt-100 ct-01 content-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* TEXT BLOCK */}
						<div className="col-md-6 order-last order-md-2">
							<div className="txt-block left-column wow animate__animated animate__fadeInRight">
								{/* Section ID */}
								<span className="section-id">From Good to Great</span>
								{/* Title */}
								<h2 className="h2-md">Creative solutions, creative results</h2>
								{/* Text */}
								<p>Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
									luctus placerat magna and ligula cursus purus vitae purus an ipsum auris suscipit
								</p>
								{/* Text */}
								<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
									luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit aliquet in dapibus
									libero at blandit fusce neque sagittis
								</p>
							</div>
						</div>	{/* END TEXT BLOCK */}
						{/* IMAGE BLOCK */}
						<div className="col-md-6 order-first order-md-2">
							<div className="img-block right-column wow animate__animated animate__fadeInLeft">
								<img className="img-fluid" src="/images/img-01.png" alt="content-image" />
							</div>
						</div>
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
