var Buffer = require('safe-buffer').Buffer
var tape = require('tape')
var xor = require('../')
var xorInplace = require('../inplace')

var fixtures = require('./fixtures')

tape.test('xor', function (t) {
  fixtures.forEach(function (f) {
    t.test('returns ' + f.expected + ' for ' + f.a + '/' + f.b, function (t) {
      var a = Buffer.from(f.a, 'hex')
      var b = Buffer.from(f.b, 'hex')
      var actual = xor(a, b)

      t.same(actual.toString('hex'), f.expected)

      // a/b unchanged
      t.same(a.toString('hex'), f.a)
      t.same(b.toString('hex'), f.b)

      t.end()
    })
  })

  t.end()
})

tape.test('xor/inplace', function (t) {
  fixtures.forEach(function (f) {
    t.test('returns ' + f.expected + ' for ' + f.a + '/' + f.b, function (t) {
      var a = Buffer.from(f.a, 'hex')
      var b = Buffer.from(f.b, 'hex')
      var actual = xorInplace(a, b)

      t.same(actual.toString('hex'), a.toString('hex'))

      // a mutated, b unchanged
      t.same(a.toString('hex'), f.mutated || f.expected)
      t.same(b.toString('hex'), f.b)

      t.end()
    })
  })

  t.end()
})
