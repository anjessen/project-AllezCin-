const API_KEY = '143998c72c162901544b826be11c98ad';

const urlTrendMovie = 'https://api.themoviedb.org/3/trending/movie/week?api_key=143998c72c162901544b826be11c98ad';
const urlGender = 'https://api.themoviedb.org/3/genre/movie/list?api_key=143998c72c162901544b826be11c98ad&language=en-US';
//const urlFeatured = 'https://api.themoviedb.org/3/movie/${MovieID}/videos?api_key=112ca2b68890cedc6cd02c2b81593072&language=en-US';
const img_url ='http://image.tmdb.org/t/p/w300/';

let data;

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

const getTrendMovies = () => {
    return new Promise((res, rej) => {
        return fetch(urlTrendMovie)
            .then((response) => response.json())
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
                            <div class="trend-movies-box">
                            <div class="trend-movies-card">
                            <img class="img-trend-movies" src="${img_url + data.results[counter].poster_path}">
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

let dataFeatured;

const getGenderMovies = () => {
    return new Promise((res, rej) => {
        return fetch(urlGender)
            .then((response) => response.json())
            .then((dataFeatured) => res(dataFeatured))
            .catch((e) => {
                console.log(e);
                rej(e);
            });
    });
};


/*const displayFeatureCard = async () => {
    try {
        const dataFeatured = await getGenderMovies();
        const gender = await get
        console.log(dataFeatured);
        let counter = 0;
                while (counter <= 11) {
                    document.getElementById('featured-movies').innerHTML += `
                    <div class="featured-movies-box">
                    <div class="featured-movies-card">
                    <img class="img-movies" src="${img_url + dataFeatured.results[counter].poster_path}">
                    <div class="card-body">
                    <h3 class="card-title">${dataFeatured.results[counter].title}</h3>
                    <p class="card-text">${dataFeatured.results[counter].release_date}</p>
                    <p class="card-text">${dataFeatured.results[counter].genre_ids}</p>
                </div>
            </div>
        </div>`;
            counter++;
            }
    } catch (e) {
        console.log(e);
    }
};
displayFeatureCard();*/




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