import Link from "next/link";

export default function Footer() {
	return (
		<>
			<footer>
				<div className="section-footer-2 position-relative">
					<div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
						<div className="text-center">
							<a className="d-flex main-logo align-items-center justify-content-center mb-3">
								<img src="assets/imgs/home-page-2/template/favicon.svg" alt="zelio" />
								<span className="fs-4 ms-2">Zakir.dev</span>
							</a>
							<div className="d-flex justify-content-center gap-3">
							<Link href="https://www.facebook.com/zakir.hossain.4969" target='_bank'>
								<i className="ri-facebook-circle-fill fs-18" />
							</Link>
							<Link href="http://x.com/Zakir4969" target='_bank'>
								<i className="ri-twitter-x-fill fs-18" />
							</Link>
							<Link href="https://www.linkedin.com/in/zakirhossain4969" target='_bank'>
								<i className="ri-linkedin-fill fs-18" />
							</Link>
							<Link href="https://github.com/EngZakirHossain" target='_bank'>
								<i className="ri-github-fill fs-18" />
							</Link>
							</div>
							<div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
								<a href="#about" className="fs-6"> About me </a>
								<a href="#resume" className="fs-6"> Resume </a>
								<a href="#services" className="fs-6"> Services </a>
								<a href="#portfolio" className="fs-6"> Portfolio </a>
								<a href="#blog" className="fs-6"> Blog </a>
								<a href="#contact" className="fs-6"> Contact </a>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
