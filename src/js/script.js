const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');
//const link    = document.querySelectorAll('.link')

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
})

$(function(){ 
  var navMain = $(".menu");

  navMain.on("click", "a", null, function () {
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
  });
});




$('nav a').click(function(e) {
  e.preventDefault();
  var id = $(this).attr('href');
    targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset
  }, 600);
  
});

debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

(function() {
var $target = $('.pt');
var $offset = $(window).height() * 2/6;

function animeScroll(){
  var documentTop = $(document).scrollTop();
  console.log(documentTop);
  $target.each(function() {
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop - $offset){
      $('.anime').css({opacity: '0', transition: '0.2s'});
    } else{
      $('.anime').css('opacity', '1');
    }

  })
}

animeScroll();

$(document).scroll(debounce(function(){
  animeScroll();
}, 100));
}());