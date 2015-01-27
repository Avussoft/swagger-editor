'use strict';

module.exports = {
  options: {
    singleQuotes: true,
    bootstrap: function(module, script) {
      return 'angular.module(\'SwaggerEditor\')' +
      '.run([\'$templateCache\', function($templateCache) {' + script + '}]);';
    },
    htmlmin: {
      singleQuotes: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeCommentsFromCDATA: true,
      removeOptionalTags: true,
      assetsDirs: ['dist', 'dist/images']
    }
  },
  dist: {
    src: [
      'app/templates/**/*.html',
      'app/views/**/*.html'
    ],
    dest: 'dist/scripts/templates.js'
  },
  app: {
    options: {
      htmlmin: false
    },
    src: [
      'app/templates/**/*.html',
      'app/views/**/*.html'
    ],
    dest: 'app/scripts/templates.js'
  }
};
