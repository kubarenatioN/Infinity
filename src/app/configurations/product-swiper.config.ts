import { SwiperOptions } from "swiper";

export const productsSwiperConfig = (backwards = false	): SwiperOptions => ({
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
		reverseDirection: backwards,
	},
	speed: 600,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		640: {
			slidesPerView: 3,
			spaceBetween: 10
		},
		900: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		1200: {
			slidesPerView: 5,
			spaceBetween: 30
		},
		// when window width is >= 1440px
		1440: {
			slidesPerView: !backwards ? 6 : 5,
			spaceBetween: 30,
		}
	},
	on: {
		breakpoint: (swiper, params) => {

		}
	}
})