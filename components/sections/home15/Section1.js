

export default function Section1() {
	return (
		<>


			<section id="hero-15" className="bg--fixed hero-section division">
				<div className="container">
					<div className="row d-flex align-items-center">
						{/* HERO IMAGE */}
						<div className="col-md-6 order-last order-md-2">
							<div className="hero-15-img wow animate__animated animate__fadeInRight">
								<img className="img-fluid" src="/images/hero-15-img.png" alt="hero-image" />
							</div>
						</div>
						{/* HERO TEXT */}
						<div className="col-md-6 order-first order-md-2">
							<div className="hero-15-txt color--white wow animate__animated animate__fadeInLeft">
								{/* HERO APP LOGO */}
								<div className="hero-app-logo">
									<img className="img-fluid" src="/images/app-logo-1.png" alt="hero-app-logo" />
								</div>
								{/* Title */}
								<h2>Best editor for your media files</h2>
								{/* Text */}
								<p className="p-lg">Feugiat primis ligula sapien mauris auctor ipsum laoreet pretium augue an egestas
									cubilia cursus and pretium augue ipsum egestas cubilia cursus
								</p>
								{/* Users */}
								<div className="users">
									<img src="/images/customer-avatar.png" alt="user-avatars" />
									<p>Trusted by 480K+ Worldwide <span>Brands and Customers</span></p>
								</div>
							</div>
						</div>	{/* END HERO TEXT */}
					</div>    {/* End row */}
				</div>	   {/* End container */}
			</section>

		</>
	)
}
