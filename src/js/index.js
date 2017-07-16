// Initialize collapse button
$(".button-collapse").on("click", function () {
  $('#slide-out').css({
    'transform': 'translateX(0)'
  })
})


$(document).ready(function(){

  var allPanels = $('.accordion > dd').hide();

  $('.accordion > dt > a').click(function() {
    $('.accordion > dt .arrow').text('').append(`<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 492.004 492.004"  xml:space="preserve"><g>	<g>		<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>	</g></g><g></g><g></g><g></g><g></g><g></g>g></g><g></g><g></g><g></g><g>/g><g></g><g></g><g></g><g></g><g></g></svg>`)
    allPanels.slideUp();
    $('.accordion > dt').removeClass("active");
    $(this).parent().addClass("active").next().slideDown();
    $('.accordion > dt.active .arrow').text('').append(`<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 314.5 314.5"  xml:space="preserve"><g>	<g>		<path style="fill:#010002;" d="M314.5,90.5c0,6-2,13-7,18l-133,133c-5,5-10,7-17,7s-12-2-17-7l-133-133c-10-10-10-25,0-35s24-10,34,0l116,116l116-116c10-10,24-10,34,0C312.5,78.5,314.5,84.5,314.5,90.5z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`)

    return false;
  });

  $('#js-checkbox').styler();
  $('#js-r-1').styler();
  $('#js-r-2').styler();
  $('#js-r-3').styler();
  $('#js-r-4').styler();
  $('#js-c-1').styler();
  $('#js-c-2').styler();
  $('#js-c-3').styler();
  $('#js-c-4').styler();
  $('#js-c-5').styler();
  $('#js-c-6').styler();
  $('#js-c-7').styler();
  $('#js-c-8').styler();
  $('#js-c-9').styler();

  $(".jq-checkbox__div").append(`<?xml version='1.0' encoding='iso-8859-1'?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26"><path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/></svg>`)

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

$(document).ready(main); /* как только страница полностью загрузится, будет вызвана функция main, отвечающая за работу меню */