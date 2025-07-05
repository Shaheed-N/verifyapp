
import Link from "next/link"

export default function Section19() {
	return (
		<>


			<section id="faqs" className="pt-100 faqs-2 faqs-section division">
				<div className="container">
					{/* SECTION TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-9 col-lg-8">
							<div className="section-title text-center  mb-70">
								{/* Title */}
								<h2 className="h2-xl">Questions &amp; Answers</h2>
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
										<h6 className="h6-xl">Update to the latest version of Pintex</h6>
										{/* Answer */}
										<p>Sapien tempor sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
											dolor luctus placerat magna and ligula cursus purus vitae purus auris diam auris suscipit ipsum cursus purus vitae purus an ipsum sodales laoreet
										</p>
									</div>	{/* END QUESTION #2 */}
									{/* QUESTION #3 */}
									<div className="question wow animate__animated animate__fadeInUp">
										{/* Question */}
										<h6 className="h6-xl">How do I choose a plan?</h6>
										{/* Answer */}
										<ul className="simple-list">
											<li className="list-item">
												<p>Tempor sapien quaerat ipsum laoreet purus and sapien dolor diam ultrice ipsum
													aliquam congue and dolor cursus
												</p>
											</li>
											<li className="list-item">
												<p className="mb-0">Quaerat sapien tempor ipsum laoreet purus and sapien dolor diam
													ultrice ipsum aliquam congue dolor congue and turpis neque auctor turpis vitae
													dolor luctus placerat
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
										<h6 className="h6-xl">How long do you provide support?</h6>
										{/* Answer */}
										<p>Sodales sapien tempor quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
											dolor luctus placerat magna and ligula cursus purus vitae purus an auris suscipit ipsum
										</p>
									</div>	{/* END QUESTION #4 */}
									{/* QUESTION #5 */}
									<div className="question wow animate__animated animate__fadeInUp">
										{/* Question */}
										<h6 className="h6-xl">How do I make a payment?</h6>
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
										<h6 className="h6-xl">I have an issue with my account</h6>
										{/* Answer */}
										<p>Tempor sapien sodales quaerat ipsum congue undo laoreet turpis neque auctor turpis vitae
											dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit auris
										</p>
										{/* Answer */}
										<p>An enim nullam tempor sapien gravida and donec congue metus. Vitae arcu mollis blandit
											integer massa velna
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
										<Link href="/contacts" className="btn r-08 btn--tra-black hover--theme">Contact Us</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	   {/* End container */}
			</section>

		</>
	)
}
