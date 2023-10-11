/* From Video Tutorial:
* https: //archive.org/details/50-projects-in-50-days-html-css-java-script_202207/18+Day+17+-+Movie+App/054+Movies+UI+Layout.mp4
* Videos 53 - 56
* API key from https://developer.themoviedb.org/docs
*/

// Home page end point url adapted from:
// "https://teamtreehouse.com/community/deserialization-on-tmdb-api"
const apiUrl =
    "https://api.themoviedb.org/3/genre/10751/movies?api_key=2fcc9b1d9695840cb0066635e69b01b2&language=en&include_adult=false&sort_by=popularity.desc";

// Movie poster file path:
const imgPath = "https://image.tmdb.org/t/p/w500";
/* Search bar with successful genre filtering
* (not supported in search API):
*  https://www.themoviedb.org/talk/6441194ffcec2e0439d8d361
*/

// Search bar endpoint:
const searchAPI =
    "https://api.themoviedb.org/3/discover/movie?api_key=2fcc9b1d9695840cb0066635e69b01b2&with_genres=10751&include_adult=false&sort_by=popularity.desc&with_text_query='";

// Tutorial to add genre buttons : https://www.youtube.com/watch?v=_KzimS9fcM0
const genreUrl =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2fcc9b1d9695840cb0066635e69b01b2";

// Up to date genre array from: https://developer.themoviedb.org/reference/genre-movie-list
const genre = [
    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure"
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Musical"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 878,
        name: "Sci-Fi"
    },
    {
        id: 37,
        name: "Western"
    }
];

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
// //  edit: to add event listener
const searchBtn = document.getElementById("submit-btn");
const tagsEl = document.getElementById("tags");


// Pagination walkthrough: https://www.youtube.com/watch?v=Oruem4VgRCs
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const current = document.getElementById("current");

var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = "";
var totalPages = 20;


var selectedGenre = [];
setGenre();
function setGenre() {
    tagsEl.innerHTML = ""; // Clears any selected tags on page load
    genre.forEach((genre) => {
        // loop through the genre array
        const t = document.createElement("button"); // make the button
        t.classList.add("tag");
        t.id = genre.id; // display name attached to genre id from genre array
        t.innerText = genre.name;
        t.addEventListener("click", function () {
            if (selectedGenre.length === 0) {
                // if there is nothing in the array, push genre id into the array
                selectedGenre.push(genre.id);
            } else {
                // check if the id is already in the array
                if (selectedGenre.includes(genre.id)) {
                    selectedGenre.forEach((id, idx) => {
                        // index required as position in array unknown
                        if (id === genre.id) {
                            // prevents repeated clicks on the same genre from registering
                            selectedGenre.splice(idx, 1);
                        }
                    });
                } else {
                    // if genre hasn't been clicked add to array:
                    selectedGenre.push(genre.id);
                }
            }
            /* call the API url and link to getMovies function,
            * add the genre filter to the url.
            * I have added the genre id for family friendly movies so that only
            * movies with this genre id will display in the results.
            */
            getMovies(
                genreUrl + "&with_genres=10751," + encodeURI(selectedGenre.join(","))
            );
            highlightSelection();
        });
        tagsEl.append(t); // add to the DOM
    });
}

function highlightSelection() {
    // to select and highlight multiple genres at once,
    // loop through the tags and clear selection
    const tags = document.querySelectorAll(".tag");
    tags.forEach((tag) => {
        tag.classList.remove("highlight");
    });

    if (selectedGenre.length !== 0) {
        // check not empty
        selectedGenre.forEach((id) => {
            // loop through array
            // link to genre id in array
            const highlightedTag = document.getElementById(id);
            highlightedTag.classList.add("highlight");
        });
    }
}

/* get initial movie results for home page
* (updated to arrow function & error catching from:
https://www.youtube.com/watch?v=_KzimS9fcM0
*/
getMovies(apiUrl);
function getMovies(url) {
    lastUrl = url;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data.results.length !== 0) {
                showMovies(data.results);

                currentPage = data.page;
                nextPage = currentPage + 1;
                prevPage = currentPage - 1;
                totalPages = data.total_pages;

                current.innerText = currentPage;
                if (currentPage <= 0) {
                    prev.classList.add("disabled");
                    next.classList.remove("disabled");
                } else if (currentPage >= totalPages) {
                    prev.classList.remove("disabled");
                    next.classList.add("disabled");
                } else {
                    prev.classList.remove("disabled");
                    next.classList.remove("disabled");
                }
                tagsEl.scrollIntoView({ behavior: "smooth" });
            } else {
                main.innerHTML = `<h2 class="no-reusult">
                    Sorry!! No results found... Please try again
                </h2>`;
            }
        });
}

function showMovies(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, overview, vote_average } = movie;

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
                <h3>About:</h3>
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

// searchbar button function added:
searchBtn.addEventListener("click", (e) => {
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


// Pagination walkthrough: https://www.youtube.com/watch?v=Oruem4VgRCs
prev.addEventListener("click", () => {
    if (prevPage > 0) {
        pageCall(prevPage);
    }
});

next.addEventListener("click", () => {
    if (nextPage <= totalPages) {
        pageCall(nextPage);
    }
});

function pageCall(page) {
    let urlSplit = lastUrl.split("?");
    let queryParams = urlSplit[1].split("&");
    let key = queryParams[queryParams.length - 1].split("=");
    if (key[0] !== "page") {
        let url = lastUrl + "&page=+page";
        getMovies(url);
    } else {
        key[1] = page.toString();
        let a = key.join("=");
        queryParams[queryParams.length - 1] = a;
        let b = queryParams.join("&");
        let url = urlSplit[0] + "?" + b;
        getMovies(url);
    }
}