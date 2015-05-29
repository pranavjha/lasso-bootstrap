'use strict';
require('lasso').configure({
    "plugins": [
        "lasso-less"
    ],
    "outputDir": "static",
    "fingerprintsEnabled": false,
    "minify": false,
    "resolveCssUrls": true,
    "bundlingEnabled": false
});
var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function(req, res) {
    template.render({}, res);
};
