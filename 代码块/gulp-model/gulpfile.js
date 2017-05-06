var gulp = require("gulp"),
    less = require("gulp-less"),
    browserSync = require("browser-sync"), // 获得对象
    path = {  // 定义路径
        HTML : "html/*.html",
        LESS : "less/*.less",
        CSS : "style/*.css",
        JS : "js/*.js"
    };

gulp.task("serve", ["less", "js-watch","css","html"], function() {
    browserSync.init({
        server : "./" //设置监听的文件名，默认监听所在文件下的index.html
    });

    gulp.watch(path.LESS, ["less"]);   //监视less文件的改变，改变后调用less任务
    gulp.watch(path.JS, ["js-watch"]);
    gulp.watch(path.CSS,["css"]);
    gulp.watch(path.HTML, ["html"]);
    gulp.watch(path.HTML).on("change", function() {
        browserSync.reload;  // 重新加载
    });
});


gulp.task("less", function() { // 将less编译为css 
     gulp.src(path.LESS)
        .pipe(less()) 
        .pipe(gulp.dest("style/")) //less编译后的CSS存放的文件夹,替换掉与less文件名对应的css
        .pipe(browserSync.stream());
})


gulp.task("js-watch", function() { // 等监听时调用，取到js/*.js
    gulp.src(path.JS)
    .pipe(browserSync.stream());
})

gulp.task("html", function() {  // 等监听时调用，取到html/*.html
   gulp.src(path.HTML)
    .pipe(browserSync.stream());
})
gulp.task("css", function() {  // 等监听时调用，取到style/*.css
    gulp.src(path.CSS)
        .pipe(browserSync.stream());
})

gulp.task("default", ["serve"]); // 设置默认任务

//如果想添加对CSS的监听,想上面监听less html js 一样
//我既然用了less就不用监听css了
