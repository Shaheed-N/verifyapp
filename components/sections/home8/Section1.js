

export default function Section1() {
	return (
		<>


			<section id="hero-8" className="bg--fixed hero-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* HERO TEXT */}
						<div className="col-md-6">
							<div className="hero-8-txt color--white wow animate__animated animate__fadeInRight">
								{/* Title */}
								<h2>Instant access to all your media files anywhere</h2>
								{/* Text */}
								<p className="p-lg">Feugiat primis ligula sapien mauris auctor ipsum and laoreet pretium augue
									egestas cubilia cursus
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
									<span className="flaticon-check color--theme-2" /> No credit card needed. No Fees.
								</p>
							</div>
						</div>	{/* END HERO TEXT */}
						{/* HERO IMAGE */}
						<div className="col-md-6">
							<div className="hero-8-img wow animate__animated animate__fadeInleft">
								<img className="img-fluid" src="/images/tablet-01.png" alt="hero-image" />
							</div>
						</div>
					</div>    {/* End row */}
				</div>	   {/* End container */}
				{/* WAVE SHAPE BOTTOM */}
				<div className="wave-shape-bottom">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#0099ff" fillOpacity={1} d="M0,192L1440,96L1440,320L0,320Z" /></svg>
				</div>
			</section>

		</>
	)
}
