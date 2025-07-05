
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contacts() {

	return (
		<>

			<Layout>
				<div>
					<section className="pb-40 inner-page-hero contacts-1 contacts-section division">
						<div className="container">
							<div className="row justify-content-center">
								{/* CONTACTS INFO */}
								<div className="col-md-6">
									<div className="contacts-info">
										{/* Section ID */}
										<span className="section-id">Contact Us</span>
										{/* Title */}
										<h2 className="h2-lg">Have Questions? Get in Touch</h2>
										{/* Text */}
										<p className="p-md">Want to learn more about Pintex, get a quote, or speak with an expert?
											Let us know what you are looking for and we will get back to you right away
										</p>
										{/* Button */}
										<Link href="#faqs" className="btn r-36 btn-md btn--theme hover--tra-black">Read the Faqs</Link>
									</div>
								</div>	{/* END CONTACTS INFO */}
								{/* CONTACT FORM */}
								<div className="col-md-6">
									<div className="form-holder">
										<form name="contactform" className="row contact-form">
											{/* Form Select */}
											<div className="col-md-12 input-subject">
												<p>This question is about: </p>
												<select className="form-select subject" aria-label="Default select example">
													<option selected>This question is about...</option>
													<option>Registering/Authorising</option>
													<option>Using Application</option>
													<option>Troubleshooting</option>
													<option>Backup/Restore</option>
													<option>Other</option>
												</select>
											</div>
											{/* Contact Form Input */}
											<div className="col-md-12">
												<p>Your Name: </p>
												<input type="text" name="name" className="form-control name" placeholder="Your Name*" />
											</div>
											<div className="col-md-12">
												<p>Your Email Address: </p>
												<input type="text" name="email" className="form-control email" placeholder="Email Address*" />
											</div>
											<div className="col-md-12">
												<p>Explain your question in details: </p>
												<textarea className="form-control message" name="message" rows={6} placeholder="I have a problem with..." />
											</div>
											{/* Contact Form Button */}
											<div className="col-md-12 mt-15 form-btn text-right">
												<button type="submit" className="btn r-36 btn--theme hover--black submit">Submit Request</button>
											</div>
											{/* Contact Form Message */}
											<div className="col-lg-12 contact-form-msg">
												<span className="loading" />
											</div>
										</form>
									</div>
								</div>	{/* END CONTACT FORM */}
							</div>	  {/* End row */}
						</div>	   {/* End container */}
					</section>	{/* END CONTACTS */}
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