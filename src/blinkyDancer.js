var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.html('<img src="https://ubisafe.org/images/transparent-gifs-rick-and-morty-1.gif" />');
  var imgHeight = Math.floor(this.location.top / $('#foreground').height() * 350) + 70;
  this.$node.css({ height: (imgHeight + 'px') });
  
  var self = this;
  $(this.$node).click(function() {
    //add portal to body at rick location (with z-index 0)
    var $portal = $('<div class="dancer"><img src="https://i.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.webp" /></div>');
    $('#foreground').append($portal);
    $portal.css({ top: self.location.top, left: self.location.left, zIndex: -1});
    //add swirl-out class to rick
    $(this).addClass('swirl-out-bck');
    //remove portal somehow cool
    setTimeout(function() {
      $portal.addClass('swirl-out-bck');
    }, 1000);
    //remove node
    //instantiate new random rick
    // $(this).html('<img src="https://i.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.webp" />');
  });
  
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this
  // new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function(i) {
  this.location.top = 530;
  var blinkyDancerPop = window.dancers.filter(function(d) { return d instanceof BlinkyDancer; }).length;
  this.location.left = $('#foreground').width() * (i + 0.25) / blinkyDancerPop;
  this.$node.animate({ 
    top: this.location.top,
    left: this.location.left,
    height: '200px'
  }, { duration: 800 });
};

BlinkyDancer.prototype.goOnAdventure = function(target, rickIndex, targetIndex) {
  var self = this;
  /* rick goes to a non-rick dancer */
  var imgHeight = Math.floor(target.location.top / $('#foreground').height() * 350) + 70;
  this.$node.animate({ 
    top: target.location.top - 30,
    left: target.location.left - 30,
    height: (imgHeight + 'px')
  }, { duration: 1500 });
  setTimeout(function() {
    $(self.$node).css({ zIndex: -1 });
  }, 1400);

  /* both dancers replaced with RickAndMorty Object */
  setTimeout(function() {
    $(self.$node).remove();
    $(target.$node).remove();
  }, 1500);





  // window.dancers.splice(rickIndex, 1); DO LATER
  // window.dancers.splice(targetIndex, 1); DO LATER
  
  
  
  // target.$node.html(https://i.giphy.com/media/ODWarUzPLdoQw/giphy.webp)
  
  /* rick creates portal @ new location*/
  // var $portal = $('<div class="dancer"><img src="https://i.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.webp" /></div>');
  // $('#foreground').append($portal);
  // $portal.css({ top: this.location.top, left: this.location.left, zIndex: -1});
  // //add swirl-out class to rick
  // $(this.$node).addClass('swirl-out-bck');
  // //remove portal somehow cool
  // setTimeout(function() {
  //   $portal.addClass('swirl-out-bck');
  // }, 1000);
  // this.location = { top: target.location.top, left: target.location.left };
  
  
  
};