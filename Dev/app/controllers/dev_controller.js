var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var DevController = new Controller();

DevController.masonry = function() {
  this.title = 'Masonry Test'
  this.render();
}

module.exports = DevController;
