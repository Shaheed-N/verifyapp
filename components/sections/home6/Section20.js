
import Link from "next/link"

export default function Section20() {
	return (
		<>


			<section id="download" className="pt-100 banner-2 banner-section">
				<div className="container">
					{/* BANNER WRAPPER */}
					<div className="banner-2-wrapper r-24 block--shadow">
						<div className="banner-overlay bg--02 bg--fixed">
							<div className="row justify-content-center">
								{/* BANNER TEXT */}
								<div className="col-md-9 col-lg-8">
									<div className="banner-2-txt color--white">
										{/* Title */}
										<h2 className="h2-xl">Getting started with Pintex today!</h2>
										{/* Text */}
										<p className="p-lg">Sapien tempor sodales quaerat ipsum and congue luctus laoreet turpis neque
											auctor turpis ultrice quisque
										</p>
										{/* Button */}
										<Link href="/download" className="btn btn-md r-08 btn--theme-2 hover--tra-white">Get started - it's free!</Link>
										{/* Buttons Group Text */}
										<p className="p-sm btns-group-txt ico-15">
											<span className="flaticon-check" /> No credit card needed. No Fees.
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
