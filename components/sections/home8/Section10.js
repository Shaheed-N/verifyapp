
import Link from "next/link"

export default function Section10() {
	return (
		<>


			<section id="integrations" className="py-100 integrations-2 integrations-section division">
				<div className="container">
					{/* SECTION TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-9 col-lg-8">
							<div className="section-title text-center mb-70">
								{/* Title */}
								<h2 className="h2-xl">Easy integrations with your existing tools</h2>
								{/* Text */}
								<p className="p-xl">Ligula risus auctor tempus magna feugiat lacinia fusce blandit</p>
							</div>
						</div>
					</div>
					{/* INTEGRATIONS WRAPPER */}
					<div className="int-2-wrapper">
						<div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
							{/* INTEGRATION TOOL #1 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/zapier.png" alt="tool-logo" />
										<h6>Zapier</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #1 */}
							{/* INTEGRATION TOOL #2 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/intercom.png" alt="tool-logo" />
										<h6>Intercom</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #2 */}
							{/* INTEGRATION TOOL #3 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/zendesk.png" alt="tool-logo" />
										<h6>Zendesk</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #3 */}
							{/* INTEGRATION TOOL #4 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/slack.png" alt="tool-logo" />
										<h6>Slack</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #4 */}
							{/* INTEGRATION TOOL #5 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/trello.png" alt="tool-logo" />
										<h6>Trello</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #5 */}
							{/* INTEGRATION TOOL #6 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/notion.png" alt="tool-logo" />
										<h6>Notion</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #6 */}
							{/* INTEGRATION TOOL #7 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/discord.png" alt="tool-logo" />
										<h6>Discord</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #7 */}
							{/* INTEGRATION TOOL #8 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/shopify.png" alt="tool-logo" />
										<h6>Shopify</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #8 */}
							{/* INTEGRATION TOOL #9 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/hubspot.png" alt="tool-logo" />
										<h6>HubSpot</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #9 */}
							{/* INTEGRATION TOOL #10 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/firebase.png" alt="tool-logo" />
										<h6>Firebase</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #10 */}
							{/* INTEGRATION TOOL #11 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/mailchimp.png" alt="tool-logo" />
										<h6>MailChimp</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #11 */}
							{/* INTEGRATION TOOL #12 */}
							<div className="col">
								<Link href="#">
									<div className="int_tool-2 bg--white r-12 wow wow animate__animated animate__fadeInUp">
										<img className="img-fluid" src="/images/png_icons/zoom.png" alt="tool-logo" />
										<h6>Zoom</h6>
									</div>
								</Link>
							</div>	{/* END INTEGRATION TOOL #12 */}
						</div>
					</div>	{/* END INTEGRATIONS WRAPPER */}
					{/* MORE BUTTON */}
					<div className="row">
						<div className="col">
							<div className="more-btn text-center mt-30 wow wow animate__animated animate__fadeInUp">
								<Link href="/integrations" className="btn r-06 btn--tra-black hover--theme">View All Integrations</Link>
							</div>
						</div>
					</div>
				</div>     {/* End container */}
			</section>

		</>
	)
}
