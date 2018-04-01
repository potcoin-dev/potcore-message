'use strict';

var gulp = require('gulp');
var potcoreTasks = require('potcore-build');

potcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
