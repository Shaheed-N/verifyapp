
import Link from "next/link"

export default function Section16() {
	return (
		<>


			<section id="download" className="pt-100 banner-1 banner-section">
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
										{/* Button */}
										<Link href="/download" className="btn r-10 btn-md btn--theme-2 hover--tra-white">Get started - it's free!</Link>
										{/* Buttons Group Text */}
										<p className="p-sm btns-group-txt ico-15">
											<span className="flaticon-check" /> Free forever. No credit card needed.
										</p>
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
