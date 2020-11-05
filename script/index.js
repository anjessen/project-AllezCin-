const API_KEY = '143998c72c162901544b826be11c98ad';

const url = 'https://api.themoviedb.org/3/movie/550?api_key=143998c72c162901544b826be11c98ad';

console.log('hello');
const promesse = fetch(url);

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


