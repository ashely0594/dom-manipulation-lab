// Menu data structure
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//partone
const mainEl = document.querySelector("main");

//parttwo
mainEl.style.backgroundColor = "#4a4e4d";

//partthree

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//partfour
mainEl.classList.add("flex-ctr");

//creating a Menu Bar

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");

menuLinks.forEach((link) => {
   const newLink = document.createElement("a");
   newLink.href = link.href;
   newLink.textContent = link.text;
   topMenuEl.appendChild(newLink);
});












