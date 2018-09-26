var lineUp = function() {
  var rickCount = 0;
  var carltonCount = 0;
  var kennyCount = 0;
  window.dancers.forEach((dancer, i) => {
    if (dancer instanceof RickDancer) {
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
    if (dancer instanceof RickDancer) {
      rickArray.push([dancer, i]); 
    } else {
      othersArray.push([dancer, i]);
    }
  });  

  rickArray.forEach((rick, i) => {
    if (othersArray[i][0]) {
      setTimeout(function() {
        rick[0].goOnAdventure(othersArray[i][0]);
      }, 100);
    }
  });
  
  // setTimeout(function() {
  //   if (rickArray.length > othersArray.length) {
  //     window.dancers = rickArray.splice(-othersArray.length);
  //   } else if (rickArray.length < othersArray.length) {
  //     window.dancers = othersArray.splice(-rickArray.length);
  //   } else {
  //     window.dancers = [];
  //   }
  // }, rickArray.length * 100);
};
