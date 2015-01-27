'use strict';

module.exports = {
  options: {
    singleQuotes: true,
    bootstrap: function(module, script) {
      return 'angular.module(\'SwaggerEditor\')' +
      '.run([\'$templateCache\', function($templateCache) {' + script + '}]);';
    }
  },
  dist: {
    options: {
      htmlmin: '<%= htmlmin.dist %>'
    },
    src: [
      'app/templates/**/*.html',
      'app/views/**/*.html'
    ],
    dest: 'dist/scripts/templates.js'
  },
  app: {
    src: [
      'app/templates/**/*.html',
      'app/views/**/*.html'
    ],
    dest: 'app/scripts/templates.js'
  }
};
