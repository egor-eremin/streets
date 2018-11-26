$(document).ready(function () {
	'use strict';
    $(function () {
        objectFitImages()
    });
	(function scrollBottom() {
		if ($('.two-side-wrapper').length > 0) {
			$('.scroll-down').on('click', function () {
                $('html, body').animate({scrollTop:$('.main-content').position().top}, 1000);
            });
		}
    })();
	(function toggleProductsMenu() {
        toggleMenuItem($('.menu-products'), $('.product-menu'));
    })();
    (function closeSubMenuWrapper() {
        if ($('.sub-menu-wrapper-close')) {
            $('.sub-menu-wrapper-close').on('click', function () {
               $('.sub-menu-wrapper').removeClass('active');
               $('.sub-menu-wrapper-close').removeClass('active');
               $('.main-menu__with-sub').removeClass('active');
            });
        }
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
        openModalPopup('.btn-callback', '#callback-popup');
    })();

    (function activateModalReviewForm() {
        $('.write-review').magnificPopup({
            type: 'inline',
            mainClass: 'main-modal main-modal_review',
            items: {
                src: '#leave-feedback',
            },
        });
    })();

	(function addPhoneMask() {
        $('.phone-input').mask('+7 (000) 000-00-00');
    })();
	
	(function validationCallBackForm() {
        validationForm('#callback-form', '.thank-you-text', '.wrong-text')
    })();

    (function validationReviewForm() {
        validationForm('#review-form', '.thank-you-text_review', '.wrong-text_review')
    })();

    (function validationResponse() {
        $('#form-response').validate({
            submitHandler: function(form) {
                $.ajax({
                    type: $(form).attr('method'),
                    url: $(form).attr('action'),
                    data: $(form).serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if(parseInt(data.success) == 1) {
                            $('#form-response').addClass('hide-information');
                            $('.response-thank-you').addClass('show');
                        } else {
                            $('#form-response').addClass('hide-information');
                            $('.response-wrong-text').addClass('show');
                        }
                    },
                    error: function() {
                        $('#form-response').addClass('hide-information');
                        $('.response-wrong-text').addClass('show');
                    }
                });
                return false;
            },
        });
    })();

    (function toggleMobileAsideMenu() {
        if ($('.navigation-site-page-header_mobile').length > 0) {
            $('.navigation-site-page-header__open-all').on('click', function () {
               if (!$(this).hasClass('active')) {
                   $(this).addClass('active');
                   $('.navigation-site-page-header__all-wrapper').slideDown(300);
               } else {
                   $(this).removeClass('active');
                   $('.navigation-site-page-header__all-wrapper').slideUp(300);
               }
            });
        }
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

        var time = 2;
        var $slick = $('.main-slider__list'),
            isPause,
            tick,
            percentTime = 0;

        $slick.on('init', function(e, slick) {
            $('.slick-arrow').wrapAll('<div class=\'main-slider-arrow\'></div>');
            percentTime = 0;
            startProgressbar();
        });
        $slick.slick({
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
            '</svg>' +
             '<svg class="progress-round" width="50" height="50">' +
                '<circle class="circle-progress" r="24" cx="50%" cy="50%">'+
                '</circle>'+
             '</svg>' +
            '</button>'
        });
        $slick.on('beforeChange', function(slick, currentSlide, nextSlide){
            percentTime = 0;
            startProgressbar();
        });

        function startProgressbar() {
            clearTimeout(tick);
            // isPause = false;
            tick = setInterval(interval, 20);
            // $rbar.fadeIn('slow');
        }
        var $rbar = $('.circle-progress');
        var rlen = 2 * Math.PI * $rbar.attr('r');

        function interval() {
            // if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            $rbar.css({
                strokeDasharray: rlen,
                strokeDashoffset: rlen * (1 - percentTime / 100)
            });
            if (percentTime >= 100) {
                $slick.slick('slickNext');
                percentTime = 0;
                startProgressbar();
            }
            }

        })();

    (function initPageSlider(){
        if($('.page-slider').length > 0) {
            counterSlide('.page-slider-image', '.page-slider-navigation', '.page-slider__current', '.page-slider__total');
            initSlider('.page-slider-image');
        }
    })();

    (function openMobileMenu() {
        if ($('.mobile-burger_open').length > 0) {
            $('.mobile-burger_open').on('click', function () {
               if (!$('.mobile-menu').hasClass('active')) {
                   $('.mobile-menu').addClass('active');
                   $('.close-mobile-menu').addClass('active');
                   $('body').addClass('no-scroll');
               }
            });
        }
    })();

    (function closeMobileMenu() {
        if ($('.mobile-burger_close').length > 0) {
            $('.mobile-burger_close, .close-mobile-menu').on('click', function () {
                animatedScrollToPosition($('.mobile-menu_scroll-wrapper'), 0, 0);
                closeMenu();
                $('body').removeClass('no-scroll');
            });
        }
    })();

    (function openMobileSubMenu() {
        $('.with-submenu').on('click', function (e) {
            e.preventDefault();
            var anchorSubMenu = $(this).attr('href').slice(1);

            $('#' + anchorSubMenu).addClass('active');
            $('.mobile-menu_scroll-wrapper').addClass('hide');
        });
    })();

    (function hideMobileSubMenu() {
        $('.mobile-submenu__go-back').on('click', function () {
           var thisParent = $(this).parents('.mobile-submenu');

            thisParent.removeClass('active');
            $('.mobile-menu_scroll-wrapper').removeClass('hide');
        });
    })();

    (function hideAdressBarInMobBroser() {
        if ($('.mobile-menu').length > 0) {
            function calcVH() {
                var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                var thisElement = document.getElementsByClassName("mobile-menu")[0];
                thisElement.setAttribute("style", "height:" + vH + "px;");
            }

            calcVH();
            window.addEventListener('onorientationchange', calcVH, true);
            window.addEventListener('resize', calcVH, true);
        }
    })();

    (function initHistoryTabList() {
       if ($('.tab-section').length > 0) {
           tabSwitched('.tab-switch','.tab-area', true);
       }
    })();

    (function initHistoryScion() {
        if ($('.tab-scion').length > 0) {
            var activeIndex = $('.tab-switch.active').attr('href').slice(1);

            $('.tab-scion__item[data-tab-index="' + activeIndex + '"]').show();

            $('.tab-switch').on('click', function () {
               var thisIndex = $(this).attr('href').slice(1);

                $('.tab-scion__item').hide();
                $('.tab-scion__item[data-tab-index="' + thisIndex + '"]').show();
            });
        }
    })();

    (function initCertificateSlider() {
        if ($('.page-slider').length > 0) {

            counterSlide('.page-slider-certificates', '.page-slider-navigation', '.page-slider__current', '.page-slider__total');
            $('.page-slider-certificates').slick({
                swipe: true,
                infinite: true,
                slidesToSHow: 1,
                slidesToScroll: 1,
                centerMode: true,
                prevArrow: '<button type="button" class="slick-arrow  slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="12.969" height="23" viewBox="0 0 12.969 23">\n' +
                '<defs>\n' +
                '    <style>\n' +
                '      .main-arrow-prev {\n' +
                '        fill: rgba(255, 255, 255, 0.5);\n' +
                '        fill-rule: evenodd;\n' +
                '      }\n' +
                '    </style>\n' +
                '  </defs>\n' +
                '  <path class="main-arrow-prev" d="M431.449,235.835L423.19,227.5l8.26-8.336A1.854,1.854,0,0,0,430.175,216h0a1.791,1.791,0,0,0-1.274.535l-9.2,9.28a2.4,2.4,0,0,0,0,3.37l9.2,9.28a1.794,1.794,0,0,0,1.274.534h0A1.854,1.854,0,0,0,431.449,235.835Z" transform="translate(-419.031 -216)"/>\n' +
                '</svg></button>',
                nextArrow: '<button type="button" class="slick-arrow  slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23">\n' +
                '<defs>\n' +
                '    <style>\n' +
                '      .main-slider-next {\n' +
                '        fill: rgba(255, 255, 255, 0.5);\n' +
                '        fill-rule: evenodd;\n' +
                '      }\n' +
                '    </style>\n' +
                '  </defs>\n' +
                '  <path class="main-slider-next" d="M500.551,235.835l8.259-8.335-8.26-8.336A1.854,1.854,0,0,1,501.825,216h0a1.791,1.791,0,0,1,1.275.535l9.2,9.28a2.4,2.4,0,0,1,0,3.37l-9.2,9.28a1.8,1.8,0,0,1-1.275.534h0A1.854,1.854,0,0,1,500.551,235.835Z" transform="translate(-500 -216)"/>\n' +
                '</svg></button>',
            });
        }
    })();

    (function accorrdionVacancy() {
        if ('.accordion-vacancy') {
            initAccordion('.accordion-title', '.accordion__content');
        }
    })();

    (function scrollTopVacancy() {
        if ($('.accordion-vacancy').length > 0) {
            $('.accordion-title').on('click', function () {
                var thisCoordinate = $(this).position().top;

                setTimeout(function () {
                    $('.content-text--with-scroll').mCustomScrollbar("scrollTo",thisCoordinate);
                }, 300);
            });
        }
    })();

    (function initCustomInputFile() {
        if ($('.custom-input-file').length > 0) {
            var fileInput  = document.querySelector( ".custom-input-file" ),
                button     = document.querySelector( ".input-file-trigger" ),
                the_return = document.querySelector(".file-return");

            button.addEventListener( "keydown", function( event ) {
                if ( event.keyCode == 13 || event.keyCode == 32 ) {
                    fileInput.focus();
                }
            });
            button.addEventListener( "click", function( event ) {
                fileInput.focus();
                return false;
            });
            fileInput.addEventListener( "change", function( event ) {
                the_return.innerHTML = this.value;
            });
        }
    })();
    
    (function initReviewsSlider() {
        if ($('.reviews-slider').length > 0) {
            $('.reviews-slider').slick({
                arrows:true,
                slidesToSHow: 1,
                slidesToScroll: 1,
                infinite: true,
                fade: true,
                asNavFor: '.reviews-slider-navigate',
                prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14.97" height="26" viewBox="0 0 14.97 26">\n' +
                '<defs>\n' +
                '    <style>\n' +
                '      .reviews-arrow-left {\n' +
                '        fill: #fff;\n' +
                '        fill-rule: evenodd;\n' +
                '      }\n' +
                '    </style>\n' +
                '  </defs>\n' +
                '  <path class="reviews-arrow-left" d="M1058.36,489.422L1048.83,480l9.54-9.424a2.094,2.094,0,0,0-1.48-3.576h0a2.089,2.089,0,0,0-1.47.6L1044.81,478.1a2.68,2.68,0,0,0,0,3.81l10.61,10.49a2.089,2.089,0,0,0,1.47.6h0A2.09,2.09,0,0,0,1058.36,489.422Z" transform="translate(-1044.03 -467)"/>\n' +
                '</svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="26" viewBox="0 0 15 26">\n' +
                '<defs>\n' +
                '    <style>\n' +
                '    .reviews-arrow-right {\n' +
                '        fill: #fff;\n' +
                '        fill-rule: evenodd;\n' +
                '      }\n' +
                '    </style>\n' +
                '  </defs>\n' +
                '  <path class="reviews-arrow-right" d="M1513.63,489.422l9.54-9.422-9.54-9.424a2.094,2.094,0,0,1,1.48-3.576h0a2.089,2.089,0,0,1,1.47.6l10.61,10.491a2.68,2.68,0,0,1,0,3.81l-10.61,10.49a2.089,2.089,0,0,1-1.47.6h0A2.1,2.1,0,0,1,1513.63,489.422Z" transform="translate(-1513 -467)"/>\n' +
                '</svg></button>',
                responsive: [
                    {
                        breakpoint: 641,
                        settings: {
                            dots: true,
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 4000,
                        }
                    },
                ]
            });
        }
    })();

    (function initPrevReviewsSlider() {
        if ($('.reviews-slider').length > 0) {
            $('.reviews-slider-navigate').slick({
                slidesToSHow: 1,
                slidesToScroll: 1,
                fade: true,
                arrows: false,
                asNavFor: '.reviews-slider',
            });
        }
    })();
    
    (function initStarsRating() {
        if ($('.stars').length > 0) {
            $('.radio-star').change(function () {
                var thisWrapper = $(this).parents('.stars');
                var thisParent = $(this).parents('.stars__item');

                thisWrapper.addClass('starsActive');

                if (!thisParent.hasClass('active')) {
                    $('.stars__item').removeClass('active');
                    thisParent.addClass('active');
                }

            });
        }
    })();



	//Медиа-запросы в javascript (Если нужно)
	//-------------------------------------------------------------------------------------------------------
    
    
	media('all and (min-height: 901px)', function(){
        (function initCustomScrollbar() {
            if($('.content-text--with-scroll').length > 0) {
                $('.content-text--with-scroll').mCustomScrollbar({
                    axis: 'y',
                    scrollbarPosition: 'inside',
                    theme: 'light',
                    autoHideScrollbar: false,
                });
            }
        })();
	});
   
	media('all and (max-height: 900px)', function(){
        (function destroyCustomScrollbar() {
            if($('.content-text--with-scroll').length > 0) {
                $('.content-text--with-scroll').mCustomScrollbar('destroy');
            }
        })();
	});

	media('all and (max-width: 1024px)', function () {
        (function scrollTopAccordeon() {
            if ($('.accordion').length > 0) {
                $('.accordion-title').on('click', function () {
                    var thisCoordinate = $(this).offset().top;
                    $('html, body').animate({
                        scrollTop: thisCoordinate - 10
                    }, 1000);
                })
            }
        })();
    });
});

function validationForm(formInit, textGood, textBad) {
    $(formInit).validate({
        submitHandler: function(form) {
            $.ajax({
                type: $(form).attr('method'),
                url: $(form).attr('action'),
                data: $(form).serialize(),
                dataType: 'json',
                success: function (data) {
                    if(parseInt(data.success) == 1) {
                        $(formInit).addClass('hide-information');
                        $(textGood).addClass('show');
                    } else {
                        $(formInit).addClass('hide-information');
                        $(textBad).addClass('show');
                    }
                },
                error: function() {
                    $(formInit).addClass('hide-information');
                    console.log(formInit);
                    $(textBad).addClass('show');
                }
            });
            return false;
        },
    });
}

function openModalPopup(button, openPopup) {
    $(button).magnificPopup({
        type: 'inline',
        mainClass: 'main-modal',
        items: {
            src: openPopup,
        },
    });
}

function initAccordion(buttonOpen, sectionOpen) {
    $('' + buttonOpen +'').on('click', function () {
        var thisSibling = $(this).siblings('' + sectionOpen + '');
       if (!$(this).hasClass('active')) {
           $(this).addClass('active');
           thisSibling.slideDown(300);
       } else {
           $(this).removeClass('active');
           thisSibling.slideUp(300);
       }
    });
}

function counterSlide(selectorSlider, selectorNavigationBlock, currentSlideSelect, totalSlide) {
    $('' + selectorSlider + '').on('init', function(event, slick){
        var slideCount = slick.slideCount,
            currentSlide = slick.currentSlide + 1;
        var thisSiblings = $(this).siblings('' + selectorNavigationBlock + '');
        var thisNavigationButton = $(this).find('.slick-arrow');
        $('' + currentSlideSelect + '').html(String(currentSlide));
        $('' + totalSlide + '').html(String(slideCount));
        thisNavigationButton.appendTo(thisSiblings);

    });

    $('' + selectorSlider + '').on('breakpoint', function(event, slick, breakpoint){
        var thisSiblings = $(this).siblings('' + selectorNavigationBlock + '');
        var thisNavigationButton = $(this).find('.slick-arrow');

        thisNavigationButton.appendTo(thisSiblings);
    });

    $('' + selectorSlider + '').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var slideText = nextSlide + 1,
            slideCount = slick.slideCount;
        $('' + currentSlideSelect + '').html(String(slideText));
        $('' + totalSlide + '').html(String(slideCount));
    });
}

function initSlider(sliderSelector) {
    $('' + sliderSelector + '').slick({
        // appendArrows: $('' + navigationBlock + ''),
        swipe: true,
        infinite: true,
        fade: true,
        slidesToSHow: 1,
        slidesToScroll: 1,
        centerMode: (true) ? true : false,
        prevArrow: '<button type="button" class="slick-arrow  slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="12.969" height="23" viewBox="0 0 12.969 23">\n' +
        '<defs>\n' +
        '    <style>\n' +
        '      .main-arrow-prev {\n' +
        '        fill: rgba(255, 255, 255, 0.5);\n' +
        '        fill-rule: evenodd;\n' +
        '      }\n' +
        '    </style>\n' +
        '  </defs>\n' +
        '  <path class="main-arrow-prev" d="M431.449,235.835L423.19,227.5l8.26-8.336A1.854,1.854,0,0,0,430.175,216h0a1.791,1.791,0,0,0-1.274.535l-9.2,9.28a2.4,2.4,0,0,0,0,3.37l9.2,9.28a1.794,1.794,0,0,0,1.274.534h0A1.854,1.854,0,0,0,431.449,235.835Z" transform="translate(-419.031 -216)"/>\n' +
        '</svg></button>',
        nextArrow: '<button type="button" class="slick-arrow  slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23">\n' +
        '<defs>\n' +
        '    <style>\n' +
        '      .main-slider-next {\n' +
        '        fill: rgba(255, 255, 255, 0.5);\n' +
        '        fill-rule: evenodd;\n' +
        '      }\n' +
        '    </style>\n' +
        '  </defs>\n' +
        '  <path class="main-slider-next" d="M500.551,235.835l8.259-8.335-8.26-8.336A1.854,1.854,0,0,1,501.825,216h0a1.791,1.791,0,0,1,1.275.535l9.2,9.28a2.4,2.4,0,0,1,0,3.37l-9.2,9.28a1.8,1.8,0,0,1-1.275.534h0A1.854,1.854,0,0,1,500.551,235.835Z" transform="translate(-500 -216)"/>\n' +
        '</svg></button>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToScroll: 1,
                    centerMode: true,
                    fade: false,
                }
            },
        ]


    });
}

function unslickSlider(sliderSelector) {
    $('' + sliderSelector + '').slick('unslick');
}

function closeMenu() {
    $('.mobile-menu_scroll-wrapper').removeClass('hide');
    $('.mobile-submenu').removeClass('active');
    if ($('.mobile-menu').hasClass('active')) {
        $('.mobile-menu').removeClass('active');
        $('.close-mobile-menu').removeClass('active');
    }
};

function toggleMenuItem(menu_item, menu_popup) {
    if (menu_item.length > 0) {
        menu_item.on('click', function (e) {
            e.preventDefault();
            if (!menu_popup.hasClass('active')) {
                menu_popup.addClass('active');
                $(this).addClass('active');
                $('.sub-menu-wrapper-close').addClass('active');
            } else {
                menu_popup.removeClass('active');
                $(this).removeClass('active');
                $('.sub-menu-wrapper-close').removeClass('active');
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

function tabSwitched(selectorSwitch, sectionSwitched, sliderTrue) {
    var sectionDefault = $('' + selectorSwitch + '.active').attr('href').slice(1);
    $('#' + sectionDefault).show(300);

    $('' + selectorSwitch + '').on('click', function (e) {
        e.preventDefault();
        var thisSection = $(this).attr('href').slice(1);

        if (!$(this).hasClass('active')) {
            if (sliderTrue) {
                unslickSlider('.page-slider-image');
                initSlider('.page-slider-image', '.page-slider__current', '.page-slider__total', '.page-slider-navigation');
            }
            $('' + selectorSwitch + '').removeClass('active');
            $('' + sectionSwitched + '').hide();
            $(this).addClass('active');
            $('#' + thisSection).show();
        }
    });
}

function setNavMenuInteractive($selectors, activeClass, childBlockClass, parentBlockClass){
    //Навешиваем клик на все элементы выборки
    $selectors.on('click', function (event) {
        var thisSiblings = $(this).siblings('.' + childBlockClass);
        var thisParent = $(this).parents('.' + parentBlockClass);

        event.preventDefault();
        if(!$(thisParent).hasClass(activeClass)) {
            $('.' + parentBlockClass).removeClass(activeClass);
            $(thisParent).addClass(activeClass);
            $('.' + childBlockClass).slideUp(250);
            setTimeout(function(){
                thisSiblings.slideDown(250, function() {
                    thisSiblings.css({display: "block"});
                });
            }, 300);
        } else {
            $(thisParent).removeClass(activeClass);
            thisSiblings.slideUp(250);
        }
    });
}
