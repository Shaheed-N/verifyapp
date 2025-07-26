
import Link from "next/link"

export default function Section15() {
	return (
		<>


			<section id="download" className="banner-5 banner-section">
				<div className="container">
					{/* BANNER WRAPPER */}
					<div className="banner-5-wrapper">
						<div className="banner-overlay bg--04 bg--fixed r-24">
							<div className="row d-flex align-items-center">
								{/* BANNER TEXT */}
								<div className="col-md-6">
									<div className="banner-5-txt left-column color--white  wow animate__animated animate__fadeInUp animate__delay-1">
										{/* Title */}
										<h2 className="h2-md" style={{color: 'black'}}>Download the VerifAI app!</h2>
										{/* Text */}
										<p className="p-md" style={{color: 'black'}}>Unlock the power of AI-driven
authentication at your fingertips.
With VerifAI, you can scan or upload
product images, follow step-by-step
guides, and receive instant
authenticity results.
										</p>
										{/* STORE BADGES */}
										<div className="stores-badge badge-img-lg">
											{/* AppStore */}
											<Link href="#" className="store">
												<img className="googleplay" src="/images/store_badges/appstore.png" alt="appstore-badge" />
											</Link>
											{/* Google Play */}
										
										</div>	{/* END STORE BADGES */}
										{/* OS Prerequisite */}
										<div className="os-version-ext">
										st
										</div>
									</div>
								</div>	{/* END BANNER TEXT */}
								{/* BANNER IMAGE */}
								<div className="col-md-6">
									<div className="banner-5-img right-column text-center wow animate__animated animate__fadeInUp animate__delay-2">
										<img className="img-fluid" src="/images/img-18.png" alt="banner-image" />
									</div>
								</div>
							</div>   {/* End row */}
						</div>   {/* End banner overlay */}
					</div>    {/* END BANNER WRAPPER */}
				</div>     {/* End container */}
			</section>

		</>
	)
}
