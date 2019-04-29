const getJokes = document.querySelector('#getJokes');


getJokes.addEventListener('click', getJokesFromApi);

function getJokesFromApi(e) {
  const number = document.querySelector('#number').value;
  const displayDiv = document.querySelector('#output');
  const url = `http://api.icndb.com/jokes/random/${number}`;
  console.log(url);

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      output = `<ul>`;
      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke} (${joke.categories})</li>`;
        });
        output += `</ul>`;
        displayDiv.innerHTML = output;
        console.log(response);
      }
    }
  }

  xhr.send();
  e.preventDefault();
}