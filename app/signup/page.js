
import Link from "next/link"
export default function Signup() {

	return (
		<>

			<div id="page" className="page">
				{/* SIGN UP PAGE
			============================================= */}
				<div id="signup" className="register-page division">
					<div className="container">
						{/* RESET PAGE LOGO */}
						<div className="row">
							<div className="col register-page-logo">
								<Link href="/"><img className="img-fluid" src="/images/logo.png" alt="logo-image" /></Link>
							</div>
						</div>
						{/*  SIGN UP FORM */}
						<div className="row justify-content-center">
							<div className="col-md-7 col-lg-5">
								<div className="register-page-form">
									{/* TITLE */}
									<div className="register-form-title">
										{/* Title */}
										<h4>Welcome to Pintex</h4>
										{/* Text */}
										<p>Create your account to get started</p>
									</div>
									{/* SIGN UP FORM */}
									<form name="signupform" className="row sign-up-form">
										{/* Form Input */}
										<div className="col-md-12">
											<input className="form-control name" type="text" name="name" placeholder="Enter Your Name" />
										</div>
										{/* Form Input */}
										<div className="col-md-12">
											<input className="form-control email" type="email" name="email" placeholder="Enter Your Email" />
										</div>
										{/* Form Input */}
										<div className="col-md-12">
											<div className="wrap-input">
												<span className="btn-show-pass ico-20"><span className="flaticon-visibility eye-pass" /></span>
												<input className="form-control password" type="password" name="password" placeholder="Password (6+ characters)" />
											</div>
										</div>
										{/* Checkbox */}
										<div className="col-md-12">
											<div className="form-data">
												<span>By clicking “Create Account”, you agree to the Pintex
													<Link href="/terms">Terms of Service</Link> and
													<Link href="/privacy"> Privacy Policy</Link>
												</span>
											</div>
										</div>
										{/* Form Submit Button */}
										<div className="col-md-12">
											<button type="submit" className="btn r-06 btn--theme hover--black submit">Create Account</button>
										</div>
										{/* Form Separator */}
										<div className="col-md-12 text-center">
											<div className="separator-line">Or continue with:</div>
										</div>
										{/* Google Button */}
										<div className="col-md-12">
											<Link href="#" className="btn r-06 btn-google ico-left">
												<img src="/images/png_icons/google.png" alt="google-icon" />
												<span>Google</span>
											</Link>
										</div>
										{/* Log In Link */}
										<div className="col-md-12 text-center">
											<p className="create-account">
												Already have an account? <Link href="/login" className="color--theme">Log In</Link>
											</p>
										</div>
									</form>	{/* END SIGN UP FORM */}
								</div>
							</div>
						</div>	  {/* END  SIGN UP FORM */}
					</div>	 {/* End container */}
				</div>	{/* END SIGN UP PAGE */}
			</div>

		</>
	)
}