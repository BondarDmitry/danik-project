/*
 *
 * Определяем переменные
 *
 */

var gulp = require('gulp'), // Сообственно Gulp JS
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов
    csso = require('gulp-csso'), // Минификация CSS
    sass = require('gulp-sass'); // Конверстация SASS (SCSS) в CSS

/*
 *
 * Создаем задачи (таски)
 *
 */

// Задача "sass". Запускается командой "gulp sass"
gulp.task('sass', function () {
	gulp.src('./assets/styles/style.scss') // файл, который обрабатываем
		.pipe(sass().on('error', sass.logError)) // конвертируем sass в css
		.pipe(csso()) // минифицируем css, полученный на предыдущем шаге
		.pipe(gulp.dest('./css/')); // результат пишем по указанному адресу
});

// Задача "js". Запускается командой "gulp js"
gulp.task('js', function() {
    gulp.src([
                './assets/javascripts/jquery-3.3.1.min.js',
                './assets/javascripts/wow.min.js',
                './assets/javascripts/script.js'
        ]) // файлы, которые обрабатываем
        .pipe(concat('min.js')) // склеиваем все JS
        .pipe(uglify()) // получившуюся "портянку" минифицируем
        .pipe(gulp.dest('./js/')) // результат пишем по указанному адресу
});

// Задача "watch". Запускается командой "gulp watch"
// Она следит за изменениями файлов и автоматически запускает другие задачи
gulp.task('watch', function () {
	// При изменение файлов *.scss в папке "styles" и подпапках запускаем задачу sass
	gulp.watch('./assets/styles/**/*.scss', ['sass']);
	// При изменение файлов *.js папке "javascripts" и подпапках запускаем задачу js
	gulp.watch('./assets/javascripts/**/*.js', ['js']);
	// При изменение любых файлов в папке "images" и подпапках запускаем задачу images
	// gulp.watch('./assets/images/**/*', ['images']);
});
