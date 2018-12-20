var maintitle = null;
var screensaver = null;

function StartScreenSaver(callback){
		
		maintitle = document.getElementById('main-title');
		screensaver = document.getElementById('section-screensaver');
		
		 maintitle.classList.add('typerwriter-animation');
		 
		 GoToSectionHome();
		 disableScroll();
		 
		 setTimeout(function(){
		 	EndScreenSaver(callback)
      $("br").remove();
		 },4500);
}



function EndScreenSaver (callback){
	screensaver.classList.add('section-screensaver-disabled');
	enableScroll();
	callback();
}


//Disable Scroll


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}


	
