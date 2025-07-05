'use client'
import Isotope from "isotope-layout"
import { useEffect, useRef, useState } from "react"
export default function MasonaryReview() {
	const isotope = useRef()
	const [filterKey, setFilterKey] = useState("*")
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope(".masonry-wrap", {
				itemSelector: ".review-item",
				// layoutMode: "fitRows",
				percentPosition: true,
				masonry: {
					columnWidth: ".review-item",
				},
				animationOptions: {
					duration: 750,
					easing: "linear",
					queue: false,
				},
			})
		}, 1000)
	}, [])
	return (
		<>
			<div className="masonry-wrap grid-loaded">
				{/* TESTIMONIAL #1 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
							</div>
							{/* Text */}
							<p>Etiam sapien sagittis a congue augue massa a varius egestas ultrice varius magna
								a tempus
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
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
					</div>
				</div>	{/* END TESTIMONIAL #1 */}
				{/* TESTIMONIAL #2 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star-half-empty" />
							</div>
							{/* Text */}
							<p>Sagittis congue augue egestas magna ipsum vitae purus magna primis ociis cubilia
								laoreet augue egestas luctus and donec ltrice ligula porta and gravida sagittis
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
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
					</div>
				</div>	{/* END TESTIMONIAL #2 */}
				{/* TESTIMONIAL #3 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star-1" />
							</div>
							{/* Text */}
							<p>Mauris gestas magnis sapien etiam sapien congue an augue egestas and ultrice vitae
								purus porta integer congue magna
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
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
					</div>
				</div>	{/* END TESTIMONIAL #3 */}
				{/* TESTIMONIAL #4 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star-half-empty" />
							</div>
							{/* Text */}
							<p>Mauris donec magnis semper etiam pretium congue an augue volutpat lectus aenean
								magna mauris lectus laoreet blandit
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
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
					</div>
				</div>	{/* END TESTIMONIAL #4 */}
				{/* TESTIMONIAL #5 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
							</div>
							{/* Text */}
							<p>Cubilia laoreet magna suscipit egestas ipsum and lectus purus ipsum and primis
								augue ultrice ligula egestas suscipit a lectus gestas an auctor sapien gravida
								aliquet diam neque blandit fusce aliquam luctus
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
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
					</div>
				</div>	{/* END TESTIMONIAL #5 */}
				{/* TESTIMONIAL #6 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star-1" />
								<span className="flaticon-star-1" />
							</div>
							{/* Text */}
							<p>Ligula cubilia laoreet an egestas undo magna diam ipsum semper suscipit egestas
								magna molestie ipsum ligula vitae a purus lacinia egestas molestie blandit!
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
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
					</div>
				</div>	{/* END TESTIMONIAL #6 */}
				{/* TESTIMONIAL #7 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star-1" />
							</div>
							{/* Text */}
							<p>Dignissim egestas porta tempus volutpat egestas augue gestas cubilia laoreet a
								magna suscipit luctus dolor blandit vitae purus neque and tempus aliquet porta
								gestas molestie
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
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
					</div>
				</div>	{/* END TESTIMONIAL #7 */}
				{/* TESTIMONIAL #8 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
							</div>
							{/* Text */}
							<p>Augue vitae purus diam tempus egestas volutpat augue sapien cubilia laoreet magna
								at suscipit luctus dolor blandit purus undo tempus feugiat impedit molestie gravida
								aliquet ipsum!
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
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
					</div>
				</div>	{/* END TESTIMONIAL #8 */}
				{/* TESTIMONIAL #9 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star-half-empty" />
							</div>
							{/* Text */}
							<p>Sapien etiam sagittis congue augue massa varius an egestas ultrice varius magna a
								tempus suscipit cubilia laoreet magna
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
								{/* Avatar */}
								<div className="review-avatar">
									<img src="/images/review-author-11.jpg" alt="review-avatar" />
								</div>
								{/* Data */}
								<div className="review-author">
									<h6>Becca Fabber</h6>
									<p className="p-sm">@TheFlowAgency</p>
								</div>
							</div>	{/* End Author */}
						</div>	{/* End Text */}
					</div>
				</div>	{/* END TESTIMONIAL #9 */}
				{/* TESTIMONIAL #10 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star-1" />
							</div>
							{/* Text */}
							<p>Cubilia laoreet magna suscipit egestas ipsum and lectus purus ipsum and primis
								augue ultrice ligula egestas suscipit a lectus gestas an auctor sapien gravida
								aliquet diam neque blandit fusce aliquam luctus
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
								{/* Avatar */}
								<div className="review-avatar">
									<img src="/images/review-author-9.jpg" alt="review-avatar" />
								</div>
								{/* Data */}
								<div className="review-author">
									<h6>Raul_AZ</h6>
									<p className="p-sm">@raul_az</p>
								</div>
							</div>	{/* End Author */}
						</div>	{/* End Text */}
					</div>
				</div>	{/* END TESTIMONIAL #10 */}
				{/* TESTIMONIAL #11 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star-half-empty" />
							</div>
							{/* Text */}
							<p>Sagittis congue augue egestas magna ipsum vitae purus magna primis ociis cubilia
								laoreet augue egestas and luctus donec ltrice ligula porta and gravida sagittis
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
								{/* Avatar */}
								<div className="review-avatar">
									<img src="/images/review-author-1.jpg" alt="review-avatar" />
								</div>
								{/* Data */}
								<div className="review-author">
									<h6>Olly92</h6>
									<p className="p-sm">@olly92</p>
								</div>
							</div>	{/* End Author */}
						</div>	{/* End Text */}
					</div>
				</div>	{/* END TESTIMONIAL #11 */}
				{/* TESTIMONIAL #12 */}
				<div className="review-item">
					<div className="review-4 bg--magnolia r-16">
						{/* Text */}
						<div className="review-4-txt">
							{/* Rating */}
							<div className="review-rating ico-15 color--yellow">
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star" />
								<span className="flaticon-star-1" />
							</div>
							{/* Text */}
							<p>Etiam sapien sagittis a congue augue a massa varius egestas ultrice varius magna
								a tempus
							</p>
							{/* Author */}
							<div className="author-data mt-25 clearfix">
								{/* Avatar */}
								<div className="review-avatar">
									<img src="/images/review-author-11.jpg" alt="review-avatar" />
								</div>
								{/* Data */}
								<div className="review-author">
									<h6>NishiKay</h6>
									<p className="p-sm">Internet Surfer</p>
								</div>
							</div>	{/* End Author */}
						</div>	{/* End Text */}
					</div>
				</div>	{/* END TESTIMONIAL #12 */}
			</div>
		</>
	)
}
