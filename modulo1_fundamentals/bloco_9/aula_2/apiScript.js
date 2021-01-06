const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (joke) => {
  let   h2 = document.querySelector('#jokeContainer')
  h2.innerHTML = joke;
}

const fetchJoke = () => {
  fetch((API_URL, )
  .then(response => response.json())
  .then(data => {
      console.log(data)
  }))
}

// window.onload = () => fetchJoke();


// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//       fetch(url)
//         .then((r) => r.json())
//         .then((r) => resolve(r.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }