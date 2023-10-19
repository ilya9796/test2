import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useMediaQuery } from "shared/hooks";
import { sliderData } from "shared/mook/sliderData";
import { ArrIcon } from "shared/ui/Icons";

import { newPlaylist, Tranding } from "shared/mook/usersData";

import cn from "classnames";

export function Slider() {
	const isMedium = useMediaQuery("(max-width: 1400px)");
	const isMobile = useMediaQuery("(max-width: 768px)");

	const { id } = useParams();

	const card =
		Number(id) > 4
			? Tranding.find((user) => user.id === Number(id))
			: newPlaylist.find((user) => user.id === Number(id));

	return (
		<Swiper
			effect={"coverflow"}
			grabCursor={true}
			centeredSlides={false}
			loop={true}
			slidesPerView={1}
			spaceBetween={isMedium ? 10 : 150}
			autoplay={true}
			creativeEffect={{ prev: { rotate: [100, 100, 100] }, next: {} }}
			// coverflowEffect={{
			// 	rotate: 50,
			// 	scale: 0.85,
			// 	stretch: 0,
			// 	depth: 100,
			// 	slideShadows: false,
			// }}
			slideNextClass="nextSlide"
			slidePrevClass="prevSlide"
			slideActiveClass="activeSlide"
			navigation={{
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			}}
			modules={[Pagination, Navigation]}
			className="swiper_container"
			breakpoints={{
				768: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
			}}
		>
			{sliderData.map((el, i) => {
				if (i === 1 && card) {
					return (
						<SwiperSlide
							className={cn(
								"w-[300px] sm:w-[355px] h-[400px] sm:h-[600px]",
								"relative rounded-[70px] flex justify-center"
							)}
						>
							<img
								className="absolute top-0 left-0 w-full h-full rounded-[20px]"
								src={card?.img}
								alt="slide_image"
							/>
							<span
								className={cn(
									"text-[32px] font-bold leading-[32px]",
									"relative z-[1] mt-auto mb-[30px] text-white"
								)}
							>
								Introduction
							</span>
						</SwiperSlide>
					);
				}
				return (
					<SwiperSlide
						className={cn(
							"w-[300px] sm:w-[355px] h-[400px] sm:h-[600px]",
							"relative rounded-[70px] flex justify-center"
						)}
						key={el.id}
					>
						<img
							className="absolute top-0 left-0 w-full h-full"
							src={el.img}
							alt="slide_image"
						/>
						<span
							className={cn(
								"text-[32px] font-bold leading-[32px]",
								"relative z-[1] mt-auto mb-[30px] text-white"
							)}
						>
							Introduction
						</span>
					</SwiperSlide>
				);
			})}

			<div
				className={cn(
					"fixed top-[10px] sm:top-[187px] 3xl:top-[287px]",
					"z-[20000] rounded-full bg-[rgba(255,255,255,0.15)]",
					"w-[68px] h-[68px] flex justify-center items-center",
					"slider-controler",
					isMobile ? "left-5" : "right-[330px]"
				)}
			>
				<ArrIcon className="swiper-button-prev slider-arrow" />
				<ArrIcon className="swiper-button-next slider-arrow rotate-[180deg]" />
			</div>
		</Swiper>
	);
}
