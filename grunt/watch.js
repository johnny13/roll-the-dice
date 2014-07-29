module.exports = function(grunt) {
  grunt.config('watch', {
    scripts: {
      files: ['src/**/*'],
      tasks: ['default']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
