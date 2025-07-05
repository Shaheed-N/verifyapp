
import Link from "next/link"

export default function Section13() {
	return (
		<>


			<section id="faqs" className="pt-80 faqs-3 faqs-section division">
				<div className="container">
					<div className="row">
						{/* FAQs TITLE */}
						<div className="col-md-5 col-lg-6">
							<div className="faq-3-title">
								{/* Section ID */}
								<span className="section-id">Questions &amp; Answers</span>
								{/* Title */}
								<h2 className="h2-md">Frequently Asked Question</h2>
								{/* Text */}
								<p className="p-lg">Some questions about Pintex are asked frequently. We've answered the most frequent
									of those questions
								</p>
								{/* Button */}
								<Link href="/faqs" className="btn r-08 btn--tra-black hover--theme">Read The FAQs</Link>
							</div>
						</div>	{/* END FAQs TITLE */}
						{/* FAQs ACCORDION */}
						<div className="col-md-7 col-lg-6">
							<div className="accordion-wrapper">
								<ul className="accordion">
									{/* QUESTION #1 */}
									<li className="accordion-item is-active wow animate__animated animate__fadeInUp">
										{/* Question */}
										<div className="accordion-thumb">
											<h5>Get started with Pintex</h5>
										</div>
										{/* Answer */}
										<div className="accordion-panel">
											{/* Text */}
											<p>Sagittis congue augue egestas volutpat ipsum and egestas suscipit egestas magna
												ipsum cursus purus congue efficitur and ipsum dolor primis cubilia laoreet augue
												luctus donec
											</p>
										</div>
									</li>	{/* END QUESTION #1 */}
									{/* QUESTION #2 */}
									<li className="accordion-item wow animate__animated animate__fadeInUp">
										{/* Question */}
										<div className="accordion-thumb">
											<h5>Do you offer a trial?</h5>
										</div>
										{/* Answer */}
										<div className="accordion-panel">
											{/* Text */}
											<p>Sapien egestas, congue gestas diam posuere cubilia congue in ipsum mauris lectus
												laoreet gestas undo neque vitae ipsum auctor dolor luctus placerat a magna cursus undo congue
											</p>
										</div>
									</li>	{/* END QUESTION #2 */}
									{/* QUESTION #3 */}
									<li className="accordion-item wow animate__animated animate__fadeInUp">
										{/* Question */}
										<div className="accordion-thumb">
											<h5>How do I choose a plan?</h5>
										</div>
										{/* Answer */}
										<div className="accordion-panel">
											<p>Sapien egestas, congue gestas diam posuere cubilia congue in ipsum mauris lectus
												laoreet gestas undo neque vitae ipsum auctor dolor luctus placerat a magna cursus
												an ipsum congue nibh, imperdiet varius viverra cursus
											</p>
										</div>
									</li>	{/* END QUESTION #3 */}
									{/* QUESTION #4 */}
									<li className="accordion-item acc-last-item wow animate__animated animate__fadeInUp">
										{/* Question */}
										<div className="accordion-thumb">
											<h5>Can I edit photos online?</h5>
										</div>
										{/* Answer */}
										<div className="accordion-panel">
											{/* Text */}
											<ul className="simple-list">
												<li className="list-item">
													<p>Curabitur dapibus libero quisque eu congue tristique neque. Phasellus blandit
														tristique undo justo lectus egestas aliquam vitae and molestie quisque sapien justo aliquet ipsum
													</p>
												</li>
												<li className="list-item">
													<p>dapibus libero curabitur quisque eu congue tristique neque. Phasellus blandit
														a tristique undo justo lectus aliquam justo
													</p>
												</li>
											</ul>
										</div>
									</li>	{/* END QUESTION #4 */}
								</ul>
							</div>
						</div>	{/* END FAQs ACCORDION */}
					</div>     {/* End row */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
