const FirstScroll=document.querySelector('.first_scroll');
const SecScroll=document.querySelector('.sec_scroll');

FirstScroll.addEventListener('mouseenter' , () => {
              FirstScroll.classList.add('showF');
       FirstScroll.onmouseleave = () => {
                       FirstScroll.classList.add('hideF');
       }
       FirstScroll.classList.remove('hideF')

            
})

SecScroll.addEventListener('mouseenter' , () => {
               SecScroll.classList.add('showS');
               SecScroll.classList.remove('hideS')
               FirstScroll.classList.remove('showF')
               SecScroll.onmouseleave = () => {
               SecScroll.classList.add('hideS');
}

})

