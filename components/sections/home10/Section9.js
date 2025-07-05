
import VideoPopup from "@/components/elements/VideoPopUp"
export default function Section9() {
	return (
		<>


			<section id="how-it-works" className="pt-100 bc-03 ws-wrapper content-section">
				<div className="container">
					<div className="bc-03-wrapper bg--03 hidd r-24">
						<div className="section-overlay">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-10 col-lg-9">
									<div className="section-title text-center wow animate__animated animate__fadeInUp">
										{/* Title */}
										<h2 className="h2-lg">Affordable solutions for your creativity needs</h2>
										{/* Text */}
										<p className="p-md">Aliquam augue suscipit diam luctus neque purus an ipsum neque sapien
											dolor primis blandit libero tempus ipsum cursus varius magnis sodales
										</p>
									</div>
								</div>
							</div>
							{/* IMAGE BLOCK */}
							<div className="row justify-content-center">
								<div className="col">
									<div className="bc-3-img video-preview wow animate__animated animate__fadeInUp">
										{/* Play Icon */}
										<VideoPopup className="video-popup1">
											<div className="video-btn video-btn-xl bg--theme-2">
												<div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
											</div>
										</VideoPopup>
										{/* Preview Image */}
										<img className="img-fluid" src="/images/tablet-02.png" alt="content-image" />
									</div>
								</div>
							</div>
						</div>   {/* End section overlay */}
					</div>    {/* End content wrapper */}
				</div>     {/* End container */}
			</section>

		</>
	)
}
