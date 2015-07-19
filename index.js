'use strict';

var path = require('path');

var split = function (p) {
    return path.parse(p).dir.split(path.sep);
};

var commonRoot = function (paths) {
    if (paths.length === 0) {
        return '';
    }

    var folders = split(paths[0]);
    for (var i = 1, _len = paths.length; i < _len; i++) {
        var f = split(paths[i]);
        for (var j = 0; j < f.length && j < folders.length; j++) {
            if (f[j] !== folders[j]) {
                folders = folders.slice(0, j);
                break;
            }
        }
    }

    return folders.join(path.sep);
};

module.exports = commonRoot;
