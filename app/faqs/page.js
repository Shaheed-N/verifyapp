
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Faqs() {

	return (
		<>

			<Layout>
				<div>
					<section id="faqs-1" className="pb-100 inner-page-hero faqs-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title text-center mb-70">
										{/* Title */}
										<h2 className="h2-title">Questions? Look Here.</h2>
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
									<div className="col-lg-11 col-xl-10">
										<div className="accordion-wrapper">
											<ul className="accordion">
												{/* QUESTION #1 */}
												<li className="accordion-item is-active">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">Get started with Pintex</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna
															ipsum vitae purus and congue efficitur ipsum primis in cubilia laoreet augue
															egestas luctus donec and curabitur dapibus
														</p>
													</div>
												</li>	{/* END QUESTION #1 */}
												{/* QUESTION #2 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">What devices are compatible with Pintex?</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<ul className="simple-list long-list">
															<li className="list-item">
																<p>Curabitur ac dapibus libero quisque eu congue tristique neque.
																	Phasellus blandit tristique justo undo aliquam. Aliquam vitae molestie
																	nunc. Quisque sapien justo, aliquet non molestie sed purus
																</p>
															</li>
															<li className="list-item">
																<p>Aliquam vitae molestie sapien justo, aliquet non molestie purus
																	venenatis
																</p>
															</li>
															<li className="list-item">
																<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas
																	magna ipsum vitae
																</p>
															</li>
														</ul>
													</div>
												</li>	{/* END QUESTION #2 */}
												{/* QUESTION #3 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">Download the Pintex app</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum
															primis and augue ultrice ligula egestas suscipit lectus gestas integer congue
															a lectus porta tristique phasellus neque a blandit and tristique justo aliquam
															justo suscipit congue augue egestas volutpat egestas magna sem congue
														</p>
													</div>
												</li>	{/* END QUESTION #3 */}
												{/* QUESTION #4 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">Update to the latest version of Pintex</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum
															primis and augue ultrice ligula egestas suscipit lectus gestas integer congue
															a lectus porta phasellus neque blandit tristique
														</p>
														{/* Text */}
														<p>Sagittis congue augue egestas volutpat egestas and magna suscipit egestas
															magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue
															egestas luctus donec and curabitur dapibus
														</p>
													</div>
												</li>	{/* END QUESTION #4 */}
												{/* FAQs CATEGORY */}
												<li className="faqs-category"><h4 className="h4-md">Pricing and Accounts</h4></li>
												{/* QUESTION #5 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">How do I choose a plan?</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum
															primis and augue ultrice ligula egestas suscipit lectus gestas integer congue
															a lectus porta phasellus neque blandit tristique
														</p>
														{/* Text */}
														<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna
															ipsum vitae
														</p>
														{/* Text */}
														<p>Sagittis congue augue egestas volutpat egestas and magna suscipit egestas
															magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue
															egestas luctus donec and curabitur dapibus
														</p>
													</div>
												</li>	{/* END QUESTION #5 */}
												{/* QUESTION #6 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">Do you offer a trial?</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<ul className="simple-list">
															<li className="list-item">
																<p>Curabitur ac dapibus libero. Quisque eu congue tristique neque.
																	Phasellus blandit tristique justo undo aliquam. Aliquam vitae molestie
																	nunc. Quisque sapien justo, aliquet non molestie sed purus, venenatis tempor gravida eget lacinia. Augue aliquam a suscipit tincidunt
																	tincidunt massa porttitor ipsum
																</p>
															</li>
															<li className="list-item">
																<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas
																	magna ipsum vitae purus undo efficitur ipsum primis in cubilia laoreet
																	augue egestas luctus donec curabitur dapibus libero
																</p>
															</li>
														</ul>
													</div>
												</li>	{/* END QUESTION #6 */}
												{/* QUESTION #7 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">Do you offer discounts for annual plans?</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus
															laoreet gestas neque vitae auctor eros dolor luctus placerat a magna cursus
															congue magna nihil mpedit ligula congue. Maecenas gravida porttitor nunc, quis
															vehicula magna luctus tempor. Quisque vel laoreet turpis. Viverra augue, a
															augue eget, dictum tempor diam. Sed pulvinar a consectetur  nibh, imperdiet
															varius viverra
														</p>
													</div>
												</li>	{/* END QUESTION #7 */}
												{/* QUESTION #8 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">How do I make a payment?</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum
															primis and augue ultrice ligula egestas suscipit lectus gestas integer congue
															a lectus porta phasellus neque blandit tristique
														</p>
														{/* Text */}
														<p>Sagittis congue augue egestas volutpat egestas and magna suscipit egestas
															magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue
															egestas luctus donec and curabitur dapibus
														</p>
													</div>
												</li>	{/* END QUESTION #8 */}
												{/* QUESTION #9 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">Sign up and manage your account</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<ul className="simple-list">
															<li className="list-item">
																<p>Curabitur ac dapibus libero. Quisque eu congue tristique neque.
																	Phasellus blandit tristique justo undo aliquam. Aliquam vitae molestie
																	nunc. Quisque sapien justo, aliquet non molestie sed purus, venenatis tempor gravida eget lacinia. Augue aliquam a suscipit tincidunt
																	tincidunt massa porttitor ipsum
																</p>
															</li>
															<li className="list-item">
																<p>Aliquam vitae molestie nunc. Quisque sapien justo, aliquet non molestie
																	sed purus, venenatis
																</p>
															</li>
															<li className="list-item">
																<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas
																	magna ipsum vitae purus undo efficitur ipsum primis in cubilia laoreet
																	augue egestas luctus donec curabitur dapibus libero
																</p>
															</li>
														</ul>
													</div>
												</li>	{/* END QUESTION #9 */}
												{/* FAQs CATEGORY */}
												<li className="faqs-category"><h4 className="h4-md">Policy, Safety &amp; Copyright</h4></li>
												{/* QUESTION #10 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">Copyright and rights management</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus
															laoreet gestas neque vitae auctor eros dolor luctus placerat a magna cursus
															congue magna nihil mpedit ligula congue. Maecenas gravida porttitor nunc, quis
															vehicula magna luctus tempor. Quisque vel laoreet turpis. Viverra augue, a
															augue eget, dictum tempor diam. Sed pulvinar a consectetur  nibh, imperdiet
															varius viverra
														</p>
													</div>
												</li>	{/* END QUESTION #10 */}
												{/* QUESTION #11 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">Manage privacy settings</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum
															primis and augue ultrice ligula egestas suscipit lectus gestas integer congue
															a lectus porta phasellus neque blandit tristique
														</p>
														{/* Text */}
														<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna
															ipsum vitae
														</p>
														{/* Text */}
														<p>Sagittis congue augue egestas volutpat egestas and magna suscipit egestas
															magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue
															egestas luctus donec and curabitur dapibus
														</p>
													</div>
												</li>	{/* END QUESTION #11 */}
												{/* QUESTION #12 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">Change your subscription privacy settings</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas and
															magna ipsum vitae purus and efficitur ipsum primis in cubilia laoreet tempor
															gravida
														</p>
														{/* Text */}
														<p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus
															laoreet gestas neque vitae auctor eros dolor luctus placerat a magna cursus
															congue magna nihil mpedit ligula congue. Maecenas gravida porttitor nunc, quis
															vehicula magna luctus tempor. Quisque vel laoreet turpis. Viverra augue, a
															augue eget, dictum tempor diam. Sed pulvinar a consectetur  nibh, imperdiet
															varius viverra
														</p>
													</div>
												</li>	{/* END QUESTION #12 */}
												{/* FAQs CATEGORY */}
												<li className="faqs-category"><h4 className="h4-md">Other Questions</h4></li>
												{/* QUESTION #13 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">I lost my license. Can you send it to me?</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum
															primis and augue ultrice ligula egestas suscipit lectus gestas integer congue
															a lectus porta phasellus neque blandit tristique
														</p>
														{/* Text */}
														<p>Sagittis congue augue egestas volutpat egestas and magna suscipit egestas
															magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue
															egestas luctus donec and curabitur dapibus
														</p>
													</div>
												</li>	{/* END QUESTION #13 */}
												{/* QUESTION #14 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">I forgot my password, what should I do?</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum
															primis and augue ultrice ligula egestas suscipit lectus gestas integer congue
															a lectus porta tristique phasellus neque a blandit and tristique justo aliquam
															justo suscipit congue augue egestas volutpat egestas magna sem congue
														</p>
													</div>
												</li>	{/* END QUESTION #14 */}
												{/* QUESTION #15 */}
												<li className="accordion-item acc-last-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h6 className="h6-xl">How do I get the error log?</h6>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<ul className="simple-list">
															<li className="list-item">
																<p>Curabitur ac dapibus libero. Quisque eu congue tristique neque.
																	Phasellus blandit tristique justo undo aliquam. Aliquam vitae molestie
																	nunc. Quisque sapien justo, aliquet non molestie sed purus, venenatis tempor gravida eget lacinia. Augue aliquam a suscipit tincidunt
																	tincidunt massa porttitor ipsum
																</p>
															</li>
															<li className="list-item">
																<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas
																	magna ipsum vitae purus undo efficitur ipsum primis in cubilia laoreet
																	augue egestas luctus donec curabitur dapibus libero
																</p>
															</li>
														</ul>
													</div>
												</li>	{/* END QUESTION #15 */}
											</ul>
										</div>
									</div>	{/*END  QUESTIONS ACCORDION */}
									{/* MORE QUESTIONS */}
									<div className="more-questions clearfix">
										<div className="more-questions-holder">
											<div className="more-questions-txt">
												<h6 className="h6-xl">Can’t find the answer to your question?</h6>
												<p className="p-sm">Contact us and we’ll get back to you as soon as we can.</p>
											</div>
											<div className="more-questions-btn">
												<Link href="/contacts" className="btn r-36 btn--theme hover--tra-black">Contact Us</Link>
											</div>
										</div>
									</div>
								</div>  {/* End row */}
							</div>	{/* END FAQs QUESTIONS */}
						</div>	   {/* End container  */}
					</section>	{/* END FAQs */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
				</div>

			</Layout>
		</>
	)
}