var parallaxElement = function(htmlElement){
  this.element = htmlElement;
  this.isActive = false;


  this.parallaxSpeed = htmlElement.getAttribute('data-parallax-vertical-speed');
  
  //Move
  this.lFollowX = 0;
    this.lFollowY = 0;
    this.x = 0;
    this.y = 0;
    this.friction = 1 / 120;
    this.lMouseX;
    this.lMouseY;
    this.translateMove = String.Empty;
    this.translateParallax = String.Empty;

  if(window.navigator.userAgent.indexOf("Edge") > -1) { // if IE
     this.element.classList.remove('parallax');
  }

};

parallaxElement.prototype.parallax = function(scrollAmount) {
  


   if(!this.isActive)
      this.translateParallax = "translateZ(-50px)";
  else
      this.translateParallax = "translateZ(-50px) translateY(" + (scrollAmount * -this.parallaxSpeed) +'px)';

  if(this.translateMove == String.Empty)
  {
      this.element.style.transform =   this.translateParallax;
      this.element.style.webkitTransform =   this.translateParallax;
  
  }
  
}

parallaxElement.prototype.update = function(event) {
    this.lMouseX =  $(window).width() / 2 - event.clientX;
    this.lMouseY =  $(window).height() / 2 - event.clientY;
    this.lFollowX = (10 * this.lMouseX) / 120; 
    this.lFollowY = (10 * this.lMouseY) / 120;
}

parallaxElement.prototype.move = function(multiplier) {

    if(!this.isActive)
       return;

   this.x += ( (this.lFollowX - this.x) * this.friction * multiplier);
     this.translateMove = 'translateX(' + -this.x + 'px)';

    $(this.element).css({
      '-webit-transform': this.translateMove + this.translateParallax,
      '-moz-transform': this.translateMove +   this.translateParallax,
      'transform': this.translateMove +   this.translateParallax
    });



}

parallaxElement.prototype.setActive = function(isActive) {
   this.isActive = isActive;
}

