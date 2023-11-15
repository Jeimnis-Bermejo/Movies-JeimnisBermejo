import { tabledetails } from "../module/funciones.js"

const search = location.search

const params = new URLSearchParams(search)

const id = params.get("id")

const movie = movies.find(movie => movie.id==id)




const contenedordetalle = document.getElementById("contenedor")

contenedordetalle.innerHTML +=`<article  class=" flex flex-col  gap-6 rounded-lg  justify-center items-center m-5" >
 <img class=" object-contain rounded-xl w-5/12 " src="${movie.image}" alt="imagen"></img> 
<h2 class= "justify-items-start text-center  text-4xl p-1 font-bold text-white ">${movie.title}</h2> 
<h3 class="text-center  text-white text-2xl">${movie.tagline}</h3>
<p class=" text-white  text-xl text-center justify-items-start" ">${movie.overview}</p>

</article>`

contenedordetalle.innerHTML += tabledetails(movie)


