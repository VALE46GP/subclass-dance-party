var RickAndMorty = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  // Rick Image, Morty Image
  this.$node.html('<img src="https://orig00.deviantart.net/4a6f/f/2016/310/a/b/rick_and_morty_pagedoll____by_candy__fizz-dangk19.gif" />');
  // Morty image
  //this.$node.html('<img src="https://media.giphy.com/media/ODWarUzPLdoQw/giphy.gif" />');
  var imgHeight = Math.floor(this.location.top / $('#foreground').height() * 400) + 70;
  this.$node.css({ height: (imgHeight + 'px') });

  this.step();
  
};

RickAndMorty.prototype = Object.create(Dancer.prototype);
RickAndMorty.prototype.constructor = RickAndMorty;

RickAndMorty.prototype.step = function() {
  var self = this;
  // add portal
  var $portal = $('<div class="dancer"><img src="https://i.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.webp" /></div>');
  $('#foreground').append($portal);
  $portal.css({ top: self.location.top, left: self.location.left, zIndex: -1});
  // swirl out after 2 seconds, and remove nodes from dancers array
  setTimeout(function() {
    $(self.$node).addClass('swirl-out-bck');
  }, 1500);
  setTimeout(function() {
    $(self.$node).remove();
    window.dancers = window.dancers.filter(function(d) { return (d.cleanUpId !== $(self.$node).attr('id')); });
    window.dancers = window.dancers.filter(function(d) { return !(d instanceof RickAndMorty); });
  }, 2500);
  //remove portal somehow cool
  setTimeout(function() {
    $portal.addClass('swirl-out-bck');
  }, 3000);
  //remove node
  setTimeout(function() {
    $portal.remove();
  }, 3500);
  

  // // new version of step
  // Dancer.prototype.step.call(this);
  
  
};