
'use client'
import VideoPopup from "@/components/elements/VideoPopUp"
import { brandsCarousel6, reviewsCarousel } from "@/components/hooks/useSwiper"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Careers() {

	return (
		<>

			<Layout>
				<div>
					<section className="pb-100 about-3 inner-page-hero about-section division">
						<div className="container">
							<div className="row d-flex align-items-center">
								{/* TEXT BLOCK */}
								<div className="col-md-6 order-last order-md-2">
									<div className="txt-block left-column wow animate__animated animate__fadeInRight">
										{/* Section ID */}
										<span className="section-id">Endless Possibilities</span>
										{/* Title */}
										<h2>Careers at Pintex</h2>
										{/* Text */}
										<p>Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae dolor
											luctus placerat magna and ligula cursus purus vitae purus an ipsum auris suscipit
										</p>
										{/* Text */}
										<p className="mb-0">Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis
											vitae dolor luctus placerat magna and ligula cursus purus vitae purus and ipsum suscipit libero
											an auris dapibus fusce a blandit sodales sagittis
										</p>
										{/* Button */}
										<Link href="#careers" className="btn r-36 btn--theme hover--tra-black">See Open Positions</Link>
									</div>
								</div>	{/* END TEXT BLOCK */}
								{/* IMAGE BLOCK */}
								<div className="col-md-6 order-first order-md-2">
									<div className="img-block right-column wow animate__animated animate__fadeInLeft">
										<img className="img-fluid r-12" src="/images/img-25.jpg" alt="about-image" />
									</div>
								</div>
							</div>    {/* End row */}
						</div>	   {/* End container */}
					</section>	{/* END ABOUT */}
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
									<div className="img-block video-preview left-column wow animate__animated animate__fadeInRight">
										{/* Play Icon */}
										<VideoPopup className="video-popup2">
											<div className="video-btn video-btn-xl bg--theme-2">
												<div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
											</div>
										</VideoPopup>
										{/* Preview Image */}
										<img className="img-fluid r-18" src="/images/img-23.jpg" alt="about-image" />
									</div>
								</div>
								{/* TEXT BLOCK */}
								<div className="col-md-6 col-lg-5">
									<div className="txt-block right-column wow animate__animated animate__fadeInLeft">
										{/* Section ID */}
										<span className="section-id">Life at Pintex</span>
										{/* Title */}
										<h2>Improve your career, with our talented team</h2>
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
										<h6 className="h6-md">We've sharpened our skills at:</h6>
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
													<div className="accordion-thumb"><h5 className="h5-lg">Do your work, remotely</h5></div>
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
													<div className="accordion-thumb"><h5 className="h5-lg">Grow with purpose</h5></div>
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
													<div className="accordion-thumb"><h5 className="h5-lg">Build something exceptional</h5></div>
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
					{/* FEATURES
			============================================= */}
					<section className="pt-100 features-2 features-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title text-center mb-80">
										{/* Title */}
										<h2 className="h2-xl">Perks and Benefits</h2>
										{/* Text */}
										<p className="p-lg">Everything you need to do your best work.</p>
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
													<span className="flaticon-schedule" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Flexible Schedules</h5>
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
													<span className="flaticon-keyboard" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Work From Anywhere</h5>
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
													<span className="flaticon-success" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Learning &amp; Development</h5>
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
													<span className="flaticon-group" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Quarterly Off-Sites</h5>
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
													<span className="flaticon-heartbeat" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Health, Dental, Vision</h5>
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
													<span className="flaticon-envelope" />
													{/* Shape */}
													<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
														<path d="M66.1,-32.6C77.9,-17.7,74.4,11.6,60.8,35.7C47.2,59.7,23.6,78.5,2.8,76.9C-18,75.2,-35.9,53.2,-47.7,30.1C-59.5,7.1,-65.1,-16.9,-56.1,-30.1C-47.1,-43.4,-23.6,-46,1.8,-47C27.2,-48.1,54.3,-47.6,66.1,-32.6Z" transform="translate(100 100)" />
													</svg>
												</div>
											</div>	{/* End Icon */}
											{/* Text */}
											<div className="fbox-txt">
												<h5>Competitive Salary</h5>
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
									<Swiper {...reviewsCarousel} className="reviews-carousel">
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
					<section id="careers" className="bg--whitesmoke py-100 careers-1 careers-section division">
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
										<h4 className="h4-md">Marketing</h4>
										{/* JOB POSITION #1 */}
										<div className="career-item">
											{/* OPEN ROLE DESCRIPTION */}
											<div className="position-description">
												{/* Title */}
												<h5>Content Marketing Manager</h5>
												{/* Data */}
												<ul className="position-data ico-15">
													<li><p>On-Site - Full Time</p></li>
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
				</div>

			</Layout>
		</>
	)
}