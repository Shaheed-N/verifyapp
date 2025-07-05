
import VideoPopup from "@/components/elements/VideoPopUp"
import Link from "next/link"

export default function Section15() {
	return (
		<>


			<section className="ct-06 content-section division">
				<div className="section-overlay bg--whitesmoke pt-100">
					<div className="container">
						{/* SECTION TITLE */}
						<div className="row justify-content-center">
							<div className="col-md-9 col-lg-8">
								<div className="section-title text-center mb-60">
									{/* Title */}
									<h2 className="h2-xl">Simple. Reliable. Private</h2>
									{/* Text */}
									<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
								</div>
							</div>
						</div>
						{/* IMAGE BLOCK */}
						<div className="row">
							<div className="col">
								<div className="img-block video-preview wow animate__animated animate__fadeInUp">
									{/* Play Icon */}
									<VideoPopup className="video-popup1">
										<div className="video-btn video-btn-xl bg--theme-2">
											<div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
										</div>
									</VideoPopup>
									{/* Preview Image */}
									<img className="img-fluid" src="/images/dashboard-03.png" alt="video-preview" />
								</div>
							</div>
						</div>
					</div>	   {/* End container */}
				</div>     {/* End section overlay */}
			</section>

		</>
	)
}
