const { dest, src, series } = require("gulp");
const spritesmith = require("gulp.spritesmith");
const del = require("del");

const config = {
  input: "./input/*.{png,jpg}",
  output: "./output/",
};

const generateSprites = done => {
  src(config.input)
    .pipe(
      spritesmith({
        imgName: "sprite.png",
        cssName: "sprite.css",
      })
    )
    .pipe(dest(config.output));

  done();
};

const cleanUp = () => {
  return del([config.output]);
};

exports.sprites = series(cleanUp, generateSprites);
