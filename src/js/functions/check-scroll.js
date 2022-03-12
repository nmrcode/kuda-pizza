import vars from "../_vars";

(function checkScroll() {
   const headerBottom = document.querySelector('.header__bottom'),
      headerTop = document.querySelector('.header__top')

   if (headerBottom && headerTop) {
      window.addEventListener('scroll', e => {
         let y = window.scrollY;
         if (y > 50) {
            headerBottom.classList.add('_scroll-fixed');
            headerTop.style.opacity = '0';
         } else {
            headerBottom.classList.remove('_scroll-fixed');
            headerTop.style.opacity = '1';
         }
      })
   }
})();
