import{card, mostrarCard,filtrarporgenero,filtrarpornombre}from "./../module/funciones.js"

const mostrarcard = document.getElementById("contenedor")

mostrarCard(movies, mostrarcard, card)

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
  mostrarCard(filtradopornombre, mostrarcard, card)
 
 })
 
;
busqueda.addEventListener("input", () => {
  const filtradoporgenero = filtrarporgenero(movies,select.value)
  const filtradopornombre=filtrarpornombre( filtradoporgenero , busqueda.value)
  mostrarCard(filtradopornombre, mostrarcard, card)
})



