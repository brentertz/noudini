'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var debug = grunt.option('env') !== 'production';

  grunt.config('env.' + grunt.option('env'), true);

  grunt.config('clean', ['./build']);

  grunt.config('browserify', {
    app: {
      files: {
        './build/assets/index.js': ['./src/index.js']
      },
      options: {
        debug: debug,
        watch: true
      }
    }
  });

  grunt.config('uglify', {
    scripts: {
      src: './build/assets/index.js',
      dest: './build/assets/index.min.js',
      options: {
        mangle: false
      }
    }
  });

  grunt.config('copy', {
    html: {
      src: './src/index.html',
      dest: './build/index.html',
      options: {
        process: function(content, srcpath) {
          return grunt.template.process(content);
        }
      }
    }
  });

  grunt.config('less', {
    styles: {
      src: './src/styles.less',
      dest: './build/assets/styles.css',
      options: {
        dumpLineNumbers: debug ? 'all' : false,
        sourceMap: debug,
        outputSourceFiles: debug,
        cleancss: !debug
      }
    }
  });

  grunt.config('jshint', {
    options: {
      jshintrc: true
    },
    all: ['./Gruntfile.js', './src/**/*.js', './test/**/*.js']
  });

  grunt.config('watch', {
    html: {
      files: ['./src/index.html'],
      tasks: ['copy:html']
    },
    less: {
      files: ['./src/**/*.less'],
      tasks: ['less']
    },
    jshint: {
      files: ['./Gruntfile.js', './src/**/*.js', './test/**/*.js'],
      tasks: ['jshint']
    }
  });

  grunt.registerTask('build', ['clean', 'jshint', 'browserify', 'uglify', 'copy', 'less']);

  grunt.registerTask('default', ['build']);
};
