$(document).ready(function () {
	'use strict';

	(function scrollBottom() {
		if ($('.two-side-wrapper').length > 0) {
			$('.scroll-down').on('click', function () {
                $('html, body').animate({scrollTop:$('.about-company-section').position().top}, 1000);
            });
		}
    })();
	
	(function toggleProductsMenu() {
        toggleMenuItem($('.menu-products'), $('.product-menu'));
    })();
	
	(function toggleAboutUsMenu() {
        toggleMenuItem($('.about-us-item'), $('.about-us-menu'));
    })();
    (function animateSportmasterCard() {
		$('.action-banner-section').viewportChecker({
            classToRemove: 'action-banner-section_animate',
		});
    })();


    (function animateBurger() {
        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            triggerElement: ".layout-news-and-links",
            duration: "100%"
        })
            .setTween(new TweenMax.to('#main-burger', 0.5, { css: { transform: 'rotate(0deg)'}}))
            .addTo(controller);

    })();
    
	(function activateModalCallbackForm() {
		$('.btn-callback').magnificPopup({
            type: 'inline',
			mainClass: 'main-modal',
            items: {
                src: '#callback-popup',
            },
        });
    })();

	(function addPhoneMask() {
        $('.phone-input').mask('+7 (000) 000-00-00');
    })();
	
	(function validationCallBackForm() {
        $('#callback-form').validate({
            submitHandler: function(form) {
                $.ajax({
                    type: $(form).attr('method'),
                    url: $(form).attr('action'),
                    data: $(form).serialize(),
                    success: function (data) {
                        $('#callback-form').addClass('hide-information');
                        $('.thank-you-text').addClass('show');
                    },
                    error: function() {
                        $('#callback-form').addClass('hide-information');
                        $('.wrong-text').addClass('show');
                    }
                });
                return false;
            },
        });
    })();

    (function upToTopBottom() {
        $('.top-arrow-top').on('click', function () {
            animatedScrollToPosition($('body, html'), 0, 300);
        });
    })();

    (function initBottomUp() {
        $(window).on('scroll', function () {
            if($(this).scrollTop() > 500) {
                $('.top-arrow-block').addClass('active');
            } else {
                $('.top-arrow-block').removeClass('active');
            }
        });
    })();

    (function initMainSlider() {

        $('.main-slider__list').on('init', function(e, slick) {
            $('.slick-arrow').wrapAll('<div class=\'main-slider-arrow\'></div>');
        });
        $('.main-slider__list').slick({
            fade:true,
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="12.969" height="23" viewBox="0 0 12.969 23">\n' +
            '<defs>\n' +
            '    <style>\n' +
            '      .main-arrow-prev {\n' +
            '        fill: #8d1e79;\n' +
            '        fill-rule: evenodd;\n' +
            '      }\n' +
            '    </style>\n' +
            '  </defs>\n' +
            '  <path class="main-arrow-prev" d="M431.449,235.835L423.19,227.5l8.26-8.336A1.854,1.854,0,0,0,430.175,216h0a1.791,1.791,0,0,0-1.274.535l-9.2,9.28a2.4,2.4,0,0,0,0,3.37l9.2,9.28a1.794,1.794,0,0,0,1.274.534h0A1.854,1.854,0,0,0,431.449,235.835Z" transform="translate(-419.031 -216)"/>\n' +
            '</svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23">\n' +
            '<defs>\n' +
            '    <style>\n' +
            '      .main-slider-next {\n' +
            '        fill: #8d1e79;\n' +
            '        fill-rule: evenodd;\n' +
            '      }\n' +
            '    </style>\n' +
            '  </defs>\n' +
            '  <path class="main-slider-next" d="M500.551,235.835l8.259-8.335-8.26-8.336A1.854,1.854,0,0,1,501.825,216h0a1.791,1.791,0,0,1,1.275.535l9.2,9.28a2.4,2.4,0,0,1,0,3.37l-9.2,9.28a1.8,1.8,0,0,1-1.275.534h0A1.854,1.854,0,0,1,500.551,235.835Z" transform="translate(-500 -216)"/>\n' +
            '</svg></button>'
        });


    })();

    setNavMenuInteractive($('.navigation-site-page__item'), 'navigation-site-page__item--active');
    
    //-------------Раздел функций
	function toggleMenuItem(menu_item, menu_popup) {
        if (menu_item.length > 0) {
            menu_item.on('click', function (e) {
                e.preventDefault();
                if (!menu_popup.hasClass('active')) {
                    menu_popup.addClass('active');
                    $(this).addClass('active');
                } else {
                    menu_popup.removeClass('active');
                    $(this).removeClass('active');
                }
            });
        }
    }

    function animatedScrollToPosition($selector, position, duration){
        $($selector).animate({
            scrollTop: position
        }, duration);
        return false;
    }
	//------------------------------------------------------------------------------------------------------

	//Медиа-запросы в javascript (Если нужно)
	//-------------------------------------------------------------------------------------------------------
    
    
	media('all and (min-width: 1170px)', function(){
		// console.log('1170px');
	});
   
	media('all and (min-width: 1270px)', function(){
		// console.log('1270px');
	});
	




	
    
});



function media(mediaQueryString, action){
	'use strict';
	var handleMatchMedia = function (mediaQuery) {
		if (mediaQuery.matches) { //Попадает в запроc
			if (action  && typeof(action) === 'function') {
				action();
			}
		} 
	};
	var mql = window.matchMedia(mediaQueryString); //стандартный медиазапрос для смены режима просмотра
	handleMatchMedia(mql);
	mql.addListener(handleMatchMedia);
}

//Включает клик на элементах меню, заставляя его переключаться. Добавляет к выбранному меню активный класс
//@param $selectors (jquery collection) - выборка из элементов меню
//@param activeClass (string) - имя активного класса
function setNavMenuInteractive($selectors, activeClass){
    //Навешиваем клик на все элементы выборки

    $($selectors).on('click', function (event) {
        var clickedIndex = $($selectors).index($(this));
        event.preventDefault();
            //Предварительная очистка
            $.each($selectors, function (index) { 
                if(index !== clickedIndex) {
                    $(this).removeClass(activeClass);
                    $(this).find('.navigation-site-page__teaser').slideUp();
                }
            });
            if(!$(this).hasClass(activeClass)) {
                $(this).addClass(activeClass);
                $(this).find('.navigation-site-page__teaser').slideDown();
                currentIndex = $($selectors).index($(this));
            }
    });
}