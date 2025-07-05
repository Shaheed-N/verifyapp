import dynamic from 'next/dynamic'
const MasonaryReview = dynamic(() => import('@/components/elements/MasonaryReview'), {
	ssr: false,
})
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Reviews() {

	return (
		<>

			<Layout>
				<div>
					<section className="pb-50 reviews-4 inner-page-hero reviews-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-8">
									<div className="section-title text-center mb-80">
										{/* Title */}
										<h2 className="h2-title">Our Happy Customers</h2>
										{/* Text */}
										<p className="p-lg">Trusted by thousands of professionals and small teams all over the world.
											Here's what they had to say.
										</p>
									</div>
								</div>
							</div>
							{/* TESTIMONIALS CONTENT */}
							<div className="row">
								<div className="col-md-12 reviews-grid">
									<MasonaryReview />
								</div>
							</div>	{/* END TESTIMONIALS CONTENT */}
						</div>	   {/* End container */}
					</section>	{/* END TESTIMONIALS */}
					{/* PAGE PAGINATION
			============================================= */}
					<div className="pb-100 page-pagination">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<nav aria-label="Page navigation">
										<ul className="pagination ico-20 justify-content-center">
											<li className="page-item disabled"><Link className="page-link" href="#" tabIndex={-1}><span className="flaticon-back" /></Link>
											</li>
											<li className="page-item active" aria-current="page"><Link className="page-link" href="#">1</Link></li>
											<li className="page-item"><Link className="page-link" href="#">2</Link></li>
											<li className="page-item"><Link className="page-link" href="#">3</Link></li>
											<li className="page-item"><Link className="page-link" href="#" aria-label="Next"><span className="flaticon-next" /></Link></li>
										</ul>
									</nav>
								</div>
							</div>  {/* End row */}
						</div> {/* End container */}
					</div>	{/* END PAGE PAGINATION */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
					{/* STATISTIC
			============================================= */}
					<section className="py-80 statistic-2 statistic-section division">
						<div className="container">
							{/* STATISTIC WRAPPER */}
							<div className="statistic-2-wrapper">
								<div className="row">
									{/* TEXT BLOCK */}
									<div className="col-md-7 col-xl-6">
										<div className="txt-block right-column wow animate__animated animate__fadeInUp animate__delay-1">
											<h3>More than 180K users worldwide using Pintex</h3>
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
					<section className="pt-100 faqs-1 faqs-section division">
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
														<h5>What devices are compatible with Pintex?</h5>
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
														<h5>Download the Pintex app</h5>
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
														<h5>Update to the latest version of Pintex</h5>
													</div>
													{/* Answer */}
													<div className="accordion-panel">
														{/* Text */}
														<p>Sapien egestas, congue gestas diam posuere cubilia congue in ipsum mauris lectus
															laoreet gestas undo neque vitae ipsum auctor dolor luctus placerat a magna cursus congue nihil magna mpedit ligula congue and maecenas gravida porttitor quis congue vehicula magna luctus tempor quisque laoreet turpis. Viverra augue augue eget dictum tempor diam. Sed pulvinar consectetur  nibh, imperdiet varius viverra
															cursus purus congue efficitur
														</p>
														{/* Text */}
														<p>Sagittis congue augue egestas volutpat ipsum egestas suscipit egestas magna
															ipsum cursus purus congue efficitur and ipsum primis dolor cubilia laoreet augue an egestas luctus donec dapibus and curabitur
														</p>
													</div>
												</li>	{/* END QUESTION #4 */}
												{/* QUESTION #5 */}
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
												</li>	{/* END QUESTION #5 */}
												{/* QUESTION #6 */}
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
												</li>	{/* END QUESTION #6 */}
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
					</section>	{/* END FAQs */}
					{/* BANNER
			============================================= */}
					<section className="pt-100 banner-2 banner-section">
						<div className="container">
							{/* BANNER WRAPPER */}
							<div className="banner-2-wrapper r-24">
								<div className="banner-overlay bg--02 bg--fixed">
									<div className="row justify-content-center">
										{/* BANNER TEXT */}
										<div className="col-md-9 col-lg-8">
											<div className="banner-2-txt color--white">
												{/* Title */}
												<h2 className="h2-xl">Getting started with Pintex today!</h2>
												{/* Text */}
												<p className="p-lg">Sapien tempor sodales quaerat ipsum and congue luctus laoreet turpis neque
													auctor turpis ultrice quisque
												</p>
												{/* Button */}
												<Link href="/download" className="btn btn-md r-36 btn--theme-2 hover--tra-white">Get started - it's free!</Link>
											</div>
										</div>	{/* END BANNER TEXT */}
										{/* BANNER QR CODE */}
										<div className="banner-qr-code">
											<img className="img-fluid" src="/images/qr-code.png" alt="qr-code-image" />
											<p>Scan to get Pintex App</p>
										</div>
									</div>   {/* End row */}
								</div>   {/* End banner overlay */}
							</div>    {/* END BANNER WRAPPER */}
						</div>     {/* End container */}
					</section>
				</div>

			</Layout>
		</>
	)
}