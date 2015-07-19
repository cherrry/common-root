'use strict';

jest.dontMock('path');
jest.dontMock('../index');

describe('commonRoot', function () {
    var commonRoot = null;

    beforeEach(function () {
        commonRoot = require('../index');
    });

    it('should return empty path on no paths given', function () {
        var paths = [];
        expect(commonRoot(paths)).toEqual('');
    });

    it('should return dirname on single file', function () {
        var paths = ['/path/to/file.txt'];
        expect(commonRoot(paths)).toEqual('/path/to');
    })

    it('should return lca of multiple files', function () {
        var paths = [
            '/path/to/a/a/a/file.txt',
            '/path/to/a/a/b/file.txt',
            '/path/to/a/b/a/file.txt'
        ];
        expect(commonRoot(paths)).toEqual('/path/to/a');
    })
});
