
import Link from "next/link"

export default function Section1() {
	return (
		<>


			<section id="hero-7" className="bg--scroll hero-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* HERO TEXT */}
						<div className="col-md-6">
							<div className="hero-7-txt color--white wow animate__animated animate__fadeInRight">
								{/* Title */}
								<h2>Organize your media content with Pintex</h2>
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
									<span className="os-version">250K+ people across the planet love using Pintex</span>
								</div>
							</div>
						</div>	{/* END HERO TEXT */}
						{/* HERO IMAGE */}
						<div className="col-md-6">
							<div className="hero-7-img wow animate__animated animate__fadeInLeft">
								<img className="img-fluid" src="/images/hero-7-img.png" alt="hero-image" />
							</div>
						</div>
					</div>    {/* End row */}
				</div>	   {/* End container */}
				{/* WAVE SHAPE BOTTOM */}
				<div className="wave-shape-bottom">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 235"><path fillOpacity={1} d="M0,128L1440,224L1440,320L0,320Z" /></svg>
				</div>
			</section>

		</>
	)
}
