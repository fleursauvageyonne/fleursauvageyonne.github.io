
/* get a reference to our predefined button*/
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
if(scrollToTopBtn){
  document.addEventListener("scroll", handleScroll);
  function handleScroll() {
    /*var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;*/
    /* var GOLDEN_RATIO = 0.5;*/
    /*if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {*/
      if (document.documentElement.scrollTop  > document.documentElement.clientHeight) {
    //show button
    if(!scrollToTopBtn.classList.contains("showScrollBtn")) {
      scrollToTopBtn.classList.add("showScrollBtn");
    }
  } else {
    //hide button
    if(scrollToTopBtn.classList.contains("showScrollBtn")) {
      scrollToTopBtn.classList.remove("showScrollBtn");
    }
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
}
/* polyfill pour menu click outside*/
/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
 if (!Element.prototype.closest) {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }
  Element.prototype.closest = function (s) {
    var el = this;
    var ancestor = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (ancestor.matches(s)) return ancestor;
      ancestor = ancestor.parentElement;
    } while (ancestor !== null);
    return null;
  };
}
/* menu */
window.addEventListener('load', function(){
var menuBtn = document.querySelectorAll(".menuBtn");
var menuHtml = document.getElementById('menuHtml');
var menuHtmlBody = document.getElementById('menuHtmlBody');
var menuHtmlClose = document.getElementById('menuHtmlClose');
var menuHtmlFirstClick = false;
if(menuHtmlClose){
  menuHtmlClose.addEventListener('click', function(ev) {
   ev.preventDefault();
   menuClose();
  });
}
// Listen for all clicks on the document
function clickEvent () {
    // If the click happened inside the the container, bail
    if (menuHtmlFirstClick && menuHtml.classList.contains("menuHtmlShow") && event.target.closest('#menuHtml')) {
      /* console.log("clickEventIn");*/
   } else if(menuHtmlFirstClick && menuHtml.classList.contains("menuHtmlShow")) {
    /*console.log("clickEventOut");*/
      menuClose();
   }
   if(menuHtml.classList.contains("menuHtmlShow")){menuHtmlFirstClick = true;}
 }
 function menuClose(){
    menuHtml.classList.remove("menuHtmlShow");
   document.removeEventListener('click',clickEvent);
   menuHtmlFirstClick = false;
 };
 function menuOpen() {
    document.addEventListener('click',clickEvent,false );
  menuHtml.classList.add("menuHtmlShow");
  /* this.style.display = 'none';*/
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === 4) {
      /*bio.style.border = '1px solid #e8e8e8';*/
      if(request.status === 200) {
        menuHtmlBody.innerHTML = request.responseText;
      } else {
        menuHtmlBody.innerHTML = 'Erreur pendant le chargement du menu: ' +  request.status + ' ' + request.statusText;
      }
    }
  }
  request.open('Get', '../acc/menusmartsimple.htm');
  request.send();
};
/* bouton menu*/
menuBtn.forEach(function(menuBtnItem) {

menuBtnItem.addEventListener('click', function(ev) {
 ev.preventDefault();
 if(!menuHtml.classList.contains("menuHtmlShow")) {
   menuOpen();
 } else {
   menuClose();
 }
});
});

/* */
var supportsTouch = false;
if ('ontouchstart' in window) {
    //iOS & android
    supportsTouch = true;

} else if(window.navigator.msPointerEnabled) {

    // Windows
    // To test for touch capable hardware 
    if(navigator.msMaxTouchPoints) {
        supportsTouch = true;
    }

}
if(supportsTouch && menuHtml) {
    var touchsurface = menuHtml,
        startX,
        startY,
        dist,
        threshold = 150, //required min distance traveled to be considered swipe
        allowedTime = 200, // maximum time allowed to travel that distance
        elapsedTime,
        startTime

    function handleswipe(isrightswipe){
        if (isrightswipe){
           // touchsurface.innerHTML = 'Congrats, you\'ve made a <span style="color:red">right swipe!</span>'
            menuClose();
       } else{
           // touchsurface.innerHTML = 'Condition for right swipe not met yet'
        }
    }


    touchsurface.addEventListener('touchstart', function(e){
       // touchsurface.innerHTML = ''
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
       // e.preventDefault()
    }, { passive: false });

// prevent scrolling when inside DIV
  /*  touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() ;
    }, false)*/

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = startX - touchobj.pageX  // get total dist traveled by finger while in contact with surface. right to left. Invert to get the reverse
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleswipe(swiperightBol)
        // e.preventDefault()
    }, { passive: false })

  } //end test touchstart

}, false); // end window.onload