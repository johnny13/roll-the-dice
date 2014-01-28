module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    stencil: {
      main: {
        options: {},
        files: {
          'index.html': ['src/index.dot.html']
        }
      }
    },

    watch: {
      scripts: {
        files: 'src/**/*',
        tasks: ['default']
      }
    }
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-stencil');

  // Tasks
  grunt.registerTask('default', ['stencil']);

};
