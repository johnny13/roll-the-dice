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
    },

    watch: {
      scripts: {
        files: 'src/*.*',
        tasks: ['default']
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js']
    }
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-include-replace');

  // Tasks
  grunt.registerTask('default', ['jshint', 'includereplace']);

};
