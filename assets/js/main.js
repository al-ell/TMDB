// From Video Tutorial: https: //archive.org/details/50-projects-in-50-days-html-css-java-script_202207/18+Day+17+-+Movie+App/054+Movies+UI+Layout.mp4
// Videos 53 - 56
// API key from https://developer.themoviedb.org/docs

// home page end point:
// API url update to return aminated films: https://www.themoviedb.org/talk/60114a2cdd83fa003f99bcfb 
// const apiUrl = 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&with_genres=10751&include_adult=false&sort_by=popularity.desc&api_key=2fcc9b1d9695840cb0066635e69b01b2&page=1/';

// Home page end point: 
// url adapted from "https://teamtreehouse.com/community/deserialization-on-tmdb-api"
const apiUrl = 'https://api.themoviedb.org/3/genre/10751/movies?api_key=2fcc9b1d9695840cb0066635e69b01b2&language=en&include_adult=false&sort_by=popularity.desc'
// Movie poster file path:
const imgPath = 'https://image.tmdb.org/t/p/w1280';
// Search bar endpoint:
const searchAPI = 'https://api.themoviedb.org/3/search/movie?certification_country=US&certification.lte=G&with_genres=10751&include_adult=false&sort_by=popularity.desc&api_key=2fcc9b1d9695840cb0066635e69b01b2&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const formBtn = document.getElementById('submit-btn');

// get initial movies
getMovies(apiUrl);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        <img src="${imgPath + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3 class="movie-title">${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
        </div>`;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    };
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(searchAPI + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
});


// Not in tutorial but I will add click function to search bar 
//formBtn.addEventListener('click', );