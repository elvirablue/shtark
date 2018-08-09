$(document).ready(function() {
 
	$("form").submit(function() {
		var $form = $(this);
		var data = $form.serialize();
		
		if (validateForm($form)) {
			$.post("./assets/mail.php", data, function(resp) {});
			
			
//*************************************************************************************************
			//КОД ДЛЯ GOOGLE ANALYTICS:
			//ga('send', 'event', 'FormContact1', {nonInteraction: true});
			//ga('send', 'event',	'FormContact1', 'play', 'Fall Campaign');

//*************************************************************************************************			
			//КОД ДЛЯ МЕТРИКИ ЯНДЕКС:
			// ЗДЕСЬ ХХХХХХ - номер счетчика, FormContact - имя события, которое будет отображаться в метрике
			//yaCounter39173625.reachGoal('FormContact');
//*************************************************************************************************

			$('#exampleModal').arcticmodal({
				beforeOpen: function(data, el) {
					if ($('.modal').hasClass('show')) {
						$('.modal').addClass('zoomOut');						
                  		$('.modal_wrapper').addClass('fadeOut');                  		
                        $('.modal').removeClass('show zoomIn');      
                        $('.modal_wrapper').removeClass('show fadeIn');                  		
                 	}
				}				
    		});
//
		} else { return false; };

		return false;
	});

});
 

function validateForm($form) {
	var valid = true;
	$form.find(".required").each(function(index, element) {
		if ($(element).val() == "") {
			$(element).addClass("modal_error");
			setTimeout(function(){
                        $(element).removeClass('modal_error');
                  }, 1500);
			valid = false;
		}
		else {
			$(element).removeClass("modal_error");
		}
	});
	return valid;

}
//*****************
$(document).ready(function() {
$("input[name^='user-phone']").mask("+7 (999) 999 - 9999");

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0 && $(window).width() >= 992) {
      if($(window).scrollTop() >= 600)  {
        $('.menu .nav-main').addClass('fixed-top fadeIn').show();
      } else {
        $('.menu .nav-main').removeClass('fixed-top fadeIn');

      }
    }
    if ($(this).scrollTop() > 0 && $(window).width() < 992) {
      if($(window).scrollTop() >= 100) {
        $('.menu').css({"top":"10px", "left":"10px"});
      } else {
        $('.menu').css({"top":"20px", "left":"20px"});
      }
    }
  });

  $(".menu").click(function(ev){
    if ($(event.target).hasClass('menu')) $('.menu .nav-main').show();
    if ($(event.target).hasClass('close')) $('.menu .nav-main').hide();
    $('.menu').toggleClass('close');

  });


  $(".menu .nav-main .link").click(function(ev){
    var target = $( $(this).attr('href') );
    ev.preventDefault();
    $(".menu .nav-main .link.active").removeClass('active');
    $(this).addClass('active');
    $("html, body").animate({ scrollTop: target.offset().top - 100 }, 600);
    if ($(window).width() < 992 )  $('.menu .nav-main').hide();
  });



// при открытии модального окна
  $('#Modal').on('show.bs.modal', function (event) {
    // получить кнопку, которая его открыло
    var button = $(event.relatedTarget)
    // извлечь информацию из атрибутов
    var title = button.data('title');
    var namebtn = button.data('namebtn');
    var mail = button.data('mail');
    if (mail == true)  $(this).find('.mail').removeClass('hidden')
    else $(this).find('.mail').addClass('hidden');
    // вывести эту информацию в элемент, имеющий id="content"
    $(this).find('h2.title').text(title);
    $(this).find('.button button').text(namebtn);
  })

$( "#selector1" ).slider({
  range: "min",
  value: 800000,
  min: 500000,
  max: 2000000,
  slide: function( event, ui ) {
    var str = ui.value.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ");
    $("#amount1").text(str);
  }
});
$( "#selector2" ).slider({
  range: "min",
  value: 20,
  min: 0,
  max: 60,
  slide: function( event, ui ) {
    $("#amount2").text( ui.value.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 "));
  }
});

$("#test-circle1").circliful({
  animation: 1,
  animateInView: true,
  animationStep: 5,
  foregroundBorderWidth: 15,
  backgroundBorderWidth: 15,
  percent: 38,
  textSize: 18,
  textStyle: 'font-size: 12px;',
  textColor: '#666',
  multiPercentage: 1,
  percentages: [10, 20, 30]
});

  var chart1 = window.chart1 = new EasyPieChart(document.querySelector('.chart1'), {
    easing: 'easeOutElastic',
    delay: 3000,
    barColor: '#c56b06',
    trackColor: '#f19123',
    scaleColor: false,
    lineWidth: 18,
    trackWidth: 18,
    lineCap: 'butt',
    onStep: function(from, to, percent) {
      this.el.children[0].innerHTML = Math.round(percent);
    }
  });
  var chart2 = window.chart2 = new EasyPieChart(document.querySelector('.chart2'), {
    easing: 'easeOutElastic',
    delay: 3000,
    barColor: '#c56b06',
    trackColor: '#f19123',
    scaleColor: false,
    lineWidth: 18,
    trackWidth: 18,
    lineCap: 'butt',
    onStep: function(from, to, percent) {
      this.el.children[0].innerHTML = Math.round(percent);
    }
  });
  var chart3 = window.chart3 = new EasyPieChart(document.querySelector('.chart3'), {
    easing: 'easeOutElastic',
    delay: 3000,
    barColor: '#c56b06',
    trackColor: '#f19123',
    scaleColor: false,
    lineWidth: 18,
    trackWidth: 18,
    lineCap: 'butt',
    onStep: function(from, to, percent) {
      this.el.children[0].innerHTML = Math.round(percent);
    }
  });

  $('.chart1').on('click', function(e) {
    chart1.update(20);
  });
  $('.chart2').on('click', function(e) {
    chart2.update(45);
  });
  $('.chart3').on('click', function(e) {
    chart3.update(86);
  });
});

var owl0 = $('#owl-0');

owl0.owlCarousel({
  loop: true,//Зацикливаем слайдер
  margin: 30,
  nav: true,
  dots: true,
  //autoplayHoverPause: true, //Останавливает автопроигрывание если навести мышкой (hover) на элемент
  //autoplay:true, //Автозапуск слайдера
  smartSpeed:1000, //Время движения слайда
  autoplayTimeout:30, //Время смены слайда
  responsiveClass:true,
  dotsEach: true,
  navigation : true,

  responsive:{
    0:{
      items:1,
      dots: true
    },
    740:{
      items:2
    },
    1020: {
      items:2,
      nav: true
    }
  }
});


//*****************



