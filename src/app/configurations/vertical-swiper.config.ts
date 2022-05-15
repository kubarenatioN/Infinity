import { SwiperOptions } from "swiper";

export const verticalSwiperConfig: SwiperOptions = {
	navigation: {
	  prevEl: '.prev-btn',
	  nextEl: '.next-btn',
	},
	direction: 'vertical',
	slidesPerView: 2,
	spaceBetween: 0,
	autoplay: {
	  delay: 3000,
	},
	speed: 500,
	loop: true,
  }