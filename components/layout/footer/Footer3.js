import Link from "next/link"

export default function Footer2() {
	return (
		<>

			<footer className="pt-100 footer-2 footer division">
				<div className="container">
					{/* FOOTER CONTENT */}
					<div className="row">
						{/* FOOTER LOGO */}
						<div className="col-lg-3">
							<div className="footer-info">
								{/* LOGO */}
								<img className="footer-logo" src="/images/logo.png" alt="footer-logo" />
								{/* QR CODE */}
								<div className="footer-qr-code r-16">
									<img className="img-fluid" src="/images/qr-code.png" alt="qr-code-image" />
								</div>
							</div>
						</div>
						{/* FOOTER LINKS */}
						<div className="col-md-8 col-lg-6">
							<div className="row footer-links clearfix">
								{/* FOOTER LINKS #1 */}
								<div className="col-md-4">
									<div className="fl-1">
										<h6 className="d-title">Pintex</h6>
										<h6 className="m-title">Pintex</h6>
										{/* Links */}
										<ul className="foo-links clearfix">
											<li><p><Link href="/features">Why Pintex?</Link></p></li>
											<li><p><Link href="/changelog">What’s New</Link></p></li>
											<li><p><Link href="/integrations">Integrations</Link></p></li>
											<li><p><Link href="/download">Download</Link></p></li>
										</ul>
									</div>
								</div>	{/* END FOOTER LINKS #1 */}
								{/* FOOTER LINKS #2 */}
								<div className="col-md-4">
									<div className="fl-2">
										{/* Title */}
										<h6 className="d-title">Discover</h6>
										<h6 className="m-title">Discover</h6>
										{/* Links */}
										<ul className="foo-links clearfix">
											<li><p><Link href="/pricing-2">Pricing Plans</Link></p></li>
											<li><p><Link href="/reviews">Testimonials</Link></p></li>
											<li><p><Link href="/faqs">Help &amp; Support</Link></p></li>
											<li><p><Link href="/more-apps">More Products</Link></p></li>
										</ul>
									</div>
								</div>	{/* END FOOTER LINKS #2 */}
								{/* FOOTER LINKS #3 */}
								<div className="col-md-4">
									<div className="fl-3">
										{/* Title */}
										<h6 className="d-title">Company</h6>
										<h6 className="m-title">Company</h6>
										{/* Links */}
										<ul className="foo-links clearfix">
											<li><p><Link href="/about">About Us</Link></p></li>
											<li><p><Link href="/careers">Careers</Link></p></li>
											<li><p><Link href="/blog-listing">Our Blog</Link></p></li>
											<li><p><Link href="/contacts">Contact Us</Link></p></li>
										</ul>
									</div>
								</div>	{/* END FOOTER LINKS #3 */}
							</div>
						</div>	{/* END FOOTER LINKS */}
						{/* FOOTER NEWSLETTER FORM */}
						<div className="col-md-4 col-lg-3">
							<div className="footer-form">
								{/* Title */}
								<h6>Follow the Best</h6>
								{/* Newsletter Form Input */}
								<form className="newsletter-form">
									<div className="input-group r-06">
										<input type="email" className="form-control" placeholder="Email Address" required id="s-email" />
										<span className="input-group-btn ico-15">
											<button type="submit" className="btn">
												<span className="flaticon-right-arrow" />
											</button>
										</span>
									</div>
									{/* Newsletter Form Notification */}
									<label htmlFor="s-email" className="form-notification" />
								</form>
							</div>
						</div>	{/* END FOOTER NEWSLETTER FORM */}
					</div>	{/* END FOOTER CONTENT */}
					<hr />	{/* FOOTER DIVIDER LINE */}
					{/* BOTTOM FOOTER */}
					<div className="bottom-footer">
						<div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
							{/* FOOTER COPYRIGHT */}
							<div className="col">
								<div className="footer-copyright"><p className="p-sm">© 2024 Pintex. <span>All Rights Reserved</span></p></div>
							</div>
							{/* FOOTER LINKS */}
							<div className="col">
								<ul className="bottom-footer-list ico-10 text-end">
									<li><p className="p-sm"><Link href="/privacy">Privacy Policy</Link></p></li>
									<li className="footer-list-divider"><p><span className="flaticon-minus-1" /></p></li>
									<li><p className="p-sm"><Link href="/terms">Terms &amp; Conditions</Link></p></li>
								</ul>
							</div>
						</div>  {/* End row */}
					</div>	{/* END BOTTOM FOOTER */}
				</div>     {/* End container */}
			</footer>

		</>
	)
}
