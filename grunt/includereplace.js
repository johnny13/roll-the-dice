module.exports = function(grunt) {
  grunt.config('includereplace', {
    index: {
      options: {
        globals: {
          pkg_title: '<%= pkg.title %>'
        }
      },
      src: 'src/index.html',
      dest: 'index.html'
    }
  });

  grunt.loadNpmTasks('grunt-include-replace');
};
