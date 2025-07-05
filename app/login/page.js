
import Link from "next/link"
export default function Login() {

	return (
		<>

			<div id="page" className="page">
				{/* LOGIN PAGE
============================================= */}
				<div id="login" className="register-page division">
					<div className="container">
						{/* RESET PAGE LOGO */}
						<div className="row">
							<div className="col register-page-logo">
								<Link href="/"><img className="img-fluid" src="/images/logo.png" alt="logo-image" /></Link>
							</div>
						</div>
						{/* LOGIN FORM */}
						<div className="row justify-content-center">
							<div className="col-md-7 col-lg-5">
								<div className="register-page-form">
									{/* TITLE */}
									<div className="register-form-title">
										{/* Title */}
										<h4>Welcome Back!</h4>
										{/* Text */}
										<p>Log in to your account below</p>
									</div>
									{/* LOGIN FORM */}
									<form name="signinform" className="row sign-in-form">
										{/* Form Input */}
										<div className="col-md-12">
											<input className="form-control email" type="email" name="email" placeholder="Enter Your Email" />
										</div>
										{/* Form Input */}
										<div className="col-md-12">
											<div className="wrap-input">
												<span className="btn-show-pass ico-20"><span className="flaticon-visibility eye-pass" /></span>
												<input className="form-control password" type="password" name="password" placeholder="Enter Your Password" />
											</div>
										</div>
										{/* Reset Password Link */}
										<div className="col-md-12">
											<div className="reset-password-link">
												<p className="p-sm"><Link href="/reset-password">Forgot your password?</Link></p>
											</div>
										</div>
										{/* Form Submit Button */}
										<div className="col-md-12">
											<button type="submit" className="btn r-06 btn--theme hover--black submit">Log In</button>
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
										{/* Sing Up Link */}
										<div className="col-md-12 text-center">
											<p className="create-account">
												Don't have an account? <Link href="/signup" className="color--theme">Sign up</Link>
											</p>
										</div>
									</form>	{/* END LOGIN FORM */}
								</div>
							</div>
						</div>	  {/* END LOGIN FORM */}
					</div>	   {/* End container */}
				</div>	{/* END LOGIN PAGE */}
			</div>

		</>
	)
}