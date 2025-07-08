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
									After scanning an item with VerifAI, you get a complete breakdown — see the brand, product type, price range, period style, and a quality score, all powered by advanced AI.
								</p>
								<ul className="simple-list">
									<li className="list-item">
										<p>Instantly know which brand and product type you’re looking at.</p>
									</li>
									<li className="list-item">
										<p className="mb-0">Check price estimate, period (modern, classic, etc.), and an AI-based quality score from 0 to 10.</p>
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
