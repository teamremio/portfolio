var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("jekyll:dev", shell.task("jekyll build"));