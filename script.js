const searchInput = document.getElementById("searchInput");

const watchButton = document.getElementById("watchButton");
const movieDetails = document.getElementById("movieDetails");

let selectedMovie = "";

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach(function (card) {
    const movieName = card.querySelector("h3").textContent.toLowerCase();

    if (movieName.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
// SHOW MOVIE DETAILS

function showMovie(card) {
  const movieName = card.querySelector("h3").textContent;
  selectedMovie = movieName;

  document.querySelectorAll(".movie-card").forEach(function (movieCard) {
    movieCard.classList.remove("selected");
  });

  card.classList.add("selected");

  const rating = parseFloat(
    card.querySelector("p").textContent.replace("⭐", ""),
  );

  // rest of your code...

  let ratingMessage = "";

  if (rating >= 8.5) {
    ratingMessage = "Excellent Movie";
  } else if (rating >= 8.0) {
    ratingMessage = "Great Movie";
  } else if (rating >= 7.0) {
    ratingMessage = "Good Movie";
  } else {
    ratingMessage = "Average Movie";
  }

  const year = card.querySelectorAll("p")[1].textContent;
  const category = card.querySelectorAll("p")[2].textContent;
  const description = card.querySelectorAll("p")[3].textContent;

  const image = card.querySelector("img").src;

  document.getElementById("detailTitle").textContent = movieName;

  document.getElementById("detailRating").textContent =
    `⭐ ${rating} - ${ratingMessage}`;

  document.getElementById("detailYears").textContent = year;
  document.getElementById("detailCategory").textContent = category;
  document.getElementById("detailDescription").textContent = description;

  document.getElementById("detailImage").src = image;

  movieDetails.style.display = "block";
}

// CLOSE MOVIE DETAILS

watchButton.addEventListener("click", function () {
  if (selectedMovie === "") {
    document.querySelector("#watchMessage p").textContent =
      "Please select a movie first.";
  } else {
    document.querySelector("#watchMessage p").textContent = selectedMovie;
  }

  document.getElementById("watchMessage").style.display = "block";
});

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", function () {
  document.getElementById("watchMessage").style.display = "none";
});

// CLOSE MOVIE DETAILS

const closeDetails = document.getElementById("closeDetails");

function closeMovieDetails() {
  movieDetails.style.display = "none";
}

closeDetails.addEventListener("click", function () {
  closeMovieDetails();
});

const movies = [
  {
    name: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: "9.0",
    years: "2008",
    category: "popular",
    description:
      "A masked hero face criminal who wants to create chos in gotham city.",
    url: "https://www.imdb.com/title/tt0468569/",
  },
  {
    name: "Wonder Woman",
    image: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    rating: "7.4",
    years: "2017",
    category: "popular",
    description:
      "Diana, an Amazon warrior, discovers her powers and fights to protect the world.",
    url: "https://www.imdb.com/title/tt0451279/",
  },
  {
    name: "Spider-Man",
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    rating: "8.2",
    years: "2011",
    category: "popular",
    description:
      "A young hero learns to use his powers while protecting his city from danger",
    url: "https://www.imdb.com/title/tt0145487/",
  },

  {
    name: "Batman v Superman: Dawn of Justice",
    image: "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    rating: "6.5",
    years: "2016",
    category: "popular",
    description:
      "Batman and Superman clash while a new threat endangers humanity.",
    url: "https://www.imdb.com/title/tt2975590/",
  },

  {
    name: "Parasite",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    rating: "8.5",
    years: "2019",
    category: "TopRated Movies",
    description:
      "A struggling family becomes deeply involved with a wealthy household in an unexpected way.",
    url: "https://www.imdb.com/title/tt6751668/",
  },
  {
    name: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: "8.6",
    years: "2014",
    category: "TopRated Movies",
    description:
      "A team of explorers travels through space searching for a new home for humanity.",
    url: "https://www.imdb.com/title/tt0816692/",
  },

  {
    name: "Inception",
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: "8.8",
    years: "2010",
    category: "TopRated Movies",
    description:
      "A skilled thief enters people's dreams to steal secrets and attempt an impossible mission.",
    url: "https://www.imdb.com/title/tt1375666/",
  },
  {
    name: "Avatar",
    image: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    rating: "7.9",
    years: "2009",
    category: "popular",
    description:
      "A former Marine joins the Na'vi on the alien world of Pandora.",
    url: "https://www.imdb.com/title/tt0499549/",
  },
  {
    name: "Joker",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    rating: "8.2",
    years: "2019",
    category: "TopRated Movies",
    description: "A struggling comedian descends into chaos in Gotham City.",
    url: "https://www.imdb.com/title/tt7286456/",
  },
  {
    name: "Titanic",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    rating: "7.9",
    years: "1997",
    category: "popular",
    description: "Two young people fall in love aboard the ill-fated Titanic.",
    url: "https://www.imdb.com/title/tt0120338/",
  },
  {
    name: "The Matrix",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: "8.7",
    years: "1999",
    category: "TopRated Movies",
    description: "A hacker discovers that reality is not what it seems.",
    url: "https://www.imdb.com/title/tt0133093/",
  },
  {
    name: "Black Panther",
    image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    rating: "7.4",
    years: "2018",
    category: "popular",
    description:
      "T'Challa returns to Wakanda to claim his place as king and protector.",
    url: "https://www.imdb.com/title/tt1825683/",
  },
];

const popularMovies = document.getElementById("popularMovies");
const allMovies = document.getElementById("allMovies");
const topRatedMovies = document.getElementById("topRatedMovies");

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.addEventListener("click", function () {
    if (movie.url) {
      window.open(movie.url, "_blank", "noopener,noreferrer");
    }
  });

  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.name}">
    <h3>${movie.name}</h3>
    <p>⭐ ${movie.rating}</p>
    <p>${movie.years}</p>
    <p>${movie.category}</p>
    <p>${movie.description}</p>
  `;

  return card;
}

movies.forEach(function (movie) {
  allMovies.appendChild(createMovieCard(movie));

  if (movie.category === "popular") {
    popularMovies.appendChild(createMovieCard(movie));
  } else if (movie.category === "TopRated Movies") {
    topRatedMovies.appendChild(createMovieCard(movie));
  }
});

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

// Open and close the mobile menu
menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("open");

  const isOpen = navMenu.classList.contains("open");

  menuButton.textContent = isOpen ? "✕" : "☰";
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});

// Close the menu after clicking a navigation link
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  });
});

