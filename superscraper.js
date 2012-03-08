var request = require('superagent')
var htmlparser = require('htmlparser2')
var soupselect = require('cheerio-soupselect')

request.Request.prototype.scrape = function (callback) {
  this.end(function (res) {
    if (res.ok) {
      var handler = new htmlparser.DomHandler(function (err, dom) {
        if (err) return callback(res)
        callback(res, function (selector) {
          return soupselect.select(dom, selector)
        })
      })
      new htmlparser.Parser(handler).parseComplete(res.text)
    }
    else callback(res)
  })
}

exports = module.exports = request
exports.htmlparser = htmlparser
exports.soupselect = soupselect
