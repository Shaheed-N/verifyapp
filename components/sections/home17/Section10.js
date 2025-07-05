
import Link from "next/link"

export default function Section10() {
	return (
		<>


			<div className="py-100 rating-2 rating-section division">
				<div className="container">
					{/* RATING TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-10 col-lg-9">
							<div className="rating-title mb-50">
								<h6 className="h6-lg w-600">People across the planet love using Pintex</h6>
							</div>
						</div>
					</div>
					{/* RATING WRAPPER */}
					<div className="rating-2-wrapper text-center">
						<div className="row d-flex align-items-center justify-content-md-center row-cols-1 row-cols-md-3">
							{/* RATING BOX #1 */}
							<div className="col">
								<div id="rb-2-1" className="rbox-2 wow animate__animated animate__fadeInUp animate__delay-1">
									{/* Brand Logo */}
									<div className="rbox-2-img">
										<img className="img-fluid" src="/images/capterra-1.png" alt="brand-logo" />
									</div>
									{/* Link */}
									<p className="p-sm color--purple"><Link href="#">Read <span>196</span> reviews</Link>
									</p></div>
							</div>
							{/* RATING BOX #2 */}
							<div className="col">
								<div id="rb-2-2" className="rbox-2 wow animate__animated animate__fadeInUp animate__delay-2">
									{/* Brand Logo */}
									<div className="rbox-2-img">
										<Link href="#"><img className="img-fluid" src="/images/growd-1.png" alt="brand-logo" /></Link>
									</div>
								</div>
							</div>
							{/* RATING BOX #3 */}
							<div className="col">
								<div id="rb-2-3" className="rbox-2 wow animate__animated animate__fadeInUp animate__delay-3">
									{/* Brand Logo */}
									<div className="rbox-2-img">
										<img className="img-fluid" src="/images/trustpilot-1.png" alt="brand-logo" />
									</div>
									{/* Link */}
									<p className="p-sm color--purple"><Link href="#">Read <span>80+</span> reviews</Link>
									</p></div>
							</div>
						</div>  {/* End row */}
					</div>	{/* END RATING WRAPPER */}
				</div>	{/* End container */}
			</div>

		</>
	)
}
