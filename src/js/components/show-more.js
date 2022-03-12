const deliveryInfoWrapper = document.querySelector('.delivery-info-section__text-wrapper'),
   showMoreBtn = document.querySelector('.delivery-info-section__show-more');

if (deliveryInfoWrapper) {

   if (deliveryInfoWrapper.textContent.length >= 1276) {
      showMoreBtn.style.display = 'block'
      deliveryInfoWrapper.classList.add('_hidden')
      deliveryInfoWrapper.textContent.substring(0, 1276);
   } else {
      showMoreBtn.style.display = 'none'
   }

   if (showMoreBtn.style.display !== "none") {
      showMoreBtn.addEventListener('click', e => {
         deliveryInfoWrapper.classList.remove('_hidden');
         e.target.style.display = 'none';
      });
   }
}
