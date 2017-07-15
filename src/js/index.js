// Initialize collapse button
$(".button-collapse").on("click", function () {
  $('#slide-out').css({
    'transform': 'translateX(0)'
  })
})

// $("body").on("click", function () {
//   $('#slide-out').css({
//     'transform': 'translateX(-300px)'
//   })
// })
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

$(document).ready(function(){
  // $('.carousel').carousel();
  // $('.carousel.carousel-slider').carousel({
  //   fullWidth: true
  // });
  //
  // $('.carousel_next').on("click", function () {
  //   $('.carousel').carousel('next');
  // })


    // $('select').material_select();

  $('#js-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true
});


  $('.slick-next').append(`<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve"><g>	<g>		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`)
});

var main = function() { //главная функция

  $('#js-open').click(function() { /* выбираем класс icon-menu и
   добавляем метод click с функцией, вызываемой при клике */

    $('.side-nav').animate({ //выбираем класс menu и метод animate

      left: '0px' /* теперь при клике по иконке, меню, скрытое за
       левой границей на 285px, изменит свое положение на 0px и станет видимым */

    }, 200); //скорость движения меню в мс

    $('body').animate({ //выбираем тег body и метод animate

      left: '285px' /* чтобы всё содержимое также сдвигалось вправо
       при открытии меню, установим ему положение 285px */

    }, 200); //скорость движения меню в мс
  });


  /* Закрытие меню */

  $('#js-close').click(function() { //выбираем класс icon-close и метод click

    $('.side-nav').animate({ //выбираем класс menu и метод animate

      left: '-285px' /* при клике на крестик меню вернется назад в свое
       положение и скроется */

    }, 200); //скорость движения меню в мс

    $('body').animate({ //выбираем тег body и метод animate

      left: '0px' //а содержимое страницы снова вернется в положение 0px

    }, 200); //скорость движения меню в мс
  });
};

$(document).ready(main); /* как только страница полностью загрузится, будет
 вызвана функция main, отвечающая за работу меню */