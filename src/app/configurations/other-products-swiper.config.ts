import { SwiperOptions } from "swiper";

export const otherProductsSwiperConfig: SwiperOptions = {
	slidesPerView: 2,
	spaceBetween: 30,
	autoplay: {
	  delay: 4000,
	  disableOnInteraction: false,
	  pauseOnMouseEnter: true,
	},
	speed: 600,
	loop: true,
  }