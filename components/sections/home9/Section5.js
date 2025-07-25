
import Link from "next/link"

export default function Section5() {
	return (
		<>


			<section className="py-100 ct-05 content-section division">
				<div className="container">
					{/* SECTION TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="section-title text-center mb-60">
								{/* Title */}
								<h2 className="h2-xl">Create Better and Faster</h2>
								{/* Text */}
								<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
							</div>
						</div>
					</div>
					{/* IMAGE BLOCK */}
					<div className="row">
						<div className="col">
							<div className="img-block wow animate__animated animate__fadeInUp">
								<img className="img-fluid" src="/images/img-21d.png" alt="content-image" />
							</div>
						</div>
					</div>
					{/* ACTION BUTTON */}
					<div className="row">
						<div className="col">
							<div className="img-block-btn wow animate__animated animate__fadeInUp">
								{/* Button */}
								<Link href="#download" className="btn btn-md r-36 btn--theme hover--tra-black">Get started -it's free</Link>
								{/* Advantages List */}
								<ul className="advantages ico-15 clearfix">
									<li><p>Free 14 days trial</p></li>
									<li className="advantages-links-divider"><p><span className="flaticon-minus-1" /></p></li>
									<li><p>Exclusive Support</p></li>
									<li className="advantages-links-divider"><p><span className="flaticon-minus-1" /></p></li>
									<li><p>No Fees</p></li>
								</ul>
							</div>
						</div>
					</div>
				</div>	   {/* End container */}
			</section>

		</>
	)
}
