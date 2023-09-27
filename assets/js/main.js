// From Video Tutorial: https: //archive.org/details/50-projects-in-50-days-html-css-java-script_202207/18+Day+17+-+Movie+App/054+Movies+UI+Layout.mp4
// Videos 53 - 56
// API key from https://developer.themoviedb.org/docs

// home page end point:
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=2fcc9b1d9695840cb0066635e69b01b2&page=1/';
// Movie poster file path:
const imgPath = 'https://image.tmdb.org/t/p/w1280';
// Search bar endpoint:
const searchUrl = 'https://api.themoviedb.org/3/search/movie?certification_country=US&certification.lte=G&api_key=2fcc9b1d9695840cb0066635e69b01b2&page=1&query="/';


// get initial movies
getMovies(apiUrl);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
}

