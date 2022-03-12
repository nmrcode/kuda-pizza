import _vars from "../_vars";

const cart = document.querySelector('.cart');

if (cart) {

   const cartSidebar = document.querySelector('.cart-sidebar');
   const cartSidebarClose = cartSidebar.querySelector('.cart-sidebar__close')

   cart.addEventListener('click', e => {
      const cartButton = e.currentTarget;
      openSidebar();
   })

   cartSidebar.addEventListener('click', e => {
      if (e.target.closest('.cart-sidebar__close') || e.target.closest('.cart-sidebar__overlay')) {
         closeSidebar();
      }
   })

   function openSidebar() {
      cartSidebar.classList.add('_open');
      _vars.bodyEl.classList.add('_no-scroll');
   }

   function closeSidebar() {
      cartSidebar.classList.remove('_open');
      _vars.bodyEl.classList.remove('_no-scroll');
   }
}
