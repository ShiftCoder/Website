var currentPage = window.location.pathname;
console.log(currentPage)
var navigation = document.getElementById("navigation")
var navLinks = [{
    "file": "/",
    "label": "Home"
  },
  {
    "file": "/videos.html",
    "label": "FPV"
  },
  {
    "file": "/gaming.html",
    "label": "Gaming"
  },
  {
    "file": "/social.html",
    "label": "Social"
  },

]


var navHtml = `
<ul id="nav"></ul>`

navigation.innerHTML = navHtml

// INSERT THE LOGO
var navItems = document.getElementById("nav")
var logoEl = `<div id="logo"><img src="/images/logo.png" /></div>`;
navigation.insertAdjacentHTML('afterbegin', logoEl)

navLinks.forEach((item) => {
  createNavLink(item.file, item.label)
})

function createNavLink(file, label) {
  var classNames = "navlink"
  if (currentPage === file) {
    classNames = classNames + " active"
  }
  console.log(file + ": " + classNames);
  var item = `<li class="${classNames}"><a href="${file}">${label}</a></li>`;
  navItems.insertAdjacentHTML('beforeend', item)
}