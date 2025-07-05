
import VideoPopup from "@/components/elements/VideoPopUp"
import Link from "next/link"

export default function Section1() {
	return (
		<>


			<section id="hero-6" className="bg--fixed hero-section">
				<div className="container text-center">
					{/* HERO TEXT */}
					<div className="row justify-content-center">
						<div className="col-md-9">
							<div className="hero-6-txt wow animate__animated animate__fadeInUp">
								{/* Title */}
								<h2>Convert your ideas into workable solutions</h2>
								{/* Text */}
								<p className="p-lg">Mauris donec lacinia quaerat diam magnis sapien sagittis sapien ipaum tempor
									ociis gravida aliquet tortor magna undo aliquet egestas magna
								</p>
								{/* Buttons */}
								<div className="btns-group">
									<Link href="#download" className="btn btn-md r-08 btn--theme hover--black">Get Started Now</Link>
									<Link href="#features" className="btn btn-md r-08 btn--tra-black hover--tra-theme">Find Out More</Link>
								</div>
							</div>
						</div>
					</div>	{/* END HERO TEXT */}
					{/* HERO IMAGE */}
					<div className="row">
						<div className="col">
							<div className="hero-6-img video-preview wow animate__animated animate__fadeInUp">
								{/* Play Icon */}
								<VideoPopup className="video-popup1">
									<div className="video-btn video-btn-xl bg--theme-2">
										<div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
									</div>
								</VideoPopup>
								{/* Preview Image */}
								<img className="img-fluid" src="/images/hero-6-img.png" alt="video-preview" />
							</div>
						</div>
					</div>	{/* END HERO IMAGE */}
				</div>    {/* End container */}
			</section>

		</>
	)
}
