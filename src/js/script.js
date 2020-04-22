const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');
//const link    = document.querySelectorAll('.link')

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

$(document).ready(function(){
  $('.backtop').hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>0){
      $('.backtop').fadeIn();
    }else{
      $('.backtop').fadeOut();
    }
  });

  $('.backtop').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 600);
  })
});


$('nav a').click(function(e) {
  e.preventDefault();
  var id = $(this).attr('href');
    targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset
  }, 600);
  
});

