
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogListing() {

	return (
		<>

			<Layout>
				<div>
					<section id="blog-page" className="pb-40 inner-page-hero blog-page-section division">
						<div className="container">
							{/* WIDE BLOG POST */}
							<div className="blog-post wide-post wow animate__animated animate__fadeInUp">
								<div className="row d-flex align-items-center">
									{/* BLOG POST IMAGE */}
									<div className="col-md-6">
										<div className="blog-post-img r-12">
											<img className="img-fluid" src="/images/blog/img-10.jpg" alt="blog-post-image" />
										</div>
									</div>
									{/* BLOG POST TEXT */}
									<div className="col-md-6">
										<div className="blog-post-txt">
											{/* Post Tag */}
											<span className="post-tag color--theme">Tutorials</span>
											{/* Post Link */}
											<h4 className="h4-xl">
												<Link href="/single-post">Posuere tempor aliquet and Pintex sapien turpis laoreet augue
													posuere
												</Link>
											</h4>
											{/* Text */}
											<p>Aliqum mullam blandit vitae tempor in sapien and donec lipsum gravida porta augue velna
												dolor libero an aliquet risus tempus a tempor posuere velna tempus posuere
											</p>
											{/* Post Meta */}
											<div className="blog-post-meta">
												<ul className="post-meta-list ico-10">
													<li><p>July 31, 2024</p></li>
													<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
													<li><p>8 min read</p></li>
												</ul>
											</div>
										</div>
									</div>	{/* END BLOG POST TEXT */}
								</div>  {/* End row */}
							</div>	{/* END WIDE BLOG POST */}
							{/* BLOG POSTS CATEGORY */}
							<div className="row">
								<div className="col">
									<div className="posts-category ico-20 animate__animated animate__fadeInUp">
										<h4>Latest News <span className="flaticon-next" /></h4>
									</div>
								</div>
							</div>
							{/* POSTS WRAPPER */}
							<div className="posts-wrapper">
								<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
									{/* BLOG POST #1 */}
									<div className="col">
										<div className="blog-post wow animate__animated animate__fadeInUp">
											{/* BLOG POST IMAGE */}
											<div className="blog-post-img r-12">
												<img className="img-fluid" src="/images/blog/img-01.jpg" alt="blog-post-image" />
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
										<div className="blog-post wow animate__animated animate__fadeInUp">
											{/* BLOG POST IMAGE */}
											<div className="blog-post-img r-12">
												<img className="img-fluid" src="/images/blog/img-02.jpg" alt="blog-post-image" />
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
										<div className="blog-post wow animate__animated animate__fadeInUp">
											{/* BLOG POST IMAGE */}
											<div className="blog-post-img r-12">
												<img className="img-fluid" src="/images/blog/img-03.jpg" alt="blog-post-image" />
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
									{/* BLOG POST #4 */}
									<div className="col">
										<div className="blog-post wow animate__animated animate__fadeInUp">
											{/* BLOG POST IMAGE */}
											<div className="blog-post-img r-12">
												<img className="img-fluid" src="/images/blog/img-04.jpg" alt="blog-post-image" />
											</div>
											{/* BLOG POST TEXT */}
											<div className="blog-post-txt">
												{/* Post Tag */}
												<span className="post-tag color--theme">Pintex News</span>
												{/* Post Link */}
												<h5>
													<Link href="/single-post">Risus ociis integer auctor</Link>
												</h5>
												{/* Short Description */}
												<p>Congue sagittis augue egestas velna integer and purus filis suscipit magna felis turpis
													and blandit augue mauris..
												</p>
												{/* Post Meta */}
												<div className="blog-post-meta">
													<ul className="post-meta-list ico-10">
														<li><p className="p-sm">June 26, 2024</p></li>
														<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
														<li><p className="p-sm">8 min read</p></li>
													</ul>
												</div>
											</div>	{/* END BLOG POST TEXT */}
										</div>
									</div>	{/* END  BLOG POST #4 */}
									{/* BLOG POST #5 */}
									<div className="col">
										<div className="blog-post wow animate__animated animate__fadeInUp">
											{/* BLOG POST IMAGE */}
											<div className="blog-post-img r-12">
												<img className="img-fluid" src="/images/blog/img-05.jpg" alt="blog-post-image" />
											</div>
											{/* BLOG POST TEXT */}
											<div className="blog-post-txt">
												{/* Post Tag */}
												<span className="post-tag color--theme">Guides</span>
												{/* Post Link */}
												<h5>
													<Link href="/single-post">Sagittis sapien augue undo integer turpis cursus</Link>
												</h5>
												{/* Short Description */}
												<p>Congue sagittis augue egestas a velna integer purus filis suscipit magna...</p>
												{/* Post Meta */}
												<div className="blog-post-meta">
													<ul className="post-meta-list ico-10">
														<li><p className="p-sm">June 11, 2024</p></li>
														<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
														<li><p className="p-sm">7 min read</p></li>
													</ul>
												</div>
											</div>	{/* END BLOG POST TEXT */}
										</div>
									</div>	{/* END  BLOG POST #5 */}
									{/* BLOG POST #6 */}
									<div className="col">
										<div className="blog-post wow animate__animated animate__fadeInUp">
											{/* BLOG POST IMAGE */}
											<div className="blog-post-img r-12">
												<img className="img-fluid" src="/images/blog/img-06.jpg" alt="blog-post-image" />
											</div>
											{/* BLOG POST TEXT */}
											<div className="blog-post-txt">
												{/* Post Tag */}
												<span className="post-tag color--theme">Pintex News</span>
												{/* Post Link */}
												<h5>
													<Link href="/single-post">Turpis integer urna donec ipsum a porta auctor justo</Link>
												</h5>
												{/* Short Description */}
												<p>Sagittis congue augue egestas a velna integer purus filis magna suscipit...</p>
												{/* Post Meta */}
												<div className="blog-post-meta">
													<ul className="post-meta-list ico-10">
														<li><p className="p-sm">June 04, 2024</p></li>
														<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
														<li><p className="p-sm">10 min read</p></li>
													</ul>
												</div>
											</div>	{/* END BLOG POST TEXT */}
										</div>
									</div>	{/* END  BLOG POST #6 */}
									{/* BLOG POST #7 */}
									<div className="col">
										<div className="blog-post wow animate__animated animate__fadeInUp">
											{/* BLOG POST IMAGE */}
											<div className="blog-post-img r-12">
												<img className="img-fluid" src="/images/blog/img-07.jpg" alt="blog-post-image" />
											</div>
											{/* BLOG POST TEXT */}
											<div className="blog-post-txt">
												{/* Post Tag */}
												<span className="post-tag color--theme">Guides</span>
												{/* Post Link */}
												<h5>
													<Link href="/single-post">Donec sapien augue and integer turpis cursus</Link>
												</h5>
												{/* Short Description */}
												<p>Congue sagittis augue egestas a velna integer purus filis suscipit magna...</p>
												{/* Post Meta */}
												<div className="blog-post-meta">
													<ul className="post-meta-list ico-10">
														<li><p className="p-sm">May 25, 2024</p></li>
														<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
														<li><p className="p-sm">9 min read</p></li>
													</ul>
												</div>
											</div>	{/* END BLOG POST TEXT */}
										</div>
									</div>	{/* END  BLOG POST #7 */}
									{/* BLOG POST #8 */}
									<div className="col">
										<div className="blog-post wow animate__animated animate__fadeInUp">
											{/* BLOG POST IMAGE */}
											<div className="blog-post-img r-12">
												<img className="img-fluid" src="/images/blog/img-08.jpg" alt="blog-post-image" />
											</div>
											{/* BLOG POST TEXT */}
											<div className="blog-post-txt">
												{/* Post Tag */}
												<span className="post-tag color--theme">Insights</span>
												{/* Post Link */}
												<h5>
													<Link href="/single-post">Augue sapien sagittis diam integer turpis cursus purus
														and filis suscipit magna
													</Link>
												</h5>
												{/* Short Description */}
												<p>Congue sagittis augue egestas a velna integer purus filis suscipit magna...</p>
												{/* Post Meta */}
												<div className="blog-post-meta">
													<ul className="post-meta-list ico-10">
														<li><p className="p-sm">May 20, 2024</p></li>
														<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
														<li><p className="p-sm">5 min read</p></li>
													</ul>
												</div>
											</div>	{/* END BLOG POST TEXT */}
										</div>
									</div>	{/* END  BLOG POST #8 */}
									{/* BLOG POST #9 */}
									<div className="col">
										<div className="blog-post wow animate__animated animate__fadeInUp">
											{/* BLOG POST IMAGE */}
											<div className="blog-post-img r-12">
												<img className="img-fluid" src="/images/blog/img-09.jpg" alt="blog-post-image" />
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
														<li><p className="p-sm">May 18, 2024</p></li>
														<li className="meta-list-divider"><p><span className="flaticon-minus-1" /></p></li>
														<li><p className="p-sm">8 min read</p></li>
													</ul>
												</div>
											</div>	{/* END BLOG POST TEXT */}
										</div>
									</div>	{/* END  BLOG POST #9 */}
								</div>  {/* End row */}
							</div>	{/* END POSTS WRAPPER */}
						</div>	   {/* End container */}
					</section>	{/* END BLOG POSTS LISTING */}
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