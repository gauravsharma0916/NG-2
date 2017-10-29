var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({
    // webpack options, such as
    // module: {
    //   loaders: [...] or rules: [...]
    // },
    // externals: { jquery: "jQuery" }
  }
);

module.exports = function (wallaby) {
  return {
    // set `load: false` to all source files and tests processed by webpack
    // (except external files),
    // as they should not be loaded in browser,
    // their wrapped versions will be loaded instead
    files: [
      // {pattern: 'lib/jquery.js', instrument: false},
      {pattern: 'src/**/*.js', load: false}
    ],

    tests: [
      {pattern: 'test/**/*Spec.js', load: false}
    ],
    debug: true,

    postprocessor: wallabyPostprocessor,

    setup: function () {
      // required to trigger test loading
      window.__moduleBundler.loadTests();
    }
  };
};