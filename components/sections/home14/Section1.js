
import Link from "next/link"

export default function Section1() {
	return (
		<>


			<section id="hero-14" className="bg--fixed hero-section division">
				<div className="container">
					<div className="row justify-content-center">
						{/* HERO TEXT */}
						<div className="col-md-8">
							<div className="hero-14-txt text-center color--white wow animate__animated animate__fadeInUp">
								{/* Title */}
								<h2>The simpler, safer way to pay online</h2>
								{/* Text */}
								<p className="p-xl">Feugiat primis ligula sapien a mauris auctor ipsum laoreet and pretium
									egestas cubilia cursus turpis impedit quaerat
								</p>
								{/* STORE BADGES */}
								<div className="stores-badge badge-img-md">
									{/* AppStore */}
									<Link href="#" className="store">
										<img className="appstore" src="/images/store_badges/appstore.png" alt="appstore-badge" />
									</Link>
									{/* Google Play */}
									{/* Removed Google Play badge */}
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
									<span className="os-version">45K+ people across the planet love using Pintex</span>
								</div>
							</div>
						</div>	{/* END HERO TEXT */}
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
