var gulp = require('gulp');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var ngHtml2Js = require("gulp-ng-html2js");
var concat = require("gulp-concat");
var source = {

  js: {
    app: [
      'src/**/*.coffee'
    ],
  },





};
var  build ='build';


gulp.task('template', function () {
  gulp.src("./src/*.html")
      .pipe(ngHtml2Js({
          moduleName: "newbeeTable",
                  prefix: "src"
      }))
      .pipe(gulp.dest(build));
});



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





gulp.task('css', function() {
  gulp.src("src/style.css")
    .pipe(gulp.dest(build));
});

gulp.task('watch', function () {
    gulp.watch(source.js.app, ['compile_coffee','css']);
});

gulp.task('default',['compile_coffee','css','watch','template'], function() {
  // place code for your default task here
});

gulp.task("dist", function() {

  gulp.src(['build/directive.js','build/table.js'])
    .pipe(concat("newbeeTable.min.js"))
    .pipe(gulp.dest("./dist"));

});
