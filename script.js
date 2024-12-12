// script.js

document.addEventListener("DOMContentLoaded", () => {
    loadMovies();
});

function loadMovies() {
    const movies = [
        { 
            title: "Lucky Baskhar", 
            year: 2024, 
            language: "English/Hindi",
            links: {
                small: { url: "https://vcloud.lol/n7azxphte7pptk2", size: "2.95GB" },
                medium: { url: "https://example.com/inception-medium.mp4", size: "10GB" },
                large: { url: "https://example.com/inception-large.mp4", size: "12GB" }
            },
            image: "https://i.ytimg.com/vi/w8EDX5KqFLg/hqdefault.jpg?v=6717df84"
        },
        { 
            title: "Interstellar", 
            year: 2014, 
            language: "English",
            links: {
                small: { url: "https://example.com/interstellar-small.mp4", size: "4GB" },
                medium: { url: "https://example.com/interstellar-medium.mp4", size: "10GB" },
                large: { url: "https://example.com/interstellar-large.mp4", size: "12GB" }
            },
            image: "https://via.placeholder.com/200x300?text=Interstellar"
        },
        { 
            title: "Avengers – Infinity War", 
            year: 2018, 
            language: "English/Hindi",
            links: {
                small: { url: "https://driveleech.org/file/F0CTih7aSHms5mfOT7hu", size: " 4.33GB" },
                medium: { url: "https://driveleech.org/file/GhNUHxQBmNXZKKXtvc0N", size: "7.83GB" },
                large: { url: "https://driveleech.org/file/UAu2j95N6dw3qCFBiuJA", size: "12.74GB" }
            },
            image: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg"
        },
        { 
            title: "Avengers: Age of Ultron", 
            year: 2015, 
            language: "English/Hindi",
            links: {
                small: { url: "https://driveleech.org/file/r7AzUfhJsEBJzHxDgovy", size: "4.52GB" },
                medium: { url: "https://driveleech.org/file/ciRZo8DruDD6d1sQPl3Z", size: "7.11GB" },
                large: { url: "https://driveleech.org/file/dttc7r6mt80ya3EVBTNA", size: "10.44GB" }
            },
            image: "https://m.media-amazon.com/images/M/MV5BODBhYTg1NGQtNGVmNS00ZTdiLThjYTYtZDFkNzRiNTZmNDZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        { 
            title: "The Avengers", 
            year: 2019, 
            language: "English/Hindi",
            links: {
                small: { url: "https://driveleech.org/file/vfVykN7V0V9N6Ub3xmJ8", size: "4GB" },
                medium: { url: "https://driveleech.org/file/vKEpA2vxLtjIQmg3xORe", size: "7.18GB" },
                large: { url: " https://driveleech.org/file/rsIDXk2RcdJl6J4cEfWc", size: "10.18GB" }
            },
            image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"
        }
    ];

    const movieGrid = document.getElementById("movie-grid");

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" class="movie-image" style="width: 200px; height: 300px; object-fit: cover;">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
            <p><strong>Language:</strong> ${movie.language}</p>
            <div class="download-links">
                <a href="${movie.links.small.url}" target="_blank" class="movie-link">Download Small (${movie.links.small.size})</a>
                <a href="${movie.links.medium.url}" target="_blank" class="movie-link">Download Medium (${movie.links.medium.size})</a>
                <a href="${movie.links.large.url}" target="_blank" class="movie-link">Download Large (${movie.links.large.size})</a>
            </div>
        `;
        movieGrid.appendChild(movieCard);
    });
}

function exploreMovies() {
    const moviesSection = document.getElementById("movies");
    moviesSection.scrollIntoView({ behavior: "smooth" });
}
