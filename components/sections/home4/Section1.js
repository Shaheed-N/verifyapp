
import Link from "next/link"

export default function Section1() {
	return (
		<>


			<section id="hero-4" className="bg--fixed hero-section">
				<div className="container text-center">
					{/* HERO TEXT */}
					<div className="row justify-content-center">
						<div className="col-md-10 col-lg-9">
							<div className="hero-4-txt wow animate__animated animate__fadeInUp">
								{/* Title */}
								<h2>Efficiently create, manage and publish your content</h2>
								{/* Text */}
								<p className="p-xl">Mauris donec auctor diam magnis sapien sagittis sapien ipaum tempor diam volute
									gravida aliquet tortor aliquet magna turpis impedit auctor
								</p>
								{/* Button */}
								<Link href="#download" className="btn btn-md r-36 btn--theme hover--tra-black">Get Started Now</Link>
							</div>
						</div>
					</div>	{/* END HERO TEXT */}
					{/* HERO IMAGE */}
					<div className="row">
						<div className="col">
							<div className="hero-4-img wow animate__animated animate__fadeInUp">
								<img className="img-fluid" src="/images/hero-4-img.png" alt="hero-image" />
							</div>
						</div>
					</div>	{/* END HERO IMAGE */}
				</div>    {/* End container */}
			</section>

		</>
	)
}
