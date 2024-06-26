function showCards(datas) {
  deleteCard()
  const container = document.querySelector(".card-container")

  for (const m of datas.Search) {
    const card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("group")
    card.onclick = () => {
      document.location = `./detail.html?imdbID=${m.imdbID}`
    }

    const imgPart = document.createElement("div")
    imgPart.classList.add("imgPart")
    card.appendChild(imgPart)

    const img = document.createElement("img")
    img.classList.add("poster")
    img.src = m.Poster
    img.alt = "Movie Poster"
    imgPart.appendChild(img)

    const textPart = document.createElement("div")
    textPart.classList.add("textPart")
    card.appendChild(textPart)
    
    const title = document.createElement("h3")
    title.classList.add("title")
    title.textContent = `${m.Title} (${m.Year})`
    textPart.appendChild(title)
    
    container.appendChild(card)
  }
}

function deleteCard(){
  const container = document.querySelector(".card-container")
  while(container.firstChild){
    container.removeChild(container.firstChild)
  }
}

export { showCards, deleteCard }