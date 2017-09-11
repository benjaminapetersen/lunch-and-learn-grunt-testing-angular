var _ = require('lodash');

// ideally this could work...
// if no, might have to pull the config object out into a separate
// file & read it into both karma.conf.default.js as well as this file
// to make it possible to override/change values w/o duplicating everything.
var baseConf = require('./karma.conf.default.js');

module.exports = function(config) {}
