'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { brandsCarousel6 } from "@/components/hooks/useSwiper"
import Link from "next/link"

export default function Section2() {
	return (
		<>


			<div className="py-100 brands-1 brands-section">
				<div className="container">
					{/* BRANDS CAROUSEL */}
					<div className="row">
						<div className="col text-center">
							<Swiper {...brandsCarousel6} className="owl-carousel brands-carousel-6">
								{/* BRAND LOGO IMAGE */}
								<SwiperSlide className="brand-logo">
									<Link href="#"><img className="img-fluid" src="/images/brand-1.png" alt="brand-logo" /></Link>
								</SwiperSlide>
								{/* BRAND LOGO IMAGE */}
								<SwiperSlide className="brand-logo">
									<Link href="#"><img className="img-fluid" src="/images/brand-2.png" alt="brand-logo" /></Link>
								</SwiperSlide>
								{/* BRAND LOGO IMAGE */}
								<SwiperSlide className="brand-logo">
									<Link href="#"><img className="img-fluid" src="/images/brand-3.png" alt="brand-logo" /></Link>
								</SwiperSlide>
								{/* BRAND LOGO IMAGE */}
								<SwiperSlide className="brand-logo">
									<Link href="#"><img className="img-fluid" src="/images/brand-4.png" alt="brand-logo" /></Link>
								</SwiperSlide>
								{/* BRAND LOGO IMAGE */}
								<SwiperSlide className="brand-logo">
									<Link href="#"><img className="img-fluid" src="/images/brand-5.png" alt="brand-logo" /></Link>
								</SwiperSlide>
								{/* BRAND LOGO IMAGE */}
								<SwiperSlide className="brand-logo">
									<Link href="#"><img className="img-fluid" src="/images/brand-6.png" alt="brand-logo" /></Link>
								</SwiperSlide>
								{/* BRAND LOGO IMAGE */}
								<SwiperSlide className="brand-logo">
									<Link href="#"><img className="img-fluid" src="/images/brand-7.png" alt="brand-logo" /></Link>
								</SwiperSlide>
								{/* BRAND LOGO IMAGE */}
								<SwiperSlide className="brand-logo">
									<Link href="#"><img className="img-fluid" src="/images/brand-8.png" alt="brand-logo" /></Link>
								</SwiperSlide>
								{/* BRAND LOGO IMAGE */}
								<SwiperSlide className="brand-logo">
									<Link href="#"><img className="img-fluid" src="/images/brand-9.png" alt="brand-logo" /></Link>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>  {/* END BRANDS CAROUSEL */}
				</div>	{/* End container */}
			</div>

		</>
	)
}
