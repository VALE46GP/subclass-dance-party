var lineUp = function() {
  var rickCount = 0;
  var carltonCount = 0;
  var kennyCount = 0;
  window.dancers.forEach((dancer, i) => {
    if (dancer instanceof BlinkyDancer) {
      dancer.lineUp(rickCount);
      rickCount++;
    }
    if (dancer instanceof SlideDancer) {
      dancer.lineUp(carltonCount);
      carltonCount++;
    }
    if (dancer instanceof FlipDancer) {
      dancer.lineUp(kennyCount);
      kennyCount++;
    }
  });
};

var adventure = function() {
  
  var rickArray = [];
  var othersArray = [];

  dancers.forEach((dancer, i) => {
    if (dancer instanceof BlinkyDancer) {
      rickArray.push([dancer, i]); 
    } else {
      othersArray.push([dancer, i]);
    }
  });

  rickArray.forEach((rick, i) => {
    if (othersArray[i]) {
      setTimeout(function() {
        rick[0].goOnAdventure(othersArray[i][0], rick[1], othersArray[i][1]);
      }, 100);
    }
  });
};

