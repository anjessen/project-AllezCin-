const API_KEY = '143998c72c162901544b826be11c98ad';

const URL = 'https://api.themoviedb.org/3/movie/550?api_key=143998c72c162901544b826be11c98ad';
const movieBox = document.querySelector('.movie-box');


fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        console.log('data: ', data);
    })
    .catch((error) => {
        console.log('Error: ', error);
    });
console.log('Values: ', value);



