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


