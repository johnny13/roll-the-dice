module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    includereplace: {
      target: {
        options: {
          globals: {
            pkg_title: '<%= pkg.title %>'
          }
        },
        src: 'src/index.html',
        dest: 'index.html'
      }
    }
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-include-replace');

  // Tasks
  grunt.registerTask('default', ['includereplace']);

};
