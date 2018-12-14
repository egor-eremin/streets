var gulp = require('gulp'),
	sass = require('gulp-sass'), //Подключаем Sass пакет;
	browserSync = require('browser-sync'), // Подключаем Browser Sync
	concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache = require('gulp-cache'); // Подключаем библиотеку кеширования



gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass') // Берем все sass файлы из папки sass и дочерних, если таковые будут
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
		.pipe(sass())
        .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browser Sync
		server: { // Определяем параметры сервера
			baseDir: 'app' // Директория для сервера - app
		},
		notify: false // Отключаем уведомления
	});
});

gulp.task('scripts', function() {
	return gulp.src([ // Берем все необходимые библиотеки
		'app/lib/jquery/dist/jquery.min.js',
		'app/lib/magnific-popup/dist/jquery.magnific-popup.min.js',
		'app/lib/jquery-mask-plugin/dist/jquery.mask.min.js',
		'app/lib/jQuery-viewport-checker/dist/jquery.viewportchecker.min.js',
		'app/lib/jquery-validation/dist/jquery.validate.min.js',
		'app/lib/jquery-validation/dist/additional-methods.min.js',
		'app/lib/jquery-mousewheel/jquery.mousewheel.min.js',
		'app/lib/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
		'app/lib/slick-carousel/slick/slick.min.js',
        'app/lib/scroll-magic/TweenMax.min.js',
		'app/lib/scroll-magic/ScrollMagic.min.js',
		'app/lib/scroll-magic/animation.gsap.min.js',
		'app/lib/object-fit__polifill/ofi.min.js',
		'app/lib/scroll-magic/debug.addIndicators.min.js',
		'app/lib/parallax/parallax.min.js',
	])
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

gulp.task('css-gather', function() {
	return gulp.src([ // Берем все необходимые библиотеки
		
		'app/lib/magnific-popup/dist/magnific-popup.css',
		'app/lib/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css',
		'app/lib/slick-carousel/slick/slick.css',
		'app/css/lib/animate.css',
		'app/css/lib/hover.css'
		
	])
		.pipe(concat('libs.css')) // Собираем их в кучу в новом файле libs.css
		.pipe(cssnano()) // Сжимаем CSS файл
		.pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/libs.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

gulp.task('clean', function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*') // Берем все изображения из app
		.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});




//Запуск в продакшен
gulp.task('build', ['clean', 'img', 'sass', 'css-gather' ,'scripts'], function() {

	var buildCss = gulp.src([ // Переносим CSS стили в продакшен
		'app/css/main.css',
        'app/css/template.css',
		'app/css/libs.min.css'
	])
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
		.pipe(gulp.dest('dist'));

    var buildImage = gulp.src('app/images/**/*') // Переносим IMAGE в продакшен
        .pipe(gulp.dest('dist/images'));

});


gulp.task('watch', ['browser-sync', 'css-gather' ,'css-libs' ,'sass', 'scripts'], function() {

	gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами
	gulp.watch('app/css/**/*.css', browserSync.reload); // Наблюдение за css файлами
	gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
	// Наблюдение за другими типами файлов
});

gulp.task('clear', function () {
	return cache.clearAll();
});

gulp.task('default', ['watch']);