import { obtenercard, mostrarCard, genreList, filtrarpornombre, filtrarporgenero } from "../module/funciones.js";
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
    obtenercard(movies)
    mostrarCard(movies, contenedor, obtenercard)
    genreList(movies, contenedor, obtenercard)
    filtrarpornombre(movies, busqueda.value)

  })
  .catch(error => console.log(error))

const contenedor = document.getElementById("contenedor")
let favs = JSON.parse(localStorage.getItem("Favs")) || []

const busqueda = document.getElementById("busqueda")
const select = document.getElementById("select")


select.addEventListener('change', () => {
  const filtradoporgenero = filtrarporgenero(movies, select.value)
  const filtradopornombre = filtrarpornombre(filtradoporgenero, busqueda.value)
  mostrarCard(filtradopornombre, contenedor, obtenercard)

})

  ;
busqueda.addEventListener("input", () => {
  const filtradoporgenero = filtrarporgenero(movies, select.value)
  const filtradopornombre = filtrarpornombre(filtradoporgenero, busqueda.value)
  mostrarCard(filtradopornombre, contenedor, obtenercard)
})

contenedor.addEventListener("click", e => {
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
