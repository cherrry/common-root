# commont-root

## Install

```
$ npm install --save common-root
```

## Usage

```js
var commonRoot = require('common-root');

var paths = [
    '/path/to/a/a/a/file.txt',
    '/path/to/a/a/b/file.txt',
    '/path/to/a/b/a/file.txt'
];
console.log(commonRoot(paths)); // '/path/to/a'
```
