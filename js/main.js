$( function() {
// Перемещение блоков навигации в блок мобильного меню
	function menuAdaptive() {
		var lengs = $(".header__langs");
		var navs = $('.topNav');
		if ($(document).width() <= 768) {
			lengs.appendTo('.mobileMenu');
			navs.appendTo('.mobileMenu');
		}else{
			lengs.prependTo('.header__top');	
			navs.each(function(index, val) {
				var dataParrent = $(this).attr('data-parrent');
				$(this).appendTo($(dataParrent));
			});
		}
	}
	function validation (selector) {
		var inputs = $(this).find(selector);
		var stopSubmit = false;
		inputs.each (function() {
			var inputValue = $(this).prop("value");
			if (inputValue == "") {
				$(this).addClass('err');
				stopSubmit = true;
			}
		})
		if (stopSubmit) {
			event.preventDefault();
		}
	}
// Задаем одинаковую высоту для блоков
	function minHight (selector) {
		var item = $(selector);
		var maxHight = 0;
		item.each (function () {
			$(this).css('height',"auto");
			var thisHight = parseInt($(this).css('height'));
			if (thisHight > maxHight) {
				maxHight = thisHight;
			}	
		})
		maxHight = maxHight + "px";
		item.css("height", maxHight);
	}
// =========== add event listeners ===================
	$(window).resize(function(event) {
		menuAdaptive();
		minHight('.product__item-title');
	});
	$(".bourger").on('click', function(event) {
		$(this).toggleClass('active');
		var target = $(this).attr('href');
		$(target).toggleClass('active');
		$('body').toggleClass('lock');
		event.preventDefault();
	});
// Валидиция формы
	$('.form__input').on('invalid', function (){
		$(this).addClass('err');	
	})
	$('.form__input').on('input', function(event) {
		$(this).removeClass('err');
	});
// ======================================================
	menuAdaptive();
	minHight('.product__item-title');
})
