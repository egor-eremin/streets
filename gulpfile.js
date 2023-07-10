const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const del = require('del');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const cache = require('gulp-cache');

function compileSass() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sass())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
}

gulp.task('sass', compileSass);

function serve() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		notify: false
	});

	gulp.watch('app/sass/**/*.sass', compileSass);
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
}

gulp.task('browser-sync', serve);

gulp.task('scripts', function() {
	return gulp.src([
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
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
});

gulp.task('css-gather', function() {
	return gulp.src([
		'app/lib/magnific-popup/dist/magnific-popup.css',
		'app/lib/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css',
		'app/lib/slick-carousel/slick/slick.css',
		'app/css/lib/animate.css',
		'app/css/lib/hover.css'
	])
		.pipe(concat('libs.css'))
		.pipe(cssnano())
		.pipe(gulp.dest('app/css'));
});

gulp.task('css-libs', gulp.series('sass', function() {
	return gulp.src('app/css/libs.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css'));
}));

gulp.task('clean', function() {
	return del('dist');
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('build', gulp.series('clean', 'img', 'sass', 'css-gather', 'scripts', function() {
	const buildCss = gulp.src([
		'app/css/main.css',
		'app/css/template.css',
		'app/css/libs.min.css'
	])
		.pipe(gulp.dest('dist/css'));

	const buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	const buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	const buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));

	const buildImage = gulp.src('app/images/**/*')
		.pipe(gulp.dest('dist/images'));
}));

gulp.task('watch', gulp.series('browser-sync', 'css-gather', 'css-libs', 'sass', 'scripts', function() {
	gulp.watch('app/sass/**/*.sass', compileSass);
	gulp.watch('app/css/**/*.css').on('change', browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
}));

gulp.task('clear', function () {
	return cache.clearAll();
});

gulp.task('default', gulp.series('watch'));
