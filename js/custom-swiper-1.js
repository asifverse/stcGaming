const swiper = new Swiper('.swiper', {
  margin:10,
  responsiveClass:true,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:5
    },
    1000:{
        items:6
    }
},

  autoplay: {
     delay: 3000,
     disableOnInteraction: false
   },

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1200,
  watchSlidesProgress: true,
  parallax: true,

  // If we need pagination
   pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});