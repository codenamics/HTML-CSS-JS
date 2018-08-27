let searchInput = document.getElementById('search');

class fetchData {
    constructor() {
        this.apiKey = '884df292'
    }
    async getMovies(movie) {
        const movieRes = await fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=${movie}`)
        const moveData = await movieRes.json()
        return {
            moveData
        }
    }
    async getMovie(id) {
        const movieDetails = await fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}`)
        const movieDetail = await movieDetails.json()
        return {
            movieDetail
        }
    }
}
const fetchMovie = new fetchData
if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        let input = e.target.value;

        if (input !== '') {
            fetchMovie.getMovies(input)
                .then(res => {
                    let data = res.moveData.Search
                    console.log(data)
                    if (!data) {
                        return false
                    } else {
                        let output = ''
                        data.forEach(movie => {
                            let poster
                            if (movie.Poster === "N/A") {
                                poster = `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`
                            } else {
                                poster = movie.Poster
                            }
                            output += `
                        <div class="card">
                        <img class="card-img-top" src="${poster}" alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title text-left">${movie.Title}</h5>
                          <p class="card-text text-left">${movie.Year}</p>
                          <a href="#" class="btn btn-primary" onclick="getID('${movie.imdbID}')">Get details</a>
                        </div>
                      </div>
                        `
                        });
                        document.getElementById('container').innerHTML = output;
                    }
                })
                .catch(err => console.log(err))
        }
        e.preventDefault();
    })
}

function getID(id) {
    sessionStorage.setItem('movieID', id)
    window.location = '/movie.html'
    return false

}



function getSingleMovie() {
    let movieID = sessionStorage.getItem('movieID');

    fetchMovie.getMovie(movieID)
        .then(res => {
            console.log(res.movieDetail)
            let data = res.movieDetail
            if (!data) {
                return false
            } else {
                let poster
                if (data.Poster === "N/A") {
                    poster = `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`
                } else {
                    poster = data.Poster
                }
                let output = `
                    <div class="card">
                    <img class="card-img-top" src="${poster}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title text-left">${data.Title}</h5>
                      <p class="card-text text-left"><strong>Director:</strong>${data.Director}</p>
                      <p class="card-text text-left"><strong>Released:</strong> ${data.Released}</p>
                      <p class="card-text text-left"><strong>Country: </strong>${data.Country}</p>
                      <p class="card-text text-left"><strong>Genre:</strong>${data.Genre
                      }</p>
                      <p class="card-text text-left"><strong>Plot:</strong> ${data.Plot}</p>
                      <p class="card-text text-left"><strong>Runtime:</strong> ${data.Runtime}</p>
                      <a href="index.html" class="btn btn-primary">Go Back</a>
                    </div>
                  </div>
                    `
                document.getElementById('container-movie').innerHTML = output;
            }
        })
        .catch(err => console.log(err))
}