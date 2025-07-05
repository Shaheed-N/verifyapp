
'use client'
import { reviewsCarousel } from "@/components/hooks/useSwiper"
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopUp"
export default function MoreApps() {

	return (
		<>

			<Layout>
				<div>
					<section className="gr--whitesmoke pb-100 inner-page-hero more-apps-1 moreapps-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-10 col-lg-9">
									<div className="section-title text-center mb-80">
										{/* Title */}
										<h2 className="h2-title">Explore More Apps</h2>
										{/* Text */}
										<p className="p-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
											libero tempus, blandit posuere ligula varius magna congue cursus porta
										</p>
									</div>
								</div>
							</div>
							{/* APPS WRAPPER */}
							<div className="apps-1-wrapper text-center">
								<div className="row row-cols-2 row-cols-sm-3 row-cols-md-5">
									{/* OTHER APP #1 */}
									<div className="col">
										<Link href="#">
											<div className="app-box ab-1">
												<div className="app-logo-img">
													<img className="img-fluid" src="/images/app-logo-6.png" alt="app-logo" />
												</div>
												{/* Title */}
												<h6 className="h6-lg">SweetCake</h6>
												<p className="app-cat">Social Networking</p>
											</div>
										</Link>
									</div>	{/* END OTHER APP #1 */}
									{/* OTHER APP #2 */}
									<div className="col">
										<Link href="#">
											<div className="app-box ab-2">
												<div className="app-logo-img">
													<img className="img-fluid" src="/images/app-logo-2.png" alt="app-logo" />
												</div>
												{/* Title */}
												<h6 className="h6-lg">MuMemos</h6>
												<p className="app-cat">Social Networking</p>
											</div>
										</Link>
									</div>	{/* END OTHER APP #2 */}
									{/* OTHER APP #3 */}
									<div className="col">
										<Link href="#">
											<div className="app-box ab-3">
												<div className="app-logo-img">
													<img className="img-fluid" src="/images/app-logo-3.png" alt="app-logo" />
												</div>
												{/* Title */}
												<h6 className="h6-lg">LightMap</h6>
												<p className="app-cat">Navigation</p>
											</div>
										</Link>
									</div>	{/* END OTHER APP #3 */}
									{/* OTHER APP #4 */}
									<div className="col">
										<Link href="#">
											<div className="app-box ab-4">
												<div className="app-logo-img">
													<img className="img-fluid" src="/images/app-logo-5.png" alt="app-logo" />
												</div>
												{/* Title */}
												<h6 className="h6-lg">BirdsClash 2</h6>
												<p className="app-cat">Games</p>
											</div>
										</Link>
									</div>	{/* END OTHER APP #4 */}
									{/* OTHER APP #5 */}
									<div className="col">
										<Link href="#">
											<div className="app-box ab-5">
												<div className="app-logo-img">
													<img className="img-fluid" src="/images/app-logo-7.png" alt="app-logo" />
												</div>
												{/* Title */}
												<h6 className="h6-lg">U_Home</h6>
												<p className="app-cat">Lifestyle</p>
											</div>
										</Link>
									</div>	{/* END OTHER APP #5 */}
								</div>
							</div>	{/* END APPS WRAPPER */}
						</div>	   {/* End container */}
					</section>	{/* END MORE APPS */}
					{/* FEATURES
			============================================= */}
					<section className="gr--whitesmoke pt-100 features-3 features-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-8">
									<div className="section-title text-center mb-70">
										{/* Title */}
										<h2 className="h2-xl">Creative solutions that deliver the results</h2>
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
										<div className="fbox-3 fb-1 bg--white block--shadow r-12 wow fadeInUp">
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
										<div className="fbox-3 fb-2 bg--white block--shadow r-12 wow fadeInUp">
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
										<div className="fbox-3 fb-3 bg--white block--shadow r-12 wow fadeInUp">
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
										<div className="fbox-3 fb-4 bg--white block--shadow r-12 wow fadeInUp">
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
										<div className="bc-4-img video-preview right-column">
											{/* Play Icon */}
											<VideoPopup className="video-popup2">
												<div className="video-btn video-btn-xl bg--theme-2">
													<div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
												</div>
											</VideoPopup>
											{/* Preview Image */}
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
										<h2 className="h2-xl">Here's what our amazing users are saying</h2>
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
										<SwiperSlide className="review-1 bg--magnolia block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--magnolia block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--magnolia block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--magnolia block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--magnolia block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--magnolia block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--magnolia block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--magnolia block--shadow r-16">
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
					{/* DIVIDER LINE */}
					<hr className="divider" />
					{/* FAQs
			============================================= */}
					<section className="py-100 faqs-2 faqs-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title text-center  mb-70">
										{/* Title */}
										<h2 className="h2-xl">Questions? Look Here</h2>
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
												<h6 className="h6-xl">Sign up and manage your account</h6>
												{/* Answer */}
												<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
													dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit auris
												</p>
											</div>	{/* END QUESTION #1 */}
											{/* QUESTION #2 */}
											<div className="question wow animate__animated animate__fadeInUp">
												{/* Question */}
												<h6 className="h6-xl">Troubleshoot account issues</h6>
												{/* Answer */}
												<p>Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
													dolor luctus placerat magna and ligula cursus purus vitae purus auris auris suscipit
												</p>
											</div>	{/* END QUESTION #2 */}
											{/* QUESTION #3 */}
											<div className="question wow animate__animated animate__fadeInUp">
												{/* Question */}
												<h6 className="h6-xl">Do I need a credit card to sign up?</h6>
												{/* Answer */}
												<ul className="simple-list">
													<li className="list-item">
														<p>Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam ultrice ipsum
															aliquam congue and dolor cursus
														</p>
													</li>
													<li className="list-item">
														<p className="mb-0">Quaerat sapien tempor ipsum laoreet purus and sapien dolor diam
															ultrice ipsum aliquam congue dolor congue
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
												<h6 className="h6-xl">How do I choose a plan?</h6>
												{/* Answer */}
												<p>Sodales sapien tempor quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
													dolor luctus placerat magna and ligula cursus purus vitae purus an auris suscipit ipsum
												</p>
											</div>	{/* END QUESTION #4 */}
											{/* QUESTION #5 */}
											<div className="question wow animate__animated animate__fadeInUp">
												{/* Question */}
												<h6 className="h6-xl">Discounts for annual plans</h6>
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
												<h6 className="h6-xl">How to request a refund?</h6>
												{/* Answer */}
												<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
													dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit auris
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
												<Link href="/contacts" className="btn r-36 btn--theme hover--tra-black">Contact Us</Link>
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