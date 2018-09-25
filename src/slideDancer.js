var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this
  // new version of step
  Dancer.prototype.step.call(this);

  if (this.$node.hasClass('slide-right')) {
    this.$node.removeClass('slide-right');
    this.$node.addClass('slide-left');
  } else {
    this.$node.removeClass('slide-left');
    this.$node.addClass('slide-right');
  }
};