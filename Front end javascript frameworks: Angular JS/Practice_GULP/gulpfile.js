// gulpfile

// Required Modules

var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename');


// TASKS

// TASK Clean
gulp.task('clean', function() {
    console.log('[        ] =>  Clean TASK  - running ... ');
    del(['dist/*.*']).then(paths => {
        console.log('==>   Deleted files and folders  <==\n', paths.join('\n'))
    });
});

// TASK Scripts
gulp.task('script', ['clean'], function() {
    gulp.src('gulpfile.js', {
            base: process.cwd()
        })
        .pipe(rename({
            //dirname: "",
            basename: "gulpfile",
            prefix: "This_Is_The_",
            suffix: "_TEXT",
            extname: ".txt"
        }))
        .pipe(gulp.dest('dist/'));
    console.log('[        ] =>  Script TASK  - running ... ');
});

// TASK Default
gulp.task('default', ['script'], function() {
    console.log('[        ] =>  Default TASK  - running ... ');
});
[]