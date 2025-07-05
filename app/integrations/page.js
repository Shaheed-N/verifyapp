
import VideoPopup from "@/components/elements/VideoPopUp"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const FilterContent = dynamic(() => import('@/components/elements/FilterContent'), {
	ssr: false,
})
export default function Integrations() {

	return (
		<>

			<Layout headerStyle={3} footerStyle={1} breadcrumbTitle="title">
				<div>
					<section className="ct-01 inner-page-hero content-section division">
						<div className="container">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-6">
									<div className="img-block left-column wow animate__animated animate__fadeInRight">
										<img className="img-fluid" src="/images/img-08.png" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-6">
									<div className="txt-block right-column wow animate__animated animate__fadeInLeft">
										{/* Section ID */}
										<span className="section-id">One-Stop Solutions</span>
										{/* Title */}
										<h2 className="h2-md">Save your time &amp; effort with Pintex</h2>
										{/* Text */}
										<p>Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
											luctus placerat magna and ligula cursus purus vitae purus an ipsum auris suscipit
										</p>
										{/* TEXT BOX */}
										<div className="txt-box">
											{/* Title */}
											<h5 className="h5-lg">Improved Productivity</h5>
											{/* Text */}
											<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
												luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit aliquet in dapibus
												libero at blandit fusce neque sagittis
											</p>
										</div>	{/* END TEXT BOX */}
									</div>
								</div>	{/* END TEXT BLOCK */}
							</div>    {/* End row */}
						</div>	   {/* End container */}
					</section>	{/* END TEXT CONTENT */}
					{/* FEATURES
			============================================= */}
					<section className="pt-100 features-3 features-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-8">
									<div className="section-title text-center mb-70">
										{/* Title */}
										<h2 className="h2-xl">Affordable solutions for your creativity needs</h2>
										{/* Text */}
										<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
									</div>
								</div>
							</div>
							{/* FEATURES WRAPPER */}
							<div className="fbox-wrapper text-center">
								<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
									{/* FEATURE BOX #1 */}
									<div className="col">
										<div className="fbox-3 fb-1 r-12 wow fadeInUp">
											{/* Icon */}
											<div className="fbox-ico ico-55">
												<div className="shape-ico color--theme-2">
													{/* Vector Icon */}
													<span className="flaticon-interface-1" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h6 className="h6-lg">Intuitive</h6>
												<p className="p-sm">Feugiat primis ipsum and ultrice a semper lacus</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #1 */}
									{/* FEATURE BOX #2 */}
									<div className="col">
										<div className="fbox-3 fb-2 r-12 wow fadeInUp">
											{/* Icon */}
											<div className="fbox-ico ico-55">
												<div className="shape-ico color--theme-2">
													{/* Vector Icon */}
													<span className="flaticon-prioritize" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h6 className="h6-lg">Flexible</h6>
												<p className="p-sm">Feugiat primis ipsum and ultrice a semper lacus</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #2 */}
									{/* FEATURE BOX #3 */}
									<div className="col">
										<div className="fbox-3 fb-3 r-12 wow fadeInUp">
											{/* Icon */}
											<div className="fbox-ico ico-55">
												<div className="shape-ico color--theme-2">
													{/* Vector Icon */}
													<span className="flaticon-dice" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h6 className="h6-lg">Creative</h6>
												<p className="p-sm">Feugiat primis ipsum and ultrice a semper lacus</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #3 */}
									{/* FEATURE BOX #4 */}
									<div className="col">
										<div className="fbox-3 fb-4 r-12 wow fadeInUp">
											{/* Icon */}
											<div className="fbox-ico ico-55">
												<div className="shape-ico color--theme-2">
													{/* Vector Icon */}
													<span className="flaticon-scale" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h6 className="h6-lg">Efficient</h6>
												<p className="p-sm">Feugiat primis ipsum and ultrice a semper lacus</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #4 */}
								</div>  {/* End row */}
							</div>	{/* END FEATURES WRAPPER */}
						</div>     {/* End container */}
					</section>	{/* END FEATURES */}
					{/* BOX CONTENT
			============================================= */}
					<section className="pt-100 bc-01 ws-wrapper content-section">
						<div className="container">
							<div className="bc-01-wrapper bg--whitesmoke r-24">
								<div className="section-overlay bg--fixed">
									<div className="row d-flex align-items-center">
										{/* TEXT BLOCK */}
										<div className="col-md-6 order-last order-md-2">
											<div className="txt-block left-column wow animate__animated animate__fadeInRight">
												{/* Section ID */}
												<span className="section-id">Powerful Features</span>
												{/* Title */}
												<h2 className="h2-md">Do more in less time with Pintex</h2>
												{/* Text */}
												<p>Sodales tempor sapien diam quaerat congue primis ipsum laoreet turpis neque auctor vitae
													fusce dolor laoreet placerat magna ligula auctor sagittis cursus
												</p>
												{/* Text */}
												<p className="mb-0">Tempor sapien sodales diam quaerat congue primis ipsum laoreet turpis neque
													auctor vitae fusce dolor laoreet placerat magna ligula auctor cursus sagittis
												</p>
											</div>
										</div>	{/* END TEXT BLOCK */}
										{/* IMAGE BLOCK */}
										<div className="col-md-6 order-first order-md-2">
											<div className="img-block right-column wow animate__animated animate__fadeInLeft">
												<img className="img-fluid" src="/images/img-06.png" alt="content-image" />
											</div>
										</div>
									</div>   {/* End row */}
								</div>    {/* End section overlay */}
							</div>    {/* End content wrapper */}
						</div>     {/* End container */}
					</section>	{/* END BOX CONTENT */}
					{/* INTEGRATIONS
			============================================= */}
					<section className="pt-100 integrations-3 integrations-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9">
									<div className="section-title text-center mb-40">
										{/* Title */}
										<h2 className="h2-xl">Explore Integrations</h2>
										{/* Text */}
										<p className="p-xl">Your favorite tools are already here.</p>
									</div>
								</div>
							</div>
							{/* FILTERING BUTTONS */}
									<FilterContent />
								{/* END FILTERING CONTENT */}
						</div>	   {/* End container */}
					</section>	{/* END INTEGRATIONS */}
					{/* BOX CONTENT
			============================================= */}
					<section className="pt-100 bc-04 ws-wrapper content-section">
						<div className="container">
							<div className="bc-04-wrapper r-24">
								<div className="row d-flex align-items-center">
									{/* TEXT BLOCK */}
									<div className="col-md-5 col-lg-6 order-last order-md-2">
										<div className="txt-block left-column wow animate__animated animate__fadeInRight">
											{/* Section ID */}
											<span className="section-id">Built-In Automation</span>
											{/* Title */}
											<h2 className="h2-md">Save more time with automation</h2>
											{/* Text */}
											<p>Sodales tempor sapien diam quaerat congue primis ipsum laoreet turpis neque auctor
												vitae fusce dolor laoreet placerat magna ligula and cursus purus nulla
											</p>
											{/* Text */}
											<p className="mb-0">Tempor sodales sapien diam quaerat congue primis ipsum laoreet turpis neque
												auctor vitae fusce dolor laoreet placerat magna ligula a nulla purus cursus
											</p>
										</div>
									</div>	{/* END TEXT BLOCK */}
									{/* IMAGE BLOCK */}
									<div className="col-md-7 col-lg-6 order-first order-md-2">
										<div className="bc-4-img video-preview right-column">
											{/* Play Icon */}
											<VideoPopup className="video-popup2">
												<div className="video-btn video-btn-xl bg--theme-2">
													<div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
												</div>
											</VideoPopup>
											{/* Preview Image */}
											<img className="img-fluid r-24 block--shadow" src="/images/img-17.jpg" alt="content-image" />
										</div>
									</div>
								</div>   {/* End row */}
							</div>    {/* End content wrapper */}
						</div>     {/* End container */}
					</section>	{/* END BOX CONTENT */}
					{/* STATISTIC
			============================================= */}
					<div className="py-100 statistic-1 statistic-section division">
						<div className="container">
							{/* STATISTIC WRAPPER */}
							<div className="statistic-1-wrapper">
								<div className="row justify-content-md-center row-cols-1 row-cols-md-3">
									{/* STATISTIC BLOCK #1 */}
									<div className="col">
										<div id="sb-1-1" className="animate__animated animate__fadeInUp">
											<div className="statistic-block">
												{/* Digit */}
												<div className="statistic-block-digit text-center">
													<h2 className="h2-xl statistic-number">
														<span className="count-element">7</span>.<span className="count-element">8</span><small>k</small>
													</h2>
												</div>
												{/* Text */}
												<div className="statistic-block-txt color--gray">
													<p className="p-md">Porta justo integer and velna vitae auctor</p>
												</div>
											</div>
										</div>
									</div>	{/* END STATISTIC BLOCK #1 */}
									{/* STATISTIC BLOCK #2 */}
									<div className="col">
										<div id="sb-1-2" className="animate__animated animate__fadeInUp">
											<div className="statistic-block">
												{/* Digit */}
												<div className="statistic-block-digit text-center">
													<h2 className="h2-xl statistic-number">
														<span className="count-element">76</span><small>%</small>
													</h2>
												</div>
												{/* Text */}
												<div className="statistic-block-txt color--gray">
													<p className="p-md">Ligula magna suscipit vitae and rutrum</p>
												</div>
											</div>
										</div>
									</div>	{/* END STATISTIC BLOCK #2 */}
									{/* STATISTIC BLOCK #3 */}
									<div className="col">
										<div id="sb-1-3" className="animate__animated animate__fadeInUp">
											<div className="statistic-block">
												{/* Digit */}
												<div className="statistic-block-digit text-center">
													<h2 className="h2-xl statistic-number">
														<span className="count-element">4</span>.<span className="count-element">93</span>
													</h2>
												</div>
												{/* Text */}
												<div className="statistic-block-txt color--gray">
													<p className="p-md">Sagittis congue augue egestas placerat</p>
												</div>
											</div>
										</div>
									</div>	{/* END STATISTIC BLOCK #3 */}
								</div>  {/* End row */}
							</div>	{/* END STATISTIC WRAPPER */}
						</div>	 {/* End container */}
					</div>	 {/* END STATISTIC */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
					{/* TEXT CONTENT
			============================================= */}
					<section className="pt-100 ct-01 content-section division">
						<div className="container">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-6">
									<div className="img-block left-column wow animate__animated animate__fadeInRight">
										<img className="img-fluid" src="/images/img-03.png" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-6">
									<div className="txt-block right-column wow animate__animated animate__fadeInLeft">
										{/* ACCORDION WRAPPER */}
										<div className="accordion-1 accordion-wrapper">
											<ul className="accordion">
												{/* ACCORDION ITEM #1 */}
												<li className="accordion-item is-active">
													{/* Title */}
													<div className="accordion-thumb"><h5 className="h5-lg">Powerful Editing Tools</h5></div>
													{/* Text */}
													<div className="accordion-panel">
														<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor
															turpis vitae dolor laoreet luctus magna ligula and cursus purus vitae a dolor
															ipsum suscipit auris
														</p>
														<p className="mb-0">Sapien sodales tempor quaerat ipsum congue undo laoreet turpis
															neque auctor turpis vitae dolor laoreet luctus magna ligula and cursus dolor
															vitae purus congue ipsum suscipit
														</p>
													</div>
												</li>	{/* END ACCORDION ITEM #1 */}
												{/* ACCORDION ITEM #2 */}
												<li className="accordion-item">
													{/* Title */}
													<div className="accordion-thumb"><h5 className="h5-lg">Custom Integrations</h5></div>
													{/* Text */}
													<div className="accordion-panel">
														<ul className="simple-list">
															<li className="list-item">
																<p>Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam ultrice
																	ipsum aliquam congue and dolor cursus dolor cursus purus congue an ipsum
																	purus sapien blandit
																</p>
															</li>
															<li className="list-item">
																<p className="mb-0">Tempor sapien quaerat ipsum laoreet purus and sapien dolor
																	diam ultrice ipsum aliquam congue and dolor cursus
																</p>
															</li>
														</ul>
													</div>
												</li>	{/* END ACCORDION ITEM #2 */}
												{/* ACCORDION ITEM #3 */}
												<li className="accordion-item">
													{/* Title */}
													<div className="accordion-thumb"><h5 className="h5-lg">Creative and Practical</h5></div>
													{/* Text */}
													<div className="accordion-panel">
														<p className="mb-0">Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque
															auctor turpis vitae dolor laoreet luctus magna ligula and cursus purus vitae a dolor ipsum suscipit an auris diam dapibus libero at fusce blandit neque sagittis
														</p>
													</div>
												</li>	{/* END ACCORDION ITEM #3 */}
											</ul>
										</div>	{/* END ACCORDION WRAPPER */}
									</div>
								</div>	{/* END TEXT BLOCK */}
							</div>    {/* End row */}
						</div>	   {/* End container */}
					</section>	{/* END TEXT CONTENT */}
					{/* TEXT CONTENT
			============================================= */}
					<section className="pt-100 ct-03 content-section division">
						<div className="container">
							<div className="row d-flex align-items-center">
								{/* TEXT BLOCK */}
								<div className="col-md-6 order-last order-md-2">
									<div className="txt-block left-column wow animate__animated animate__fadeInRight">
										{/* Section ID */}
										<span className="section-id">Intuitive Dashboard</span>
										{/* Title */}
										<h2 className="h2-md">Work smarter with powerful features</h2>
										{/* Text */}
										<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
											luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit auris
										</p>
										{/* Text */}
										<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
											luctus placerat magna and ligula cursus purus vitae purus ipsum suscipit aliquet
										</p>
										{/* STATISTIC */}
										<div className="txt-block-stat mt-35">
											{/* STATISTIC BLOCK #1 */}
											<div id="sb-3-1" className="statistic-block wow animate__animated animate__fadeInUp">
												<div className="statistic-block">
													<h2 className="statistic-number"><span className="count-element">65</span>k</h2>
													<p>Porta justo integer <br /> a velna vitae auctor</p>
												</div>
											</div>
											{/* STATISTIC BLOCK #2 */}
											<div id="sb-3-2" className="statistic-block wow animate__animated animate__fadeInUp">
												<div className="statistic-block">
													<h2 className="statistic-number"><span className="count-element">86</span>%</h2>
													<p>Porta justo integer <br /> velna a vitae auctor</p>
												</div>
											</div>	{/* END STATISTIC BLOCK #2 */}
										</div>	{/* END STATISTIC */}
									</div>
								</div>	{/* END TEXT BLOCK */}
								{/* IMAGE BLOCK */}
								<div className="col-md-6 order-first order-md-2">
									<div className="img-block wow animate__animated animate__fadeInLeft">
										<img className="img-fluid" src="/images/tablet-01.png" alt="content-image" />
									</div>
								</div>
							</div>    {/* End row */}
						</div>	   {/* End container */}
					</section>	{/* END TEXT CONTENT */}
					{/* FAQs
			============================================= */}
					<section className="py-100 faqs-2 faqs-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title text-center  mb-70">
										{/* Title */}
										<h2 className="h2-xl">Questions? Look Here.</h2>
										{/* Text */}
										<p className="p-lg">Some questions about Pintex are asked frequently. We've answered the most frequent
											of those frequent questions below.
										</p>
									</div>
								</div>
							</div>
							{/* FAQs QUESTIONS */}
							<div className="faqs-2-questions">
								<div className="row row-cols-1 row-cols-lg-2">
									{/* QUESTIONS HOLDER */}
									<div className="col">
										<div className="questions-holder left-column">
											{/* QUESTION #1 */}
											<div className="question wow animate__animated animate__fadeInUp">
												{/* Question */}
												<h6 className="h6-xl">Getting started with Pintex</h6>
												{/* Answer */}
												<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
													dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit auris
												</p>
											</div>	{/* END QUESTION #1 */}
											{/* QUESTION #2 */}
											<div className="question wow animate__animated animate__fadeInUp">
												{/* Question */}
												<h6 className="h6-xl">Update to the latest version of Pintex</h6>
												{/* Answer */}
												<p>Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
													dolor luctus placerat magna and ligula cursus purus vitae purus auris diam auris suscipit ipsum cursus purus vitae purus an ipsum sodales laoreet
												</p>
											</div>	{/* END QUESTION #2 */}
											{/* QUESTION #3 */}
											<div className="question wow animate__animated animate__fadeInUp">
												{/* Question */}
												<h6 className="h6-xl">How do I choose a plan?</h6>
												{/* Answer */}
												<ul className="simple-list">
													<li className="list-item">
														<p>Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam ultrice ipsum
															aliquam congue and dolor cursus
														</p>
													</li>
													<li className="list-item">
														<p className="mb-0">Quaerat sapien tempor ipsum laoreet purus and sapien dolor diam
															ultrice ipsum aliquam congue dolor congue and turpis neque auctor turpis vitae
															dolor luctus placerat
														</p>
													</li>
												</ul>
											</div>	{/* END QUESTION #3 */}
										</div>
									</div>	{/* END QUESTIONS HOLDER */}
									{/* QUESTIONS HOLDER */}
									<div className="col">
										<div className="questions-holder right-column">
											{/* QUESTION #4 */}
											<div className="question wow animate__animated animate__fadeInUp">
												{/* Question */}
												<h6 className="h6-xl">How long do you provide support?</h6>
												{/* Answer */}
												<p>Sodales sapien tempor quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
													dolor luctus placerat magna and ligula cursus purus vitae purus an auris suscipit ipsum
												</p>
											</div>	{/* END QUESTION #4 */}
											{/* QUESTION #5 */}
											<div className="question wow animate__animated animate__fadeInUp">
												{/* Question */}
												<h6 className="h6-xl">How do I make a payment?</h6>
												{/* Answer */}
												<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
													luctus dolor magna
												</p>
												{/* Answer */}
												<p>An enim nullam tempor sapien gravida and donec congue metus. Vitae arcu mollis blandit
													integer massa velna
												</p>
											</div>	{/* END QUESTION #5 */}
											{/* QUESTION #6 */}
											<div className="question wow animate__animated animate__fadeInUp">
												{/* Question */}
												<h6 className="h6-xl">I have an issue with my account</h6>
												{/* Answer */}
												<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
													dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit auris
												</p>
												{/* Answer */}
												<p>An enim nullam tempor sapien gravida and donec congue metus. Vitae arcu mollis blandit
													integer massa velna
												</p>
											</div>	{/* END QUESTION #6 */}
										</div>
									</div>	{/* END QUESTIONS HOLDER */}
								</div>	{/* End row */}
							</div>	{/* END FAQs QUESTIONS */}
							{/* MORE QUESTIONS BUTTON */}
							<div className="row">
								<div className="col">
									<div className="more-questions clearfix">
										<div className="more-questions-holder">
											<div className="more-questions-txt">
												<h6 className="h6-lg">Can’t find the answer to your question?</h6>
												<p className="p-sm">Contact us and we’ll get back to you as soon as we can.</p>
											</div>
											<div className="more-questions-btn">
												<Link href="/contacts" className="btn r-36 btn--tra-black hover--theme">Contact Us</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>	   {/* End container */}
					</section>	{/* END FAQs */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
					{/* NEWSLETTER
			============================================= */}
					<section className="newsletter-1 newsletter-section division">
						<div className="newsletter-overlay">
							<div className="container">
								<div className="row d-flex align-items-center row-cols-1 row-cols-lg-2">
									{/* NEWSLETTER TEXT */}
									<div className="col">
										<div className="newsletter-txt">
											<h4 className="h4-lg">Stay up to date with our news, ideas and updates</h4>
										</div>
									</div>
									{/* NEWSLETTER FORM */}
									<div className="col">
										<form className="newsletter-form">
											<div className="input-group">
												<input type="email" autoComplete="off" className="form-control" placeholder="Your email address" required id="s-email" />
												<span className="input-group-btn">
													<button type="submit" className="btn btn--theme hover--black">Subscribe Now</button>
												</span>
											</div>
											{/* Newsletter Form Notification */}
											<label htmlFor="s-email" className="form-notification" />
										</form>
									</div>	  {/* END NEWSLETTER FORM */}
								</div>	  {/* End row */}
							</div>    {/* End container */}
						</div>     {/* End newsletter-overlay */}
					</section>	{/* END NEWSLETTER */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
				</div>

			</Layout>
		</>
	)
}