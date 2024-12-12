// script.js

document.addEventListener("DOMContentLoaded", () => {
    loadMovies();
});

function loadMovies() {
    const movies = [
        { 
            title: "A Man Called Otto", 
            year: 2014, 
            language: "English/Hindi",
            links: {
                small: { url: "https://vcloud.lol/8y-m21qfqkksefk", size: "4GB" },
                medium: { url: "https://example.com/interstellar-medium.mp4", size: "10GB" },
                large: { url: "https://example.com/interstellar-large.mp4", size: "12GB" }
            },
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTfOpchCzccZFjNQjWCJV-NBdrLkvMkOBMn1Ej2biVWtfQ1ourY6iwYMSm5gg5n2BLjxVKenQ"
        },
        { 
            title: "Veer Zaara", 
            year: 2004, 
            language: "Hindi",
            links: {
                small: { url: " https://vcloud.lol/z-z1pekykydk9v2", size: "526.38 MB" },
                medium: { url: "https://example.com/interstellar-medium.mp4", size: "10GB" },
                large: { url: "https://vcloud.lol/wyfioqqotjjf0ob", size: "5.77 GB" }
            },
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Veer-Zaara.jpg/220px-Veer-Zaara.jpg"
        },
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
