import { tabledetails } from "../module/funciones.js"



const contenedordetalle = document.getElementById("contenedor")

const url = "https://moviestack.onrender.com/api/movies"

const apiKei = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
const opciones = {
    headers: {
        "x-api-key": apiKei
    }
}
let movies = [];
fetch(url, opciones)
    .then(res => res.json())
    .then(data => {
        movies = data.movies
        const search = location.search

        const params = new URLSearchParams(search)

        const id = params.get("id")

        const idMovies = movies.find(movie => movie.id == id)
        contenedordetalle.innerHTML=tabledetails(idMovies)
    })
    .catch(error => console.log(error))








