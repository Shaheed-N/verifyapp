import Link from "next/link"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
	return (
		<>

			<header id="header" className="tra-menu navbar-dark white-scroll">
				<div className="header-wrapper">
					{/* MOBILE HEADER */}
					<div className="wsmobileheader clearfix">
						<span className="smllogo">
							<Link href="#hero-17">
								<img src="/images/Group 9278.png" alt="mobile-logo" />
							</Link>
						</span>
						<a id="wsnavtoggle" className="wsanimated-arrow"><span /></a>
					</div>
					{/* NAVIGATION MENU */}
					<div className="wsmainfull menu clearfix">
						<div className="wsmainwp clearfix">
							{/* HEADER BLACK LOGO */}
							<div className="desktoplogo">
								<Link href="#hero-17" className="logo-black">
									<img src="/images/Group 9278.png" alt="logo" />
								</Link>
							</div>
							{/* HEADER WHITE LOGO */}
							<div className="desktoplogo">
								<Link href="#hero-17" className="logo-white"><img src="/images/Group 9278.png" alt="logo" /></Link>
							</div>
							{/* MAIN MENU */}
							<nav className="wsmenu clearfix">
								<ul className="wsmenu-list nav-theme">
									{/* DROPDOWN SUB MENU */}
								
									{/* SIMPLE NAVIGATION LINK */}
									<li className="nl-simple" aria-haspopup="true">
										<Link href="#features" className="h-link">Features</Link>
									</li>
									{/* MEGAMENU */}
								
									{/* SIMPLE NAVIGATION LINK */}
									<li className="nl-simple" aria-haspopup="true">
										<Link href="#pricing" className="h-link">Pricing</Link>
									</li>
									{/* DROPDOWN SUB MENU */}
									
									{/* SIMPLE NAVIGATION LINK */}
									<li className="nl-simple" aria-haspopup="true">
										<Link href="#faqs" className="h-link">FAQs</Link>
									</li>
									{/* DOWNLOAD BUTTON */}
									
								</ul>
							</nav>	{/* END MAIN MENU */}
						</div>
					</div>	{/* END NAVIGATION MENU */}
				</div>     {/* End header-wrapper */}
			</header>

		</>
	)
}
