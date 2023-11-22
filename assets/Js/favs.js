import { obtenercard,mostrarCard } from "../module/funciones.js"


const contenedormovies = document.getElementById("contenedorMovies")

const url = "https://moviestack.onrender.com/api/movies"
const apiKei = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
const opciones = {
  headers: {
    "x-api-key": apiKei
  }
}
let favs = JSON.parse(localStorage.getItem("Favs")) || []
let movies
fetch(url, opciones)
  .then(res => res.json())

  .then(data => {
    movies = data.movies.filter(movie => favs.includes(movie.id) )

  mostrarCard(movies, contenedormovies, obtenercard)
  })

  .catch(e => console.error(e))

contenedormovies.addEventListener("click", e => {
  const id = e.target.dataset.id
 
  if (id) {
    if (!favs.includes(id)) {
      favs.push(id)
  
    }
    else if (favs.includes(id)) {
      favs.splice(favs.indexOf(id), 1)
      
     
    }
    localStorage.setItem("Favs", JSON.stringify(favs))
  }
})
