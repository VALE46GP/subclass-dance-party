var RickDancer = function(top, left, timeBetweenSteps) {
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
    $(this).addClass('swirl-out-bck clean-me');
    //remove portal somehow cool
    setTimeout(function() {
      $portal.addClass('swirl-out-bck clean-me');
    }, 1000);
    //remove node
    setTimeout(function() {
      $portal.remove();
      window.dancers = window.dancers.filter(function(d) { return (d.cleanUpId !== $(self.$node).attr('id')); });
    }, 1500);
  });
  
};

RickDancer.prototype = Object.create(Dancer.prototype);
RickDancer.prototype.constructor = RickDancer;

RickDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this
  // new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

RickDancer.prototype.lineUp = function(i) {
  this.location.top = 530;
  var rickDancerPop = window.dancers.filter(function(d) { return d instanceof RickDancer; }).length;
  this.location.left = $('#foreground').width() * (i + 0.25) / rickDancerPop;
  this.$node.animate({ 
    top: this.location.top,
    left: this.location.left,
    height: '200px'
  }, { duration: 800 });
};

RickDancer.prototype.goOnAdventure = function(target) {
  var self = this;
  /* rick goes to a non-rick dancer */
  var imgHeight = Math.floor(target.location.top / $('#foreground').height() * 350) + 70;
  this.$node.animate({ 
    top: target.location.top - 30,
    left: target.location.left - 30,
    height: (imgHeight + 'px')
  }, { duration: 2000 });
  setTimeout(function() {
    $(self.$node).css({ zIndex: -1 });
  }, 1800);
  
  /* poof away target dancer */
  setTimeout(function() {
    $(target.$node).css({ left: target.location.left + 50 });
    $(target.$node).html('<div class="dancer"><img src="https://i.gifer.com/ZfzD.gif" /></div>');
  }, 2500);
  
  setTimeout(function() {
  // instantiate RickAndMorty Object at target location
    var dancer = new RickAndMorty(
      target.location.top,
      target.location.left,
      1000
    );
    $('#foreground').append(dancer.$node);
    window.dancers.push(dancer);
    
    // replace RickAndMorty image with RickAndMortyPortal image
    $(self.$node).remove();
    $(target.$node).remove();
    window.dancers = window.dancers.filter(function(d) { return (d.cleanUpId !== $(target.$node).attr('id')); });
    window.dancers = window.dancers.filter(function(d) { return (d.cleanUpId !== $(self.$node).attr('id')); });

    // spin-out-bck RickAndMorty Object

    /* both dancers replaced with RickAndMorty Object */
  

  }, 3000);





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