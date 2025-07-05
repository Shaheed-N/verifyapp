
export default function NewsletterModal() {
	return (
		<>
			<div id="modal-1" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="modal-1">
				<div className="modal-dialog modal-xl modal-dialog-centered">
					<div className="modal-content">
						{/* CLOSE BUTTON */}
						<button type="button" className="btn-close ico-10" data-bs-dismiss="modal" aria-label="Close">
							<span className="flaticon-cancel" />
						</button>
						{/* MODAL CONTENT */}
						<div className="modal-body">
							<div className="container">
								<div className="row">
									{/* BACKGROUND IMAGE */}
									<div className="col-md-5 bg-img d-none d-sm-flex align-items-end" />
									{/* REQUEST FORM */}
									<div className="col-md-7">
										<div className="modal-body-content">
											{/* TEXT */}
											<div className="request-form-title">
												<h4 className="h4-md">Subscribe to our newsletter today!</h4>
												{/* Title */}
												<p className="p-md">Be first to know new features, best solutions, news, ideas and
													updates
												</p>
											</div>
											{/* FORM */}
											<form className="newsletter-form">
												<div className="input-group">
													<input type="email" autoComplete="off" className="form-control" placeholder="Your email address" required id="s-email" />
													<span className="input-group-btn">
														<button type="submit" className="btn r-06 btn--theme hover--black">Subscribe Now</button>
													</span>
												</div>
												{/* Newsletter Form Notification */}
												<label htmlFor="s-email" className="form-notification" />
											</form>
										</div>
									</div>	{/* END REQUEST FORM */}
								</div>
							</div>
						</div>	{/* END MODAL CONTENT */}
					</div>
				</div>
			</div>

		</>
	)
}
