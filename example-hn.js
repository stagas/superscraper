require('colors')
var superscraper = require('./superscraper')

superscraper
  .get('http://news.ycombinator.com/')
  .scrape(function (res, $) {
    $('td table tr:has(.title)')
      .filter(function (node) {
        return node.children.length === 3
      })
      .map(function (node) {
        return {
          pos: node.children[0].children[0].data
        , title: node.children[2].children[0].children[0].data
        , href: node.children[2].children[0].attribs.href
        }
      })
      .forEach(function (item) {
        console.log(item.pos.yellow, item.title.white)
        console.log(item.href.red + '\n')
      })
  })
