
import VideoPopup from "@/components/elements/VideoPopUp"

export default function Section7() {
	return (
		<>


			<section id="benefits" className="pt-100 bc-04 ws-wrapper content-section">
				<div className="container">
					<div className="bc-04-wrapper r-24">
						<div className="row d-flex align-items-center">
							{/* TEXT BLOCK */}
							<div className="col-md-5 col-lg-6 order-last order-md-2">
								<div className="txt-block left-column wow animate__animated animate__fadeInRight">
									{/* Title */}
									<h2 className="h2-md">Edit your media files like a pro</h2>
									{/* Text */}
									<p>Sodales tempor sapien diam quaerat congue primis ipsum laoreet turpis neque auctor
										vitae fusce dolor laoreet placerat magna ligula and cursus purus nulla
									</p>
									{/* Text */}
									<ul className="simple-list">
										<li className="list-item">
											<p>Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice
												quisque and cursus
											</p>
										</li>
										<li className="list-item">
											<p className="mb-0">Quaerat sapien tempor undo ipsum laoreet purus and sapien dolor
												ociis ultrice quisque magna
											</p>
										</li>
									</ul>
								</div>
							</div>	{/* END TEXT BLOCK */}
							{/* IMAGE BLOCK */}
							<div className="col-md-7 col-lg-6 order-first order-md-2">
								<div className="bc-4-img video-preview right-column">
									{/* Play Icon */}
									<VideoPopup className="video-popup2">
										<div className="video-btn video-btn-xl bg--theme-2">
											<div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
										</div>
									</VideoPopup>
									{/* Preview Image */}
									<img className="img-fluid r-24 block--shadow" src="/images/img-17.jpg" alt="content-image" />
								</div>
							</div>
						</div>   {/* End row */}
					</div>    {/* End content wrapper */}
				</div>     {/* End container */}
			</section>

		</>
	)
}
