
import Link from "next/link"

export default function Section19() {
	return (
		<>


			<section id="integrations" className="pt-100 integrations-1 integrations-section">
				<div className="container">
					{/* INTEGRATIONS WRAPPER */}
					<div className="int-1-wrapper bg--03 r-24 text-center">
						{/* SECTION TITLE */}
						<div className="row justify-content-center">
							<div className="col-md-10 col-lg-9">
								<div className="section-title mb-60">
									{/* Title */}
									<h2 className="h2-lg">Easy integrations with your existing tools</h2>
									{/* Text */}
									<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
								</div>
							</div>
						</div>
						{/* TOOLS ROW */}
						<div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-6">
							{/* TOOL #1 */}
							<div className="col">
								<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
									{/* Logo */}
									<div className="tool_logo bg--white block--shadow r-12">
										<img className="img-fluid" src="/images/png_icons/zapier.png" alt="brand-logo" />
									</div>
									{/* Title */}
									<h6 className="h6-md">Zapier</h6>
								</Link>
							</div>	{/* END TOOL #1 */}
							{/* TOOL #2 */}
							<div className="col">
								<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
									{/* Logo */}
									<div className="tool_logo bg--white block--shadow r-12">
										<img className="img-fluid" src="/images/png_icons/intercom.png" alt="brand-logo" />
									</div>
									{/* Title */}
									<h6 className="h6-md">Intercom</h6>
								</Link>
							</div>	{/* END TOOL #2 */}
							{/* TOOL #3 */}
							<div className="col">
								<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
									{/* Logo */}
									<div className="tool_logo bg--white block--shadow r-12">
										<img className="img-fluid" src="/images/png_icons/notion.png" alt="brand-logo" />
									</div>
									{/* Title */}
									<h6 className="h6-md">Notion</h6>
								</Link>
							</div>	{/* END TOOL #3 */}
							{/* TOOL #4 */}
							<div className="col">
								<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
									{/* Logo */}
									<div className="tool_logo bg--white block--shadow r-12">
										<img className="img-fluid" src="/images/png_icons/slack.png" alt="brand-logo" />
									</div>
									{/* Title */}
									<h6 className="h6-md">Slack</h6>
								</Link>
							</div>	{/* END TOOL #4 */}
							{/* TOOL #5 */}
							<div className="col">
								<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
									{/* Logo */}
									<div className="tool_logo bg--white block--shadow r-12">
										<img className="img-fluid" src="/images/png_icons/shopify.png" alt="brand-logo" />
									</div>
									{/* Title */}
									<h6 className="h6-md">Shopify</h6>
								</Link>
							</div>	{/* END TOOL #5 */}
							{/* TOOL #5 */}
							<div className="col">
								<Link href="#" className="int_tool-1 r-12 wow animate__animated animate__fadeInUp">
									{/* Logo */}
									<div className="tool_logo bg--white block--shadow r-12">
										<img className="img-fluid" src="/images/png_icons/hubspot.png" alt="brand-logo" />
									</div>
									{/* Title */}
									<h6 className="h6-md">HubSpot</h6>
								</Link>
							</div>	{/* END TOOL #5 */}
						</div>	{/* END TOOLS ROW */}
						{/* MORE BUTTON */}
						<div className="row">
							<div className="col">
								<div className="more-btn text-center wow wow animate__animated animate__fadeInUp">
									<Link href="/integrations" className="btn r-36 btn--tra-black hover--theme">View All Integrations</Link>
								</div>
							</div>
						</div>
					</div>	{/* END INTEGRATIONS WRAPPER */}
				</div>     {/* End container */}
			</section>

		</>
	)
}
