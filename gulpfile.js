//This set up file came from https://github.com/planetoftheweb/reactinterface/tree/master

var gulp = require('gulp'),
    //imports other libraries
    browserify = require('gulp-browserify'),
    //live reload
    webserver = require('gulp-webserver');

var src = './process',
    app = './builds/app';

gulp.task('js', function() {
  return gulp.src( src + '/js/app.js' )
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(app + '/js'));
});

gulp.task('html', function() {
  gulp.src( app + '/**/*.html');
});

gulp.task('css', function() {
  gulp.src( app + '/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch( src + '/js/**/*', ['js']);
  gulp.watch( app + '/css/**/*.css', ['css']);
  gulp.watch([ app + '/**/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src( app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
