const enModels = require("./src/db/models.en.js");
const itModels = require("./src/db/models.it.js");
const sass = require("node-sass");
const imagemin = {
  mozjpeg: require('imagemin-mozjpeg'),
  gifsicle: require('imagemin-gifsicle'),
  jpegtran: require('imagemin-jpegtran'),
  optipng: require('imagemin-optipng'),
  svgo: require('imagemin-svgo')
}

module.exports = function (grunt) {
  // Path relative to js folder
  var vendorScripts = [
    "/vendor/flickity.pkgd.min.js",
    "/vendor/flickity-fade.js",
    "/vendor/aos.js"
  ];
  // Path relative to js folder
  var appScripts = [
    "/util.js",
    "/dark-theme.js",
    "/app.js"
  ]

  // Path relative to css folder
  var css = [
    '/aos.css',
    '/flickity.min.css',
    '/flickity-fade.css',
    '/googlefonts.css',
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: { implementation: sass },
        files: { 'dist/css/app.css': 'src/sass/app.sass' }
      }
    },

    cssmin: {
      dist: { 
        files: { 
          'dist/css/bundle.min.css': [ css.map(f => 'src/css' + f), 'dist/css/app.css' ] 
        } 
      }
    },

    ejs: {
      en: {
        files: [{
          expand: true,
          cwd: 'src/views',
          src: ['**/*.ejs', '!**/_*.ejs', '!**/partials/**', '!**/components/**', '!**/projects/**'],
          dest: 'dist/en',
          ext: '.html'
        }],
        options: enModels
      },
      it: {
        files: [{
          expand: true,
          cwd: 'src/views',
          src: ['**/*.ejs', '!**/_*.ejs', '!**/partials/**', '!**/components/**', '!**/projects/**'],
          dest: 'dist/it',
          ext: '.html'
        }],
        options: itModels
      }
    },

    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015'],
        plugins: ['transform-remove-strict-mode']
      },
      src: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['js/**/*.js', '!js/vendor/**/*.js'],
          dest: 'dist/'
        }]
      }
    },

    uglify: {
      dev: {
        options: {
          beautify: true,
          mangle : false, 
          compress: false
        },
        files: { 
          'dist/js/bundle.min.js': [
            vendorScripts.map(f => 'src/js' + f),
            appScripts.map(f => 'dist/js' + f),
          ]
        }
      },
      dist: {
        options: {
          beautify: false,
          mangle : true, 
          compress: true
        },
        files: { 
          'dist/js/bundle.min.js': [
            vendorScripts.map(f => 'src/js' + f),
            appScripts.map(f => 'dist/js' + f),
          ]
        }
      }
    },

    imagemin: {
      dist: {
        options: { 
          optimizationLevel: 1,
          use: [
            imagemin.mozjpeg({ quality: 90 }), 
            imagemin.gifsicle(), 
            imagemin.jpegtran({ progressive: true }), 
            imagemin.optipng(), 
            imagemin.svgo()
          ]
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.{png,jpg,gif}', '!**/projects/**/*'],
          dest: 'dist/'
        }]
      }
    },

    cwebp: {
      dist: {
        options: { q: 100 },
        files: [{
          expand: true,
          cwd: 'dist/images/', 
          src: ['**/*.{png,jpg}'],
          dest: 'dist/images/webp/'
        }]
      }
    },

    sync: {
      dist: {
        files: [{
          cwd: 'src/',
          src: [
            '**',
            '!**/*.{png,jpg,gif}',
            '!**/sass/**',
            '!**/components/**',
            '!**/partials/**',
            '!**/*.sass',
            '!**/*.ejs',
            '!**/js/**',
            '!**/css/**',
            '!**/db/**'
          ],
          dest: 'dist/'
        }],
        verbose: true
      }
    },

    clean: {
      dist: {
        src: [
          'dist/views/**',
          'dist/css/**/*',
          '!dist/css/bundle.min.css',
          'dist/js/**/*',
          '!dist/js/bundle.min.js',
          'dist/images/projects/**'
        ]
      },
      reset: { src: ['dist/'] }
    },

    sitemap: {
      dist: {
        pattern: ['dist/**/*.html', '!**/google*.html'], // this will exclude 'google*.html'
        siteRoot: 'dist/',
        homepage: 'https://fabio.sangregorio.dev/'
      }
    },

    browserSync: {
      dist: {
        bsFiles: { src: ['dist/**/*.*'] },
        options: {
          watchTask: true,
          server: {
            baseDir: './dist',
            index: 'index.html'
          }
        }
      }
    },
    
    watch: {
      js: {
        files: ['src/**/*.js'],
        tasks: ['babel', 'sync', 'uglify:dev', 'clean:dist']
      },
      html: {
        files: ['src/**/*.ejs'],
        tasks: ['ejs']
      },
      sass: {
        files: ['src/**/*.sass'],
        tasks: ['sass', 'sync', 'cssmin', 'clean:dist']
      },
      images: {
        files: ['src/**/*.{png,jpg,gif}'],
        tasks: ['imagemin', 'cwebp', 'clean:dist']
      },
      default: {
        files: [
          'src/**/*.*',
          '!src/**/*.js',
          '!src/**/*.ejs',
          '!src/**/*.sass',
          '!src/**/*.{png,jpg,gif}'
        ],
        tasks: ['sync', 'clean:dist']
      },
    }
  });

  grunt.loadNpmTasks('grunt-sync');
  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-ejs-locals');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-sitemap');
  grunt.loadNpmTasks('grunt-cwebp');

  grunt.registerTask('default', ['clean:reset', 'sass', 'babel', 'ejs:en', 'ejs:it', 'sync', 'cssmin', 'uglify:dev', 'imagemin', 'cwebp', 'clean:dist',  'browserSync', 'watch']);
  grunt.registerTask('build', ['clean:reset', 'sass', 'babel', 'ejs:en', 'ejs:it', 'sync', 'cssmin', 'uglify:dist', 'imagemin', 'cwebp', 'clean:dist', 'sitemap']);
};