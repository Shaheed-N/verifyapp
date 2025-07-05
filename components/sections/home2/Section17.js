
import Link from "next/link"

export default function Section17() {
	return (
		<>


			<section id="faqs" className="py-100 faqs-1 faqs-section division">
				<div className="container">
					{/* SECTION TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-9 col-lg-8">
							<div className="section-title text-center mb-60">
								{/* Title */}
								<h2 className="h2-xl">Questions? Look Here.</h2>
								{/* Text */}
								<p className="p-lg">Some questions about Pintex are asked frequently. We've answered the most
									frequent of those frequent questions below
								</p>
							</div>
						</div>
					</div>
					{/* FAQs QUESTIONS */}
					<div className="faqs-1-questions">
						<div className="row justify-content-center">
							{/* QUESTIONS ACCORDION */}
							<div className="col-xl-11">
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
												<p>Sagittis congue augue egestas volutpat ipsum egestas suscipit egestas magna ipsum cursus purus congue efficitur and ipsum primis dolor cubilia laoreet augue an egestas luctus donec dapibus and curabitur
												</p>
											</div>
										</li>	{/* END QUESTION #1 */}
										{/* QUESTION #2 */}
										<li className="accordion-item wow animate__animated animate__fadeInUp">
											{/* Question */}
											<div className="accordion-thumb">
												<h5>What video formats can be edited?</h5>
											</div>
											{/* Answer */}
											<div className="accordion-panel">
												{/* Text */}
												<p>Sagittis congue augue egestas volutpat ipsum egestas suscipit egestas magna
													ipsum cursus purus congue efficitur and ipsum primis dolor cubilia laoreet augue an egestas luctus donec dapibus and curabitur
												</p>
												{/* Text */}
												<p>Sapien egestas, congue gestas diam posuere cubilia congue in ipsum mauris lectus
													laoreet gestas undo neque vitae ipsum auctor dolor luctus placerat a magna cursus congue nihil magna mpedit ligula congue and maecenas gravida porttitor quis congue vehicula magna luctus tempor quisque laoreet turpis. Viverra augue augue eget dictum tempor diam. Sed pulvinar consectetur  nibh, imperdiet varius viverra
													cursus purus congue efficitur
												</p>
											</div>
										</li>	{/* END QUESTION #2 */}
										{/* QUESTION #3 */}
										<li className="accordion-item wow animate__animated animate__fadeInUp">
											{/* Question */}
											<div className="accordion-thumb">
												<h5>Can I edit videos online?</h5>
											</div>
											{/* Answer */}
											<div className="accordion-panel">
												{/* Text */}
												<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus and felis
													primis augue ultrice ligula turpis egestas a suscipit lectus gestas integer congue a lectus porta neque phasellus blandit tristique
												</p>
												{/* Text */}
												<p>Sagittis congue augue egestas volutpat diam egestas a magna suscipit egestas and
													magna ipsum vitae
												</p>
												{/* Text */}
												<p>Sagittis congue augue and egestas volutpat egestas and magna suscipit egestas
													magna ipsum vitae purus congue and efficitur ipsum primis in cubilia laoreet augue
													egestas luctus donec and curabitur dapibus
												</p>
											</div>
										</li>	{/* END QUESTION #3 */}
										{/* QUESTION #4 */}
										<li className="accordion-item wow animate__animated animate__fadeInUp">
											{/* Question */}
											<div className="accordion-thumb">
												<h5>How do I choose a plan?</h5>
											</div>
											{/* Answer */}
											<div className="accordion-panel">
												{/* Text */}
												<ul className="simple-list">
													<li className="list-item">
														<p>Curabitur dapibus libero quisque eu congue tristique neque. Phasellus
															blandit tristique in justo lectus aliquam. Aliquam vitae molestie nunc. Quisque sapien justo, aliquet molestie sed purus, venenatis tempor gravida lacinia. Augue aliquam a suscipit tincidunt tincidunt massa
															porttitor ipsum
														</p>
													</li>
													<li className="list-item">
														<p>Aliquam vitae molestie nunc quisque sapien justo, aliquet non molestie
															purus, venenatis
														</p>
													</li>
													<li className="list-item">
														<p>Sagittis congue augue and egestas volutpat egestas magna suscipit an
															egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet
															augue egestas luctus donec curabitur dapibus libero
														</p>
													</li>
												</ul>
											</div>
										</li>	{/* END QUESTION #4 */}
										{/* QUESTION #5 */}
										<li className="accordion-item acc-last-item wow animate__animated animate__fadeInUp">
											{/* Question */}
											<div className="accordion-thumb">
												<h5>What is the refund policy?</h5>
											</div>
											{/* Answer */}
											<div className="accordion-panel">
												{/* Text */}
												<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus and felis
													primis augue ultrice ligula turpis egestas a suscipit lectus gestas integer congue a lectus porta neque phasellus blandit tristique
												</p>
												{/* Text */}
												<p>Sagittis congue augue egestas volutpat diam egestas a magna suscipit egestas and
													magna ipsum vitae
												</p>
												{/* Text */}
												<p>Sagittis congue augue and egestas volutpat egestas and magna suscipit egestas
													magna ipsum vitae purus congue and efficitur ipsum primis in cubilia laoreet augue
													egestas luctus donec and curabitur dapibus
												</p>
											</div>
										</li>	{/* END QUESTION #5 */}
									</ul>
								</div>
							</div>	{/* END QUESTIONS ACCORDION */}
							{/* MORE QUESTIONS */}
							<div className="more-questions clearfix">
								<div className="more-questions-holder wow animate__animated animate__fadeInUp">
									<div className="more-questions-txt">
										<h6 className="h6-xl">Can’t find the answer to your question?</h6>
										<p className="p-sm">Contact us and we’ll get back to you as soon as we can.</p>
									</div>
									<div className="more-questions-btn">
										<Link href="/contacts" className="btn r-36 btn--tra-black hover--theme">Contact Us</Link>
									</div>
								</div>
							</div>
						</div>  {/* End row */}
					</div>	{/* END FAQs QUESTIONS */}
				</div>	   {/* End container  */}
			</section>

		</>
	)
}
