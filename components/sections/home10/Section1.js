

export default function Section1() {
	return (
		<>


			<section id="hero-10" className="bg--fixed hero-section">
				<div className="container text-center">
					{/* HERO TEXT */}
					<div className="row justify-content-center">
						<div className="col-md-10 col-lg-9">
							<div className="hero-10-txt wow animate__animated animate__fadeInUp">
								{/* Title */}
								<h2>Find inspiration for your next design project</h2>
								{/* Text */}
								<p className="p-lg">Mauris donec ociis congue magnis sapien sagittis sapien sapien tempor diam
									volute gravida aliquet tortor undo aliquet magna egestas magna purus
								</p>
								{/* HERO QUICK FORM */}
								<form name="quickform" className="quick-form">
									{/* Form Inputs */}
									<div className="input-group">
										<input type="email" name="email" className="form-control email r-06" placeholder="Your email address" autoComplete="off" required />
										<span className="input-group-btn form-btn">
											<button type="submit" className="btn r-06 btn--theme hover--black submit">Get Started</button>
										</span>
									</div>
									{/* Form Message */}
									<div className="quick-form-msg"><span className="loading" /></div>
								</form>
								{/* Text */}
								<p className="btn-txt ico-15">
									<span className="flaticon-check color--theme" /> 14-day free trial. No credit card needed,
								</p>
							</div>
						</div>
					</div>	{/* END HERO TEXT */}
					{/* HERO IMAGE */}
					<div className="row">
						<div className="col">
							<div className="hero-10-img wow animate__animated animate__fadeInUp">
								<img className="img-fluid" src="/images/dashboard-01.png" alt="hero-image" />
							</div>
						</div>
					</div>	{/* END HERO IMAGE */}
				</div>    {/* End container */}
			</section>

		</>
	)
}
