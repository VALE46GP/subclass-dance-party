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

/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = new Dancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this
    // new version of step
    Dancer.prototype.step.call(this,timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/