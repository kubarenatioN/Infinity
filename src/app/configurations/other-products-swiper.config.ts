import { SwiperOptions } from "swiper";

export const otherProductsSwiperConfig: SwiperOptions = {
	autoplay: {
	  delay: 4000,
	  disableOnInteraction: false,
	  pauseOnMouseEnter: true,
	},
	speed: 600,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		640: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1000: {
			slidesPerView: 4,
			spaceBetween: 30,
		}
	}
  }