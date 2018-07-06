var abstractor = function () {}

var marked = require('marked');

abstractor.prototype.init = function(context) {
  return new Promise(function(resolve, reject) {
    
    // initialize abstractor
    resolve()
  })
}

abstractor.prototype.abstract = function(context) {
  return new Promise(function(resolve, reject) {
    context.html_content = marked(context.content);
    return resolve()
  })
}

module.exports = new abstractor()
