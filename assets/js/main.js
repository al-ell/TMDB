// From Video Tutorial: https: //archive.org/details/50-projects-in-50-days-html-css-java-script_202207/18+Day+17+-+Movie+App/054+Movies+UI+Layout.mp4
// Videos 53 - 56
// API key from https://developer.themoviedb.org/docs


// Home page end point:
// url adapted from "https://teamtreehouse.com/community/deserialization-on-tmdb-api"
const apiUrl =
    "https://api.themoviedb.org/3/genre/10751/movies?api_key=2fcc9b1d9695840cb0066635e69b01b2&language=en&include_adult=false&sort_by=popularity.desc";
// Movie poster file path:
const imgPath = "https://image.tmdb.org/t/p/w500";
// Search bar endpoint:
const searchAPI =
    'https://api.themoviedb.org/3/search/movie?certification_country=US&certification.lte=G&with_genres=10751&include_adult=false&sort_by=popularity.desc&api_key=2fcc9b1d9695840cb0066635e69b01b2&query="';

// Tutorial to add genre buttons : https://www.youtube.com/watch?v=_KzimS9fcM0
const genreUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2fcc9b1d9695840cb0066635e69b01b2';

// Up to date genre array from: https://developer.themoviedb.org/reference/genre-movie-list
const genre = [
    {
        id: 28,
        name: "Action",
    },
    {
        id: 12,
        name: "Adventure",
    },
    {
        id: 16,
        name: "Animation",
    },
    {
        id: 35,
        name: "Comedy",
    },
    {
        id: 80,
        name: "Crime",
    },
    {
        id: 99,
        name: "Documentary",
    },
    {
        id: 18,
        name: "Drama",
    },
    {
        id: 10751,
        name: "Family",
    },
    {
        id: 14,
        name: "Fantasy",
    },
    {
        id: 36,
        name: "History",
    },
    {
        id: 27,
        name: "Horror",
    },
    {
        id: 10402,
        name: "Music",
    },
    {
        id: 9648,
        name: "Mystery",
    },
    {
        id: 10749,
        name: "Romance",
    },
    {
        id: 878,
        name: "Science Fiction",
    },
    {
        id: 10770,
        name: "TV Movie",
    },
    {
        id: 53,
        name: "Thriller",
    },
    {
        id: 10752,
        name: "War",
    },
    {
        id: 37,
        name: "Western",
    },
];

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const formBtn = document.getElementById("submit-btn"); // to add event listener
const tagsEl = document.getElementById('tags');

var selectedGenre = [];
setGenre();
function setGenre() {
    tagsEl.innerHTML = ''; // Clears any selected tags on page load
    genre.forEach(genre => { // loop through the genre array
        const t = document.createElement('button'); // make the button
        t.classList.add('tag');
        t.id = genre.id; // display name attached to genre id from genre array
        t.innerText = genre.name;
        t.addEventListener('click', () => {
            if (selectedGenre.length = 0) { // if there is nothing in th array, push genre id into the array
                selectedGenre.push(genre.id);
            } else { // check if the id is already in the array
                if (selectedGenre.includes(genre.id)) {
                    selectedGenre.forEach((id, idx) => { // index required as position in array unknown 
                        if (id == genre.id) {
                            selectedGenre.splice(idx, 1); // prevents repeated clicks on the same genre from registering
                        }
                    });
                } else { // if genre hasn't been clicked add to array:
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre); // to test that the click of the button links to genre array
            // call the API url and link to getMovies function, add the genre filter to the url. 
            // I have added the genre id for family friendly movies so that only movies with this genre id will display in the results.
            getMovies(genreUrl + '&with_genres=10751,' + encodeURI(selectedGenre.join(',')));
            highlightSelection();
        });
        tagsEl.append(t); // add to the DOM
    });
}

function highlightSelection() { // to select and highlight multiple genres at once
    const tags = document.querySelectorAll('.tag'); // loop through the tags clear selection
    tags.forEach(tag => {
        tag.classList.remove('highlight');
    });

    if (selectedGenre.length != 0) { // check not empty
        selectedGenre.forEach(id => { // loop through array
            const highlightedTag = document.getElementById(id); // link to genre id in array
            highlightedTag.classList.add('highlight');
        });
    }
}

// get initial movie results for home page:
// updated to arrow function & error catching from: https://www.youtube.com/watch?v=_KzimS9fcM0
getMovies(apiUrl);
function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        if (data.results.length !== 0) {
            showMovies(data.results);
        } else {
            main.innerHTML = `<h2 class="no-reusult">Sorry!! No results found... Please try again</h2>`;
        }
    });
}

function showMovies(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        // addition to add image if poster_path is broken link
        movieEl.innerHTML = `
        <img src="${poster_path ? imgPath + poster_path : "/assets/images/missing-poster.webp"}" alt="${title}">
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
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    selectedGenre = [];
    highlightSelection();
    if (searchTerm && searchTerm !== "") {
        getMovies(searchAPI + searchTerm);

        search.value = "";
    } else {
        window.location.reload();
    }
});

// Not in tutorial but I will add click function to search bar
//formBtn.addEventListener('click', );
