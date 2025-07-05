

export default function Section1() {
	return (
		<>


			<section id="hero-11" className="hero-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* HERO TEXT */}
						<div className="col-md-6">
							<div className="hero-11-txt wow animate__animated animate__fadeInRight">
								{/* Title */}
								<h2>Make your online payments secure, safe and easy</h2>
								{/* Text */}
								<p className="p-lg">Feugiat primis ligula sapien mauris auctor luctus and laoreet ipsum pretium
									egestas undo egestas cubilia
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
							<div className="hero-11-img wow animate__animated animate__fadeInLeft">
								<img className="img-fluid" src="/images/img-12.png" alt="hero-image" />
							</div>
						</div>
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
