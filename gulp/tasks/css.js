/**
 * Dependencies
 */
const gulp   = require('gulp');
const less   = require('gulp-less');
const prefix = require('gulp-autoprefixer');

const LessPluginSemanticUI = require('less-plugin-semantic-ui');
const SemanticUIPlugin = new LessPluginSemanticUI();


/**
 * Module body
 */
module.exports = (entry, config) => {
  config = config || {};
  config.less = config.less || {};
  config.autoprefixer = config.autoprefixer || {};

  return gulp.src(entry)
    .pipe(less(config.less, {plugins: [SemanticUIPlugin]}))
    .pipe(prefix(config.autoprefixer));
};
