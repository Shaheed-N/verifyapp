'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { brandsCarousel6 } from "@/components/hooks/useSwiper"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopUp"
export default function About() {

	return (
		<>

			<Layout>
				<div>
					<section className="gr--whitesmoke inner-page-hero about-1 about-section division">
						<div className="container">
							{/* ABOUT TEXT */}
							<div className="row">
								<div className="col-md-8">
									<div className="about-1-txt">
										{/* Title */}
										<h2>Hi, we’re Pintex.</h2>
										{/* Text */}
										<h4 className="h4-md color--gray">We develop user centered digital products for web and mobile
											platforms
										</h4>
									</div>
								</div>
							</div>    {/* END ABOUT TEXT */}
							{/* ABOUT IMAGE */}
							<div className="row">
								<div className="col">
									<div className="about-1-img">
										<img className="img-fluid r-18" src="/images/img-27.jpg" alt="about-image" />
									</div>
								</div>
							</div>
						</div>	   {/* End container */}
					</section>	{/* END ABOUT */}
					{/* ABOUT
			============================================= */}
					<section className="pt-70 pb-100 about-2 about-section division">
						<div className="container">
							{/* ABOUT TITLE */}
							<div className="row">
								<div className="col">
									<div className="about-2-title">
										<h4 className="h4-lg">Our story</h4>
									</div>
								</div>
							</div>
							{/* ABOUT TEXT */}
							<div className="row">
								{/* ABOUT TEXT */}
								<div className="col-md-6">
									<div id="a2-1" className="txt-block">
										{/* Text */}
										<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
											luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit aliquet in dapibus
											libero at blandit fusce neque sagittis turpis ultrice
										</p>
										{/* List */}
										<ul className="simple-list">
											<li className="list-item">
												<p>Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam ultrice ipsum aliquam
													congue and dolor cursus dolor cursus justo congue ipsum in purus sapien blandit
												</p>
											</li>
											<li className="list-item">
												<p className="mb-0">Tempor sapien quaerat ipsum laoreet purus dolor a sapien turpis ultrice
													pulvinar congue aliquam an ispum congue
												</p>
											</li>
										</ul>
									</div>
								</div>	{/* END ABOUT TEXT */}
								{/* ABOUT TEXT */}
								<div className="col-md-6">
									<div id="a2-2" className="txt-block">
										{/* Text */}
										<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
											luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit aliquet in dapibus
											libero at blandit fusce neque sagittis turpis ultrice cursus in congue purus quaerat augue ligula purus magna
										</p>
										{/* Text */}
										<p className="mb-0">Sodales tempor sapien quaerat ipsum congue undo laoreet turpis neque auctor turpis
											vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit aliquet in dapibus libero at blandit fusce neque sagittis turpis ultrice cursus in congue purus quaerat purus ligula augue ipsum
										</p>
									</div>
								</div>	{/* END ABOUT TEXT */}
							</div>   {/* END ABOUT TEXT */}
						</div>	   {/* End container */}
					</section>	{/* END ABOUT */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
					{/* ABOUT
			============================================= */}
					<section className="pt-100 about-3 about-section division">
						<div className="container">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-6">
									<div className="img-block video-preview left-column wow animate__animated animate__fadeInRight">
										{/* Play Icon */}
										<VideoPopup className="video-popup2">
											<div className="video-btn video-btn-xl bg--theme-2">
												<div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
											</div>
										</VideoPopup>
										{/* Preview Image */}
										<img className="img-fluid r-18" src="/images/img-24.jpg" alt="about-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-6">
									<div className="txt-block right-column wow animate__animated animate__fadeInLeft">
										{/* Section ID */}
										<span className="section-id">Personalized Strategy</span>
										{/* Title */}
										<h2>We care about the quality of our work</h2>
										{/* Text */}
										<p>Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
											luctus placerat magna and ligula cursus purus vitae purus an ipsum auris suscipit
										</p>
										{/* Text */}
										<ul className="simple-list">
											<li className="list-item">
												<p>Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam ultrice ipsum aliquam
													congue and dolor cursus
												</p>
											</li>
											<li className="list-item">
												<p className="mb-0">Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam ultrice
													ipsum aliquam congue a dolor congue
												</p>
											</li>
										</ul>
									</div>
								</div>	{/* END TEXT BLOCK */}
							</div>    {/* End row */}
						</div>	   {/* End container */}
					</section>	{/* END ABOUT */}
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
											<span className="section-id">Why Choose Us</span>
											{/* Title */}
											<h2 className="h2-md">With knowledge, skills &amp; hard work</h2>
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
										<div className="bc-4-img right-column">
											<img className="img-fluid r-24 block--shadow" src="/images/img-22.jpg" alt="content-image" />
										</div>
									</div>
								</div>   {/* End row */}
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
										<h2 className="h2-xl">Handling your marketing needs in a better way</h2>
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
													<span className="flaticon-pie-chart-2" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Market Research</h5>
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
													<span className="flaticon-group" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>User Experience</h5>
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
													<span className="flaticon-open-enrollment" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Digital Marketing</h5>
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
													<span className="flaticon-browser-2" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Web Development</h5>
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
													<span className="flaticon-dice" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Brand Design Identity</h5>
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
													<span className="flaticon-search" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>SEO &amp; SMM Services</h5>
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
					{/* ABOUT
			============================================= */}
					<section className="pt-100 about-3 about-section division">
						<div className="container">
							<div className="row d-flex align-items-center">
								{/* IMAGE BLOCK */}
								<div className="col-md-6 col-lg-7">
									<div className="img-block left-column wow animate__animated animate__fadeInRight">
										<img className="img-fluid r-18" src="/images/img-23.jpg" alt="content-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-6 col-lg-5">
									<div className="txt-block right-column wow animate__animated animate__fadeInLeft">
										{/* Section ID */}
										<span className="section-id">One-Stop Solution</span>
										{/* Title */}
										<h2>Cutting-edge solutions for your online business</h2>
										{/* Text */}
										<ul className="simple-list">
											<li className="list-item">
												<p>Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice quisque
													and magna aliquam dolor cursus a congue varius
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
					</section>	{/* END ABOUT */}
					{/* BRANDS
			============================================= */}
					<div className="py-100 brands-1 brands-section">
						<div className="container">
							{/* BRANDS TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-10 col-lg-9">
									<div className="brands-title">
										<h6 className="h6-md">Trusted by companies, big or not-so-big:</h6>
									</div>
								</div>
							</div>
							{/* BRANDS CAROUSEL */}
							<div className="row">
								<div className="col text-center">
									<Swiper {...brandsCarousel6} className="owl-carousel brands-carousel-6">
										{/* BRAND LOGO IMAGE */}
										<SwiperSlide className="brand-logo">
											<Link href="#"><img className="img-fluid" src="/images/brand-1.png" alt="brand-logo" /></Link>
										</SwiperSlide>
										{/* BRAND LOGO IMAGE */}
										<SwiperSlide className="brand-logo">
											<Link href="#"><img className="img-fluid" src="/images/brand-2.png" alt="brand-logo" /></Link>
										</SwiperSlide>
										{/* BRAND LOGO IMAGE */}
										<SwiperSlide className="brand-logo">
											<Link href="#"><img className="img-fluid" src="/images/brand-3.png" alt="brand-logo" /></Link>
										</SwiperSlide>
										{/* BRAND LOGO IMAGE */}
										<SwiperSlide className="brand-logo">
											<Link href="#"><img className="img-fluid" src="/images/brand-4.png" alt="brand-logo" /></Link>
										</SwiperSlide>
										{/* BRAND LOGO IMAGE */}
										<SwiperSlide className="brand-logo">
											<Link href="#"><img className="img-fluid" src="/images/brand-5.png" alt="brand-logo" /></Link>
										</SwiperSlide>
										{/* BRAND LOGO IMAGE */}
										<SwiperSlide className="brand-logo">
											<Link href="#"><img className="img-fluid" src="/images/brand-6.png" alt="brand-logo" /></Link>
										</SwiperSlide>
										{/* BRAND LOGO IMAGE */}
										<SwiperSlide className="brand-logo">
											<Link href="#"><img className="img-fluid" src="/images/brand-7.png" alt="brand-logo" /></Link>
										</SwiperSlide>
										{/* BRAND LOGO IMAGE */}
										<SwiperSlide className="brand-logo">
											<Link href="#"><img className="img-fluid" src="/images/brand-8.png" alt="brand-logo" /></Link>
										</SwiperSlide>
										{/* BRAND LOGO IMAGE */}
										<SwiperSlide className="brand-logo">
											<Link href="#"><img className="img-fluid" src="/images/brand-9.png" alt="brand-logo" /></Link>
										</SwiperSlide>
									</Swiper>
								</div>
							</div>  {/* END BRANDS CAROUSEL */}
						</div>	{/* End container */}
					</div>	{/* END BRANDS */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
					{/* ABOUT
			============================================= */}
					<section className="pt-100 about-3 about-section division">
						<div className="container">
							<div className="row d-flex align-items-center">
								{/* TEXT BLOCK */}
								<div className="col-md-6 order-last order-md-2">
									<div className="txt-block left-column wow animate__animated animate__fadeInRight">
										{/* ACCORDION WRAPPER */}
										<div className="accordion-1 accordion-wrapper">
											<ul className="accordion">
												{/* ACCORDION ITEM #1 */}
												<li className="accordion-item is-active">
													{/* Title */}
													<div className="accordion-thumb"><h5 className="h5-lg">Putting Creators First</h5></div>
													{/* Text */}
													<div className="accordion-panel">
														<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor
															turpis vitae dolor laoreet luctus magna
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
													<div className="accordion-thumb"><h5 className="h5-lg">Creative Collaboration</h5></div>
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
													<div className="accordion-thumb"><h5 className="h5-lg">Pursuing Excellence</h5></div>
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
								{/* IMAGE BLOCK */}
								<div className="col-md-6 order-first order-md-2">
									<div className="img-block right-column wow animate__animated animate__fadeInLeft">
										<img className="img-fluid r-18" src="/images/img-26.jpg" alt="about-image" />
									</div>
								</div>
							</div>    {/* End row */}
						</div>	   {/* End container */}
					</section>	{/* END ABOUT */}
					{/* TEAM
			============================================= */}
					<section className="pt-100 pb-50 team-1 team-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title text-center mb-70">
										{/* Title */}
										<h2 className="h2-xl">People Behind Pintex</h2>
										{/* Text */}
										<p className="p-lg">Get to know our creative team from across the globe who’s building our products
											and supporting our amazing customers
										</p>
									</div>
								</div>
							</div>
							{/* TEAM MEMBERS WRAPPER */}
							<div className="team-members-wrapper">
								<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
									{/* TEAM MEMBER #1 */}
									<div className="col">
										<div id="tm-1-1" className="team-member wow animate__animated animate__fadeInUp">
											{/* Team Member Photo */}
											<div className="team-member-photo r-10">
												<div className="hover-overlay">
													<img className="img-fluid" src="/images/team-1.jpg" alt="team-member-foto" />
													<div className="item-overlay" />
												</div>
											</div>
											{/* Team Member Data */}
											<div className="team-member-data">
												<h6 className="h6-lg">Jonathan Barnes</h6>
												<p>Founder and CEO</p>
											</div>
										</div>
									</div>	{/* END TEAM MEMBER #1 */}
									{/* TEAM MEMBER #2 */}
									<div className="col">
										<div id="tm-1-2" className="team-member wow animate__animated animate__fadeInUp">
											{/* Team Member Photo */}
											<div className="team-member-photo r-10">
												<div className="hover-overlay">
													<img className="img-fluid" src="/images/team-2.jpg" alt="team-member-foto" />
													<div className="item-overlay" />
												</div>
											</div>
											{/* Team Member Data */}
											<div className="team-member-data">
												<h6 className="h6-lg">Jaime Fletcher</h6>
												<p>Software Developer</p>
											</div>
										</div>
									</div>	{/* END TEAM MEMBER #2 */}
									{/* TEAM MEMBER #3 */}
									<div className="col">
										<div id="tm-1-3" className="team-member wow animate__animated animate__fadeInUp">
											{/* Team Member Photo */}
											<div className="team-member-photo r-10">
												<div className="hover-overlay">
													<img className="img-fluid" src="/images/team-3.jpg" alt="team-member-foto" />
													<div className="item-overlay" />
												</div>
											</div>
											{/* Team Member Data */}
											<div className="team-member-data">
												<h6 className="h6-lg">Les Bakker</h6>
												<p>Software Engineer</p>
											</div>
										</div>
									</div>	{/* END TEAM MEMBER #3 */}
									{/* TEAM MEMBER #4 */}
									<div className="col">
										<div id="tm-1-4" className="team-member wow animate__animated animate__fadeInUp">
											{/* Team Member Photo */}
											<div className="team-member-photo r-10">
												<div className="hover-overlay">
													<img className="img-fluid" src="/images/team-4.jpg" alt="team-member-foto" />
													<div className="item-overlay" />
												</div>
											</div>
											{/* Team Member Data */}
											<div className="team-member-data">
												<h6 className="h6-lg">Alyssa Garrison</h6>
												<p>Web Development</p>
											</div>
										</div>
									</div>	{/* END TEAM MEMBER #4 */}
									{/* TEAM MEMBER #5 */}
									<div className="col">
										<div id="tm-1-5" className="team-member wow animate__animated animate__fadeInUp">
											{/* Team Member Photo */}
											<div className="team-member-photo r-10">
												<div className="hover-overlay">
													<img className="img-fluid" src="/images/team-5.jpg" alt="team-member-foto" />
													<div className="item-overlay" />
												</div>
											</div>
											{/* Team Member Data */}
											<div className="team-member-data">
												<h6 className="h6-lg">Charlotte Johnson</h6>
												<p>Content Manager</p>
											</div>
										</div>
									</div>	{/* END TEAM MEMBER #5 */}
									{/* TEAM MEMBER #6 */}
									<div className="col">
										<div id="tm-1-6" className="team-member wow animate__animated animate__fadeInUp">
											{/* Team Member Photo */}
											<div className="team-member-photo r-10">
												<div className="hover-overlay">
													<img className="img-fluid" src="/images/team-6.jpg" alt="team-member-foto" />
													<div className="item-overlay" />
												</div>
											</div>
											{/* Team Member Data */}
											<div className="team-member-data">
												<h6 className="h6-lg">Olivia Steiner</h6>
												<p>Customers Manager</p>
											</div>
										</div>
									</div>	{/* END TEAM MEMBER #6 */}
									{/* TEAM MEMBER #7 */}
									<div className="col">
										<div id="tm-1-7" className="team-member wow animate__animated animate__fadeInUp">
											{/* Team Member Photo */}
											<div className="team-member-photo r-10">
												<div className="hover-overlay">
													<img className="img-fluid" src="/images/team-7.jpg" alt="team-member-foto" />
													<div className="item-overlay" />
												</div>
											</div>
											{/* Team Member Data */}
											<div className="team-member-data">
												<h6 className="h6-lg">Charles Fairless</h6>
												<p>Customers Manager</p>
											</div>
										</div>
									</div>	{/* END TEAM MEMBER #7 */}
									{/* TEAM MEMBER #8 */}
									<div className="col">
										<div id="tm-1-8" className="team-member wow animate__animated animate__fadeInUp">
											{/* Team Member Photo */}
											<div className="team-member-photo r-10">
												<div className="hover-overlay">
													<img className="img-fluid" src="/images/team-8.jpg" alt="team-member-foto" />
													<div className="item-overlay" />
												</div>
											</div>
											{/* Team Member Data */}
											<div className="team-member-data">
												<h6 className="h6-lg">Nancy Taylor</h6>
												<p>Head of Marketing</p>
											</div>
										</div>
									</div>	{/* END TEAM MEMBER #8 */}
								</div>
							</div>	{/* END TEAM MEMBERS WRAPPER */}
						</div>	    {/* End container */}
					</section>	{/* END TEAM */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
					{/* TESTIMONIALS
			============================================= */}
					<section className="pt-100 reviews-3 reviews-section">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title text-center mb-80">
										{/* Title */}
										<h2 className="h2-xl">Here’s what our amazing clients are saying</h2>
										{/* Text */}
										<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
									</div>
								</div>
							</div>
							{/* TESTIMONIALS WRAPPER */}
							<div className="reviews-3-wrapper rel shape--02 shape--whitesmoke">
								<div className="row align-items-center row-cols-1 row-cols-md-2">
									{/* TESTIMONIAL #1 */}
									<div className="col">
										<div id="rw-3-1" className="review-3 bg--white block--border block--shadow r-10">
											{/* Quote Icon */}
											<div className="review-ico ico-60"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-3-txt">
												{/* Title */}
												<h6 className="h6-lg">Great Flexibility!</h6>
												{/* Text */}
												<p>Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia
													laoreet augue and luctus magna dolor luctus egestas sapien vitae
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-4.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>Alexander McCaig</h6>
														<p className="p-sm">Internet Surfer</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</div>
									</div>	{/* END TESTIMONIAL #1 */}
									{/* TESTIMONIAL #2 */}
									<div className="col">
										<div id="rw-3-2" className="review-3 bg--white block--border block--shadow r-10">
											{/* Quote Icon */}
											<div className="review-ico ico-60"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-3-txt">
												{/* Title */}
												<h6 className="h6-lg">Simple and Useful!</h6>
												{/* Text */}
												<p>At sagittis congue augue and magna ipsum vitae a purus ipsum primis diam a
													cubilia laoreet augue egestas luctus a donec vitae ultrice ligula magna suscipit
													lectus gestas augue into cubilia
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-5.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>Evelyn Martinez</h6>
														<p className="p-sm">Web Developer</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</div>
									</div>	{/* END TESTIMONIAL #2 */}
									{/* TESTIMONIAL #3 */}
									<div className="col">
										<div id="rw-3-3" className="review-3 bg--white block--border block--shadow r-10">
											{/* Quote Icon */}
											<div className="review-ico ico-60"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-3-txt">
												{/* Title */}
												<h6 className="h6-lg">This is crazy...</h6>
												{/* Text */}
												<p>An augue cubilia laoreet magna suscipit egestas and ipsum a lectus purus ipsum
													primis and augue ultrice ligula and egestas a suscipit lectus gestas undo auctor
													tempus feugiat impedit quaerat
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-8.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>Maria Haverman</h6>
														<p className="p-sm">App Developer</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</div>
									</div>	{/* END TESTIMONIAL #3 */}
									{/* TESTIMONIAL #4 */}
									<div className="col">
										<div id="rw-3-4" className="review-3 bg--white block--border block--shadow r-10">
											{/* Quote Icon */}
											<div className="review-ico ico-60"><span className="flaticon-quote" /></div>
											{/* Text */}
											<div className="review-3-txt">
												{/* Title */}
												<h6 className="h6-lg">Powerful Features!</h6>
												{/* Text */}
												<p>Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna
													suscipit luctus dolor blandit at purus tempus feugiat impedit
												</p>
												{/* Author */}
												<div className="author-data clearfix">
													{/* Avatar */}
													<div className="review-avatar">
														<img src="/images/review-author-7.jpg" alt="review-avatar" />
													</div>
													{/* Data */}
													<div className="review-author">
														<h6>David Bromberg</h6>
														<p className="p-sm">Web Developer</p>
													</div>
												</div>	{/* End Author */}
											</div>	{/* End Text */}
										</div>
									</div>	{/* END TESTIMONIAL #4 */}
								</div>  {/* End row */}
							</div>	{/* END TESTIMONIALS WRAPPER */}
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
												<Link href="#"><img className="img-fluid" src="/images/growd.png" alt="brand-logo" /></Link>
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
					{/* CAREERS
			============================================= */}
					<section className="gr--whitesmoke py-100 careers-1 careers-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title text-center mb-70">
										{/* Title */}
										<h2 className="h2-xl">Current Openings</h2>
										{/* Text */}
										<p className="p-lg">We’re building a better way to work, fueled by transparency, trust, and
											technology that is a force for positive change for the hourly workforce
										</p>
									</div>
								</div>
							</div>
							{/* OPEN POSITIONS */}
							<div className="row">
								<div className="col-md-12">
									{/* JOBS CATEGORY */}
									<div className="jobs-category bg--white r-12 block--shadow wow animate__animated animate__fadeInUp">
										{/* CATEGORY TITLE */}
										<h4 className="h4-md">Engineering</h4>
										{/* JOB POSITION #1 */}
										<div className="career-item b-border">
											{/* OPEN ROLE DESCRIPTION */}
											<div className="position-description">
												{/* Title */}
												<h5>Senior Backend Engineer</h5>
												{/* Data */}
												<ul className="position-data ico-15">
													<li><p>Remote - Full Time</p></li>
													<li className="rb-divider"><p><span className="flaticon-minus-1" /></p></li>
													<li><p>Boston, MA</p></li>
												</ul>
											</div>	{/* END OPEN ROLE DESCRIPTION */}
											{/* OPEN ROLE LINK */}
											<div className="position-link ico-25">
												<Link href="/career-role"><span className="flaticon-right-arrow" /></Link>
											</div>
										</div>	{/* END JOB POSITION #1 */}
										{/* JOB POSITION #2 */}
										<div className="career-item">
											{/* OPEN ROLE DESCRIPTION */}
											<div className="position-description">
												{/* Title */}
												<h5>Senior Platform Engineer</h5>
												{/* Data */}
												<ul className="position-data ico-15">
													<li><p>On-Site - Full Time</p></li>
													<li className="rb-divider"><p><span className="flaticon-minus-1" /></p></li>
													<li><p>Boston, MA</p></li>
												</ul>
											</div>	{/* END OPEN ROLE DESCRIPTION */}
											{/* OPEN ROLE LINK */}
											<div className="position-link ico-25">
												<Link href="/career-role"><span className="flaticon-right-arrow" /></Link>
											</div>
										</div>	{/* END JOB POSITION #2 */}
									</div>	{/* END JOBS CATEGORY */}
									{/* JOBS CATEGORY */}
									<div className="jobs-category bg--white r-12 block--shadow wow animate__animated animate__fadeInUp">
										{/* CATEGORY TITLE */}
										<h4 className="h4-md">Other</h4>
										{/* JOB POSITION #1 */}
										<div className="career-item">
											{/* OPEN ROLE DESCRIPTION */}
											<div className="position-description">
												{/* Title */}
												<h5>Customer Support</h5>
												{/* Data */}
												<ul className="position-data ico-15">
													<li><p>Remote - Full Time</p></li>
													<li className="rb-divider"><p><span className="flaticon-minus-1" /></p></li>
													<li><p>Los Angeles, CA</p></li>
												</ul>
											</div>	{/* END OPEN ROLE DESCRIPTION */}
											{/* OPEN ROLE LINK */}
											<div className="position-link ico-25">
												<Link href="/career-role"><span className="flaticon-right-arrow" /></Link>
											</div>
										</div>	{/* END JOB POSITION #1 */}
									</div>	{/* END JOBS CATEGORY */}
									{/* MORE CAREERS */}
									<div className="more-careers clearfix">
										<div className="more-careers-holder">
											<div className="more-careers-txt">
												<p>Didn't find the perfect role for you? <span>We’d love to meet you!</span></p>
											</div>
											<div className="more-careers-btn">
												<Link href="/contacts" className="btn r-36 btn--theme hover--tra-black">Contact Us</Link>
											</div>
										</div>
									</div>
								</div>
							</div>	{/* END OPEN POSITIONS */}
						</div>	   {/* End container */}
					</section>	{/* END CAREERS */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
				</div>

			</Layout>
		</>
	)
}