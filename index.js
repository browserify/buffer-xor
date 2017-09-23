var Buffer = require('safe-buffer').Buffer

module.exports = function xor (a, b) {
  var min = Math.min(a.length, b.length)
  var max = Math.max(a.length, b.length)
  var buffer = Buffer.allocUnsafe(max)

  for (var i = 0; i < min; ++i) {
    buffer[i] = a[i] ^ b[i]
  }

  ((a.length > b.length) ? a : b).copy(buffer, min, min, max)

  return buffer
}
