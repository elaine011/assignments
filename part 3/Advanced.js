const APIdata = document.querySelector(".APIdata");
const moreData = document.querySelector(".moreData");
let countPages = 5;

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

  // console.log(htmlTopics);

  // console.log(topicsHTML);

  // for (let i = 0; i < data.topics.length; i++) {
  //   const topic = `<p class="topics">${data.topics[i]}</p>`;
  // }

  // data.map((item) => {
  //   if (item.topics !== []) {
  //     console.log(item.topics);
  //     for (let i = 0; i < item.topics.length; i++) {
  //       const html = `
  //         <div class="APIitems">
  //           <div class="APIitem">
  //             <div class="title">
  //               <h2 class="name">${item.name}</h2>
  //               <span class="visibility">${item.visibility}</span>
  //             </div>
  //             <p class="description">${item.description}</p>
  //             <p class="topics">${item.topics[i]}</p>
  //           </div>
  //         </div>
  //         `;
  //       APIdata.innerHTML = html;
  //       console.log(html);
  //     }
  //   } else {
  //     APIdata.innerHTML = html;
  //   }
  // });

  // data.map((item) => {
  //   console.log(item.topics);

  //   const html = `
  //     <div class="APIitems">
  //       <div class="APIitem">
  //         <div class="title">
  //           <h2 class="name">${item.name}</h2>
  //           <span class="visibility">${item.visibility}</span>
  //         </div>
  //         <p class="description">${item.description}</p>
  //         <p class="topics"></p>
  //       </div>
  //     </div>
  //     `;
  //   APIdata.innerHTML = html;

  //   const topicsHTML = document.querySelector(".topics");

  //   for (let i = 0; i < item.topics.length; i++) {
  //     let htmlP = `<p class="topics">${item.topics[i]}</p>`;
  //     console.log(item.topics[i]);
  //     topicsHTML.innerHTML = htmlP;
  //   }
  // });
}

// click more btn
moreData.addEventListener("click", () => {
  countPages += 5;
  ajax(
    `https://api.github.com/orgs/facebook/repos?per_page=${countPages}&page=1`
  ).then((data) => render(data));
});

ajax(`https://api.github.com/orgs/facebook/repos?per_page=5&page=1`).then(
  (data) => render(data)
);
