const contenedormovies = document.getElementById("contenedor")

const url="https://moviestack.onrender.com/api/movies"
const apiKei="0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
const opciones={
  headers:{
    "x-api-key":apiKei
  }
}
let movies =[];

fetch (url,opciones)
.then(res=> res.json())

.then(data=>{
  let movies = data.movies
})