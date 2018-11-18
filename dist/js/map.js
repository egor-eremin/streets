$(document).ready(function () {
    if ($('div').is('#map-all-shops')) {
        ymaps.ready(init);

        function init() {



            var myMap = new ymaps.Map('map-all-shops', {

                center: [52.3156743885688,104.27507699999998],
                zoom: 11,
                controls: [],

            });

            ZoomLayout = ymaps.templateLayoutFactory.createClass("<div id='control-map'></div>", {
                build: function () {
                    ZoomLayout.superclass.build.call(this);
                    this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                    this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);
                    $('.plus').bind('click', this.zoomInCallback);
                    $('.minus').bind('click', this.zoomOutCallback);
                },

                clear: function () {
                    $('.plus').unbind('click', this.zoomInCallback);
                    $('.minus').unbind('click', this.zoomOutCallback);
                    ZoomLayout.superclass.clear.call(this);
                },

                zoomIn: function () {
                    var map = this.getData().control.getMap();
                    map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
                },
                zoomOut: function () {
                    var map = this.getData().control.getMap();
                    map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
                },
            });



            zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout}});
            myMap.behaviors.disable('scrollZoom');
            myMap.controls.add(zoomControl);

            // var html = '<div class="projects__item-in">';
            // html += '<span>Газпром</span>';
            // html += '<span>Инженерный проект 1</span>';
            // html += '<span>Иркутск</span>';
            // html += '<button type="button" data-project="project-1" class="projects__item-in-link">Подробнее</button>';
            // html += '</div>';
            var html = '';

            var myPlacemark1 = new ymaps.Placemark([52.29778, 104.3],
                {balloonContent: html},
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );
            myMap.geoObjects.add(myPlacemark1);

            var myPlacemark2 = new ymaps.Placemark([52.49778, 104.49639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark2);


            var myPlacemark3 = new ymaps.Placemark([52.39778, 104.39639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark3);

            var myPlacemark4 = new ymaps.Placemark([52.19778, 104.19639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark4);

            var myPlacemark5 = new ymaps.Placemark([53.59778, 104.59639],
                {
                    balloonContent: html,
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark5);

            var myPlacemark6 = new ymaps.Placemark([55.29778, 110.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark6);

            var myPlacemark7 = new ymaps.Placemark([53.29778, 100.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark7);

            var myPlacemark8 = new ymaps.Placemark([54.29778, 90.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark8);

            var myPlacemark9 = new ymaps.Placemark([54.29778, 95.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark9);

            var myPlacemark10 = new ymaps.Placemark([55.29778, 93.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark10);

            var myPlacemark11 = new ymaps.Placemark([52.29778, 115.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark11);

            var myPlacemark12 = new ymaps.Placemark([52.29778, 115.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark12);

            var myPlacemark13 = new ymaps.Placemark([52.29778, 115.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark13);

            var myPlacemark14 = new ymaps.Placemark([52.29778, 115.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark14);

            var myPlacemark15 = new ymaps.Placemark([52.29778, 115.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark15);

            var myPlacemark20 = new ymaps.Placemark([55.29778, 126.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark20);

            var myPlacemark21 = new ymaps.Placemark([55.29778, 126.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark21);

            var myPlacemark22 = new ymaps.Placemark([54.29778, 125.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark22);

            var myPlacemark23 = new ymaps.Placemark([55.29778, 125.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark23);

            var myPlacemark31 = new ymaps.Placemark([54.29778, 132.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark31);


            var myPlacemark32 = new ymaps.Placemark([54.29778, 132.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark32);


            var myPlacemark33 = new ymaps.Placemark([54.29778, 132.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark33);


            var myPlacemark34 = new ymaps.Placemark([54.29778, 132.29639],
                {
                    balloonContent: html,

                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/object/map-icon.png',
                    iconImageSize: [90, 100],
                    iconImageOffset: [-45, -72],

                    balloonContentSize: [90, 100],
                    balloonLayout: "default#imageWithContent",
                    balloonImageSize: [0, 0], balloonShadow: false,
                    hideIconOnBalloonOpen: false
                }
            );

            myMap.geoObjects.add(myPlacemark34);
        }

    }
});
