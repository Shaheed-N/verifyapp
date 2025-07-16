import Link from "next/link"

export default function Footer2() {
	return (
		<>

			<footer className="pt-100 footer-3 footer division">
				<div className="container">
					{/* FOOTER CONTENT */}
					<div className="row">
						{/* FOOTER INFO */}
						<div className="col-lg-3">
							<div className="footer-info">
								{/* LOGO */}
								<img className="footer-logo" src="/images/Group 9278.png" alt="footer-logo" />
								{/* QR CODE */}
								
							</div>
						</div>
						{/* FOOTER LINKS */}
						<div className="col-md-9 col-lg-6 col-xl-7">
							<div className="row footer-links clearfix">
						
								<div className="col-md-4">
								
								</div>	{/* END FOOTER LINKS #3 */}
							</div>
						</div>	{/* END FOOTER LINKS */}
						
					</div>	{/* END FOOTER CONTENT */}
					<hr />	{/* FOOTER DIVIDER LINE */}
					{/* BOTTOM FOOTER */}
					<div className="bottom-footer">
						<div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
							{/* FOOTER COPYRIGHT */}
							<div className="col">
								<div className="footer-copyright"><p className="p-sm">© 2025 VerifAI <span>All Rights Reserved</span></p></div>
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
					</div>	{/* BOTTOM FOOTER */}
				</div>     {/* End container */}
			</footer>

		</>
	)
}
