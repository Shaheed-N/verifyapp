
import Link from "next/link"

export default function Section15() {
	return (
		<>


			<div className="pt-80 rating-1 rating-section division">
				<div className="container">
					{/* RATING TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-10 col-lg-9">
							<div className="rating-title mb-40">
								<h6 className="h6-md color--gray w-500">Our users love us as much as we love them</h6>
							</div>
						</div>
					</div>
					{/* RATING WRAPPER */}
					<div className="rating-1-wrapper text-center">
						<div className="row justify-content-md-center row-cols-1 row-cols-md-3">
							{/* RATING BOX #1 */}
							<div className="col">
								<div id="rb-1-1" className="rbox-1">
									{/* Brand Logo */}
									<div className="rbox-1-img">
										<Link href="#"><img className="img-fluid" src="/images/capterra.png" alt="brand-logo" /></Link>
									</div>
									{/* Rating Stars */}
									<div className="star-rating ico-15 r-100 block--border block--shadow clearfix">
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star-half-empty mr-5" />
										&nbsp; 4.7/5
									</div>
								</div>
							</div>
							{/* RATING BOX #2 */}
							<div className="col">
								<div id="rb-1-2" className="rbox-1">
									{/* Brand Logo */}
									<div className="rbox-1-img">
										<Link href="#"><img className="img-fluid" src="/images/trustpilot.png" alt="brand-logo" /></Link>
									</div>
									{/* Rating Stars */}
									<div className="star-rating ico-15 r-100 block--border block--shadow clearfix">
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star mr-5" />
										&nbsp; 4.95/5
									</div>
								</div>
							</div>
							{/* RATING BOX #3 */}
							<div className="col">
								<div id="rb-1-3" className="rbox-1">
									{/* Brand Logo */}
									<div className="rbox-1-img">
										<Link href="#"><img className="img-fluid" src="/images/growd.png" alt="brand-logo" /></Link>
									</div>
									{/* Rating Stars */}
									<div className="star-rating ico-15 r-100 block--border block--shadow clearfix">
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star" />
										<span className="flaticon-star-1 mr-5" />
										&nbsp; 4.24/5
									</div>
								</div>
							</div>
						</div>  {/* End row */}
					</div>	{/* END RATING WRAPPER */}
				</div>	{/* End container */}
			</div>

		</>
	)
}
