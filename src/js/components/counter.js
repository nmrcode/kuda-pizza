const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
   let currentCounter = counter.querySelector('.counter__value');
   const decr = counter.querySelector('.counter__decr');
   const incr = counter.querySelector('.counter__incr');
   let value = 1;
   currentCounter.value = value;
   decr.addEventListener('click', e => {
      if (!value <= 0) {
         value--;
         currentCounter.value = value;
      }
   })

   incr.addEventListener('click', e => {
      value++;
      currentCounter.value = value;
   })
})
