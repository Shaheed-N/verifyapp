
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Download() {

	return (
		<>

			<Layout>
				<div>
					<section className="gr--whitesmoke pb-100 inner-page-hero download download-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title text-center mb-70">
										{/* Title */}
										<h2 className="h2-xl">Pintex For Any Device</h2>
										{/* Text */}
										<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus.</p>
									</div>
								</div>
							</div>
							<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
								{/* DOWNLOAD ITEM */}
								<div id="di-1" className="col">
									<Link href="/download/example.zip" className="download-item bg--white block--shadow r-12">
										{/* Logo */}
										<img src="/images/png_icons/app-store.png" alt="logo-icon" />
										{/* Title */}
										<h6 className="h6-xl">iOS</h6>
										{/* Text */}
										<p>Mobile App</p>
									</Link>
								</div>	{/* END DOWNLOAD ITEM */}
								{/* DOWNLOAD ITEM */}
								<div id="di-2" className="col">
									<Link href="/download/example.zip" className="download-item bg--white block--shadow r-12">
										{/* Logo */}
										<img src="/images/png_icons/google-play.png" alt="logo-icon" />
										{/* Title */}
										<h6 className="h6-xl">Android</h6>
										{/* Text */}
										<p>Mobile App</p>
									</Link>
								</div>	{/* END DOWNLOAD ITEM */}
								{/* DOWNLOAD ITEM */}
								<div id="di-3" className="col">
									<Link href="/download/example.zip" className="download-item bg--white block--shadow r-12">
										{/* Logo */}
										<img src="/images/png_icons/windows.png" alt="logo-icon" />
										{/* Title */}
										<h6 className="h6-xl">Windows</h6>
										{/* Text */}
										<p>Desktop App</p>
									</Link>
								</div>	{/* END DOWNLOAD ITEM */}
								{/* DOWNLOAD ITEM */}
								<div id="di-4" className="col">
									<Link href="/download/example.zip" className="download-item bg--white block--shadow r-12">
										{/* Logo */}
										<img src="/images/png_icons/ios.png" className="ios-logo" alt="logo-icon" />
										{/* Title */}
										<h6 className="h6-xl">Mac</h6>
										{/* Text */}
										<p>Desktop App</p>
									</Link>
								</div>	{/* END DOWNLOAD ITEM */}
							</div>
						</div>     {/* End container */}
					</section>	{/* END DOWNLOAD */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
					{/* STATISTIC
			============================================= */}
					<section className="py-100 statistic-2 statistic-section division">
						<div className="container">
							{/* STATISTIC WRAPPER */}
							<div className="statistic-2-wrapper">
								<div className="row">
									{/* TEXT BLOCK */}
									<div className="col-md-7 col-xl-6">
										<div className="txt-block right-column wow animate__animated animate__fadeInUp animate__delay-1">
											<h3>More than 790K users worldwide using Pintex</h3>
										</div>
									</div>
									{/* STATISTIC BLOCK #1 */}
									<div className="col-sm-5 col-md-3 offset-sm-1 offset-md-0 offset-xl-1">
										<div id="sb-2-1" className="statistic-block wow animate__animated animate__fadeInUp animate__delay-2">
											{/* Text */}
											<h2 className="h2-md statistic-number"><span className="count-element">99</span>%</h2>
											<p>Satisfied Users <br /> Worldwide</p>
										</div>
									</div>
									{/* STATISTIC BLOCK #2 */}
									<div className="col-sm-5 col-md-2">
										<div id="sb-2-2" className="statistic-block wow animate__animated animate__fadeInUp animate__delay-3">
											{/* Text */}
											<h2 className="h2-md statistic-number">
												<span className="count-element">4</span>.<span className="count-element">93</span>
											</h2>
											{/* Rating */}
											<div className="txt-block-rating ico-15 color--yellow">
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star-half-empty" />
											</div>
											<p>5,376 Rating</p>
										</div>
									</div>
								</div>  {/* End row */}
							</div>	{/* END STATISTIC WRAPPER */}
						</div>	   {/* End container */}
					</section>	{/* END STATISTIC */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
					{/* FAQs
			============================================= */}
					<section id="faqs-1" className="py-100 faqs-section division">
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
									<div className="col-lg-11 col-xl-10">
										<div className="accordion-wrapper">
											<ul className="accordion">
												{/* QUESTION #1 */}
												<li className="accordion-item is-active">
													{/* Question */}
													<div className="accordion-thumb">
														<h5>Get started with Pintex</h5>
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
														<h5>What devices are compatible with Pintex?</h5>
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
												</li>	{/* END QUESTION #2 */}
												{/* QUESTION #3 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h5>Download the Pintex app</h5>
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
												</li>	{/* END QUESTION #3 */}
												{/* QUESTION #4 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h5>Update to the latest version of Pintex</h5>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum
															primis and augue ultrice ligula egestas suscipit lectus gestas integer congue
															a lectus porta tristique phasellus neque a blandit and tristique justo aliquam
															justo suscipit congue augue egestas volutpat egestas magna sem congue
														</p>
														{/* Text */}
														<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum
															primis and augue ultrice ligula egestas suscipit lectus gestas integer congue
															a lectus porta phasellus neque blandit tristique
														</p>
													</div>
												</li>	{/* END QUESTION #4 */}
												{/* QUESTION #5 */}
												<li className="accordion-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h5>How do I choose a plan?</h5>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Answer */}
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
												</li>	{/* END QUESTION #5 */}
												{/* QUESTION #6 */}
												<li className="accordion-item acc-last-item">
													{/* Question */}
													<div className="accordion-thumb">
														<h5>What is the refund policy?</h5>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Answer */}
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
												</li>	{/* END QUESTION #6 */}
											</ul>
										</div>
									</div>	{/* END QUESTIONS ACCORDION */}
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