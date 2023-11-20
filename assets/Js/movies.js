import{card, mostrarCard,filtrarporgenero,filtrarpornombre}from "./../module/funciones.js"

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
  
  mostrarCard(movies,contenedor, card)
 
  filtrarporgenero(movies,select.value)
  filtrarpornombre(filtrarporgenero,busqueda.value)
})

.catch(error=>console.log(error))




const busqueda = document.getElementById("busqueda")
const select = document.getElementById("select")

const generosrepetidos = movies.map(movie => movie.genres).flat();

const generosset = new Set(generosrepetidos)


generosset.forEach(generosset => {
  const option = document.createElement("option");
  option.value = generosset;
  option.innerText = generosset;
  select.appendChild(option);
})

select.addEventListener('change', () => {
  const filtradoporgenero = filtrarporgenero(movies,select.value)
  const filtradopornombre=filtrarpornombre( filtradoporgenero , busqueda.value)
  mostrarCard(filtradopornombre, contenedormovies, card)
 
 })
 
;
busqueda.addEventListener("input", () => {
  const filtradoporgenero = filtrarporgenero(movies,select.value)
  const filtradopornombre=filtrarpornombre( filtradoporgenero , busqueda.value)
  mostrarCard(filtradopornombre, contenedormovies, card)
})



