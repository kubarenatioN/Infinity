import { SwiperOptions } from "swiper";

export const productsSwiperConfig: SwiperOptions = {
	slidesPerView: 6,
	spaceBetween: 30,
	autoplay: {
	  delay: 4000,
	  disableOnInteraction: false,
	  pauseOnMouseEnter: true,
	},
	speed: 600,
	loop: true,
  }