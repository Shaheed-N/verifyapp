import { CheckCircle, FileText, MessageSquare, Tag } from "lucide-react";

export default function Section2() {
	return (
		<>
			<section className="py-80 features-1 features-section division">
				<div className="container">
					{/* SECTION TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-9 col-lg-8">
							<div className="section-title text-center mb-100">
								<p className="p-xl">
									AI-powered verification for fashion, luxury, antiques, and more — get instant confidence, authenticity, and trend insights.
								</p>
							</div>
						</div>
					</div>

					{/* FEATURES WRAPPER */}
					<div className="fbox-wrapper text-center">
						<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
							
							{/* FEATURE BOX #1 */}
							<div className="col">
								<div className="fbox-1 fb-1 wow animate__animated animate__fadeInUp animate__delay-1">
									<div className="fbox-ico ico-60" style={{ color: "black" }}>
										<CheckCircle size={48} strokeWidth={1.5} />
									</div>
									<div className="fbox-txt">
										<h6 className="h6-lg">Instant Verification</h6>
										<p>Check authenticity instantly with AI — no waiting, full confidence score shown.</p>
									</div>
								</div>
							</div>

							{/* FEATURE BOX #2 */}
							<div className="col">
								<div className="fbox-1 fb-2 wow animate__animated animate__fadeInUp animate__delay-2">
									<div className="fbox-ico ico-60" style={{ color: "black" }}>
										<FileText size={48} strokeWidth={1.5} />
									</div>
									<div className="fbox-txt">
										<h6 className="h6-lg">Detailed AI Report</h6>
										<p>See detailed analysis, product type, quality score, and price estimate with full breakdown.</p>
									</div>
								</div>
							</div>

							{/* FEATURE BOX #3 */}
							<div className="col">
								<div className="fbox-1 fb-3 wow animate__animated animate__fadeInUp animate__delay-3">
									<div className="fbox-ico ico-60" style={{ color: "black" }}>
										<MessageSquare size={48} strokeWidth={1.5} />
									</div>
									<div className="fbox-txt">
										<h6 className="h6-lg">AI Coach & Chat</h6>
										<p>Ask questions, check trends, compare items, and get shopping safety tips directly from AI.</p>
									</div>
								</div>
							</div>

							{/* FEATURE BOX #4 */}
							<div className="col">
								<div className="fbox-1 fb-4 wow animate__animated animate__fadeInUp animate__delay-4">
									<div className="fbox-ico ico-60" style={{ color: "black" }}>
										<Tag size={48} strokeWidth={1.5} />
									</div>
									<div className="fbox-txt">
										<h6 className="h6-lg">Multi-Category Support</h6>
										<p>Verify clothing, jewelry, antiques, gadgets, cosmetics, accessories, and more with one app.</p>
									</div>
								</div>
							</div>

						</div>  {/* End row */}
					</div>	{/* END FEATURES WRAPPER */}
				</div>     {/* End container */}
			</section>
		</>
	)
}
