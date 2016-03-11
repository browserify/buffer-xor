# buffer-xor

[![TRAVIS](https://secure.travis-ci.org/crypto-browserify/buffer-xor.png)](http://travis-ci.org/crypto-browserify/buffer-xor)
[![NPM](http://img.shields.io/npm/v/buffer-xor.svg)](https://www.npmjs.org/package/buffer-xor)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A simple module for bitwise-xor on buffers.


## Examples

``` javascript
var xor = require("buffer-xor")
var a = new Buffer('00ff0f', 'hex')
var b = new Buffer('f0f0', 'hex')

console.log(xor(a, b))
// => <Buffer f0 0f 0f>
```


Or for those seeking those few extra cycles, perform the operation in place with
`xorInplace`:

_NOTE: `xorInplace` won't xor past the bounds of the buffer it mutates so make
sure it is long enough!_

``` javascript
var xorInplace = require("buffer-xor/inplace")
var a = new Buffer('00ff0f', 'hex')
var b = new Buffer('f0f0', 'hex')

console.log(xorInplace(a, b))
// => <Buffer f0 0f 0f>

// See that a has been mutated
console.log(a)
// => <Buffer f0 0f 0f>
```


## License [MIT](LICENSE)
