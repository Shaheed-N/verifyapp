import Link from "next/link";
import VideoPopup from "@/components/elements/VideoPopUp";

export default function Section4() {
	return (
		<>
			<section
				id="how-it-works"
				className="pt-100 bc-04 ws-wrapper content-section"
				style={{
					fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
				}}
			>
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* TEXT BLOCK */}
						<div className="col-md-5 col-lg-6 order-last order-md-2">
							<div className="txt-block left-column wow animate__animated animate__fadeInRight">
								{/* Section ID */}
								<span className="section-id">Scan Feedback</span>
								{/* Title */}
								<h2 className="h2-md">AI Results You Can Trust</h2>
								{/* Text */}
								<p>
									After scanning, VerifAI instantly analyzes your item and displays a clear result: Fake, Authentic, Likely Fake, or Likely Authentic. No guessing — just clear guidance.
								</p>
								<p className="mb-0">
									Whether you're checking fashion pieces, antiques, luxury goods, electronics, gadgets, artwork, decor items, or collectibles — you'll also see brand info, price estimate, product type, era, and overall quality score. All designed to help you shop smarter and feel confident in every decision.
								</p>
							</div>
						</div>

						{/* IMAGE BLOCK */}
						<div className="col-md-7 col-lg-6 order-first order-md-2">
							<div className="bc-4-img video-preview right-column">
								{/* Preview Image */}
								<img className="img-fluid r-24 block--shadow" src="/images/img-17.jpg" alt="VerifAI scan results" />
							</div>
						</div>
					</div> {/* End row */}
				</div> {/* End container */}
			</section>
		</>
	);
}
