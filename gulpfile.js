// modified from generator-jekyllized 1.0.0-rc.6
"use strict";
var gulp = require("gulp");
var newer = require("gulp-newer");
var responsive = require("gulp-responsive");
var size = require("gulp-size");
const imagemin = require('gulp-imagemin');

var paths = {
};

// Folder naming conventions.
paths.assetsFolderName = "assets";
paths.imageFolderName = "images";
paths.siteFolderName = "";
paths.sourceFolderName = "/home/ec2-user/environment/legestue";

// Directory locations.
paths.sourceDir = paths.sourceFolderName + "/";
paths.assetsDir = paths.assetsFolderName + "/";

// Paths
paths.imageFiles = paths.sourceDir + paths.assetsDir + paths.imageFolderName;
paths.imagePattern =
  "/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)";
paths.imageFilesGlob = paths.imageFiles + paths.imagePattern;
  
// 'gulp images:optimize' -- optimize images
gulp.task("images:optimize", () => {
  return gulp
    .src(paths.imageFiles + paths.imagePattern)
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng(),
          imagemin.svgo({ plugins: [{ cleanupIDs: false }] })
        ],
        { verbose: true }
      )
    )
    .pipe(gulp.dest(paths.imageFiles));
});

gulp.task(
  "images",
  gulp.series(
    gulp.series(
      "images:optimize"
    )
  )
);
