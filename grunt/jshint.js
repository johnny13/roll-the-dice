module.exports = function(grunt) {
  grunt.config('jshint', {
    files: ['Gruntfile.js', 'src/**/*.js']
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
