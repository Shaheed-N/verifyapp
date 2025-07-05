
import Link from "next/link"

export default function Section1() {
	return (
		<>


			<section id="hero-9" className="bg--fixed hero-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* HERO TEXT */}
						<div className="col-md-6">
							<div className="hero-9-txt wow animate__animated animate__fadeInRight">
								{/* Title */}
								<h2>Expand your creative skills with Pintex</h2>
								{/* Text */}
								<p className="p-lg">Feugiat primis ligula sapien and mauris auctor ipsum laoreet and pretium augue
									egestas cubilia cursus
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
						</div>	{/* END HERO TEXT */}
						{/* HERO IMAGE */}
						<div className="col-md-6">
							<div className="hero-9-img wow animate__animated animate__fadeInLeft">
								<img className="img-fluid" src="/images/img-02d.png" alt="hero-image" />
							</div>
						</div>
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
