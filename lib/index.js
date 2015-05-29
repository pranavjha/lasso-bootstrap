'use strict';
require('lasso').configure(require('../lasso-config.json'));
var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function(req, res) {
    template.render({}, res);
};
