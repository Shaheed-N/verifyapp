
import Link from "next/link"

export default function Section8() {
	return (
		<>

			<section className="pt-100 ct-05 content-section division">
				<div className="container">
					{/* SECTION TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="section-title text-center mb-60">
								{/* Title */}
								<h2 className="h2-xl">Stay connected around the world with Pintex</h2>
								{/* Text */}
								<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
							</div>
						</div>
					</div>
					{/* IMAGE BLOCK */}
					<div className="row">
						<div className="col">
							<div className="img-block wow animate__animated animate__fadeInUp">
								<img className="img-fluid" src="/images/img-19.png" alt="content-image" />
							</div>
						</div>
					</div>
					{/* ACTION BUTTON */}
					<div className="row">
						<div className="col">
							<div className="img-block-btn wow animate__animated animate__fadeInUp">
								{/* Button */}
								<Link href="#download" className="btn r-10 btn-md btn--theme hover--tra-black">Get started - it's free</Link>
								{/* Advantages List */}
								<ul className="advantages ico-15 clearfix">
									<li><p>Free forever</p></li>
									<li className="advantages-links-divider"><p><span className="flaticon-minus-1" /></p></li>
									<li><p>No credit card required</p></li>
								</ul>
							</div>
						</div>
					</div>
				</div>	   {/* End container */}
			</section>

		</>
	)
}
