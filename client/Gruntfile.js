'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var debug = grunt.option('env') !== 'production';

  grunt.config('env.' + grunt.option('env'), true);

  grunt.config('clean', ['./build']);

  grunt.config('browserify', {
    options: {
      debug: debug,
      watch: true
    },
    app: {
      files: [
        { src: './src/index.js', dest: './build/assets/index.js' }
      ]
    },
    test: {
      files: [
        { src: './test/unit/index.js', dest: 'build/test.js' }
      ]
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
    },
    fonts: {
      files: [{
        expand: true,
        cwd: './bower_components/font-awesome/fonts',
        src: '*',
        dest: './build/assets/fonts'
      }]
    }
  });

  grunt.config('less', {
    styles: {
      src: './src/styles.less',
      dest: './build/assets/styles.css',
      options: {
        paths: [
          './bower_components/font-awesome/less'
        ],
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

  grunt.config('karma', {
    options: {
      configFile: './test/karma.conf.js'
    },
    run: {},
    watch: {
      options: {
        browsers: ['PhantomJS'],
        background: true,
        singleRun: false
      }
    }
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
    },
    unitTest: {
      files: ['./build/test.js'],
      tasks: ['karma:watch:run']
    }
  });

  grunt.registerTask('test:unit', ['browserify:test', 'karma:run']);
  grunt.registerTask('test', ['test:unit']);
  grunt.registerTask('develop', ['build', 'browserify:test', 'karma:watch:start', 'watch']);
  grunt.registerTask('build', ['clean', 'jshint', 'browserify:app', 'uglify', 'copy', 'less']);

  grunt.registerTask('default', ['build']);
};
