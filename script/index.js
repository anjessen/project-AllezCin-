const API_KEY = '143998c72c162901544b826be11c98ad';

const url = 'https://api.themoviedb.org/3/movie/550?api_key=143998c72c162901544b826be11c98ad';


async function getMovies() {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    return respData;
}

getMovies();




