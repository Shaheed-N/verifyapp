
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ResetPassword() {

	return (
		<>

			<Layout>
				<div id="page" className="page">
					{/* RESET PASSWORD PAGE
============================================= */}
					<div id="reset-password" className="register-page division">
						<div className="container">
							{/* RESET PAGE LOGO */}
							<div className="row">
								<div className="col register-page-logo">
									<Link href="/"><img className="img-fluid" src="/images/logo.png" alt="logo-image" /></Link>
								</div>
							</div>
							{/* RESET PASSWORD FORM */}
							<div className="row justify-content-center">
								<div className="col-md-7 col-lg-5">
									<div className="reset-page-wrapper">
										{/* TITLE */}
										<div className="reset-form-title">
											{/* Title */}
											<h5 className="h5-xl">Forgot your password?</h5>
											{/* Text */}
											<p className="p-sm">Enter your email address below and we'll send you a link to securely reset
												your password
											</p>
										</div>
										{/* RESET PASSWORD FORM */}
										<form name="resetpasswordform" className="row reset-password-form">
											{/* Form Input */}
											<div className="col-md-12">
												<input className="form-control email" type="email" name="email" placeholder="example@example.com" />
											</div>
											{/* Form Submit Button */}
											<div className="col-md-12">
												<button type="submit" className="btn btn--theme hover--black submit">Reset My Password</button>
											</div>
											{/* Form Data  */}
											<div className="col-md-12">
												<div className="form-data text-center">
													<p className="p-sm"><Link href="/login">Never mind, I remembered!</Link></p>
												</div>
											</div>
											{/* Form Message */}
											<div className="col-lg-12 reset-form-msg">
												<span className="loading" />
											</div>
										</form>	{/* END RESET PASSWORD FORM */}
									</div>
								</div>
							</div>	  {/* END RESET PASSWORD FORM */}
						</div>	 {/* End container */}
					</div>	{/* END RESET PASSWORD PAGE */}
				</div>

			</Layout>
		</>
	)
}