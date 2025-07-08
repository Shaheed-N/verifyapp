import Link from "next/link"

export default function Section1() {
	return (
		<>


			<section id="hero-17" className="bg--fixed hero-section division" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* HERO TEXT */}
						<div className="col-md-6 col-lg-5">
							<div className="hero-17-txt wow animate__animated animate__fadeInRight">
								{/* HERO APP LOGO */}
								<div className="hero-app-logo">
									<img className="img-fluid" src="/images/app-logo-1.png" alt="hero-app-logo" />
								</div>
								{/* Title */}
								<h2>Verify any item instantly with AI</h2>
								{/* Text */}
								<p className="p-md">
									Check if items are authentic or fake in seconds. Get detailed AI reports, quality scores, price estimates, and expert shopping insights — all in one app.
								</p>
								{/* STORE BADGES */}
								<div className="stores-badge badge-img-md">
									{/* AppStore */}
									<Link href="#" className="store">
										<img className="appstore" src="/images/store_badges/appstore.png" alt="appstore-badge" />
									</Link>
									{/* Google Play */}
								</div>	{/* END STORE BADGES */}
							</div>
						</div>	{/* END HERO TEXT */}
						{/* HERO IMAGE */}
						<div className="col-md-6 col-lg-7">
							<div className="hero-17-img text-center wow animate__animated animate__fadeInLeft">
								<img className="img-fluid" src="/images/hero-17-img.png" alt="hero-image" />
							</div>
						</div>
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
