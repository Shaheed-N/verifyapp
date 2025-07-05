

export default function Section1() {
	return (
		<>


			<section id="hero-13" className="bg--fixed hero-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* HERO IMAGE */}
						<div className="col-md-6 order-last order-md-2">
							<div className="hero-13-img wow animate__animated animate__fadeInRight">
								<img className="img-fluid" src="/images/hero-13-img.png" alt="hero-image" />
							</div>
						</div>
						{/* HERO TEXT */}
						<div className="col-md-6 order-first order-md-2">
							<div className="hero-13-txt color--white wow animate__animated animate__fadeInLeft">
								{/* Title */}
								<h2>Create, manage and publish your content with ease</h2>
								{/* Text */}
								<p className="p-lg">Feugiat primis ligula and sapien mauris auctor ipsum laoreet pretium augue
									an egestas cubilia cursus
								</p>
								{/* HERO QUICK FORM */}
								<form name="quickform" className="quick-form form-half">
									{/* Form Inputs */}
									<div className="input-group">
										<input type="email" name="email" className="form-control email r-10" placeholder="Your email address" autoComplete="off" required />
										<span className="input-group-btn form-btn">
											<button type="submit" className="btn r-10 btn--theme hover--black submit">Get Started</button>
										</span>
									</div>
									{/* Form Message */}
									<div className="quick-form-msg"><span className="loading" /></div>
								</form>	{/* END HERO QUICK FORM */}
								{/* Text */}
								<p className="p-sm btn-txt ico-15">
									<span className="flaticon-check color--theme" /> No credit card needed. No Fees.
								</p>
							</div>
						</div>	{/* END HERO TEXT */}
					</div>    {/* End row */}
				</div>	   {/* End container */}
				{/* WAVE SHAPE BOTTOM */}
				<div className="wave-shape-bottom">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 165"><path fillOpacity={1} d="M0,96L1440,160L1440,320L0,320Z" /></svg>
				</div>
			</section>

		</>
	)
}
