var Buffer = require('safe-buffer').Buffer

module.exports = function xor (a, b) {
  var min, max, buffer, i

  if (a.length >= b.length) {
    max = a
    min = b
  } else {
    max = b
    min = a
  }

  buffer = Buffer.allocUnsafe(max.length)

  for (i = 0; i < min.length; i++) {
    buffer[i] = min[i] ^ max[i]
  }

  for (i = min.length; i < max.length; i++) {
    buffer[i] = max[i]
  }

  return buffer
}
