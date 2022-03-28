// API

let ul = document.querySelector("ul");

const firstPromise = fetch("https://jsonplaceholder.typicode.com/comments");
console.log(firstPromise);

firstPromise
  .then((response) => {
    return response.json();
  })
  .then((item) => {
    const elementos = item
      .map((resultado) => `<li> ${resultado.email}</li>`)
      .join("\n");
    ul.innerHTML = elementos;
  });
