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


// schedule functionality

let day = $(".day")
let selectDay

// onclick function called when clicked on days
day.click((e) => {
  selectDay = $(e.target)
  day.removeClass("selected")
  selectDay.addClass("selected")
  shuffle()
})

// shuffle the timeTable elements
function shuffle() {
  let timeTable = $(".time-table")
  let timeTableChild = $(".time-table-item")
  let randomTimeTableChild = []
  let i = timeTableChild.length
  let j;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1))
    randomTimeTableChild.push(timeTableChild[j])
    timeTableChild.splice(j, 1)
  }
  randomTimeTableChild.map((ele, idx) => {
    timeTable.append(ele)
  })
}


// form validation

let formElements = $(".contact-form .form-group")
let fName = $(".first-name")
let lName = $(".last-name")
let subject = $(".subject")
let email = $(".email")
let subEmail = $(".subscribe-form .form-group input")
let val;
let nameAttr;

// validation for subscribe form for no input

$(".sub-btn").click((e) => {
  e.preventDefault()
  $(".error").addClass("hide")
  validate(subEmail)
})

// validation for contact form for no input

$(".submit-btn").click((e) => {
  e.preventDefault()
  $(".error").addClass("hide")
  formElements.map((idx, ele) => {
    formEle = $(ele).children(":first-child")
    validate(formEle)
  })
})

// validation function for no input
function validate(formEle) {
  formEle.removeClass("error-border")
  val = formEle.val()
  if (val.length === 0) {
    emptyValidate(formEle)
  }
}

// function for selecting the target element
function emptyValidate(formEle) {
  nameAttr = formEle.attr("name")
  switch (nameAttr) {
    case "First Name":
    case "Last Name":
    case "Subject":
    case "Email":
    case "Subscribe Email":
    case "Message":
      noValue(nameAttr)
    default:
      break;
  }
}

// function for DOM manipulation after validating
function noValue(name) {
  $(`input[name = "${name}"]`).addClass("error-border").next().removeClass("hide").html(`Please write your ${name}`)
  $(`textarea[name = "${name}"]`).addClass("error-border").next().removeClass("hide").html(`Please write your ${name}`)
}

// on focus validtaion
fName.on("blur", function(e) { stringValidate(e) })
lName.on("blur", function(e) { stringValidate(e) })
subject.on("blur", function(e) { stringValidate(e) })
email.on("blur", function(e) { emailValidate(e) })
subEmail.on("blur", function(e) { emailValidate(e) })


//  regular expression for string and email
let strRegEx = /^[A-Za-z]+$/
let emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let targetElement;

// function for string validation
function stringValidate(e) {
  targetElement = $(e.target)
  if ((targetElement.val().length < 12) && (targetElement.val().length > 3)) {
    targetElement.removeClass("error-border").next().addClass("hide")
    if(strRegEx.test(targetElement.val())){
      targetElement.removeClass("error-border").next().addClass("hide")
    }else {
      targetElement.addClass("error-border").next().removeClass("hide").html(`${targetElement.attr("name")} should contain only characters`)
    }
  }else {
    targetElement.addClass("error-border").next().removeClass("hide").html(`${targetElement.attr("name")} is to small`)
  }
}

// function for email validation
function emailValidate(e) {
  targetElement = $(e.target)

  if ((targetElement.val().length > 6)) {
    targetElement.removeClass("error-border").next().addClass("hide")
    if(emailRegEx.test(targetElement.val())){
      targetElement.removeClass("error-border").next().addClass("hide")
    }else {
      targetElement.addClass("error-border").next().removeClass("hide").html(`${targetElement.attr("name")} is incorrect`)
    }
  }else {
    targetElement.addClass("error-border").next().removeClass("hide").html(`${targetElement.attr("name")} is to small`)
  }
} 

