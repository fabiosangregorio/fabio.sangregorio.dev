document.ready(function() { 
  initFlickity();
  AOS.init({
    duration: 500,
    easing: 'ease-sine-out',
    delay: 150,
    once: true
  });
  initExperienceAnimation();
});

window.addEventListener("load", function() {
  initRevealImage();
}, false);


function initFlickity() {
  var aboutSliders = [];
  // TODO: Initialize autoplay only on scroll
  if (!!document.querySelector('.slider')) {
    for(var el of document.querySelectorAll('.slider')) {
      var flkty = new Flickity(el, {
        fade: true,
        pageDots: false,
        prevNextButtons: false,
        autoPlay: 4000,
        pauseAutoPlayOnHover: false,
        selectedAttraction: 0.01,
        wrapAround: true
      });
    }
  }
  if(!!document.querySelectorAll('.mobile-slider')) {
    initAboutFlickity();
  }
  
  function initAboutFlickity() {
    if(window.innerWidth <= 991 && !aboutSliders.length) {
      for(var el of document.querySelectorAll('.mobile-slider')) {
        var slider = new Flickity(el, {
          fade: true,
          pageDots: false,
          prevNextButtons: false,
          autoPlay: 4000,
          pauseAutoPlayOnHover: false,
          selectedAttraction: 0.01,
          wrapAround: true,
        });
        aboutSliders.push(slider);
      }
    } else if (window.innerWidth > 991) {
      for(var slider of aboutSliders) {
        slider.destroy();
      }
      aboutSliders = []
    }
  }

  window.addEventListener("resize", debounce(initAboutFlickity, 300));
}


function initRevealImage() {
  var selectors = document.querySelectorAll(".reveal");
  for (var el of selectors) {
    el.classList.add('loaded');
    el.style.height = el.querySelector(".reveal__content > *").scrollHeight + "px";
  }
}


function initExperienceAnimation() {
  document.querySelector('.js-experiences-section').addEventListener('click', function() {
    var togglers = this.querySelectorAll('.js-experiences-toggle');
    if(this.classList.contains('js-experiences-open')) {
      this.classList.remove('js-experiences-open');
      for(var toggler of togglers) toggler.innerText = 'show';
      toggleAnimationClasses(this);
    } else {
      this.classList.add('js-experiences-open'); 
      for(var toggler of togglers) toggler.innerText = 'hide';
      toggleAnimationClasses(this);
    }
  });

  function toggleAnimationClasses(container) { 
    var selectors = container.querySelectorAll('.js-experience-animate');
    for(var el of selectors) {
      if(el.clientHeight) {
        el.style.height = 0;
      } else {
        el.style.height = el.scrollHeight+'px';
      }
    }
  }
}
