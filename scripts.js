var navigation = document.getElementById("navigation")
var navLinks = [
  {
    "file": "homepage",
    "label": "Home"
  },
  {
    "file": "dog",
    "label": "My Dog"
  },
  {
    "file": "Youtube",
    "label": "My Videos"
  },
  {
    "file": "contact",
    "label": "Contact Me"
  },
  {
    "file": "hello",
    "label": "Hello Man"
  }
]


var navHtml = `
<table border="1">
  <tr id="nav">
  </tr>
</table>`


navigation.innerHTML = navHtml

var navItems = document.getElementById("nav")
navLinks.forEach((item) => {
  var item = `<td><a href="${item.file}.html">${item.label}</a></td>`;
  navItems.insertAdjacentHTML('beforeend',item)
})