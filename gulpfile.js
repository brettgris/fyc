// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins

var jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    postcss = require('gulp-postcss'),
    historyApiFallback = require('connect-history-api-fallback'),
    browserSync = require('browser-sync').create();

gulp.task('jade', function() {
    return gulp.src('Development/jade/**/*.jade')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
        }}))
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest("Production/"));
});

gulp.task('postcss', function() {
    var processors = [
        require('precss'),
        require('postcss-cssnext'),
        // require('autoprefixer')({
        //     browsers: 'last 2 versions'
        // }),
        require('css-mqpacker')
        //,require('cssnano')
    ];

    return gulp.src('Development/css/compile/*.css')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
        }}))
        .pipe(postcss(processors))
        .pipe(gulp.dest('Production/css'));
});

gulp.task('react', function () {
    browserify( 'Development/react/App.jsx' )
        .transform(babelify, {presets: ["es2015","react"]})
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(buffer())
        //.pipe(uglify())
        .pipe(gulp.dest('Production/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('Development/jade/**/*.jade', ['jade']);
    gulp.watch('Development/react/**/*.jsx', ['react']);
    gulp.watch('Development/css/**/*.css', ['postcss']);
    gulp.watch(['Production/**/*']).on('change', browserSync.reload);
});

// BROWSER SYNC
gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: "Production/",
            middleware: [ historyApiFallback() ]
        }
    });
});

// Default Task
gulp.task('default', ['jade', 'postcss', 'react', 'watch', 'sync']);