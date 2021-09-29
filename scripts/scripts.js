
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

/**/
var menuBtn = document.querySelector(".menuBtn");
var menuHtml = document.getElementById('menuHtml');
var menuHtmlBody = document.getElementById('menuHtmlBody');
var menuHtmlClose = document.getElementById('menuHtmlClose');
menuHtmlClose.addEventListener('click', function(ev) {
 ev.preventDefault();
 menuHtml.classList.remove("menuHtmlShow");
});

menuBtn.addEventListener('click', function(ev) {
 ev.preventDefault();
 if(!menuHtml.classList.contains("menuHtmlShow")) {
  scrollToTopBtn.classList.add("menuHtmlShow");
} else {
 menuHtml.classList.remove("menuHtmlShow");
}
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

request.open('Get', '../acc/menusmart.htm');
request.send();
});