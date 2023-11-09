const mostrarcard = document.getElementById("contenedor")


function card(peli){
return `<article  class="flex flex-col  border  border-white-500  h-[33rem] w-[30rem] border-solid-5 p-8 rounded-lg mt-5  justify-center" >
 <img class=" object-contain rounded-xl " src="${peli.image}" alt="imagen"></img> 
<h2 class= " text-white justify-items-start text-center p-1 font-bold  ">${peli.title}</h2> 
<h3 class=" text-white text-left justify-items-start p-2 ">${peli.tagline}</h3>
<p class=" text-white text-left justify-items-start">${peli.overview}</p>
</article>`
}
function agregarcard(array, contenedor) {
    let movie = ""
    for (const movies of array) {
      const cards = card(movies)
      movie += cards
    }
    contenedor.innerHTML += movie
}
agregarcard(movies, mostrarcard)

