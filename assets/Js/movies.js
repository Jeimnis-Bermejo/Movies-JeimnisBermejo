
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
function obtenercard(peli) {
  const captureimage = "https://moviestack.onrender.com/static/"
  return `<article  class="flex flex-col  border  border-white-500  h-[40rem] w-[30rem] border-solid-5 p-8 rounded-lg mt-5  justify-center" >
   <img class=" object-contain rounded-xl " src="${captureimage + peli.image}" alt="imagen"></img> 
  <h2 class= " text-white justify-items-start text-center p-1 font-bold  ">${peli.title}</h2> 
  <h3 class=" text-white text-left justify-items-start p-2 ">${peli.tagline}</h3>
  <p class=" text-white text-left justify-items-start">${peli.overview}</p>
  <a class="text-black self-center  w-16 m-3 text-center bg-white border  border-white rounded" href="details.html?id=${peli.id}">Details</a>
  <button data-id="${peli.id}" class="text-black self-center  w-16 m-3 text-center bg-white border  border-white rounded">favs</button>
  </article>`

}
function mostrarCard(array, contenedor, fn) {
  let movie = ""
  for (const movies of array) {
    const cards = obtenercard(movies)
    movie += cards
  }
  if (movie) {
    contenedor.innerHTML = movie
  } else
    contenedor.innerHTML = `<h2 class="text-white text-2xl">This movie is not available, please try to find another one</h2>`
}


const busqueda = document.getElementById("busqueda")
const select = document.getElementById("select")


function genreList(movies, contenedor, fn) {
  const generosrepetidos = movies.map(movie => movie.genres).flat();
  const generosset = new Set(generosrepetidos)
  generosset.forEach(generosset => {
    const option = document.createElement("option");
    option.value = generosset;
    option.innerText = generosset;
    select.appendChild(option);
  })
  return generosset
}




function filtrarpornombre(movies, title) {
  const filtro = movies.filter(movies => movies.title.toLowerCase().startsWith(title.toLowerCase()))
  console.log(filtro)
  return filtro
}



function filtrarporgenero(movies, genero) {
  const filtro = movies.filter(movie => movie.genres.indexOf(genero)!=-1)
  console.log(movies)
  return filtro
}

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