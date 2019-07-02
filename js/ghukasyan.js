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
             "title": "test"
           }
         },
          methods: {
            showModal(item) {
              this.modalItem = item;
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
/*
let arr=[10,2];

function concatenationsSum(a) {
    let sum = 0, n = a.length - 1;

    for(let i=0;i<=n;i++) {
        sum += +(a[i] + '' + a[i]);
        for(let j=i+1;j<=n;j++) {
            sum += +(a[i] + '' + a[j])+ +(a[j] + '' + a[i]);
        }
    }
    return sum;
};
arr=[10,2, 3];
function concatenationsSum(a) {
    let sum = 0, n = a.length - 1;

    for(let i=0;i<=n;i++) {
        let num = (a[i] + '' + a[i]); console.log(num);
        sum += +(num);
        for(let j=i+1;j<=n;j++) {
          let num1 = (a[i] + '' + a[j]); console.log(num1);
          let num2 = (a[j] + '' + a[i]); console.log(num2);
          sum += +num1 + +num2;
        }
    }
    return sum;
};
function concatenationsSum(a) {
  let sums = 0; tens = a.length;
    for(let num of a) {
  	    sums += num;
        tens += Math.pow(10,num.toString().length);
    }
  return sums*tens;
}
num.toString().length;
console.log(concatenationsSum(arr));
*/
