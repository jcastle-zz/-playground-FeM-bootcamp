const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

fetch(BREEDS_URL)
    .then(function(response) {
        return response.json;
    })
    .then(function (data) {
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = 'cute doggo';

        document.querySelector('.doggos').appendChild(img);
    })