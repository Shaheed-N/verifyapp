
import VideoPopup from "@/components/elements/VideoPopUp"
import Link from "next/link"

export default function Section1() {
	return (
		<>


			<section id="hero-16" className="hero-section division">
				<div className="container text-center">
					{/* HERO TEXT */}
					<div className="row justify-content-center">
						<div className="col-md-10 col-lg-9">
							<div className="hero-16-txt wow animate__animated animate__fadeInUp">
								{/* Title */}
								<h2>Creative solutions for your creative ideas</h2>
								{/* Text */}
								<p className="p-xl">Mauris donec ociis lacinia magnis sapien sagittis sapien diam ipsum tempor volute
									gravida aliquet tortor undo aliquet egestas
								</p>
								{/* Buttons Group */}
								<div className="btns-group">
									<Link href="#benefits" className="btn r-10 btn--theme hover--black">Find Out More</Link>
									<Link href="#faqs" className="btn r-10 btn--tra-black hover--tra-theme">Read the FAQs</Link>
								</div>
							</div>
						</div>
					</div>	{/* END HERO TEXT */}
					{/* HERO IMAGE */}
					<div className="hero-16-img bg--tra-violet-red hidd r-24">
						<div className="row">
							<div className="col">
								<div className="video-preview wow animate__animated animate__fadeInUp">
									{/* Play Icon */}
									<VideoPopup className="video-popup1">
										<div className="video-btn video-btn-xl bg--theme-2">
											<div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
										</div>
									</VideoPopup>
									{/* Preview Image */}
									<img className="img-fluid" src="/images/dashboard-01.png" alt="video-preview" />
								</div>
							</div>
						</div>
					</div>	{/* END HERO IMAGE */}
				</div>    {/* End container */}
			</section>

		</>
	)
}
