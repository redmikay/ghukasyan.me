(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
Vue.component('modal', {
  template: '#modal-template'
})

var myportfolio;
   fetch('portfolio.json').then( function(response) {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then( function(json) {
       myportfolio = json.data;
       var portfolio = new Vue({
         el: '#app',
         data: {
           search: '',
           portfolios: myportfolio,
           modalItem: {
             "title": "test",
             "id": "modal0"
           }
         },
          methods: {
            showModal(item,index) {
              this.modalItem = item;
              this.modalItem.id = 'modal'+index;
              $('.carousel').carousel('dispose');
              $('.carousel').carousel();
              $('.carousel').carousel(0);
            }
          },
          computed: {
             filteredItems: function() {
               return this.portfolios.filter((portfolio) => {
                  return portfolio.tags.toLowerCase().indexOf(this.search.toLowerCase()) > -1
               })
             }
          }
       });

   })
   .catch(function () {
       this.dataError = true;
   });

console.log('not working');
