# Grunt testing AngularJS

- Testing Angular 1.x with Grunt
- Karma, Jasmine, Protractor

Inspired by [this set of blog posts](https://www.credera.com/blog/technology-insights/open-source-technology-insights/testing-angularjs-part-1-setting-unit-testing-karma/).

## yarn

The package manager used is exlusively `yarn`, no `npm` or `bower`.

## Karma

Karma is a test runner, not a testing framework. To use Karma, you also need a plugin for your test framework of
choice.  This guide uses `karma-jasmine` for Jasmine.

Karma also needs a launcher to launch browsers.  Options include:

- `karma-chrome-launcher`
- `karma-firefox-launcher`
- `karma-ie-launcher`

Running karma tests directly with the karma cli tool:

```bash
# run all tests at once, providing the config file
karma start test/karma.conf.js --single-run
# or start the server separately...
karma start test/karma.conf.js
# then run tests one at a time (perhaps in different windows)
karma run test/karma.conf.js
# auto-run tests when changes are made
# overrides autoWatch in test/karma.conf.js file
karma start test/karma.conf.js --auto-watch
```
