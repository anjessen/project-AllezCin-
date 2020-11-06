const API_KEY = '143998c72c162901544b826be11c98ad';

const urlTrendMovie = 'https://api.themoviedb.org/3/trending/movie/week?api_key=143998c72c162901544b826be11c98ad';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
const promesse = fetch(urlTrendMovie);

let movies;


function getTrendMovies(){

    promesse 
        .then(async response => {
            try {
                const cors = await response.json();
                console.log(cors);
            } catch (e){
                console.log(e);
            }
        })
        .catch(err => console.log(err));
}
getTrendMovies();

function moviePoster(movies) {
    return movies.map((movie) => {
        return `
            <img src=${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id}/>
        `;
    })
}

function displayTrendCards(){
let counter = 0;
   while (counter <= 6) {
        document.getElementById('trend-movies').innerHTML += `
        <div class="trend-movies-box">
        <div class="trend-movies-card">
            <img class="card-img-top" src="img/Venom.jpg"  alt="Card image cap " >
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


displayTrendCards();
