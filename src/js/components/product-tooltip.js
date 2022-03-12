const productTooltip = document.querySelectorAll('.product-modal-content__info')

if (productTooltip) {
   productTooltip.forEach(item => {
      item.addEventListener("click", e => {
         const currentTooltip = e.target;
         const currentTootipText = currentTooltip.nextElementSibling;
         currentTootipText.classList.toggle('_tooltip-show');
         setTimeout(() => {
            currentTootipText.classList.remove('_tooltip-show');
         }, 3000)
      })
   })
}

