const API_KEY = '143998c72c162901544b826be11c98ad';

const urlTrendMovie = 'https://api.themoviedb.org/3/trending/movie/week?api_key=143998c72c162901544b826be11c98ad';
const urlGender = 'https://api.themoviedb.org/3/genre/movie/list?api_key=143998c72c162901544b826be11c98ad&language=en-US';
//const urlFeatured = 'https://api.themoviedb.org/3/movie/${MovieID}/videos?api_key=112ca2b68890cedc6cd02c2b81593072&language=en-US';
const img_url ='http://image.tmdb.org/t/p/w300/';
const urlPopularMovie = 'https://api.themoviedb.org/3/movie/popular?api_key=143998c72c162901544b826be11c98ad&language=en-US'; // Featured
const urlPopularMovie2 = 'https://api.themoviedb.org/3/movie/popular?api_key=143998c72c162901544b826be11c98ad&language=en-US&page=2'; //more Featured
const urlPopularMovie3 = 'https://api.themoviedb.org/3/movie/popular?api_key=143998c72c162901544b826be11c98ad&language=en-US&page=3';


let data;
let dataFeatured;

function arrGenre(genderId, gender){
    let genreArr = []
    let i = 0;
    while (i < 19)
    {
        if (genderId.includes(gender[i].id)){
            genreArr.push(gender[i].name);
        }
        i++;
    }
    genreArr = genreArr.join(' - ');
    return genreArr
};

const getPopularMovies = () => {
    return new Promise((res, rej) => {
        return fetch(urlPopularMovie, urlPopularMovie2, urlPopularMovie3)
            .then((data) => data.json())
            .then((data) => res(data))
            .catch((e) => {
                console.log(e);
                rej(e);
            });
    });
};

const getTrendMovies = () => {
    return new Promise((res, rej) => {
        return fetch(urlTrendMovie)
            .then((data) => data.json())
            .then((data) => res(data))
            .catch((e) => {
                console.log(e);
                rej(e);
            });
    });
};

const getGenderMovies = () => {
    return new Promise((res, rej) => {
        return fetch(urlGender)
            .then((data) => data.json())
            .then((data) => res(data))
            .catch((e) => {
                console.log(e);
                rej(e);
            });
    });
};

const displayTrendCard = async () => {
    try {
        const data = await getTrendMovies();
        const gender = await getGenderMovies();
        console.log(data);
        let counter = 0;
                while (counter < 6) {
                    const genderId = data.results[counter].genre_ids;
                    document.querySelector('#trend-movies').innerHTML += `
                            <div class="movies-box">
                            <div class="movies-card">
                            <img class="img-movies" src="${img_url + data.results[counter].poster_path}">
                            <div class="card-body">
                            <h3 class="card-title">${data.results[counter].title}</h3>
                            <p class="card-text">${data.results[counter].release_date.slice(0,4)}</p>
                            <p class="card-text">${arrGenre(genderId, gender.genres)}</p>
                            </div>
                            </div>
                        </div>
                            `
                    counter++;
                }
    } catch (e) {
        console.log(e);
    }
   
};
displayTrendCard();


const displayFeatureCard = async () => {
    try {
        const gender = await getGenderMovies();
        const featured = await getPopularMovies();
        console.log(dataFeatured);
        let counter = 0;
                while (counter <= 11) {
                    const genderId = data.results[counter].genre_ids;
                    document.querySelector('featured-movies').innerHTML += `
                            <div class="movies-box">
                            <div class="movies-card">
                            <img class="img-movies" src="${img_url + data.results[counter].poster_path}">
                            <div class="card-body">
                            <h3 class="card-title">${data.results[counter].title}</h3>
                            <p class="card-text">${data.results[counter].release_date.slice(0,4)}</p>
                            <p class="card-text">${arrGenre(genderId, gender.genres)}</p>
                            </div>
                            </div>
                        </div>`;
            counter++;
            }
    } catch (e) {
        console.log(e);
    }
};
displayFeatureCard();




/*function getTrendMovies(){
    const promesse = fetch(urlTrendMovie);
    promesse 
        .then(async response => {
            try {
                data = await response.json();
                let counter = 0;
                while (counter <= 6) {
                    document.getElementById('trend-movies').innerHTML += `
                    <div class="trend-movies-box">
                    <div class="trend-movies-card">
                    <img src= <img src=${img_url + data.results[counter].poster_path}data-movie-id=${data.results[counter].id}/>
                    <div class="card-body">
                    <h3 class="card-title">Venom</h3>
                    <p class="card-text">2016</p>
                    <p class="card-text">genre</p>
                </div>
            </div>
        </div>`;
            counter++;
            }
            }
             catch (e){
                console.log(e);
            }
        })
        .catch(err => console.log(err));
}*/