/*
Слайдер Swiper
Документация:
https://swiperjs.com/swiper-api
Сниппет: n-swiper
Не забыть подключить стили в scss/vendors.scss
*/
import Swiper, {Autoplay} from "swiper";

// Инициализация слайдеров
function initSliders() {
   // Проверяем, есть ли слайдер на стронице
   if (document.querySelector(".suggestions-hero__swiper")) {
      // Создаем слайдер
      new Swiper(".suggestions-hero__swiper", {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Autoplay],
         observer: true,
         observeParents: true,
         slidesPerView: 4,
         spaceBetween: 30,
         autoHeight: true,
         speed: 800,
         loop: true,
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

         // Пагинация
         //
         // pagination: {
         //    el: '.swiper-pagination',
         //    clickable: true,
         // },


         // Скроллбар
         /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

         // Кнопки "влево/вправо"
         // navigation: {
         //    prevEl: ".swiper-button-prev",
         //    nextEl: ".swiper-button-next",
         // },

         // Брейкпоинты

         breakpoints: {
            1: {
               spaceBetween: 10,
               autoHeight: true,
               slidesPerView: "auto",

            },
            576: {
               slidesPerView: "auto",
               spaceBetween: 15,
               autoHeight: true,
            },
            768: {
               slidesPerView: 3,
               spaceBetween: 20,
               autoHeight: true,
            },
            992: {
               slidesPerView: 4,
               spaceBetween: 30,
               autoHeight: true,
            },
         },

         // События
         on: {},
      });
   }
   if (document.querySelector(".add-to-order__swiper")) {
      // Создаем слайдер
      new Swiper(".add-to-order__swiper", {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Autoplay],
         observer: true,
         observeParents: true,
         slidesPerView: 4,
         spaceBetween: 30,
         autoHeight: true,
         speed: 800,
         loop: true,
         autoplay: {
            delay: 2000,
            disableOnInteraction: false,
         },
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

         // Пагинация
         //
         // pagination: {
         //    el: '.swiper-pagination',
         //    clickable: true,
         // },


         // Скроллбар
         /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

         // Кнопки "влево/вправо"
         // navigation: {
         //    prevEl: ".swiper-button-prev",
         //    nextEl: ".swiper-button-next",
         // },

         // Брейкпоинты

         breakpoints: {
            1: {
               spaceBetween: 10,
               autoHeight: true,
               slidesPerView: 1,

            },
            576: {
               slidesPerView: 2,
               spaceBetween: 15,
               autoHeight: true,
            },
            768: {
               slidesPerView: 3,
               spaceBetween: 20,
               autoHeight: true,
            },
            992: {
               slidesPerView: 4,
               spaceBetween: 30,
               autoHeight: true,
            },
         },

         // События
         on: {},
      });
   }
}

window.addEventListener("load", function (e) {
   // Запуск инициализации слайдеров
   initSliders();
});
