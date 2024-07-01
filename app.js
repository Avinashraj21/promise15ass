document.addEventListener("DOMContentLoaded", function () {
    fetchCatFacts();
    fetchDogImages();
    fetchJokes();
});

function fetchCatFacts() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cat-facts').innerText = data.fact;
        })
        .catch(error => console.error('Error fetching cat fact:', error));
}

function fetchDogImages() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Random Dog';
            img.className = 'img-fluid';
            const container = document.getElementById('dog-images');
            container.innerHTML = '';
            container.appendChild(img);
        })
        .catch(error => console.error('Error fetching dog image:', error));
}

function fetchJokes() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            const joke = data.joke || `${data.setup} - ${data.delivery}`;
            document.getElementById('jokes').innerText = joke;
        })
        .catch(error => console.error('Error fetching joke:', error));
}
