const menuBar=document.getElementById('menu_bar');
const mistakeBar=document.getElementById('mistake_bar');


menuBar.addEventListener('click', () => {
                  
           let parent=menuBar.parentElement;
           parent.classList.add('show');
           parent.classList.remove('showMistake');
          let nextparent= parent.nextElementSibling;
           nextparent.classList.add('showCon'); 
           nextparent.classList.remove('hideCon')

           let con=nextparent.nextElementSibling;
           con.classList.add('show_main_con');
          con.classList.remove('hide_menu_bar');

})

mistakeBar.addEventListener('click' ,() => {
               
               let parentMistake=mistakeBar.parentElement;
               parentMistake.classList.add('showMistake');
               let menuSideBar=parentMistake.nextElementSibling;
               menuSideBar.classList.add('hideCon')

               let con=menuSideBar.nextElementSibling;
               con.classList.add('hide_menu_bar');
               con.classList.remove('show_main_con');
})