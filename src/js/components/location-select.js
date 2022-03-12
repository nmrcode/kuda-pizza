import {isMobile} from "../functions/viewportCheck";

const locationSelect = document.querySelector('.location')

if (locationSelect) {
   const locationSelectDropdown = locationSelect.querySelector('.location__dropdown'),
      locationSelectLabel = locationSelect.querySelector('.location__label span'),
      dropdownItems = locationSelect.querySelectorAll('.dropdown-location__item')
   if (isMobile()) {
      locationSelectLabel.addEventListener('click', e => {
         toggleDropdown();
      })
   }
   dropdownItems.forEach(item => {
      item.addEventListener('click', e => {
         const targetValue = e.target.textContent;
         locationSelectLabel.textContent = targetValue;
         closeDropdown();
      })
   })

   function toggleDropdown() {
      locationSelect.classList.toggle('_dropdown-open');
   }

   function closeDropdown() {
      locationSelect.classList.remove('_dropdown-open');
   }
}
