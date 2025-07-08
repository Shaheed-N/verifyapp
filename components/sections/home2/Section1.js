
import Link from "next/link"

export default function Section1() {
	return (
		<>


			<section id="hero-2" className="bg--fixed hero-section division">
				<div className="container">
					<div className="row justify-content-center">
						{/* HERO TEXT */}
						<div className="col-md-9">
							<div className="hero-2-txt text-center color--white wow animate__animated animate__fadeInUp">
								{/* Title */}
								<h2>Unlock your creative potential with Pintex</h2>
								{/* Text */}
								<p className="p-xl">Feugiat primis ligula sapien mauris auctor ipsum laoreet pretium and
									egestas cubilia cursus turpis impedit quaerat ipsum
								</p>
								{/* STORE BADGES */}
								<div className="stores-badge badge-img-lg">
									{/* AppStore */}
									<Link href="#" className="store">
										<img className="appstore" src="/images/store_badges/appstore.png" alt="appstore-badge" />
									</Link>
									{/* Google Play */}
									{/* Removed Google Play badge */}
								</div>	{/* END STORE BADGES */}
								{/* Text */}
								<p className="p-sm btn-txt">Available for iOS 10+ and Android Devices 8.5+</p>
							</div>
						</div>	{/* END HERO TEXT */}
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
