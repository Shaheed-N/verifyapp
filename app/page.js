import Link from "next/link"
import "/public/assests/css/style.css"
export default function Home1() {

	return (
		<>
			<div id="page" className="page-wrapper">
				{/* HERO
============================================= */}
				<section id="hero" className="bg--scroll hero-section mt-0">
					{/* HERO TEXT */}
					<div className="container color--white">
						<div className="row justify-content-center">
							<div className="col-lg-9">
								<div className="hero-txt text-center">
									<h2>Creative solutions for your website design</h2>
									<p className="p-lg">A great collection of flexible, ultra modern &amp; creative HTML5 landing page
										templates to promote your <span>Mobile App, Software, App, SaaS or Startup</span>
									</p>
									<Link href="#select" className="btn btn--pink hover--tra-white">Check Demos</Link>
								</div>
							</div>
						</div>
					</div>   {/* END HERO TEXT */}
					{/* HERO IMAGE */}
					<div className="container-fluid">
						<div className="row">
							<div className="col">
								<div className="hero-img">
									<img className="img-fluid" src="/assests/images/hero-img.png" alt="hero-image" />
								</div>
							</div>
						</div>
					</div>	{/* END HERO IMAGE */}
				</section>	{/* END HERO */}
				{/* FEATURES
============================================= */}
				<section id="features" className="features division">
					<div className="container">
						<div className="row">
							{/* FEATURE BOX #1 */}
							<div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
								<div className="fbox ico-75">
									<span className="flaticon-browser-1 color--pink" />
									<h5>Fully Responsive</h5>
									<p>Was made to look great on all device types and screen sizes</p>
								</div>
							</div>
							{/* FEATURE BOX #2 */}
							<div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
								<div className="fbox ico-75">
									<span className="flaticon-browser color--pink" />
									<h5>Built with Bootstrap</h5>
									<p>Most popular framework for building responsive websites</p>
								</div>
							</div>
							{/* FEATURE BOX #3 */}
							<div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
								<div className="fbox ico-75">
									<span className="flaticon-maximize color--pink" />
									<h5>Cross Browser</h5>
									<p>Looks excellent in the most of the commonly used browsers</p>
								</div>
							</div>
							{/* FEATURE BOX #4 */}
							<div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="1s">
								<div className="fbox ico-75">
									<span className="flaticon-creative-process color--pink" />
									<h5>Easy to Customization</h5>
									<p>Well structured and easy to understand code</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* DIVIDER LINE */}
				<hr className="divider" />
				{/* SELECT
============================================= */}
				<section id="select" className="bg-fixed select-section">
					<div className="container">
						{/* SECTION TITLE */}
						<div className="row">
							<div className="col-lg-10 offset-lg-1 section-title">
								<h2>Stunning Designs</h2>
								<p>18 beautiful, hand-crafted designs to get you started. Choose the one you like best and start
									customize it to your website
								</p>
							</div>
						</div>
						{/* DEMOS WRAPPER */}
						<div className="row">
							{/* LAYOUT-1 */}
							<div id="l-1" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-1" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-01.jpg" alt="layout-1-preview" />
									</Link>
								</div>
								<h4>Demo #1</h4>
							</div>
							{/* LAYOUT-2 */}
							<div id="l-2" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-2" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-02.jpg" alt="layout-2-preview" />
									</Link>
								</div>
								<h4> Demo #2</h4>
							</div>
							{/* LAYOUT-3 */}
							<div id="l-3" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-3" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-03.jpg" alt="layout-3-preview" />
									</Link>
								</div>
								<h4>Demo #3</h4>
							</div>
							{/* LAYOUT-4 */}
							<div id="l-4" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-4" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-04.jpg" alt="layout-4-preview" />
									</Link>
								</div>
								<h4>Demo #4</h4>
							</div>
							{/* LAYOUT-5 */}
							<div id="l-5" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-5" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-05.jpg" alt="layout-5-preview" />
									</Link>
								</div>
								<h4>Demo #5</h4>
							</div>
							{/* LAYOUT-6 */}
							<div id="l-6" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-6" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-06.jpg" alt="layout-6-preview" />
									</Link>
								</div>
								<h4>Demo #6</h4>
							</div>
							{/* LAYOUT-7 */}
							<div id="l-7" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-7" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-07.jpg" alt="layout-7-preview" />
									</Link>
								</div>
								<h4>Demo #7</h4>
							</div>
							{/* LAYOUT-8 */}
							<div id="l-8" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-8" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-08.jpg" alt="layout-8-preview" />
									</Link>
								</div>
								<h4>Demo #8</h4>
							</div>
							{/* LAYOUT-9 */}
							<div id="l-9" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-9" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-09.jpg" alt="layout-9-preview" />
									</Link>
								</div>
								<h4>Demo #9</h4>
							</div>
							{/* LAYOUT-10 */}
							<div id="l-10" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-10" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-10.jpg" alt="layout-10-preview" />
									</Link>
								</div>
								<h4>Demo #10</h4>
							</div>
							{/* LAYOUT-11 */}
							<div id="l-11" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-11" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-11.jpg" alt="layout-11-preview" />
									</Link>
								</div>
								<h4>Demo #11</h4>
							</div>
							{/* LAYOUT-12 */}
							<div id="l-12" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-12" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-12.jpg" alt="layout-12-preview" />
									</Link>
								</div>
								<h4>Demo #12</h4>
							</div>
							{/* LAYOUT-13 */}
							<div id="l-13" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-13" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-13.jpg" alt="layout-13-preview" />
									</Link>
								</div>
								<h4>Demo #13</h4>
							</div>
							{/* LAYOUT-14 */}
							<div id="l-14" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-14" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-14.jpg" alt="layout-14-preview" />
									</Link>
								</div>
								<h4>Demo #14</h4>
							</div>
							{/* LAYOUT-15 */}
							<div id="l-15" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-15" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-15.jpg" alt="layout-15-preview" />
									</Link>
								</div>
								<h4>Demo #15</h4>
							</div>
							{/* LAYOUT-16 */}
							<div id="l-16" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-16" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-16.jpg" alt="layout-16-preview" />
									</Link>
								</div>
								<h4>Demo #16</h4>
							</div>
							{/* LAYOUT-17 */}
							<div id="l-17" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-17" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-17.jpg" alt="layout-17-preview" />
									</Link>
								</div>
								<h4>Demo #17</h4>
							</div>
							{/* LAYOUT-18 */}
							<div id="l-18" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/demo-18" title target="_blank">
										<img className="img-fluid" src="/assests/images/layout-18.jpg" alt="layout-18-preview" />
									</Link>
								</div>
								<h4>Demo #18</h4>
							</div>
						</div>	{/* END DEMOS WRAPPER */}
					</div>	  {/* End container */}
				</section>	{/* END SELECT */}
				{/* BANNER-1
============================================= */}
				<section id="banner-1" className="bg--fixed banner division">
					<div className="container">
						<div className="row d-flex align-items-center">
							<div className="col-lg-6">
								<div className="banner-1-txt color--white">
									<h2>Fully Responsive &amp; Retina Ready</h2>
									<p>Attention to details is what makes the Pintex fully fuctional. No matter what kind
										of content you add, your website will look stunning on any device such as laptop, tablet,
										smartphone etc.
									</p>
									<Link className="btn btn--pink hover--tra-white" href="/demo-1" target="_blank">
										See Pintex in action
									</Link>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="banner-1-img">
									<img className="img-fluid" src="/assests/images/banner-1-img.png" alt="banner-image" />
								</div>
							</div>
						</div>    {/* End row */}
					</div>     {/* End container */}
				</section>	{/* END BANNER-1 */}
				{/* INNER PAGES
============================================= */}
				<section id="i-pages" className="ip-section">
					<div className="container">
						{/* SECTION TITLE */}
						<div className="row">
							<div className="col-lg-10 offset-lg-1 section-title">
								<h2>Practical Inner Pages</h2>
								<p>Pintex offers a vast number of pre-made inner pages which will save your time when building
									a website.
								</p>
							</div>
						</div>
						<div className="row">
							{/* ABOUT PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/about" title target="_blank">
										<img className="img-fluid" src="/assests/images/about.jpg" alt="about-preview" />
									</Link>
								</div>
								<h4>About Us</h4>
							</div>
							{/* CAREERS PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/careers" title target="_blank">
										<img className="img-fluid" src="/assests/images/careers.jpg" alt="careers-preview" />
									</Link>
								</div>
								<h4>Careers</h4>
							</div>
							{/* CAREER ROLE PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/career-role" title target="_blank">
										<img className="img-fluid" src="/assests/images/career-role.jpg" alt="career-role-preview" />
									</Link>
								</div>
								<h4>Career Role</h4>
							</div>
							{/* FEATURES PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/features" title target="_blank">
										<img className="img-fluid" src="/assests/images/features.jpg" alt="features-preview" />
									</Link>
								</div>
								<h4>Features</h4>
							</div>
							{/* INTEGRATIONS PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/integrations" title target="_blank">
										<img className="img-fluid" src="/assests/images/integrations.jpg" alt="integrations-preview" />
									</Link>
								</div>
								<h4>Integrations</h4>
							</div>
							{/* CHANGELOG PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/changelog" title target="_blank">
										<img className="img-fluid" src="/assests/images/changelog.jpg" alt="changelog-preview" />
									</Link>
								</div>
								<h4>Changelog</h4>
							</div>
							{/* DOWNLOAD PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/download" title target="_blank">
										<img className="img-fluid" src="/assests/images/download.jpg" alt="download-preview" />
									</Link>
								</div>
								<h4>Download</h4>
							</div>
							{/* MORE APPS PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/more-apps" title target="_blank">
										<img className="img-fluid" src="/assests/images/more-apps.jpg" alt="more-apps-preview" />
									</Link>
								</div>
								<h4>More Apps</h4>
							</div>
							{/* REVIEWS PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/reviews" title target="_blank">
										<img className="img-fluid" src="/assests/images/reviews.jpg" alt="reviews-preview" />
									</Link>
								</div>
								<h4>Reviews</h4>
							</div>
							{/* PRICING PLANS */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/pricing-1" title target="_blank">
										<img className="img-fluid" src="/assests/images/pricing-1.jpg" alt="pricing-1-preview" />
									</Link>
								</div>
								<h4>Pricing Plans #1</h4>
							</div>
							{/* PRICING PLANS */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/pricing-2" title target="_blank">
										<img className="img-fluid" src="/assests/images/pricing-2.jpg" alt="pricing-2-preview" />
									</Link>
								</div>
								<h4>Pricing Plans #2</h4>
							</div>
							{/* FAQs PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/faqs" title target="_blank">
										<img className="img-fluid" src="/assests/images/faqs.jpg" alt="faqs-preview" />
									</Link>
								</div>
								<h4>FAQs</h4>
							</div>
							{/* BLOG LISTING */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/blog-listing" title target="_blank">
										<img className="img-fluid" src="/assests/images/blog-listing.jpg" alt="blog-listing-preview" />
									</Link>
								</div>
								<h4>Blog Listing</h4>
							</div>
							{/* SINGLE POST */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/single-post" title target="_blank">
										<img className="img-fluid" src="/assests/images/single-post.jpg" alt="single-post-preview" />
									</Link>
								</div>
								<h4>Single Post</h4>
							</div>
							{/* CONTACTS PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/contacts" title target="_blank">
										<img className="img-fluid" src="/assests/images/contacts.jpg" alt="contacts-preview" />
									</Link>
								</div>
								<h4>Contacts</h4>
							</div>
							{/* TERMS PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/terms" title target="_blank">
										<img className="img-fluid" src="/assests/images/terms.jpg" alt="terms-preview" />
									</Link>
								</div>
								<h4>Terms</h4>
							</div>
							{/* PRIVACY PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/privacy" title target="_blank">
										<img className="img-fluid" src="/assests/images/privacy.jpg" alt="privacy-preview" />
									</Link>
								</div>
								<h4>Privacy</h4>
							</div>
							{/* COOKIES PAGE */}
							<div className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/cookies" title target="_blank">
										<img className="img-fluid" src="/assests/images/cookies.jpg" alt="cookies-preview" />
									</Link>
								</div>
								<h4>Cookies</h4>
							</div>
							{/* SIGNUP PAGE */}
							<div id="reg-3" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/signup" title target="_blank">
										<img className="img-fluid" src="/assests/images/signup.jpg" alt="signup-preview" />
									</Link>
								</div>
								<h4>Sign Up Page</h4>
							</div>
							{/* LOG IN PAGE */}
							<div id="reg-1" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/login" title target="_blank">
										<img className="img-fluid" src="/assests/images/login.jpg" alt="login-preview" />
									</Link>
								</div>
								<h4>Log In Page</h4>
							</div>
							{/* RESET PASSWORD PAGE */}
							<div id="reg-5" className="col-md-6 col-lg-4 select_link wow animate__animated animate__fadeInUp">
								<div className="hover-overlay">
									<Link href="/reset-password" title target="_blank">
										<img className="img-fluid" src="/assests/images/reset-password.jpg" alt="reset-preview" />
									</Link>
								</div>
								<h4>Reset Password</h4>
							</div>
						</div>	{/* End row */}
					</div>	  {/* End container */}
				</section>	{/* END INNER PAGES */}
				{/* BANNER-2
============================================= */}
				<section id="banner-2" className="bg--scroll division">
					<div className="container">
						{/* BANNER TEXT*/}
						<div className="row">
							<div className="col-lg-8 offset-lg-2">
								<div className="banner-2-txt color--white text-center">
									<h2>Create your amazing website with Pintex</h2>
									<p>Mix and match from over 40 exclusive section UI blocks. <span>Create something
										unique and beautifully</span> tailored to your needs
									</p>
									<Link href="#" className="btn btn--pink hover--tra-white">Purchase for $15</Link>
								</div>
							</div>
						</div>	{/* END BANNER TEXT*/}
					</div>	  {/* End container */}
				</section>	{/* END BANNER-2 */}
				{/* FOOTER
============================================= */}
				<footer id="footer" className="footer division">
					<div className="container">
						<div className="row">
							<div className="col footer-copyright">
								<p>Designed by Jthemes</p>
								<p>© 2024 <span>Pintex.</span> All Rights Reserved</p>
							</div>
						</div>
					</div>
				</footer>	{/* END FOOTER */}
			</div>

		</>
	)
}