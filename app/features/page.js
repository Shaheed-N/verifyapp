
'use client'
import { reviewsCarousel } from "@/components/hooks/useSwiper"
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Features() {

	return (
		<>

			<Layout>
				<div>
					<section className="ct-01 inner-page-hero content-section division">
						<div className="container">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-6">
									<div className="img-block left-column wow animate__animated animate__fadeInRight">
										<img className="img-fluid" src="/images/img-01.png" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-6">
									<div className="txt-block right-column wow animate__animated animate__fadeInLeft">
										{/* Section ID */}
										<span className="section-id">From Good to Great</span>
										{/* Title */}
										<h2 className="h2-md">Creative solutions, creative results</h2>
										{/* Text */}
										<p>Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
											luctus placerat magna and ligula cursus purus vitae purus an ipsum auris suscipit
										</p>
										{/* Text */}
										<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
											luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit aliquet in dapibus
											libero at blandit fusce neque sagittis
										</p>
									</div>
								</div>	{/* END TEXT BLOCK */}
							</div>    {/* End row */}
						</div>	   {/* End container */}
					</section>	{/* END TEXT CONTENT */}
					{/* FEATURES
			============================================= */}
					<section className="pt-100 features-6 features-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-8">
									<div className="section-title text-center mb-80">
										{/* Title */}
										<h2 className="h2-title">The Complete Solutions</h2>
										{/* Text */}
										<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
									</div>
								</div>
							</div>
							{/* FEATURES WRAPPER */}
							<div className="fbox-wrapper text-center">
								<div className="row row-cols-1 row-cols-md-3">
									{/* FEATURE BOX #1 */}
									<div className="col">
										<div className="fbox-6 fb-1 wow animate__animated animate__fadeInUp animate__delay-1">
											{/* Image */}
											<div className="fbox-img h-180">
												<img className="img-fluid" src="/images/f_05.png" alt="feature-image" />
											</div>
											{/* Text */}
											<div className="fbox-txt">
												<h6 className="h6-xl">Friendly Interface</h6>
												<p>Egestas luctus augue undo ultrice quisque in lacus cursus feugiat eget ultrice
													laoreet cubilia sagittis
												</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #1 */}
									{/* FEATURE BOX #2 */}
									<div className="col">
										<div className="fbox-6 fb-2 wow animate__animated animate__fadeInUp animate__delay-2">
											{/* Image */}
											<div className="fbox-img h-180">
												<img className="img-fluid" src="/images/f_07.png" alt="feature-image" />
											</div>
											{/* Text */}
											<div className="fbox-txt">
												<h6 className="h6-xl">Intuitive Editing Tools</h6>
												<p>Augue egestas luctus undo ultrice quisque in lacus cursus feugiat eget ultrice
													sagittis cubilia laoreet
												</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #2 */}
									{/* FEATURE BOX #3 */}
									<div className="col">
										<div className="fbox-6 fb-3 wow animate__animated animate__fadeInUp animate__delay-3">
											{/* Image */}
											<div className="fbox-img h-180">
												<img className="img-fluid" src="/images/f_06.png" alt="feature-image" />
											</div>
											{/* Text */}
											<div className="fbox-txt">
												<h6 className="h6-xl">Extensions &amp; Addons</h6>
												<p>Egestas luctus augue undo ultrice quisque in lacus cursus feugiat eget ultrice
													laoreet sagittis cubilia
												</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #3 */}
								</div>  {/* End row */}
							</div>	{/* END FEATURES WRAPPER */}
						</div>     {/* End container */}
					</section>	{/* END FEATURES */}
					{/* BOX CONTENT
			============================================= */}
					<section className="pt-100 bc-01 ws-wrapper content-section">
						<div className="container">
							<div className="bc-01-wrapper bg--03 r-24">
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
													auctor vitae fusce dolor laoreet placerat magna ligula auctor cursus sagittis luctus placerat magna and ligula cursus purus
												</p>
											</div>
										</div>	{/* END TEXT BLOCK */}
										{/* IMAGE BLOCK */}
										<div className="col-md-6 order-first order-md-2">
											<div className="img-block right-column wow animate__animated animate__fadeInLeft">
												<img className="img-fluid" src="/images/img-02.png" alt="content-image" />
											</div>
										</div>
									</div>   {/* End row */}
								</div>    {/* End section overlay */}
							</div>    {/* End content wrapper */}
						</div>     {/* End container */}
					</section>	{/* END BOX CONTENT */}
					{/* FEATURES
			============================================= */}
					<section className="py-100 features-2 features-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title text-center mb-80">
										{/* Title */}
										<h2 className="h2-xl">Everything in One Place</h2>
										{/* Text */}
										<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
									</div>
								</div>
							</div>
							{/* FEATURES WRAPPER */}
							<div className="fbox-wrapper">
								<div className="row row-cols-1 row-cols-md-2 rows-3">
									{/* FEATURE BOX #1 */}
									<div className="col">
										<div className="fbox-2 fb-1 wow animate__animated animate__fadeInUp animate__delay-1">
											{/* Icon */}
											<div className="fbox-ico-wrap ico-55">
												<div className="shape-ico color--theme-2">
													{/* Vector Icon */}
													<span className="flaticon-click" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Quick Access</h5>
												<p>Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat
													diam turpis impedit auctor felis and augue mauris blandit
												</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #1 */}
									{/* FEATURE BOX #2 */}
									<div className="col">
										<div className="fbox-2 fb-2 wow animate__animated animate__fadeInUp animate__delay-2">
											{/* Icon */}
											<div className="fbox-ico-wrap ico-55">
												<div className="shape-ico color--theme-2">
													{/* Vector Icon */}
													<span className="flaticon-memphis" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Unique Design Elements</h5>
												<p>Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat
													diam turpis impedit auctor felis and augue mauris blandit
												</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #2 */}
									{/* FEATURE BOX #3 */}
									<div className="col">
										<div className="fbox-2 fb-3 wow animate__animated animate__fadeInUp animate__delay-1">
											{/* Icon */}
											<div className="fbox-ico-wrap ico-55">
												<div className="shape-ico color--theme-2">
													{/* Vector Icon */}
													<span className="flaticon-color-palette" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Themes &amp; Designs</h5>
												<p>Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat
													diam turpis impedit auctor felis and augue mauris blandit
												</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #3 */}
									{/* FEATURE BOX #4 */}
									<div className="col">
										<div className="fbox-2 fb-4 wow animate__animated animate__fadeInUp animate__delay-2">
											{/* Icon */}
											<div className="fbox-ico-wrap ico-55">
												<div className="shape-ico color--theme-2">
													{/* Vector Icon */}
													<span className="flaticon-alter" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Intuitive Editor</h5>
												<p>Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat
													diam turpis impedit auctor felis and augue mauris blandit
												</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #4 */}
									{/* FEATURE BOX #5 */}
									<div className="col">
										<div className="fbox-2 fb-5 wow animate__animated animate__fadeInUp animate__delay-1">
											{/* Icon */}
											<div className="fbox-ico-wrap ico-55">
												<div className="shape-ico color--theme-2">
													{/* Vector Icon */}
													<span className="flaticon-typography" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Amazing Font Collection</h5>
												<p>Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat
													diam turpis impedit auctor felis and augue mauris blandit
												</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #5 */}
									{/* FEATURE BOX #6 */}
									<div className="col">
										<div className="fbox-2 fb-6 wow animate__animated animate__fadeInUp animate__delay-2">
											{/* Icon */}
											<div className="fbox-ico-wrap ico-55">
												<div className="shape-ico color--theme-2">
													{/* Vector Icon */}
													<span className="flaticon-union" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Extensions &amp; Addons</h5>
												<p>Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat
													diam turpis impedit auctor felis and augue mauris blandit
												</p>
											</div>
										</div>
									</div>	{/* END FEATURE BOX #6 */}
								</div>  {/* End row */}
							</div>	{/* END FEATURES WRAPPER */}
						</div>     {/* End container */}
					</section>	{/* END FEATURES */}
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
											<h3>More than 580K users worldwide using Pintex</h3>
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
										<img className="img-fluid" src="/images/tablet-02.png" alt="content-image" />
									</div>
								</div>
							</div>    {/* End row */}
						</div>	   {/* End container */}
					</section>	{/* END TEXT CONTENT */}
					{/* TEXT CONTENT
			============================================= */}
					<section className="pt-100 ct-02 content-section division">
						<div className="container">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-6 col-lg-7">
									<div className="img-block left-column wow animate__animated animate__fadeInRight">
										<img className="img-fluid" src="/images/img-05.png" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-6 col-lg-5">
									<div className="txt-block right-column wow animate__animated animate__fadeInLeft">
										{/* Section ID */}
										<span className="section-id">Built-In Automation</span>
										{/* Title */}
										<h2 className="h2-md">Save more time with automation</h2>
										{/* Text */}
										<p>Sodales sapien tempor quaerat ipsum congue and laoreet turpis undo neque auctor sagittis a
											quisque justo luctus placerat magna sodales egestas ligula
										</p>
										{/* Text */}
										<ul className="simple-list">
											<li className="list-item">
												<p>Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice magna
													quisque
												</p>
											</li>
											<li className="list-item">
												<p className="mb-0">Quaerat sapien tempor undo ipsum laoreet purus and sapien dolor ociis
													ultrice quisque magna
												</p>
											</li>
										</ul>
									</div>
								</div>	{/* END TEXT BLOCK */}
							</div>    {/* End row */}
						</div>	   {/* End container */}
					</section>	{/* END TEXT CONTENT */}
					{/* TEXT CONTENT
			============================================= */}
					<section className="pt-100 ct-01 content-section division">
						<div className="container">
							<div className="row d-flex align-items-center">
								{/* TEXT BLOCK */}
								<div className="col-md-6 order-last order-md-2">
									<div className="txt-block left-columnt wow animate__animated animate__fadeInRight">
										{/* Section ID */}
										<span className="section-id">Sync Connections</span>
										{/* Title */}
										<h2 className="h2-md">Sync with servers and cloud drives</h2>
										{/* Text */}
										<p>Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
											luctus placerat magna and ligula cursus purus vitae purus an ipsum auris suscipit
										</p>
										{/* Text */}
										<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
											luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit aliquet in dapibus
											libero at blandit fusce neque sagittis
										</p>
									</div>
								</div>	{/* END TEXT BLOCK */}
								{/* IMAGE BLOCK */}
								<div className="col-md-6 order-first order-md-2">
									<div className="img-block right-column wow animate__animated animate__fadeInLeft">
										<img className="img-fluid" src="/images/img-15.png" alt="content-image" />
									</div>
								</div>
							</div>    {/* End row */}
						</div>	   {/* End container */}
					</section>	{/* END TEXT CONTENT */}
					{/* INTEGRATIONS
			============================================= */}
					<section className="pt-100 integrations-1 integrations-section">
						<div className="container">
							{/* INTEGRATIONS WRAPPER */}
							<div className="int-1-wrapper bg--03 r-24 text-center">
								{/* SECTION TITLE */}
								<div className="row justify-content-center">
									<div className="col-md-10 col-lg-9">
										<div className="section-title mb-60">
											{/* Title */}
											<h2 className="h2-lg">Easy integrations with your existing tools</h2>
											{/* Text */}
											<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
										</div>
									</div>
								</div>
								{/* TOOLS ROW */}
								<div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-6">
									{/* TOOL #1 */}
									<div className="col">
										<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
											{/* Logo */}
											<div className="tool_logo bg--white block--shadow r-12">
												<img className="img-fluid" src="/images/png_icons/zapier.png" alt="brand-logo" />
											</div>
											{/* Title */}
											<h6 className="h6-md">Zapier</h6>
										</Link>
									</div>	{/* END TOOL #1 */}
									{/* TOOL #2 */}
									<div className="col">
										<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
											{/* Logo */}
											<div className="tool_logo bg--white block--shadow r-12">
												<img className="img-fluid" src="/images/png_icons/intercom.png" alt="brand-logo" />
											</div>
											{/* Title */}
											<h6 className="h6-md">Intercom</h6>
										</Link>
									</div>	{/* END TOOL #2 */}
									{/* TOOL #3 */}
									<div className="col">
										<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
											{/* Logo */}
											<div className="tool_logo bg--white block--shadow r-12">
												<img className="img-fluid" src="/images/png_icons/notion.png" alt="brand-logo" />
											</div>
											{/* Title */}
											<h6 className="h6-md">Notion</h6>
										</Link>
									</div>	{/* END TOOL #3 */}
									{/* TOOL #4 */}
									<div className="col">
										<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
											{/* Logo */}
											<div className="tool_logo bg--white block--shadow r-12">
												<img className="img-fluid" src="/images/png_icons/slack.png" alt="brand-logo" />
											</div>
											{/* Title */}
											<h6 className="h6-md">Slack</h6>
										</Link>
									</div>	{/* END TOOL #4 */}
									{/* TOOL #5 */}
									<div className="col">
										<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
											{/* Logo */}
											<div className="tool_logo bg--white block--shadow r-12">
												<img className="img-fluid" src="/images/png_icons/shopify.png" alt="brand-logo" />
											</div>
											{/* Title */}
											<h6 className="h6-md">Shopify</h6>
										</Link>
									</div>	{/* END TOOL #5 */}
									{/* TOOL #5 */}
									<div className="col">
										<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
											{/* Logo */}
											<div className="tool_logo bg--white block--shadow r-12">
												<img className="img-fluid" src="/images/png_icons/hubspot.png" alt="brand-logo" />
											</div>
											{/* Title */}
											<h6 className="h6-md">HubSpot</h6>
										</Link>
									</div>	{/* END TOOL #5 */}
								</div>	{/* END TOOLS ROW */}
								{/* MORE BUTTON */}
								<div className="row">
									<div className="col">
										<div className="more-btn text-center wow wow animate__animated animate__fadeInUp">
											<Link href="/integrations" className="btn r-36 btn--tra-black hover--theme">View All Integrations</Link>
										</div>
									</div>
								</div>
							</div>	{/* END INTEGRATIONS WRAPPER */}
						</div>     {/* End container */}
					</section>	{/* END INTEGRATIONS */}
					{/* TESTIMONIALS
			============================================= */}
					<section className="pt-100 reviews-1 reviews-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title text-center mb-80">
										{/* Title */}
										<h2 className="h2-xl">Our Happy Customers</h2>
										{/* Text */}
										<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
									</div>
								</div>
							</div>
							{/* TESTIMONIALS CAROUSEL */}
							<div className="row">
								<div className="col">
									<Swiper {...reviewsCarousel} className="owl-carousel owl-theme reviews-carousel">
										{/* TESTIMONIAL #1 */}
										<SwiperSlide className="review-1 bg--magnolia r-16">
											{/* Quote Icon */}
											<div className="review-ico ico-45"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-1-txt">
												{/* Rating */}
												<div className="review-rating ico-15 color--yellow">
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
												</div>
												{/* Text */}
												<p>Etiam sapien sagittis congue augue a massa varius egestas ultrice varius magna
													a tempus aliquet undo cursus suscipit
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-1.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>Alexander McCaig</h6>
														<p className="p-sm">Internet Surfer</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</SwiperSlide>	{/* END TESTIMONIAL #1 */}
										{/* TESTIMONIAL #2 */}
										<SwiperSlide className="review-1 bg--magnolia r-16">
											{/* Quote Icon */}
											<div className="review-ico ico-45"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-1-txt">
												{/* Rating */}
												<div className="review-rating ico-15 color--yellow">
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star-half-empty" />
												</div>
												{/* Text */}
												<p>At sagittis congue augue diam egestas magna an ipsum vitae purus ipsum primis
													and cubilia laoreet augue egestas a luctus donec ltrice ligula porta augue
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-2.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>Paul S. Chun</h6>
														<p className="p-sm">Web Developer</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</SwiperSlide>	{/* END TESTIMONIAL #2 */}
										{/* TESTIMONIAL #3 */}
										<SwiperSlide className="review-1 bg--magnolia r-16">
											{/* Quote Icon */}
											<div className="review-ico ico-45"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-1-txt">
												{/* Rating */}
												<div className="review-rating ico-15 color--yellow">
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star-1" />
												</div>
												{/* Text */}
												<p>Mauris gestas magnis a sapien etiam sapien congue an augue egestas and ultrice
													vitae purus diam an integer congue magna and egestas magna suscipit
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-3.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>Maria Haverman</h6>
														<p className="p-sm">App Developer</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</SwiperSlide>	{/* END TESTIMONIAL #3 */}
										{/* TESTIMONIAL #4 */}
										<SwiperSlide className="review-1 bg--magnolia r-16">
											{/* Quote Icon */}
											<div className="review-ico ico-45"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-1-txt">
												{/* Rating */}
												<div className="review-rating ico-15 color--yellow">
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star-half-empty" />
												</div>
												{/* Text */}
												<p>Mauris donec a magnis sapien etiam pretium a congue augue volutpat lectus aenean
													magna undo mauris lectus laoreet
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-4.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>David Bromberg</h6>
														<p className="p-sm">Web Developer</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</SwiperSlide>	{/* END TESTIMONIAL #4 */}
										{/* TESTIMONIAL #5 */}
										<SwiperSlide className="review-1 bg--magnolia r-16">
											{/* Quote Icon */}
											<div className="review-ico ico-45"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-1-txt">
												{/* Rating */}
												<div className="review-rating ico-15 color--yellow">
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
												</div>
												{/* Text */}
												<p>An augue cubilia undo laoreet magna suscipit egestas ipsum lectus purus ipsum
													and primis augue an ultrice ligula egestas suscipit lectus gestas auctor
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-5.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>Marisol_22</h6>
														<p className="p-sm">@marisol_22</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</SwiperSlide>	{/* END TESTIMONIAL #5 */}
										{/* TESTIMONIAL #6 */}
										<SwiperSlide className="review-1 bg--magnolia r-16">
											{/* Quote Icon */}
											<div className="review-ico ico-45"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-1-txt">
												{/* Rating */}
												<div className="review-rating ico-15 color--yellow">
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star-1" />
													<span className="flaticon-star-1" />
												</div>
												{/* Text */}
												<p>An augue cubilia laoreet undo magna ipsum semper suscipit egestas magna ipsum
													ligula a vitae purus and ipsum primis!
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-6.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>Marc Swanson</h6>
														<p className="p-sm">Sales Manager</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</SwiperSlide>	{/* END TESTIMONIAL #6 */}
										{/* TESTIMONIAL #7 */}
										<SwiperSlide className="review-1 bg--magnolia r-16">
											{/* Quote Icon */}
											<div className="review-ico ico-45"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-1-txt">
												{/* Rating */}
												<div className="review-rating ico-15 color--yellow">
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star-1" />
												</div>
												{/* Text */}
												<p>Augue egestas porta tempus volutpat egestas augue cubilia laoreet a magna
													suscipit luctus dolor blandit vitae purus neque tempus aliquet porta gestas
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-7.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>Paul Briggs</h6>
														<p className="p-sm">Graphic Designer</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</SwiperSlide>	{/* END TESTIMONIAL #7 */}
										{/* TESTIMONIAL #8 */}
										<SwiperSlide className="review-1 bg--magnolia r-16">
											{/* Quote Icon */}
											<div className="review-ico ico-45"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-1-txt">
												{/* Rating */}
												<div className="review-rating ico-15 color--yellow">
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
													<span className="flaticon-star" />
												</div>
												{/* Text */}
												<p>Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna
													suscipit luctus dolor blandit purus and tempus feugiat impedit!
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-8.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>Evelyn Martinez</h6>
														<p className="p-sm">WordPress Consultant</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</SwiperSlide>	{/* END TESTIMONIAL #8 */}
									</Swiper>
								</div>
							</div>	{/* END TESTIMONIALS CAROUSEL */}
						</div>	   {/* End container */}
					</section>	{/* END TESTIMONIALS */}
					{/* RATING
			============================================= */}
					<div className="pt-80 pb-100 rating-1 rating-section division">
						<div className="container">
							{/* RATING TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-10 col-lg-9">
									<div className="rating-title mb-40">
										<h6 className="h6-md color--gray w-500">Our users love us as much as we love them</h6>
									</div>
								</div>
							</div>
							{/* RATING WRAPPER */}
							<div className="rating-1-wrapper text-center">
								<div className="row justify-content-md-center row-cols-1 row-cols-md-3">
									{/* RATING BOX #1 */}
									<div className="col">
										<div id="rb-1-1" className="rbox-1">
											{/* Brand Logo */}
											<div className="rbox-1-img">
												<Link href="#"><img className="img-fluid" src="/images/capterra.png" alt="brand-logo" /></Link>
											</div>
											{/* Rating Stars */}
											<div className="star-rating ico-15 r-100 block--border block--shadow clearfix">
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star-half-empty mr-5" />
												&nbsp; 4.7/5
											</div>
										</div>
									</div>
									{/* RATING BOX #2 */}
									<div className="col">
										<div id="rb-1-2" className="rbox-1">
											{/* Brand Logo */}
											<div className="rbox-1-img">
												<Link href="#"><img className="img-fluid" src="/images/trustpilot.png" alt="brand-logo" /></Link>
											</div>
											{/* Rating Stars */}
											<div className="star-rating ico-15 r-100 block--border block--shadow clearfix">
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star mr-5" />
												&nbsp; 4.95/5
											</div>
										</div>
									</div>
									{/* RATING BOX #3 */}
									<div className="col">
										<div id="rb-1-3" className="rbox-1">
											{/* Brand Logo */}
											<div className="rbox-1-img">
												<Link href="#"><img className="img-fluidg" src="/images/growd.png" alt="brand-logo" /></Link>
											</div>
											{/* Rating Stars */}
											<div className="star-rating ico-15 r-100 block--border block--shadow clearfix">
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star" />
												<span className="flaticon-star-1 mr-5" />
												&nbsp; 4.24/5
											</div>
										</div>
									</div>
								</div>  {/* End row */}
							</div>	{/* END RATING WRAPPER */}
						</div>	{/* End container */}
					</div>	{/* END RATING */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
					{/* FAQs
			============================================= */}
					<section className="pt-80 faqs-3 faqs-section division">
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
										<Link href="/faqs" className="btn r-36 btn--tra-black hover--theme">Read The FAQs</Link>
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
					</section>	{/* END FAQs */}
					{/* BANNER
			============================================= */}
					<section className="pt-80 banner-2 banner-section">
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
												<Link href="/signup" className="btn btn-md r-36 btn--theme-2 hover--tra-white">Get started - it's free!</Link>
												{/* Buttons Group Text */}
												<p className="p-sm btns-group-txt ico-15">
													<span className="flaticon-check" /> Free 14 days trial. No credit card needed.
												</p>
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