const firstCard=document.querySelector('.first_card');
const secCard=document.querySelector('.sec_card');
const thirdCard=document.querySelector('.third_card');
const fourthCard=document.querySelector('.fourth_card');
const fiveCard=document.querySelector('.five_card');

firstCard.addEventListener('click', () => {
          firstCard.classList.add('showFirst');
          firstCard.classList.remove('hideFirst');

          let sec=firstCard.nextElementSibling;
          sec.classList.add('hideSec');

          let third=sec.nextElementSibling;
          third.classList.add('hideThird')
          
          let fourth=third.nextElementSibling;
          fourth.classList.add('hideFourth');
          
         
          let five=fourth.nextElementSibling;
          five.classList.add('hideFive');

})

secCard.addEventListener('click', () => {
           secCard.classList.add('showSec');
           secCard.classList.remove('hideSec')
           let first=secCard.previousElementSibling;
           first.classList.add('hideFirst');

           let third=secCard.nextElementSibling;
           third.classList.add('hideThird');

           let fourth=thirdCard.nextElementSibling;
           fourth.classList.add('hideFourth');

           let five=fourth.nextElementSibling;
           five.classList.add('hideFive');
           
})
thirdCard.addEventListener('click', () => {
          thirdCard.classList.add('showThird');
          thirdCard.classList.remove('hideThird');
          let first=sec.previousElementSibling;
          first.classList.add('hideFirst');

          let sec=thirdCard.previousElementSibling;
          sec.classList.add('hideSec');
        
          let fourth=thirdCard.nextElementSibling;
          fourth.classList.add('hideFourth');

          let five=fourth.nextElementSibling;
          five.classList.add('hideFive');
        
})


fourthCard.addEventListener('click', () => {
           fourthCard.classList.add('showFourth');
           fourthCard.classList.remove('hideFourth');

           let first=sec.previousElementSibling;
           first.classList.add('hideFirst');

           let sec=thirdCard.previousElementSibling;
           sec.classList.add('hideSec');

             let third=fourthCard.previousElementSibling;
             third.classList.add('hideThird');
           
             let five=fourthCard.nextElementSibling;
             five.classList.add('hideFive');
         
})

fiveCard.addEventListener('click', () => {
                 fiveCard.classList.add('showFive');
                 fiveCard.classList.remove('hideFive');

                 let first=sec.previousElementSibling;
                 first.classList.add('hideFirst');

                 let sec=thirdCard.previousElementSibling;
                 sec.classList.add('hideSec');

                 let third=fourthCard.previousElementSibling;
                 third.classList.add('hideThird');
               
                 let fourth=thirdCard.nextElementSibling;
                 fourth.classList.add('hideFourth');
               
})