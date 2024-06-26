import {deleteCard} from './cards.mjs'

function showNotFound(m){
  deleteCard()

  const container = document.querySelector(".card-container")
  const heading = document.createElement("h2")
  heading.textContent = m

  container.appendChild(heading)
}

export {showNotFound}