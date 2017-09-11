'use strict';

// original karma.conf.js from the post inspiring this tut:
// https://github.com/mknabe/angular-testing-starter/blob/master/test/karma-conf.js
let _ = require('lodash');

// since we need them both in files & referenced in preprocessors
let templates = [
  'app/views/directives/*.html',
  'app/views/pages/*.html'
];

module.exports = function(config) {
  config.set({
    // root path location used to resolve relative paths.
    // setting to root (up one dir out of /test)
    basePath: '../',
    // tell karma what files to load, in the correct order
    // by dependencies. There should probably be a better way
    // to do this that deduplicates the same file list that is
    // included in the app index.
    files: [
      // using yarn for all things, no bower here!
      // dependencies
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      // app
      'app/js/script.js',
      // html files can be part of the files block via
      // the use of the following plugin:
      // yarn add karma-ng-html2js-preprocessor --save-dev
      templates[0],
      templates[1],
      // tests
      'test/unit/**/*.js'
    ],
    // files to exclude... from the files above?
    // prob to opt out if using regex
    exclude: [],
    // since we have a grunt watch, we don't need karma watch
    autoWatch: false,
    // karma-jasmine plugin installed
    frameworks: ['jasmine'],
    // runt he tests in all 3 of the browsers!
    browsers: ['Chrome', 'PhantomJS', 'Firefox'],
    // similar to files, plugins must be listed in an array,
    // then specific values from plugins are used elsewhere...
    reporters: ['progress', 'coverage'],
    // though they are loaded via 'files' above,
    // they still need to be referenced here
    preprocessors: _.reduce(templates, function(result, next) {
      result[next] = 'ng-html2js';
      return result;
    }, {}),
    plugins: [
      // run jshint as well
      // prob should update to eslint
      'karma-jshint-preprocessor',
      // test framework
      'karma-jasmine',
      // measure how much of our code has test coverage
      'karma-coverage',
      // load html files & convert to js
      'karma-ng-html2js-preprocessor',
      // need a reporter for output
      'karma-junit-reporter',
      // browsers
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher'
    ],
    // its a little ugly that plugins are configured with top
    // level keys on this config object..
    ngHtml2JsPreprocessor: {
      // stripPrefix: 'app/'
    },
    coverageReporter: {
      type: 'text',
      // outputs the results of coverage reporter to this dir
      dir: 'test-results/coverage/'
    },
    junitReporter: {
      // location of results output file
      outputFile: 'test-results/junit-results.xml'
    }
  });
};
