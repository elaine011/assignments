const APIdata = document.querySelector(".APIdata");
const moreData = document.querySelector(".moreData");
let countPages = 1;

function ajax(url) {
  return fetch(url).then((res) => res.json());
}

function render(data) {
  console.log(data);

  const html = data
    .map(
      (item) => `
    <div class="APIitems">
      <div class="APIitem">
      <div class="title">
        <h2 class="name">${item.name}</h2>
        <span class="visibility">${item.visibility}</span>
      </div>
        <p class="description">${item.description}</p>
        <div class="topics">${item.topics}</div>
      </div>
    </div>
    `
    )
    .join("");

  APIdata.innerHTML = html;
  const topicsHTML = document.querySelector(".topics");

  const htmlTopics = data
    .map((topic) => {
      let t = "";

      for (let i = 0; i < topic.topics.length; i++) {
        t += `<p >${topic.topics[i]}</p>`;
        console.log(topic.topics[i]);
      }
      return t;
    })
    .join("");
  topicsHTML.innerHTML = htmlTopics;
}

function ren(data) {
  console.log(data);

  const newData = data
    .map((item) => {
      let result = `
    <div class="APIitems">
      <div class="APIitem">
      <div class="title">
        <h2 class="name">${item.name}</h2>
        <span class="visibility">${item.visibility}</span>
      </div>
        <p class="description">${item.description}</p>
        <div class="topics">`;
      let b = "";
      for (let a = 0; a < item.topics.length; a++) {
        b += `<p>${item.topics[a]}</p>`;
      }

      result = result + b + "</div></div></div>";
      return result;
    })
    .join("");

  console.log(newData);

  APIdata.insertAdjacentHTML("beforeend", newData);
}

// click more btn
moreData.addEventListener("click", () => {
  countPages += 1;
  ajax(
    `https://api.github.com/orgs/facebook/repos?per_page=5&page=${countPages}`
  ).then((data) => ren(data));
});

ajax(`https://api.github.com/orgs/facebook/repos?per_page=5&page=1`).then(
  (data) => render(data)
);
