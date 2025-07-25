
'use client'
import { reviewsCarousel } from "@/components/hooks/useSwiper"
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopUp"
export default function Pricing2() {

	return (
		<>

			<Layout>
				<div>
					<section className="gr--whitesmoke py-100 pricing-2 inner-page-hero pricing-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title mb-60 text-center">
										{/* Title */}
										<h2 className="h2-title">Start, Connect, Enjoy</h2>
										{/* Text */}
										<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet sapien luctus</p>
									</div>
								</div>
							</div>	{/* END SECTION TITLE */}
							{/* PRICING TABLES */}
							<div className="pricing-2-wrapper">
								<div className="row">
									{/* FREE PLAN */}
									<div className="col-md-4">
										<div id="pt-2-1" className="p-table pricing-2-table bg--white r-24 wow animate__animated animate__fadeInUp animate__delay-1">
											{/* TABLE HEADER */}
											<div className="pricing-table-header text-center">
												{/* Title */}
												<h5 className="h5-md color--theme">Pintex Free</h5>
												{/* Price */}
												<div className="price">
													<sup>$</sup>
													<span>0.00</span>
													<sup className="validity">&nbsp;/ mo</sup>
												</div>
											</div>	{/* END TABLE HEADER */}
											{/* PRICING FEATURES */}
											<ul className="pricing-features ico-10 ico--theme-2">
												<li><p><span className="flaticon-check" /> 1 GB of cloud storage</p></li>
												<li><p><span className="flaticon-check" /> Weekly data backup</p></li>
												<li><p><span className="flaticon-check" /> No Ads. No trackers</p></li>
												<li><p><span className="flaticon-check" /> 12/5 email support</p></li>
											</ul>
										</div>
									</div>	{/* END FREE PLAN */}
									{/* PREMIUM PLAN */}
									<div className="col-md-4">
										{/* PRICING TABLE */}
										<div id="pt-2-2" className="p-table pricing-2-table bg--white r-24 wow animate__animated animate__fadeInUp animate__delay-2">
											{/* TABLE HEADER */}
											<div className="pricing-table-header text-center">
												{/* Title */}
												<h5 className="h5-md color--theme">Pintex PRO</h5>
												{/* Price */}
												<div className="price">
													<sup>$</sup>
													<span>4.99</span>
													<sup className="validity">&nbsp;/ mo</sup>
												</div>
											</div>	{/* END TABLE HEADER */}
											{/* PRICING FEATURES */}
											<ul className="pricing-features ico-10 ico--theme-2">
												<li><p><span className="flaticon-check" /> 15 GB of cloud storage</p></li>
												<li><p><span className="flaticon-check" /> Daily data backup</p></li>
												<li><p><span className="flaticon-check" /> No Ads. No trackers</p></li>
												<li><p><span className="flaticon-check" /> 24/7 email support</p></li>
											</ul>
										</div>	{/* END PRICING TABLE */}
									</div>	{/* END PREMIUM PLAN  */}
									{/* PREMIUM PLAN */}
									<div className="col-md-4">
										{/* PRICING TABLE */}
										<div id="pt-2-3" className="p-table pricing-2-table bg--white r-24 wow animate__animated animate__fadeInUp animate__delay-3">
											{/* TABLE HEADER */}
											<div className="pricing-table-header text-center">
												{/* Title */}
												<h5 className="h5-md color--theme">Pintex Family</h5>
												{/* Price */}
												<div className="price">
													<sup>$</sup>
													<span>9.99</span>
													<sup className="validity">&nbsp;/ mo</sup>
												</div>
											</div>	{/* END TABLE HEADER */}
											{/* PRICING FEATURES */}
											<ul className="pricing-features ico-10 ico--theme-2">
												<li><p><span className="flaticon-check" /> 15 GB of cloud storage</p></li>
												<li><p><span className="flaticon-check" /> Daily data backup</p></li>
												<li><p><span className="flaticon-check" /> No Ads. No trackers</p></li>
												<li><p><span className="flaticon-check" /> 24/7 email support</p></li>
											</ul>
										</div>	{/* END PRICING TABLE */}
									</div>	{/* END PREMIUM PLAN  */}
								</div>
							</div>	{/* PRICING TABLES */}
							{/* PRICING NOTICE TEXT */}
							<div className="row justify-content-center">
								<div className="col-md-10 col-lg-9">
									<div className="pricing-notice wow animate__animated animate__fadeInUp">
										{/* Text */}
										<p className="p-sm ">The above prices don't include applicable taxes based on your billing address.
											The final price will be displayed on the checkout page, before the payment is completed
										</p>
									</div>
								</div>
							</div>	{/* END PRICING NOTICE TEXT */}
						</div>	   {/* End container */}
					</section>	{/* END PRICING */}
					{/* DIVIDER LINE */}
					<hr className="divider" />
					{/* PRICING COMPARE
			============================================= */}
					<section id="comp-table" className="pt-100 pricing-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-10 col-lg-8">
									<div className="section-title text-center mb-60">
										{/* Title */}
										<h2 className="h2-xl">Full Plan Comparison</h2>
										{/* Text */}
										<p className="p-lg">Our Basic and Premium plans comes with a free, 14-day trial</p>
									</div>
								</div>
							</div>
							{/* PRICING COMPARE */}
							<div className="comp-table wow animate__animated animate__fadeInUp">
								<div className="row">
									<div className="col">
										{/* TABLE */}
										<div className="table-responsive mb-50">
											<table className="table text-center">
												<thead>
													<tr>
														<th style={{ width: '34%' }} />
														<th style={{ width: '22%' }}>Starter</th>
														<th style={{ width: '22%' }}>Basic</th>
														<th style={{ width: '22%' }}>Premium</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th scope="row" className="text-start">Available Projects</th>
														<td className="color--header">Up to 2</td>
														<td className="color--header">Up to 250</td>
														<td className="color--header">Unlimited</td>
													</tr>
													<tr>
														<th scope="row" className="text-start">Available Storage</th>
														<td className="color--header">2Gb</td>
														<td className="color--header">50Gb</td>
														<td className="color--header">350Gb</td>
													</tr>
													<tr>
														<th scope="row" className="text-start">Private Cloud Hosting</th>
														<td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
														<td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
													</tr>
													<tr>
														<th scope="row" className="text-start">User Permissions</th>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
													</tr>
													<tr>
														<th scope="row" className="text-start">Direct Integrations</th>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
													</tr>
													<tr>
														<th scope="row" className="text-start">Reusable Components</th>
														<td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
													</tr>
													<tr>
														<th scope="row" className="text-start">Data Backup</th>
														<td className="color--header">Weekly</td>
														<td className="color--header">Daily</td>
														<td className="color--header">Daily</td>
													</tr>
													<tr>
														<th scope="row" className="text-start">No Ads. No Trackers</th>
														<td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
													</tr>
													<tr>
														<th scope="row" className="text-start">Advanced Security</th>
														<td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
													</tr>
													<tr>
														<th scope="row" className="text-start">Shared Team Workspace</th>
														<td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
													</tr>
													<tr>
														<th scope="row" className="text-start">Team Management</th>
														<td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
														<td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
														<td className="ico-20 color--theme-2"><span className="flaticon-check" /></td>
													</tr>
													<tr className="table-last-tr">
														<th scope="row" className="text-start">Customer Support</th>
														<td className="color--header">Limited</td>
														<td className="color--header">Basic</td>
														<td className="color--header">Priority</td>
													</tr>
												</tbody>
											</table>
										</div>	{/* END TABLE */}
									</div>
								</div>  {/* End row */}
							</div>	{/* END PRICING COMPARE */}
							{/* PRICING COMPARE PAYMENT */}
							<div className="comp-table-payment">
								<div className="row row-cols-1 row-cols-md-3">
									{/*PAYMENT METHODS */}
									<div className="col col-lg-5">
										<div id="pbox-1" className="pbox wow animate__animated animate__fadeInUp">
											{/* Title */}
											<h6 className="h6-md">Accepted Payment Methods</h6>
											{/* Payment Icons */}
											<ul className="payment-icons ico-45 mt-25">
												<li><img src="/images/png_icons/visa.png" alt="payment-icon" /></li>
												<li><img src="/images/png_icons/am.png" alt="payment-icon" /></li>
												<li><img src="/images/png_icons/discover.png" alt="payment-icon" /></li>
												<li><img src="/images/png_icons/paypal.png" alt="payment-icon" /></li>
												<li><img src="/images/png_icons/jcb.png" alt="payment-icon" /></li>
												<li><img src="/images/png_icons/shopify.png" alt="payment-icon" /></li>
											</ul>
										</div>
									</div>	{/* END PAYMENT METHODS */}
									{/* PAYMENT GUARANTEE */}
									<div className="col col-lg-4">
										<div id="pbox-2" className="pbox wow animate__animated animate__fadeInUp">
											{/* Title */}
											<h6 className="h6-md">Money Back Guarantee</h6>
											{/* Text */}
											<p className="p-sm">Explore SolTech Premium for 14 days. If it’s not a perfect fit, receive a full
												refund.
											</p>
										</div>
									</div>	{/* END PAYMENT GUARANTEE */}
									{/* PAYMENT ENCRYPTED */}
									<div className="col col-lg-3">
										<div id="pbox-3" className="pbox wow animate__animated animate__fadeInUp">
											{/* Title */}
											<h6 className="h6-md">SSL Encrypted Payment</h6>
											{/* Text */}
											<p className="p-sm">Your information is protected by 256-bit SSL encryption.</p>
										</div>
									</div>	{/* END PAYMENT ENCRYPTED */}
								</div>  {/* End row */}
							</div>	{/* END PRICING COMPARE PAYMENT */}
						</div>
					</section>	{/* END PRICING COMPARE */}
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
											<p>Sodales sapien tempor quaerat ipsum congue and laoreet turpis undo neque auctor sagittis a
												quisque justo luctus placerat magna sodales egestas ligula
											</p>
											{/* Text */}
											<p className="mb-0">Tempor sapien sodales quaerat ipsum congue and laoreet turpis undo neque auctor
												sagittis a quisque justo luctus placerat a ligula egestas sodales
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
												<h6 className="h6-xl">Getting started with Pintex</h6>
												{/* Answer */}
												<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
													dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit auris
												</p>
											</div>	{/* END QUESTION #1 */}
											{/* QUESTION #2 */}
											<div className="question wow animate__animated animate__fadeInUp">
												{/* Question */}
												<h6 className="h6-xl">How do I choose a plan?</h6>
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
												<h6 className="h6-xl">Discounts for annual plans</h6>
												{/* Answer */}
												<p>Sodales sapien tempor quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
													dolor luctus placerat magna and ligula cursus purus vitae purus an auris suscipit ipsum
												</p>
											</div>	{/* END QUESTION #4 */}
											{/* QUESTION #5 */}
											<div className="question wow animate__animated animate__fadeInUp">
												{/* Question */}
												<h6 className="h6-xl">How to request a refund?</h6>
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
												<h6 className="h6-xl">Can I cancel at anytime?</h6>
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
					{/* TESTIMONIALS
			============================================= */}
					<section className="gr--whitesmoke pt-100 reviews-1 reviews-section division">
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
										<SwiperSlide className="review-1 bg--white block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--white block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--white block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--white block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--white block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--white block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--white block--shadow r-16">
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
										<SwiperSlide className="review-1 bg--white block--shadow r-16">
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
					</section>
				</div>

			</Layout>
		</>
	)
}