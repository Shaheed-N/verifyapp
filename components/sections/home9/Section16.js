
import Link from "next/link"

export default function Section16() {
	return (
		<>


			<section id="download" className="banner-1 banner-section">
				<div className="container">
					{/* BANNER WRAPPER */}
					<div className="banner-1-wrapper bg--01 bg--fixed r-24">
						<div className="banner-overlay">
							<div className="row d-flex align-items-center">
								{/* BANNER TEXT */}
								<div className="col-md-7">
									<div className="banner-1-txt color--white">
										{/* Title */}
										<h2 className="h2-xl">Getting started with Pintex today!</h2>
										{/* Text */}
										<p className="p-lg">Aliquam augue suscipit luctus neque purus ipsum neque and dolor primis
											tempus suscipit cursus
										</p>
										{/* STORE BADGES */}
										<div className="stores-badge badge-img-md">
											{/* AppStore */}
											<Link href="#" className="store">
												<img className="appstore" src="/images/store_badges/appstore.png" alt="appstore-badge" />
											</Link>
											{/* Google Play */}
											<Link href="#" className="store">
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
								{/* BANNER QR CODE */}
								<div className="banner-qr-code">
									<img className="img-fluid" src="/images/qr-code.png" alt="qr-code-image" />
									<p>Scan to get Pintex App</p>
								</div>
							</div>   {/* End row */}
						</div>   {/* End banner overlay */}
					</div>    {/* END BANNER WRAPPER */}
				</div>     {/* End container */}
			</section>

		</>
	)
}
