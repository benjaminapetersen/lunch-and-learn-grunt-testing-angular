# Grunt testing AngularJS

- Testing Angular 1.x with Grunt
- Karma, Jasmine, Protractor

Inspired by [this set of blog posts](https://www.credera.com/blog/technology-insights/open-source-technology-insights/testing-angularjs-part-1-setting-unit-testing-karma/).

## yarn

The package manager used is exclusively `yarn`, no `npm` or `bower`.

## Karma

Karma is a test runner, not a testing framework. To use Karma, you also need a plugin for your test framework of
choice.  This guide uses `karma-jasmine` for Jasmine.

`karma` also needs a launcher to launch browsers.  Options include:

- `karma-chrome-launcher`
- `karma-firefox-launcher`
- `karma-ie-launcher`

Running `karma` tests directly with the karma cli tool:

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
But since `grunt` is our task runner, we want to "normalize" on it and
run all tasks via grunt.  Therefore the gruntfile via the `grunt-karma`
plugin is able to fire off a variety of `karma` related tasks:

```bash
grunt karma:unit
grunt karma:continuous
```

## Protractor

e2e tests for angular can be run with protractor.  It is built on top
of WebDriverJS.  Protractor requires a real browser.

Protractor can be installed locally or globally:

```bash
# local
# Install protractor
npm install protractor --save-dev

# Download the selenium standalone server
# this is a little quirky.  It is recommended that
# you create a task for handling this, probably via
# package.json scripts block
./node_modules/protractor/bin/webdriver-manager update

# global
# Install protractor
npm install protractor -g

# Download the selenium standalone server
webdriver-manager update
```

Then add a scripts block to `package.json`:

```javascript
// use one of the following, depending on local or global setup:
"update-webdriver": "webdriver-manager update",
"update-webdriver-local": "./node_modules/protractor/bin/webdriver-manager update",

```
