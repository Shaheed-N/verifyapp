
'use client'
import { reviewsCarousel } from "@/components/hooks/useSwiper"
import { Swiper, SwiperSlide } from "swiper/react";

export default function Section14() {
	return (
		<>


			<section id="reviews" className="py-100 reviews-1 reviews-section division">
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
			</section>

		</>
	)
}
