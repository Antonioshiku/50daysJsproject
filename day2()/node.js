const Next=document.getElementById('next');
const Line=document.querySelector('.line_1');
const Line1=document.querySelector('.line_2');
const Line2=document.querySelector('.line_3');
const secProgress=document.querySelector('.sec_progress');
const thirdProgress=document.querySelector('.third_progress');
const fourthProgress=document.querySelector('.fourth_progress');
const Prev=document.getElementById('prev');


let clicked=0;


Next.addEventListener('click', () => { 
     Prev.classList.remove('showButton');

      Line.classList.add('show');
        
      secProgress.classList.add('showSec');
      secProgress.classList.remove('hideSec');

      clicked+=1;
     third(clicked); 
      console.log(clicked);
})  
 
  
    function third(cc){
             switch (cc) {
                  case 2:
                       thirdProgress.classList.add('showThird');
                    thirdProgress.classList.remove('hideThird');

                        Line1.classList.add('show');
                       break;
               case 3: 
                fourthProgress.classList.add('showFourth');
              fourthProgress.classList.remove('hideFourth')

                Next.classList.add('showNext');
                Line2.classList.add('show');
                    break;
                  default:
                       break;
             }
    }


Prev.addEventListener('click' ,() => {
     Next.classList.remove('showNext');

           clicked-=1;
           console.log(clicked);

           prevv(clicked);

           Button(clicked);

})

  function prevv(dd){
              switch (dd) {
                   case 0: 
                   Line.classList.remove('show');
                   Line.classList.add('hide');
                   secProgress.classList.add('hideSec');
         break;
                   case 1:
                    thirdProgress.classList.add('hideThird');
              thirdProgress.classList.remove('showThird')

                    Line1.classList.add('hide');
                    Line1.classList.remove('show');
                        break;
              case 2: 
              fourthProgress.classList.add('hideFourth')
              fourthProgress.classList.remove('showFourth')
              Line2.classList.remove('show');
              break;
                   default:
                        break;
              }
  }
  
   
 function Button(tt){
              switch (tt) {
                   case 0:
                    Prev.classList.add('showButton')
                       
                        break;
                case 3:
                      Next.classList.add('showNext');
                      break;
                   default:
                        break;
              }
 }
