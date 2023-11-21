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
  console.log(id);
  if (id) {
    if (!favs.includes(id)) {
      favs.push(id)
      localStorage.setItem("Favs", JSON.stringify(favs))
      e.target.setAttribute("fill", "red")
    }
    else if (favs.includes(id)) {
      favs.splice(favs.indexOf(id), 1)
      localStorage.setItem("Favs", JSON.stringify(favs))
      e.target.setAttribute("fill", "black")
    }
  }
})
function obtenercard(peli) {
  const captureimage = "https://moviestack.onrender.com/static/"
  return `<article  class="flex flex-col  border  border-white-500  h-[40rem] w-[30rem] border-solid-5 p-8 rounded-lg mt-5  justify-center" >
   <img class=" object-contain rounded-xl " src="${captureimage + peli.image}" alt="imagen"></img> 
  <h2 class= " text-white justify-items-start text-center p-1 font-bold  ">${peli.title}</h2> 
  <h3 class=" text-white text-left justify-items-start p-2 ">${peli.tagline}</h3>
  <p class=" text-white text-left justify-items-start">${peli.overview}</p>
  <a class="text-black self-center  w-16 m-3 text-center bg-white border  border-white rounded" href="details.html?id=${peli.id}">Details</a>
  <button data-id="${peli.id}" class="text-black self-center  w-16 m-3 text-center bg-red-500  border  border-white rounded">favs</button>
  </article>`
}
 function mostrarCard(array, contenedor, fn) {
  let movie = ""

  array.forEach(peli =>{
    movie+=fn(peli)
  })
  if (movie) {
    contenedor.innerHTML = movie
  } else
    contenedor.innerHTML = `<h2 class="text-white text-2xl">This movie is not available, please try to find another one</h2>`

}
