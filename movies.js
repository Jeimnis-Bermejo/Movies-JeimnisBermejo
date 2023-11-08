const mostrarcard = document.getElementById("contenedor")

movies.forEach(movie => {
    const moviesCard = document.createElement("article");
    moviesCard.innerHTML = `<img class=" object-contain rounded-xl " src="${movie.image}" alt="imagen"></img> 
<h2 class= " text-white justify-items-start text-center p-1 font-bold  ">${movie.title}</h2> 
<h3 class=" text-white text-left justify-items-start p-2 ">${movie.tagline}</h3>
<p class=" text-white text-left justify-items-start">${movie.overview}</p>
`

    moviesCard.className = "flex flex-col  border  border-white-500   h-[33rem] w-[30rem] border-solid-5 p-8 rounded-lg mt-5  justify-center"
    
    mostrarcard.appendChild(moviesCard);
});