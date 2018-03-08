var test = require('tape').test
var shapeshift = require('../')

test('should get a list of transactions by an API key', function (t) {
  t.plan(3)
  shapeshift.setTokens('foo', 'bar')
  shapeshift.transactions(function (err, data) {
    t.ifError(err, 'no error')
    t.true(Array.isArray(data), 'data is an array')
    t.same(data.length, 0, 'no data returned')
    t.end()
  })
})
