var gulp = require('gulp');
var gulpDebug = require('gulp-debug');
var npmExports = require("gulp-npm-exports");

gulp.task('default', function () {
	return gulp.src('package.json')
		.pipe(npmExports({ exportsJsonFilePath: 'npm-exports.json' }))
		.pipe(gulp.dest('wwwroot'));
});

gulp.task('defaultWatch', function () {
	gulp.watch([
		'package.json', 'npm-exports.json',
		'../node_modules/**/*.*'
	], ['default']);
});
