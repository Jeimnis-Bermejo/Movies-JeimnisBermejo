export function tabledetails(movie) {
  const captureimage = "https://moviestack.onrender.com/static/"
  return `<article class="flex justify-around items-center" >
    <div class="flex flex-col   h-[60rem] w-[60rem] border-solid-5 p-8 rounded-lg mt-5  justify-center" >> 
   <img class=" object-contain rounded-xl " src="${captureimage + movie.image}" alt="imagen"></img> 
  <h2 class= " text-white justify-items-start text-center p-2 font-bold text-3xl ">${movie.title}</h2> 
  <h3 class=" text-white  justify-items-start  text-2xl text-center p-3 ">${movie.tagline}</h3>
  <p class=" text-white text-center justify-items-start text-xl">${movie.overview}</p>
  </div > 
  </article>
  <article class="flex justify-around items-center p-5" >     
  <div>
        <table>
            <tr>
            <th class="h-10   w-60  text-white border border-slate-600 text-center ">Original Languaje</th>
                <td class=" h-10  w-60 text-white border border-slate-700 text-center  ">${movie.original_language}</td>
                </tr>
                <tr>
               <th class="wh-10  -60 text-white border border-slate-600  text-center ">Release Date</th>
                <td class="h-10  w-60 text-white border border-slate-700 text-center ">${movie.release_date}</td>
                </tr>
                <tr>
                <th class="h-10  w-60 text-white border border-slate-600 text-center">Runtime</th>
                <td class="h-10  w-60 text-white border border-slate-700 text-center ">${movie.runtime}</td>
                </tr>
                <tr>
                <th class="h-10  w-60 text-white border border-slate-600 text-center">status</th>
                <td class="h-10  w-60 text-white border border-slate-700 text-center">${movie.status}</td>
            </tr>
        </table>
        </div>
    <div>
        <table class=>
           <tr>
           <th class="h-10  w-60 text-center text-white border border-slate-600"> Vote Average </th>
           <td class="h-10  w-60 text-center text-white border border-slate-700" >${movie.vote_average}</td>
            </tr>
            <tr>
            <th class="h-10  w-60 text-center text-white border border-slate-600">Budget </th>
            <td class="h-10  w-60 text-center text-white border border-slate-700" >${movie.budget}</td>
            </tr>
            <tr>
            <th class="h-10  w-60 text-center text-white border border-slate-600">Revenue </th>
            <td class="h-10  w-60 text-center text-white border border-slate-700"> ${movie.revenue}</td>
            </tr>

        </table> 
    </div>
</article>`
}


export function obtenercard(peli) {
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
export function mostrarCard(array, contenedor, fn) {
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
export function genreList(movies, contenedor, fn) {
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
export function filtrarpornombre(movies, title) {
  const filtro = movies.filter(movies => movies.title.toLowerCase().startsWith(title.toLowerCase()))
  console.log(filtro)
  return filtro
}


export function filtrarporgenero(movies, genero) {
  const filtro = movies.filter(movie => movie.genres.indexOf(genero) != -1)
  console.log(movies)
  return filtro
}