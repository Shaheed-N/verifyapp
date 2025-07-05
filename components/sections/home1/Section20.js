
import Link from "next/link"

export default function Section20() {
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
										<h2 className="h2-md">Download the Pintex App now!</h2>
										{/* Text */}
										<p className="p-md">Sapien tempor sodales a quaerat ipsum congue luctus laoreet turpis neque
											and turpis ultrice
										</p>
										{/* STORE BADGES */}
										<div className="stores-badge badge-img-lg">
											{/* AppStore */}
											<Link href="#" className="store">
												<img className="googleplay" src="/images/store_badges/appstore.png" alt="appstore-badge" />
											</Link>
											{/* Google Play */}
											<Link href="#" className="store store-btn-2">
												<img className="googleplay" src="/images/store_badges/googleplay.png" alt="googleplay-badge" />
											</Link>
										</div>	{/* END STORE BADGES */}
										{/* OS Prerequisite */}
										<div className="os-version-ext">
											<div className="star-rating clearfix ico-10">
												<span className="flaticon-star color--yellow" />
												<span className="flaticon-star color--yellow" />
												<span className="flaticon-star color--yellow" />
												<span className="flaticon-star color--yellow" />
												<span className="flaticon-star-half-empty color--yellow" />
												<small>4,78K+ Pintex users reviews.</small>
											</div>
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
