const API_KEY = '143998c72c162901544b826be11c98ad';

const urlTrendMovie = 'https://api.themoviedb.org/3/trending/movie/week?api_key=143998c72c162901544b826be11c98ad';
const img_url = 'https://image.tmdb.org/t/p/w500/';

let movies;
let data;

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

function moviePoster(movies) {

    return movies.map((movie) => {
        return `
            <img src=${IMAGE_URL + data.results.poster_path} data-movie-id=${data.results.id}/>
        `;
    })
}

/*function displayTrendCards(trendMovie){
    let counter = 0;
        while (counter <= 6) {
            document.getElementById('trend-movies').innerHTML += `
            <div class="trend-movies-box">
            <div class="trend-movies-card">
            <img src=<img src=${IMAGE_URL + data.results.poster_path}data-movie-id=${data.results.id}/>
                <div class="card-body">
                    <h5 class="card-title">Venom</h5>
                    <p class="card-text">2016</p>
                    <p class="card-text">genre</p>
                </div>
            </div>
        </div>`;
            counter++;
        }
    }
displayTrendCards();*/


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
        console.log(data);
        let counter = 0;
                while (counter <= 6) {
                    document.getElementById('trend-movies').innerHTML += `
                    <div class="trend-movies-box">
                    <div class="trend-movies-card">
                    <img src= <img src="${img_url + data.results[counter].poster_path}">
                    <div class="card-body">
                    <h3 class="card-title">Venom</h3>
                    <p class="card-text">2016</p>
                    <p class="card-text">genre</p>
                </div>
            </div>
        </div>`;
            counter++;
            }
    } catch (e) {
        console.log(e);
    }
};

displayTrendCard();
