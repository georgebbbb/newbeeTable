var gulp = require('gulp');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');

var source = {

  js: {
    app: [
      'src/**/*.coffee'
    ],
  },





};
var  build ='build';

gulp.task('validate_coffee', function () {
  gulp.src(source.js.app)
    .pipe(coffeelint())
    .pipe(coffeelint.reporter());
});

gulp.task('compile_coffee', ['validate_coffee'], function() {
  gulp.src(source.js.app)

    .pipe(coffee({bare: true}).on('error', console.log))
    .pipe(gulp.dest(build));
});
gulp.task('watch', function () {
    gulp.watch(source.js.app, ['compile_coffee']);
});

gulp.task('default',['compile_coffee','watch'], function() {
  // place code for your default task here
});
