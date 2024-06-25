const search = document.querySelector("#input")
const btn = document.querySelector("#find")
let mvs

btn.onclick = function () {
  const ajax = new XMLHttpRequest()
  ajax.open("GET", `https://www.omdbapi.com/?s=${search.value}&apikey=1049ad46`)

  ajax.onload = function () {
    mvs = JSON.parse(ajax.response)
    showCards(mvs)
  }
  ajax.send()

}
function deleteCard(){
  const container = document.querySelector(".card-container")
  while(container.firstChild){
    container.removeChild(container.firstChild)
  }
}

function showCards(datas) {
  deleteCard()
  const container = document.querySelector(".card-container")

  for (const m of datas.Search) {
    const card = document.createElement("div")
    card.setAttribute("class", "card")

    const imgPart = document.createElement("div")
    imgPart.setAttribute("class", "w-full h-full relative")
    card.appendChild(imgPart)

    const img = document.createElement("img")
    img.src = m.Poster
    img.alt = "Movie Poster"
    imgPart.appendChild(img)

    container.appendChild(card)
  }
}
  // datas.forEach(m => {

  //                 <img class="relative w-full h-full object-fill object-center brightness-50" src="${m.Poster}" alt="Movie Poster">
  //                 <div class="absolute bottom-0 w-full">
  //                   <div class="p-5">
  //                     <h2 class="text-2xl font-semibold tracking-widest">${m.Title} (${m.Year})</h2>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>`
  // }) 
