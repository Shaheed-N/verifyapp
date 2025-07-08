
import Link from "next/link"

export default function Section1() {
	return (
		<>


			<section id="hero-5" className="bg--fixed hero-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* HERO IMAGE */}
						<div className="col-md-6 order-last order-md-2">
							<div className="hero-5-img wow animate__animated animate__fadeInRight">
								<img className="img-fluid" src="/images/hero-5-img.png" alt="hero-image" />
							</div>
						</div>
						{/* HERO TEXT */}
						<div className="col-md-6 order-first order-md-2">
							<div className="hero-5-txt color--white wow animate__animated animate__fadeInLeft">
								{/* Title */}
								<h2>Stay connected with your friends where they are</h2>
								{/* Text */}
								<p className="p-xl">Feugiat primis ligula sapien mauris auctor ipsum laoreet pretium augue
									an egestas cubilia cursus
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
							</div>
						</div>	{/* END HERO TEXT */}
					</div>    {/* End row */}
				</div>	   {/* End container */}
				{/* WAVE SHAPE BOTTOM */}
				<div className="wave-shape-bottom">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 285"><path fillOpacity={1} d="M0,128L80,149.3C160,171,320,213,480,240C640,267,800,277,960,277.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" /></svg>
				</div>
			</section>

		</>
	)
}
