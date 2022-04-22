/* Author: 

*/


// Nav filter

let navItems = $(".nav-items")
let allChildOfMain = $("main").children()

navItems.click(changeTab)

// function for change the tab
function changeTab(e) {
  navItems.map((idx, ele) => {
    $(ele).removeClass("active")
  })

  let navEle = $(e.target)

  // Map through all elements inside main element

  allChildOfMain.map((index, ele) => {
    let currentTab = $(ele)
    currentTab.addClass("hide")
    currentTab.removeClass("fade")

    $("footer, .contact-btn-div").addClass("hide")

    if (navEle.attr("name") === "home") {
      currentTab.removeClass("hide")
      navEle.parent().addClass("active")
      $("footer, .contact-btn-div").removeClass("hide")
    } else if ((navEle.attr("name") === ele.id)) {
      currentTab.removeClass("hide")
      currentTab.addClass("fade")
      navEle.parent().addClass("active")
    }
  })
}


// counter functionality for animating the count present in the web page 

let countElement = $(".count")
let countEle;
let counterSection = document.querySelector(".counter-section")


let observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      countElement.map((idx, ele) => {
        $(ele).prop('Counter', 0).animate({
          Counter: $(ele).text()
        }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(ele).text(Math.ceil(now));
          }
        });
      });
      observer.unobserve(counterSection)
    }
  })


}, {
  threshold: .5
})
observer.observe(counterSection)

// slick slider gym slider

$(".gym-slider").slick({
  autoplay: true,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

// slick slider card section

$(".card-section").slick({
  autoplay: true,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})


