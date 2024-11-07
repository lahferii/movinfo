import { showCards } from "./features/cards.mjs"
import { showNotFound } from "./features/errors.mjs"
import { showDetails } from "./features/details.mjs"
import { getAllMovies, getSelectedMovie } from "./features/requests.mjs"

if (window.location.pathname == "/" || window.location.pathname == "/index.html"){
  const search = document.querySelector("#input")
  const btn = document.querySelector("#find")
  
  btn.onclick = async function () {
    const mvs = await getAllMovies(search.value)
    try{
      showCards(mvs)
    } catch{
      showNotFound(mvs.Error)
    }
  }
}

if (window.location.pathname == "/detail.html") {
  clickMovie()
  
  async function clickMovie(){
    const selected = await getSelectedMovie()
    try{
      showDetails(selected)
    } catch {
      console.error("An error occured while fetching data")
    }
  }
}
