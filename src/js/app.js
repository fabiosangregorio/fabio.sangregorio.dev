document.ready(function () {
  AOS.init({
    duration: 500,
    easing: 'ease-sine-out',
    delay: 150,
    once: true
  });
  initExperienceAnimation();
  initDarkTheme();
});

window.addEventListener("load", function () {
  initRevealImage();
  initFlickity();
}, false);

function initFlickity() {
  var aboutSliders = [];
  if (!!document.querySelector('.slider')) {
    for (var el of document.querySelectorAll('.slider')) {
      var flkty = new Flickity(el, {
        pageDots: false,
        prevNextButtons: false,
        autoPlay: 4000,
        pauseAutoPlayOnHover: false,
        wrapAround: true
      });
    }
  }
  if (!!document.querySelectorAll('.mobile-slider')) {
    initAboutFlickity();
  }

  function initAboutFlickity() {
    if (window.innerWidth <= 991 && !aboutSliders.length) {
      for (var el of document.querySelectorAll('.mobile-slider')) {
        var slider = new Flickity(el, {
          pageDots: false,
          prevNextButtons: false,
          autoPlay: 4000,
          pauseAutoPlayOnHover: false,
          wrapAround: true,
        });
        aboutSliders.push(slider);
      }
    } else if (window.innerWidth > 991) {
      for (var slider of aboutSliders) {
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
  if (!document.querySelector('.js-experiences-section')) return;
  document.querySelector('.js-experiences-section .experiences__opener').addEventListener('click', function () {
    var target = document.querySelector('.js-experiences-section');
    var togglers = target.querySelectorAll('.js-experiences-toggle');
    if (target.classList.contains('js-experiences-open')) {
      target.classList.remove('js-experiences-open');
      for (var toggler of togglers) toggler.innerText = 'show';
      toggleAnimationClasses(target);
    } else {
      target.classList.add('js-experiences-open');
      for (var toggler of togglers) toggler.innerText = 'hide';
      toggleAnimationClasses(target);
    }
  });

  function toggleAnimationClasses(container) {
    var selectors = container.querySelectorAll('.js-experience-animate');
    for (var el of selectors) {
      if (el.clientHeight) {
        el.style.height = 0;
      } else {
        el.style.height = el.scrollHeight + 'px';
      }
    }
  }
}
