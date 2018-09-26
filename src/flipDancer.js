var FlipDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.html('<img src="https://ubisafe.org/images/funny-transparent-gifs-2.gif" />');
  var imgHeight = Math.floor(this.location.top / $('#foreground').height() * 300) + 60;
  this.$node.css({ height: (imgHeight + 'px') });
  
};

FlipDancer.prototype = Object.create(Dancer.prototype);
FlipDancer.prototype.constructor = FlipDancer;

FlipDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this
  // new version of step
  Dancer.prototype.step.call(this);

  
  this.$node.addClass('flip-scale-2-hor-top');
  var self = this;
  setTimeout(function() {
    self.$node.removeClass('flip-scale-2-hor-top');
  }, self.timeBetweenSteps / 2);
};

FlipDancer.prototype.lineUp = function(i) {
  this.location.top = 600;
  var flipDancerPop = window.dancers.filter(function(d) { return d instanceof FlipDancer; }).length;
  this.location.left = $('#foreground').width() * (i + 0.25) / flipDancerPop;
  this.$node.animate({ 
    top: this.location.top,
    left: this.location.left,
    height: '150px'
  }, { duration: 800 });
};