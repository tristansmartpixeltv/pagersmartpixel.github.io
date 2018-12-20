
var ParallaxScene = function(){
   this.parallaxObjects = document.querySelectorAll('[' + "data-parallax-vertical-speed" + ']');
   this.parallaxElements = [];
}


ParallaxScene.prototype.start = function() {
  
  var self = this;

  if(!isUsingInternetExplorer())
  {
          this.parallaxObjects = document.querySelectorAll('[' + "data-parallax-vertical-speed" + ']');
          this.parallaxElements = [];

          for(var i = 0; i < this.parallaxObjects.length;i++){
            this.parallaxElements.push(new parallaxElement(this.parallaxObjects[i]));
           }
         

         

          this.setActive(true);


          setInterval(function(){


            if (window.pageYOffset > maxScroll)
            {
              return false;
            }
               self.update( Math.max(window.pageYOffset, 0));
          },1);

        };
  }

  



ParallaxScene.prototype.update = function(scrollAmount){
  
  for(var i = 0; i < this.parallaxElements.length;i++)
  {
    this.parallaxElements[i].parallax(scrollAmount);
  }

};

ParallaxScene.prototype.setActive = function(isActive){
  
  for(var i = 0; i < this.parallaxElements.length;i++){
    this.parallaxElements[i].setActive(isActive);
   }
 
  
};

