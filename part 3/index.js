// change welcome message
const goodTime = document.querySelector("#welcome");

goodTime.addEventListener("click", function () {
  goodTime.innerHTML = "<h1>Have a good time!</h1>";
});

// mobile menu
const mobileMenu = document.querySelector(".hamburger");
const hiddenMenu = document.querySelector(".hidden-menu");
const closeMenu = document.querySelector(".close-menu");

mobileMenu.addEventListener("click", function () {
  hiddenMenu.style.display = "block";
});

closeMenu.addEventListener("click", function () {
  hiddenMenu.style.display = "none";
});

// show content box
const showContentBox = document.querySelector(".btn");
const moreContent = document.querySelector(".content2");

showContentBox.addEventListener("click", function () {
  moreContent.style.display = "block";
});

// HTML DOM and AJAX
const APIdata = document.querySelector(".APIdata");

function ajax(url) {
  return fetch(url).then((res) => res.json());
}
function render(data) {
  const html = data
    .map(
      (item) => `
    <div class="APIitem">
        <h1>${item.name}</h1>
        <p>${item.description}</p>
        <p>$ ${item.price}</p>
    </div>
    `
    )
    .join("");
  APIdata.innerHTML = html;
}

ajax("https://appworks-school.github.io/Remote-Assignment-Data/products").then(
  (data) => render(data)
);
