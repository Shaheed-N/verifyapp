'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
export default function FilterContent() {
	const isotope = useRef()
	const [filterKey, setFilterKey] = useState("*")
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope(".filter-content", {
				itemSelector: ".filter-item",
				// layoutMode: "fitRows",
				percentPosition: true,
				masonry: {
					columnWidth: ".filter-item",
				},
				animationOptions: {
					duration: 750,
					easing: "linear",
					queue: false,
				},
			})
		}, 1000)
	}, [])
	useEffect(() => {
		if (isotope.current) {
			filterKey === "*"
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` })
		}
	}, [filterKey])
	const handleFilterKeyChange = useCallback((key) => () => {
		setFilterKey(key)
	},
		[]
	)

	const activeBtn = (value) => (value === filterKey ? "is-checked" : "")
	return (
		<>
			<div className="row">
				<div className="col-md-12 text-center">
					<div className="filter-btns mb-50">
						<button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All</button>
						<button className={activeBtn("collaboration")} onClick={handleFilterKeyChange("collaboration")} data-filter=".collaboration">Collaboration</button>
						<button className={activeBtn("cust_exp")} onClick={handleFilterKeyChange("cust_exp")} data-filter=".cust_exp">Customer Experience</button>
						<button className={activeBtn("analytics")} onClick={handleFilterKeyChange("analytics")} data-filter=".analytics">Analytics</button>
						<button className={activeBtn("automations")} onClick={handleFilterKeyChange("automations")} data-filter=".automations">Automations</button>
					</div>
				</div>
			</div>
			{/* FILTERING CONTENT */}
			<div className="row">
				<div className="col-md-12">
					<div className="filter-content">
						{/* INTEGRATION TOOL #1 */}
						<div className="filter-item collaboration">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/slack.png" alt="tool-logo" />
										<h6 className="h6-lg">Slack</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #1 */}
						{/* INTEGRATION TOOL #2 */}
						<div className="filter-item automations">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/zapier.png" alt="tool-logo" />
										<h6 className="h6-lg">Zapier</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #2 */}
						{/* INTEGRATION TOOL #3 */}
						<div className="filter-item cust_exp">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/zendesk.png" alt="tool-logo" />
										<h6 className="h6-lg">Zendesk</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #3 */}
						{/* INTEGRATION TOOL #4 */}
						<div className="filter-item analytics">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/amplitude.png" alt="tool-logo" />
										<h6 className="h6-lg">Amplitude</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #4 */}
						{/* INTEGRATION TOOL #5 */}
						<div className="filter-item collaboration">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/loom.png" alt="tool-logo" />
										<h6 className="h6-lg">Loom</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #5 */}
						{/* INTEGRATION TOOL #6 */}
						<div className="filter-item cust_exp">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/intercom.png" alt="tool-logo" />
										<h6 className="h6-lg">Intercom</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #6 */}
						{/* INTEGRATION TOOL #7 */}
						<div className="filter-item collaboration">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/discord.png" alt="tool-logo" />
										<h6 className="h6-lg">Discord</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #7 */}
						{/* INTEGRATION TOOL #8 */}
						<div className="filter-item analytics">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/firebase.png" alt="tool-logo" />
										<h6 className="h6-lg">Firebase</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #8 */}
						{/* INTEGRATION TOOL #9 */}
						<div className="filter-item analytics">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/shopify.png" alt="tool-logo" />
										<h6 className="h6-lg">Shopify</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #9 */}
						{/* INTEGRATION TOOL #10 */}
						<div className="filter-item cust_exp">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/hubspot.png" alt="tool-logo" />
										<h6 className="h6-lg">HubSpot</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #10 */}
						{/* INTEGRATION TOOL #11 */}
						<div className="filter-item collaboration">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/notion.png" alt="tool-logo" />
										<h6 className="h6-lg">Notion</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #11 */}
						{/* INTEGRATION TOOL #12 */}
						<div className="filter-item automations">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/trello.png" alt="tool-logo" />
										<h6 className="h6-lg">Trello</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #12 */}
						{/* INTEGRATION TOOL #13 */}
						<div className="filter-item cust_exp">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/mailchimp.png" alt="tool-logo" />
										<h6 className="h6-lg">MailChimp</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #13 */}
						{/* INTEGRATION TOOL #14 */}
						<div className="filter-item automations">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/gmail.png" alt="tool-logo" />
										<h6 className="h6-lg">Gmail</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #14 */}
						{/* INTEGRATION TOOL #15 */}
						<div className="filter-item collaboration">
							<div className="int_tool-3 bg--white r-12">
								<Link href="#">
									{/* TOOL LOGO */}
									<div className="tool_logo">
										<img className="img-fluid" src="/images/png_icons/zoom.png" alt="tool-logo" />
										<h6 className="h6-lg">Zoom</h6>
									</div>
									{/* TOOL DESCRIPTION */}
									<div className="tool_description">
										<p>Luctus varius purus ipsum a neque blandit dolor diam egestas tempus</p>
									</div>
								</Link>
							</div>
						</div>	{/* END INTEGRATION TOOL #15 */}
					</div>
				</div>
			</div>
		</>
	)
}
