module.exports = function(grunt) {
  grunt.config('jshint', {
    files: ['Gruntfile.js', 'src/**/*.js'],
    options: {
      jshintrc: '.jshintrc'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
