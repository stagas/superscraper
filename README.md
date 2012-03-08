# superscraper

## installation

`npm install superscraper`

## introduction

superscraper extends [superagent](https://github.com/visionmedia/superagent) prototype with a `.scrape(callback)` method, preloading [htmlparser2](https://github.com/FB55/node-htmlparser) and [cheerio-soupselect](https://github.com/MatthewMueller/cheerio-soupselect) for easy and fast scraping.

## usage

```javascript
var superscraper = require('superscraper')

superscraper
  .get('http://some.url/foo')
  .scrape(res, $) {
    // $ is ready to accept our selectors
    $('.title').forEach(function (node) {
      // do something
    })
  })
```

## licence

MIT/X11
