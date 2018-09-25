var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this
  // new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // var currLeft = Math.floor(this.$node.offset().left);
  // var origLeft = Math.floor(this.location.left);
  // if (currLeft !== 0) { //troubleshoot later
  var test = this.$node.hasClass('slide-right');
  // debugger
  if (this.$node.hasClass('slide-right')) {
    this.$node.removeClass('slide-right');
    this.$node.addClass('slide-left');
  } else {
    this.$node.removeClass('slide-left');
    this.$node.addClass('slide-right');
  }
  // }
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