
import Link from "next/link"

import VideoPopup from "@/components/elements/VideoPopUp"
export default function Section8() {
	return (
		<>


			<section id="how-it-works" className="pt-100 bc-04 ws-wrapper content-section">
				<div className="container">
					<div className="bc-04-wrapper r-24">
						<div className="row d-flex align-items-center">
							{/* TEXT BLOCK */}
							<div className="col-md-5 col-lg-6 order-last order-md-2">
								<div className="txt-block left-column wow animate__animated animate__fadeInRight">
									{/* Section ID */}
									<span className="section-id">Private Chats</span>
									{/* Title */}
									<h2 className="h2-md">Send text, voice, picture messages</h2>
									{/* Text */}
									<p>Sodales tempor sapien diam quaerat congue primis ipsum laoreet turpis neque auctor
										vitae fusce dolor laoreet placerat magna ligula and cursus purus nulla
									</p>
									{/* Text */}
									<p className="mb-0">Tempor sodales sapien diam quaerat congue primis ipsum laoreet turpis neque
										auctor vitae fusce dolor laoreet placerat magna ligula a nulla purus cursus
									</p>
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
