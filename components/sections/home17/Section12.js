

export default function Section12() {
	return (
		<>
			<section className="pt-100 ct-02 content-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* TEXT BLOCK */}
						<div className="col-md-6 col-lg-5 order-last order-md-2">
							<div className="txt-block left-column wow animate__animated animate__fadeInRight">
								{/* TEXT BOX */}
								<div className="txt-box">
									{/* Title */}
									<h5 className="h5-lg">Premium Certificates for<br/>Trusted Authentication</h5>
									{/* Text */}
									<p>VerifAI provides official, high-confidence authentication certificates for luxury items—helping users verify, showcase, and preserve the value of their premium possessions. Each certificate includes detailed product information, brand validation, and AI-backed scoring to ensure trust and transparency.</p>
									<ul className="simple-list">
										<li className="list-item">
											<p>Instantly generate a digital certificate of authenticity after item verification, backed by AI and visual analysis.</p>
										</li>
										<li className="list-item">
											<p>View essential product details such as brand, product type, market value, and quality score in one sleek summary.</p>
										</li>
										<li className="list-item">
											<p>Receive a confidence score based on AI assessment, image matching, and attribute checks.</p>
										</li>
										<li className="list-item">
											<p>Get certificate ID tracking and timestamps for future proof and resale documentation.</p>
										</li>
									</ul>
								</div>
							</div>
						</div>	{/* END TEXT BLOCK */}
						{/* IMAGE BLOCK */}
						<div className="col-md-6 col-lg-7 order-first order-md-2">
							<div className="img-block right-column wow animate__animated animate__fadeInLeft">
								<img className="img-fluid" src="/images/img-05.png" alt="content-image" />
							</div>
						</div>
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>
		</>
	)
}
