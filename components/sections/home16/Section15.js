
import Link from "next/link"

export default function Section15() {
	return (
		<>


			<section id="pricing" className="pt-100 pricing-2 pricing-section division">
				<div className="container">
					{/* SECTION TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-9 col-lg-8">
							<div className="section-title mb-60 text-center">
								{/* Title */}
								<h2 className="h2-xl">Start, Connect, Enjoy</h2>
								{/* Text */}
								<p className="p-lg">Ligula risus auctor tempus magna feugiat lacinia laoreet luctus</p>
							</div>
						</div>
					</div>	{/* END SECTION TITLE */}
					{/* PRICING TABLES */}
					<div className="pricing-2-wrapper">
						<div className="row">
							{/* FREE PLAN */}
							<div className="col-md-4">
								<div id="pt-2-1" className="p-table pricing-2-table bg--white r-24 wow animate__animated animate__fadeInUp  animate__delay-1">
									{/* TABLE HEADER */}
									<div className="pricing-table-header text-center">
										{/* Title */}
										<h5 className="h5-md color--purple">Pintex Free</h5>
										{/* Price */}
										<div className="price">
											<sup>$</sup>
											<span>0.00</span>
											<sup className="validity">&nbsp;/ mo</sup>
										</div>
									</div>	{/* END TABLE HEADER */}
									{/* PRICING FEATURES */}
									<ul className="pricing-features ico-10 ico--theme-2">
										<li><p><span className="flaticon-check" /> 1 GB of cloud storage</p></li>
										<li><p><span className="flaticon-check" /> Weekly data backup</p></li>
										<li><p><span className="flaticon-check" /> No Ads. No trackers</p></li>
										<li><p><span className="flaticon-check" /> 12/5 email support</p></li>
									</ul>
								</div>
							</div>	{/* END FREE PLAN */}
							{/* PREMIUM PLAN */}
							<div className="col-md-4">
								{/* PRICING TABLE */}
								<div id="pt-2-2" className="p-table pricing-2-table bg--white r-24 wow animate__animated animate__fadeInUp  animate__delay-2">
									{/* TABLE HEADER */}
									<div className="pricing-table-header text-center">
										{/* Title */}
										<h5 className="h5-md color--purple">Pintex PRO</h5>
										{/* Price */}
										<div className="price">
											<sup>$</sup>
											<span>4.99</span>
											<sup className="validity">&nbsp;/ mo</sup>
										</div>
									</div>	{/* END TABLE HEADER */}
									{/* PRICING FEATURES */}
									<ul className="pricing-features ico-10 ico--theme-2">
										<li><p><span className="flaticon-check" /> 15 GB of cloud storage</p></li>
										<li><p><span className="flaticon-check" /> Daily data backup</p></li>
										<li><p><span className="flaticon-check" /> No Ads. No trackers</p></li>
										<li><p><span className="flaticon-check" /> 24/7 email support</p></li>
									</ul>
								</div>	{/* END PRICING TABLE */}
							</div>	{/* END PREMIUM PLAN  */}
							{/* PREMIUM PLAN */}
							<div className="col-md-4">
								{/* PRICING TABLE */}
								<div id="pt-2-3" className="p-table pricing-2-table bg--white r-24 wow animate__animated animate__fadeInUp  animate__delay-3">
									{/* TABLE HEADER */}
									<div className="pricing-table-header text-center">
										{/* Title */}
										<h5 className="h5-md color--purple">Pintex Team</h5>
										{/* Price */}
										<div className="price">
											<sup>$</sup>
											<span>9.99</span>
											<sup className="validity">&nbsp;/ mo</sup>
										</div>
									</div>	{/* END TABLE HEADER */}
									{/* PRICING FEATURES */}
									<ul className="pricing-features ico-10 ico--theme-2">
										<li><p><span className="flaticon-check" /> 50 GB of cloud storage</p></li>
										<li><p><span className="flaticon-check" /> Daily data backup</p></li>
										<li><p><span className="flaticon-check" /> No Ads. No trackers</p></li>
										<li><p><span className="flaticon-check" /> 24/7 email support</p></li>
									</ul>
								</div>	{/* END PRICING TABLE */}
							</div>	{/* END PREMIUM PLAN  */}
						</div>
					</div>	{/* PRICING TABLES */}
					{/* PRICING NOTICE TEXT */}
					<div className="row justify-content-center">
						<div className="col-lg-9">
							<div className="pricing-notice wow animate__animated animate__fadeInUp">
								{/* Button */}
								<Link href="/download" className="btn r-36 btn--tra-black hover--theme">Get Started For Free</Link>
							</div>
						</div>
					</div>	{/* END PRICING NOTICE TEXT */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
