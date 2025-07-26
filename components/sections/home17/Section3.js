export default function Section3() {
	return (
		<>
			<section
				id="benefits"
				className="pt-100 ct-01 content-section division"
				style={{
					fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
				}}
			>
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* IMAGE BLOCK */}
						<div className="col-md-6">
							<div className="img-block left-column wow animate__animated animate__fadeInRight">
								<img className="img-fluid" src="/images/img-04.png" alt="Scan result example" />
							</div>
						</div>

						{/* TEXT BLOCK */}
						<div className="col-md-6">
							<div className="txt-block right-column wow animate__animated animate__fadeInLeft">
								{/* Section ID */}
								<span className="section-id">Scan Results</span>
								{/* Title */}
								<h2 className="h2-md">Get Detailed AI Results Instantly</h2>
								{/* Paragraph */}
								<p>
									After scanning an item with
VerifAI, you receive a complete,
AI-generated breakdown —
including the brand, product type,
price range, style period, and
authenticity confidence score, all
powered by cutting-edge artificial
intelligence
								</p>
								<ul className="simple-list">
									<li className="list-item">
										<p>Instantly identify the brand
and product category of
any scanned item.</p>
									</li>
									<li className="list-item">
										<p className="mb-0">View a price estimate and
period classification (e.g.,
modern, vintage, classic).</p>
									</li>
									<li className="list-item">
										<p className="mb-0">Receive an AI-driven
authenticity score from 0 to
100% with visual and databased support.</p>
									</li>
									<li className="list-item">
										<p className="mb-0">Understand the reasoning
behind each decision with
transparent AI
explanations.</p>
									</li>
								</ul>
							</div>
						</div> {/* END TEXT BLOCK */}
					</div> {/* End row */}
				</div> {/* End container */}
			</section>
		</>
	)
}
