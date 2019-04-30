var Buffer = require('safe-buffer').Buffer

module.exports = function xor (a, b) {
  var [min, max] = (a.length >= b.length) ? [b, a] : [a, b]
  var buffer = Buffer.allocUnsafe(max.length)
  var i
  for (i = 0; i < min.length; i++) {
    buffer[i] = min[i] ^ max[i]
  }

  for (i = min.length; i < max.length; i++) {
    buffer[i] = max[i]
  }

  return buffer
}
