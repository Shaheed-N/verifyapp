
import Link from "next/link"

export default function Section1() {
	return (
		<>


			<section id="hero-3" className="bg--fixed hero-section division">
				<div className="container">
					{/* HERO TEXT */}
					<div className="row justify-content-center">
						<div className="col-md-10 col-lg-9">
							<div className="hero-3-txt text-center">
								{/* Title */}
								<h2>Keep all your files safe, secure and organized</h2>
								{/* Text */}
								<p className="p-xl">Feugiat primis ligula sapien and mauris laoreet pretium</p>
								{/* STORE BADGES */}
								<div className="stores-badge badge-img-lg">
									{/* AppStore */}
									<Link href="#" className="store">
										<img className="appstore" src="/images/store_badges/appstore.png" alt="appstore-badge" />
									</Link>
									{/* Google Play */}
									<Link href="#" className="store">
										<img className="googleplay" src="/images/store_badges/googleplay.png" alt="googleplay-badge" />
									</Link>
								</div>	{/* END STORE BADGES */}
							</div>
						</div>
					</div>    {/* END HERO TEXT */}
					{/* HERO IMAGE */}
					<div className="row justify-content-center">
						<div className="col-md-12">
							<div className="hero-3-img wow animate__animated animate__fadeInUp">
								<img className="img-fluid" src="/images/hero-3-img.png" alt="hero-image" />
							</div>
						</div>
					</div>    {/* END  HERO IMAGE */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
