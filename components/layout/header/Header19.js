import Link from "next/link"

export default function Header19({ scroll, isMobileMenu, handleMobileMenu }) {
	return (
		<>

			<header id="header" className="tra-menu navbar-dark white-scroll">
				<div className="header-wrapper">
					{/* MOBILE HEADER */}
					<div className="wsmobileheader clearfix">
						<span className="smllogo">
							<Link href="/">
								<img src="images/logo.png" alt="mobile-logo" />
							</Link>
						</span>
						<a id="wsnavtoggle" className="wsanimated-arrow"><span /></a>
					</div>
					{/* NAVIGATION MENU */}
					<div className="wsmainfull menu clearfix">
						<div className="wsmainwp clearfix">
							{/* HEADER BLACK LOGO */}
							<div className="desktoplogo">
								<Link href="/" className="logo-black">
									<img src="images/logo.png" alt="logo" />
								</Link>
							</div>
							{/* HEADER WHITE LOGO */}
							<div className="desktoplogo">
								<Link href="/" className="logo-white"><img src="images/logo-white.png" alt="logo" /></Link>
							</div>
							{/* MAIN MENU */}
							<nav className="wsmenu clearfix">
								<ul className="wsmenu-list nav-theme">
									{/* DROPDOWN SUB MENU */}
									<li aria-haspopup="true">
										<Link href="/#" className="h-link">About <span className="wsarrow" /></Link>
										<ul className="sub-menu ico-10">
											<li aria-haspopup="true" className="h-link"><Link href="/careers">Careers <span className="sm-info">4</span></Link></li>
											<li aria-haspopup="true" className="h-link"><Link href="/blog-listing">Pintex Blog</Link></li>
											<li aria-haspopup="true" className="h-link"><Link href="/contacts">Contact Us</Link></li>
										</ul>
									</li>
									{/* SIMPLE NAVIGATION LINK */}
									<li className="nl-simple" aria-haspopup="true">
										<Link href="/features" className="h-link">Features</Link>
									</li>
									{/* MEGAMENU */}
									<li aria-haspopup="true" className="mg_link"><Link href="/#" className="h-link">Pages <span className="wsarrow" /></Link>
										<div className="wsmegamenu w-75 clearfix">
											<div className="container">
												<div className="row">
													{/* MEGAMENU LINKS */}
													<ul className="col-md-12 col-lg-3 link-list">
														<li className="fst-li"><Link href="/about">About Us</Link></li>
														<li><Link href="/careers">Careers <span className="sm-info">4</span></Link></li>
														<li><Link href="/career-role">Career Details</Link></li>
														<li><Link href="/reviews">Testimonials</Link></li>
														<li><Link href="/contacts">Contact Us</Link></li>
													</ul>
													{/* MEGAMENU LINKS */}
													<ul className="col-md-12 col-lg-3 link-list">
														<li className="fst-li"><Link href="/features">Core Features</Link></li>
														<li><Link href="/integrations">Integrations</Link></li>
														<li><Link href="/changelog">Changelog</Link></li>
														<li><Link href="/more-apps">More Apps</Link></li>
														<li><Link href="/download">Download Page</Link></li>
													</ul>
													{/* MEGAMENU LINKS */}
													<ul className="col-md-12 col-lg-3 link-list">
														<li className="fst-li"><Link href="/pricing-1">Pricing Page #1</Link></li>
														<li><Link href="/pricing-1">Pricing Page #2</Link></li>
														<li><Link href="/faqs">FAQs Page</Link></li>
														<li><Link href="/blog-listing">Blog Listing</Link></li>
														<li><Link href="/single-post">Single Blog Post</Link></li>
													</ul>
													{/* MEGAMENU LINKS */}
													<ul className="col-md-12 col-lg-3 link-list">
														<li className="fst-li"><Link href="/cookies">Cookies</Link></li>
														<li><Link href="/privacy">Privacy</Link></li>
														<li><Link href="/login">Login Page</Link></li>
														<li><Link href="/signup">Signup Page</Link></li>
														<li><Link href="/reset-password">Reset Password</Link></li>
													</ul>
												</div>  {/* End row */}
											</div>  {/* End container */}
										</div>  {/* End wsmegamenu */}
									</li>	{/* END MEGAMENU */}
									{/* SIMPLE NAVIGATION LINK */}
									<li className="nl-simple" aria-haspopup="true">
										<Link href="/pricing-1" className="h-link">Pricing</Link>
									</li>
									{/* SIMPLE NAVIGATION LINK */}
									<li className="nl-simple" aria-haspopup="true">
										<Link href="/faqs" className="h-link">FAQs</Link>
									</li>
									{/* SIGN IN LINK */}
									<li className="nl-simple reg-fst-link" aria-haspopup="true">
										<Link href="/login" className="h-link">Sign In</Link>
									</li>
									{/* SIGN UP BUTTON */}
									<li className="nl-simple mobile-last-link" aria-haspopup="true">
										<Link href="/signup" className="btn r-36 btn--theme hover--tra-black last-link">Get Started</Link>
									</li>
								</ul>
							</nav>	{/* END MAIN MENU */}
						</div>
					</div>	{/* END NAVIGATION MENU */}
				</div>     {/* End header-wrapper */}
			</header>


		</>
	)
}
