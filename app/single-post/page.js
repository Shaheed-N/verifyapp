
import VideoPopup from "@/components/elements/VideoPopUp"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function SinglePost() {

	return (
		<>

			<Layout>
				<div>
					<section id="single-post" className="inner-page-hero blog-page-section">
						<div className="container">
							<div className="row justify-content-center">
								{/* SINGLE POST CONTENT */}
								<div className="col-md-12">
									<div className="post-content">
										{/* SINGLE POST TITLE */}
										<div className="single-post-title">
											{/* Post Meta */}
											<div className="blog-post-meta">
												<ul className="post-meta-list ico-10">
													<li><p className="p-md">Tutorials</p></li>
													<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
													<li><p className="p-md">July 31, 2024</p></li>
													<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
													<li><p className="p-md">8 min read</p></li>
												</ul>
											</div>
											{/* Title */}
											<h2>Tortor molestie libero primis lacinia a dapibus in molestie blandit</h2>
											{/* Text */}
											<p className="p-xl mb-0">Sagittis congue augue egestas integer velna purus purus magna suscipit
												egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec.
											</p>
										</div>	{/* END SINGLE POST TITLE */}
										{/* SINGLE POST IMAGE */}
										<div className="blog-post-preview">
											<img className="img-fluid r-12" src="/images/blog/img-11.jpg" alt="blog-post-image" />
										</div>
										{/* SINGLE POST TEXT */}
										<div className="single-post-txt">
											{/* Title */}
											<h5>Libero sapien dapibus congue tempor.</h5>
											{/* Text */}
											<p>Sagittis congue augue egestas integer <span>Velna Purus Fusce</span> a magna suscipit nec
												egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo
												augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor
												undo quisque fusce cursus neque and blandit fusce lacinia placerat and nulla justo molestie
												blandit justo diam aliquet tortor molestie sagittis lacinia undo and mullam molestie diam
												luctus donec bibendum aliquet massa elementum. Libero quisque lacus ociis ligula massa lorem
												fusce cursus fusce nulla <Link href="#">vitae massa placerat</Link> and mollis, sapien gravida aliquet vitae cursus ultrices aliquet lorem diam purus undo vitae aliquam auris dapibus libero quisque fusce cursus blandit.
											</p>
											{/* Text */}
											<p>Congue augue sagittis egestas integer velna purus <Link href="#">purus magna nec suscipit</Link>
												and egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit fusce lacinia placerat and nulla justo molestie blandit justo diam aliquet tortor and molestie dapibus libero.
											</p>
											{/* Title */}
											<h5 className="h5-xl">Egestas lorem dolor fusce posuere</h5>
											{/* Text */}
											<p>Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas magna
												aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque blandit fusce.
											</p>
											{/* List */}
											<ul className="simple-list long-list">
												<li className="list-item">
													<p><span>Sagittis congue augue egestas volutpat egestas:</span> magna suscipit egestas
														magna ipsum and vitae efficitur purus and ipsum primis in cubilia laoreet augue egestas luctus donec.
													</p>
												</li>
												<li className="list-item">
													<p><span>Aliqum mullam blandit tempor sapien gravida:</span> donec ipsum porta justo.
														Laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar dictum
														tempor
													</p>
												</li>
												<li className="list-item">
													<p><span>Blandit velna vitae auctor and congue magna tempor:</span> sapien eget gravida
														laoreet turpis
													</p>
												</li>
												<li className="list-item">
													<p>Quaerat sodales sapien undo <Link href="#">Lacus Quisque Gravida</Link> blandit velna vitae
														auctor and congue magna tempor sapien eget laoreet turpis urna augue, viverra a augue eget tempor diam
													</p>
												</li>
											</ul>
											{/* Text */}
											<p>Congue augue sagittis egestas integer velna purus purus magna nec suscipit and egestas magna
												aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus
												vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit fusce lacinia placerat and nulla justo molestie blandit justo diam aliquet tortor and molestie dapibus libero.
											</p>
											{/* Title */}
											<h5>Molestie blandit @Pintex curabitur</h5>
											{/* Text */}
											<p>Sagittis congue augue <span>sagittis velna purus purus magna nec suscipit and egestas magna
												aliquam</span> ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas aliquet molestie donec libero sapien dapibus congue tempor undo quisque
												fusce cursus neque ipsum blandit fusce lacinia placerat and nulla justo molestie blandit justo augue aliquet tortor molestie sagittis lacinia dapibus mullam molestie diam luctus donec bibendum aliquet massa elementum libero quisque lacus massa.
											</p>
											{/* Text */}
											<p>Congue augue sagittis egestas integer velna purus purus magna nec suscipit and egestas magna
												aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus
												vitae egestas an aliquet molestie donec libero <Link href="#">Sapien Dapibus Congue</Link> tempor undo quisque fusce cursus neque blandit.
											</p>
											{/* INNER IMAGE */}
											<div className="post-inner-img">
												<div className="video-preview">
													{/* Play Icon */}
													<VideoPopup className="video-popup1">
														<div className="video-btn video-btn-xl bg--theme-2 ico-90">
															<div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
														</div>
													</VideoPopup>
													{/* Preview Image */}
													<img className="img-fluid r-12" src="/images/blog/img-12.jpg" alt="video-preview" />
												</div>
											</div>
											{/* Text */}
											<p>Integer congue sagittis augue egestas  velna purus purus magna nec suscipit and egestas
												magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
												luctus vitae egestas molestie donec libero sapien dapibus congue tempor undo quisque
												fusce cursus neque diam augue sapien.
											</p>
											{/* Text */}
											<p>Congue augue sagittis egestas integer velna purus purus magna nec suscipit and egestas
												magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit fusce lacinia placerat and nulla justo molestie
												blandit justo diam aliquet tortor and molestie dapibus libero.
											</p>
											{/* Title */}
											<h5 className="h5-xl">Volutpat egestas - suscipit AI lacinia placerat</h5>
											{/* Text */}
											<p>Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas
												magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit fusce lacinia placerat and nulla justo molestie
												blandit justo diam aliquet tortor molestie sagittis lacinia undo and mullam <Link href="#">molestie diam luctus</Link> donec bibendum aliquet massa elementum libero quisque lacus massa.
											</p>
											{/* Text */}
											<p>Blandit fusce lacinia placerat and nulla justo molestie:</p>
											{/* List */}
											<ul className="simple-list long-list">
												<li className="list-item">
													<p>Volutpat egestas magna suscipit egestas aliquet molestie donec dapibus congue</p>
												</li>
												<li className="list-item">
													<p>Libero sapien dapibus and congue tempor bibendum aliquet massa elementum libero</p>
												</li>
												<li className="list-item">
													<p>Aliquet massa elementum libero quisque lacus</p>
												</li>
											</ul>
											{/* INNER IMAGES */}
											<div className="post-inner-img">
												<img className="img-fluid r-12" src="/images/blog/img-13.jpg" alt="blog-post-image" />
											</div>
											{/* Title */}
											<h5>Aliquet augue "elementum" efficitur (viverra bibendum aliquet dapibus and aliquet dictum
												tempor as an example).
											</h5>
											{/* Text */}
											<p>Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas
												magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit fusce lacinia placerat and nulla justo molestie
												blandit justo diam aliquet tortor molestie sagittis lacinia undo and mullam molestie diam luctus donec bibendum <Link href="#">aliquet massa elementum libero quisque lacus ociis</Link> ligula massa lorem fusce cursus fusce nulla vitae massa placerat and mollis, sapien gravida aliquet vitae cursus ultrices aliquet lorem diam purus undo vitae aliquam auris dapibus libero fusce blandit.
											</p>
											{/* Text */}
											<p>Augue egestas sagittis congue integer velna purus purus magna nec suscipit and egestas
												magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque blandit fusce.
											</p>
											{/* Small Title */}
											<h5>Placerat dapibus a congue aliquam?</h5>
											{/* Text */}
											<p>Congue augue sagittis egestas <Link href="#">(Clever MFA+)</Link> purus a purus magna nec
												suscipit augue egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien
												dapibus congue tempor undo quisque and fusce cursus neque.
											</p>
											{/* List */}
											<ul className="simple-list long-list">
												<li className="list-item">
													<p><span>Aliqum mullam blandit tempor sapien gravida donec:</span> ipsum porta
														justo. Laoreet turpis urna augue, viverra a augue eget, dictum tempor diam
														pulvinar dictum tempor
													</p>
												</li>
												<li className="list-item">
													<p><span>Blandit velna vitae auctor and congue:</span> magna tempor sapien eget gravida
														laoreet turpis
													</p>
												</li>
												<li className="list-item">
													<p><span>Nemo ipsam egestas volute turpis dolores:</span> ut aliquam quaerat sodales
														sapien congue augue egestas
													</p>
												</li>
												<li className="list-item">
													<p><span>Quaerat sodales sapien undo euismod purus blandit velna vitae:</span> auctor
														and congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget tempor diam
													</p>
												</li>
											</ul>
											{/* INNER IMAGES */}
											<div className="post-inner-img">
												<img className="img-fluid r-12" src="/images/blog/img-14.jpg" alt="blog-post-image" />
											</div>
											{/* Title */}
											<h5 className="h5-xl">Tortor molestie and sagittis ligula mullam</h5>
											{/* Text */}
											<p>Integer congue sagittis augue egestas <Link href="#">velna purus purus magna</Link> nec suscipit
												and egestas magna aliquam ipsum vitae purus justo lacus ligula donec undo augue luctus vitae egestas <Link href="#">(Clever MFA+)</Link> molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque diam augue sapien.
											</p>
											{/* Text */}
											<p>Sagittis congue augue <span>Egestas Integer Velna Purus</span> purus magna nec suscipit
												and egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit fusce lacinia placerat and nulla justo molestie blandit justo diam aliquet tortor molestie sagittis lacinia undo and mullam molestie diam luctus donec bibendum aliquet massa elementum. Libero quisque lacus ociis ligula massa lorem fusce cursus fusce nulla vitae massa placerat and mollis, sapien gravida aliquet vitae cursus ultrices aliquet lorem diam purus undo vitae aliquam auris dapibus libero fusce.
											</p>
											{/* Small Title */}
											<h6 className="h6-md">Step 1 - Molestie donec libero sapien dapibus</h6>
											{/* Text */}
											<p>Congue augue sagittis egestas integer velna purus purus magna nec suscipit and egestas
												magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas
											</p>
											{/* Text */}
											<p>Purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas an
												aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque and blandit fusce lacinia.
											</p>
											{/* Small Title */}
											<h6 className="h6-md">Step 2 - Molestie donec libero sapien dapibus</h6>
											{/* List */}
											<p>Sagittis congue augue egestas volutpat egestas: magna suscipit egestas magna ipsum and vitae
												efficitur purus and ipsum primis in cubilia laoreet augue egestas luctus donec tortor molestie sagittis.
											</p>
											<p>Aliqum mullam blandit tempor sapien gravida donec ipsum porta justo. Laoreet turpis urna
												augue, viverra a augue eget, dictum tempor diam pulvinar dictum tempor
											</p>
											{/* Small Title */}
											<h6 className="h6-md">Step 3 - Molestie donec libero sapien dapibus</h6>
											{/* Text */}
											<p>Egestas integer velna purus purus magna nec suscipit and egestas magna aliquam ipsum vitae
												and purus justo lacus ligula ipsum primis cubilia donec undo augue luctus vitae egestas diam aliquet molestie donec libero sapien dapibus congue tempor undo quisque fusce cursus neque blandit fusce lacinia placerat.
											</p>
											{/* Title */}
											<h5 className="h5-xl">Cubilia vitae purus turpis dolores</h5>
											{/* Text */}
											<p>Molestie donec libero sapien dapibus congue <Link href="#">tempor undo quisque fusce</Link> cursus
												neque and blandit fusce lacinia placerat and nulla justo molestie blandit justo diam aliquet tortor <Link href="#">(Molestie Sagittis)</Link> lacinia aliquet and mullam molestie diam luctus donec bibendum aliquet massa and elementum cursus fusce nulla vitae.
											</p>
											{/* Text */}
											<p>Sagittis congue <span>Augue SolTech Integer</span> velna purus purus magna nec suscipit
												tortor egestas magna and aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue luctus a vitae egestas aliquet molestie donec libero sapien dapibus congue
												tempor undo quisque fusce cursus neque at blandit fusce lacinia placerat and nulla justo molestie blandit justo fusce aliquet tortor molestie sagittis a lacinia undo and mullam
												<Link href="#">luctus donec bibendum aliquet</Link> massa elementum libero quisque lacus massa.
											</p>
										</div>	{/* END SINGLE POST TEXT */}
										{/* POST DATA */}
										<div className="post-data t-border">
											<div className="row d-flex align-items-center">
												{/* POST AUTHOR */}
												<div className="col-md-6">
													<div className="single-post-author clearfix">
														{/* Avatar */}
														<div className="post-author-avatar">
															<img src="/images/post-author.jpg" alt="post-author" />
														</div>
														{/* Data */}
														<div className="post-author-txt">
															<h6 className="h6-md">Sean McGivern</h6>
															<p>Pintex Team</p>
														</div>
													</div>
												</div>	{/* PEND OST AUTHOR */}
												{/* POST SHARE LINKS */}
												<div className="col-md-6">
													<div className="post-share-list text-end">
														<p>Like the article? Spread the word</p>
														<ul className="share-social-icons ico-25 text-center clearfix">
															<li><Link href="#" className="share-ico"><span className="flaticon-twitter-1" /></Link></li>
															<li><Link href="#" className="share-ico"><span className="flaticon-facebook" /></Link></li>
															<li><Link href="#" className="share-ico"><span className="flaticon-linkedin" /></Link></li>
															<li><Link href="#" className="share-ico"><span className="flaticon-bookmark" /></Link></li>
														</ul>
													</div>
												</div>	{/* END POST SHARE LINKS */}
											</div>
										</div>	{/* END POST DATA */}
									</div>
								</div>	{/* END SINGLE POST CONTENT */}
							</div>    {/* End row */}
						</div>    {/* End container */}
					</section>	{/* END SINGLE POST */}
					{/* BLOG
			============================================= */}
					<section className="bg--lavender pt-100 pb-60 blog-1 blog-section division">
						<div className="container">
							{/* SECTION TITLE */}
							<div className="row justify-content-center">
								<div className="col-md-9 col-lg-8">
									<div className="section-title text-center mb-60">
										{/* Title */}
										<h2 className="h2-xl">Tips and Latest News</h2>
										{/* Text */}
										<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus.</p>
									</div>
								</div>
							</div>
							{/* BLOG POSTS */}
							<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
								{/* BLOG POST #1 */}
								<div className="col">
									<div id="bp-1-1" className="blog-post wow animate__animated animate__fadeInUp animate__delay-1">
										{/* BLOG POST IMAGE */}
										<div className="blog-post-img r-12">
											<div className="hover-overlay">
												<img className="img-fluid" src="/images/blog/img-03.jpg" alt="blog-post-image" />
												<div className="item-overlay" />
											</div>
										</div>
										{/* BLOG POST TEXT */}
										<div className="blog-post-txt">
											{/* Post Tag */}
											<span className="post-tag color--theme">Tutorials</span>
											{/* Post Link */}
											<h5>
												<Link href="/single-post">Integer posuere AI donec ipsum a porta justo auctor</Link>
											</h5>
											{/* Short Description */}
											<p>Sagittis congue augue egestas a velna integer purus filis magna suscipit...</p>
											{/* Post Meta */}
											<div className="blog-post-meta">
												<ul className="post-meta-list ico-10">
													<li><p className="p-sm">July 25, 2024</p></li>
													<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
													<li><p className="p-sm">8 min read</p></li>
												</ul>
											</div>
										</div>	{/* END BLOG POST TEXT */}
									</div>
								</div>	{/* END  BLOG POST #1 */}
								{/* BLOG POST #2 */}
								<div className="col">
									<div id="bp-1-2" className="blog-post wow animate__animated animate__fadeInUp animate__delay-2">
										{/* BLOG POST IMAGE */}
										<div className="blog-post-img r-12">
											<div className="hover-overlay">
												<img className="img-fluid" src="/images/blog/img-09.jpg" alt="blog-post-image" />
												<div className="item-overlay" />
											</div>
										</div>
										{/* BLOG POST TEXT */}
										<div className="blog-post-txt">
											{/* Post Tag */}
											<span className="post-tag color--theme">Pintex News</span>
											{/* Post Link */}
											<h5>
												<Link href="/single-post">A ligula risus diam auctor</Link>
											</h5>
											{/* Short Description */}
											<p>Congue sagittis augue egestas velna integer and purus filis suscipit magna felis turpis
												and blandit augue mauris..
											</p>
											{/* Post Meta */}
											<div className="blog-post-meta">
												<ul className="post-meta-list ico-10">
													<li><p className="p-sm">July 19, 2024</p></li>
													<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
													<li><p className="p-sm">5 min read</p></li>
												</ul>
											</div>
										</div>	{/* END BLOG POST TEXT */}
									</div>
								</div>	{/* END  BLOG POST #2 */}
								{/* BLOG POST #3 */}
								<div className="col">
									<div id="bp-1-3" className="blog-post clearfix wow animate__animated animate__fadeInUp animate__delay-3">
										{/* BLOG POST IMAGE */}
										<div className="blog-post-img r-12">
											<div className="hover-overlay">
												<img className="img-fluid" src="/images/blog/img-06.jpg" alt="blog-post-image" />
												<div className="item-overlay" />
											</div>
										</div>
										{/* BLOG POST TEXT */}
										<div className="blog-post-txt">
											{/* Post Tag */}
											<span className="post-tag color--theme">Insights</span>
											{/* Post Link */}
											<h5>
												<Link href="/single-post">Donec sapien augue and integer turpis cursus</Link>
											</h5>
											{/* Short Description */}
											<p>Congue sagittis augue egestas a velna integer purus filis suscipit magna...</p>
											{/* Post Meta */}
											<div className="blog-post-meta">
												<ul className="post-meta-list ico-10">
													<li><p className="p-sm">July 02, 2024</p></li>
													<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
													<li><p className="p-sm">6 min read</p></li>
												</ul>
											</div>
										</div>	{/* END BLOG POST TEXT */}
									</div>
								</div>	{/* END  BLOG POST #3 */}
							</div>	{/* END BLOG POSTS */}
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}