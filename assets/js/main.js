
new WOW().init();		

$(function() {
    $(document).scroll(function() {
          var $navs = $(".navs");
          $navs.toggleClass('scrolled', $(this).scroltop() > $navs.height());
    });
});


function toggleMenu() {
   
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');

    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}						

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

//Scroll reveal animations
