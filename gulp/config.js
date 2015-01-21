var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  sass: {
    src: src + "/sass/*.{sass,scss}",
    origin: src,
    dest: dest + "/css",
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: '/img' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/img/**",
    dest: dest + "/img"
  },
  markup: {
    src: ["src/**/*.md", "src/**/*.html", "src/**/*.xml", "src/**/*.txt"],
    dest: dest
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/global.coffee',
      dest: dest,
      outputName: 'global.js',
      // Additional file extentions to make optional
      extensions: ['.coffee', '.hbs'],
      // list of modules to make require-able externally
      require: ['jquery', 'underscore']
    }, {
      entries: src + '/js/page.js',
      dest: dest,
      outputName: 'page.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery', 'underscore']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
