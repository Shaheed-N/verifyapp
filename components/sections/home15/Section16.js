

export default function Section16() {
	return (
		<>


			<section className="newsletter-1 newsletter-section division">
				<div className="newsletter-overlay">
					<div className="container">
						<div className="row d-flex align-items-center row-cols-1 row-cols-lg-2">
							{/* NEWSLETTER TEXT */}
							<div className="col">
								<div className="newsletter-txt">
									<h4 className="h4-lg">Stay up to date with our news, ideas and updates</h4>
								</div>
							</div>
							{/* NEWSLETTER FORM */}
							<div className="col">
								<form className="newsletter-form">
									<div className="input-group">
										<input type="email" autoComplete="off" className="form-control" placeholder="Your email address" required id="s-email" />
										<span className="input-group-btn">
											<button type="submit" className="btn btn--theme hover--black">Subscribe Now</button>
										</span>
									</div>
									{/* Newsletter Form Notification */}
									<label htmlFor="s-email" className="form-notification" />
								</form>
							</div>	  {/* END NEWSLETTER FORM */}
						</div>	  {/* End row */}
					</div>    {/* End container */}
				</div>     {/* End newsletter-overlay */}
			</section>

		</>
	)
}
