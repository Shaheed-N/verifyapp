import Link from "next/link"

export default function Footer2() {
	return (
		<>

			<footer className="pt-100 footer-1 footer ft-2-rows division">
				<div className="container">
					{/* FOOTER CONTENT */}
					<div className="row footer-links clearfix">
						{/* FOOTER LINKS #1 */}
						<div className="col-md-2">
							<div className="fl-1">
								{/* Title */}
								<h6 className="d-title">Pintex</h6>
								<h6 className="m-title">Pintex</h6>
								{/* Links */}
								<ul className="foo-links clearfix">
									<li><p><Link href="/features">Why Pintex?</Link></p></li>
									<li><p><Link href="/changelog">What’s New</Link></p></li>
									<li><p><Link href="/integrations">Integrations</Link></p></li>
									<li><p><Link href="/pricing-2">Pricing Plans</Link></p></li>
									<li><p><Link href="/contacts">Editor Help</Link></p></li>
									<li><p><Link href="/download">Download</Link></p></li>
								</ul>
							</div>
						</div>	{/* END FOOTER LINKS #1 */}
						{/* FOOTER LINKS #2 */}
						<div className="col-md-4">
							<div className="fl-2">
								{/* Title */}
								<h6 className="d-title">Features</h6>
								<h6 className="m-title">Features</h6>
								{/* Links */}
								<ul className="foo-links clearfix">
									<li><p><Link href="#">Libero quisque and massa</Link></p></li>
									<li><p><Link href="#">Aliquam auris dapibus libero</Link></p></li>
									<li><p><Link href="#">Purus justo lacus ligula</Link></p></li>
									<li><p><Link href="#">Tortor sagittis lacinia</Link></p></li>
									<li><p><Link href="#">Gravida aliquet ipsum ultrices</Link></p></li>
									<li><p><Link href="#">Lacinia molestie egestas</Link></p></li>
								</ul>
							</div>
						</div>	{/* END FOOTER LINKS #2 */}
						{/* FOOTER LINKS #3,4 */}
						<div className="col-md-3">
							{/* FOOTER LINKS #3 */}
							<div className="fl-3">
								{/* Title */}
								<h6 className="d-title">Discover</h6>
								<h6 className="m-title">Discover</h6>
								{/* Links */}
								<ul className="foo-links clearfix">
									<li><p><Link href="/more-apps">More Products</Link></p></li>
									<li><p><Link href="/faqs">Help &amp; Support</Link></p></li>
								</ul>
							</div>	{/* END FOOTER LINKS #3 */}
							{/* FOOTER LINKS #4 */}
							<div className="fl-4">
								{/* Title */}
								<h6 className="d-title">Legal</h6>
								<h6 className="m-title">Legal</h6>
								{/* Links */}
								<ul className="foo-links clearfix">
									<li><p><Link href="/terms">Terms of Use</Link></p></li>
									<li><p><Link href="/privacy">Privacy Policy</Link></p></li>
									<li><p><Link href="/cookies">Cookie Policy</Link></p></li>
								</ul>
							</div>	{/* END FOOTER LINKS #4 */}
						</div>	{/* END FOOTER LINKS #3,4 */}
						{/* FOOTER LINKS #5,6 */}
						<div className="col-md-3">
							{/* FOOTER LINKS #5 */}
							<div className="fl-5">
								{/* Title */}
								<h6 className="d-title">Company</h6>
								<h6 className="m-title">Company</h6>
								{/* Links */}
								<ul className="foo-links clearfix">
									<li><p><Link href="/about">About Us</Link></p></li>
									<li><p><Link href="/careers">Careers</Link></p></li>
									<li><p><Link href="/reviews">Testimonials</Link></p></li>
									<li><p><Link href="/blog-listing">Our Blog</Link></p></li>
									<li><p><Link href="/contacts">Contact Us</Link></p></li>
								</ul>
							</div>	{/* END FOOTER LINKS #5 */}
						</div>	{/* END FOOTER LINKS #5,6 */}
					</div>	{/* END FOOTER CONTENT */}
					<hr />	{/* FOOTER DIVIDER LINE */}
					{/* BOTTOM FOOTER */}
					<div className="bottom-footer">
						<div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
							{/* FOOTER COPYRIGHT */}
							<div className="col">
								<div className="footer-copyright copyright-logo">
									<div className="footer-copyright-logo">
										<img className="footer-logo" src="/images/logo.png" alt="footer-logo" />
									</div>
									<p className="p-sm">© 2024 Pintex. <span>All Rights Reserved</span></p>
								</div>
							</div>
							{/* FOOTER SOCIALS */}
							<div className="col">
								<ul className="bottom-footer-socials ico-20 text-end">
									<li><Link href="#"><span className="flaticon-facebook" /></Link></li>
									<li><Link href="#"><span className="flaticon-twitter-1" /></Link></li>
									<li><Link href="#"><span className="flaticon-linkedin" /></Link></li>
									<li><Link href="#"><span className="flaticon-instagram" /></Link></li>
								</ul>
							</div>
						</div>  {/* End row */}
					</div>	{/* END BOTTOM FOOTER */}
				</div>     {/* End container */}
			</footer>

		</>
	)
}
