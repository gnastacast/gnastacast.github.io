(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = .5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "center " + (windowYOffset * speed - i*400) + "px";
      
      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();