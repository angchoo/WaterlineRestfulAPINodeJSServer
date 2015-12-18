/**
 * Created by jfangchoo on 18/06/2015.
 */

var expressConfig=require('./config/express');
    gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: expressConfig.port
        },
        ignore: ['./node_modules/**']

    }).on('restart', function () {
        console.log('Restarting');
    });
});

