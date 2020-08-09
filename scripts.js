var currentPage = window.location.pathname;
console.log(currentPage)
var navigation = document.getElementById("navigation")
var pages = {

}
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
  {
    "file": "personal.html",
    "label": "About Me"
  },
  {
    "file": "https://discord.gg/xAw9wCz",
    "label": "Discord",
    "target": "_blank"
  },

]


var navHtml = `
<ul id="nav"></ul>`

navigation.innerHTML = navHtml

// INSERT THE LOGO
var navItems = document.getElementById("nav")
var logoEl = `<div id="logo"><img src="/images/logo.png" /></div>`;
navigation.insertAdjacentHTML('afterbegin', logoEl)
var logobgEl = `<div id="bglogo"><img src="/images/bglogo.png" /></div>`;
document.body.insertAdjacentHTML('beforeend', logobgEl)

navLinks.forEach((item) => {
  createNavLink(item.file, item.label, item.target)
})

function createNavLink(file, label, target = "_self") {
  var classNames = "navlink"
  if (currentPage === file) {
    classNames = classNames + " active"
  }
  console.log(file + ": " + classNames);
  var item = `<li class="${classNames}"><a href="${file}" target="${target}">${label}</a></li>`;
  navItems.insertAdjacentHTML('beforeend', item)
}

document.title = `ShiftFPV - ${window.location.pathname.replace('/','').replace('.html','')}`;