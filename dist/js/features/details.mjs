export function showDetails(m) {
  const breadcrumb = document.querySelector(".breadcrumb-active")
  breadcrumb.innerText = m.Title

  createPage(m)
}

function createPage(mdt){
  const posterWrapper = document.querySelector(".pict")

  const pict = document.createElement("img")
  pict.src = mdt.Poster
  pict.classList.add("detail-poster")
  pict.alt = "Movie Poster"
  posterWrapper.appendChild(pict)

  const textWrapper = document.querySelector(".article")

  const title = document.createElement("h1")
  title.classList.add("detail-heading")
  title.innerText = `${mdt.Title} (${mdt.Year})`

  const plot = document.createElement("p")
  plot.innerText = mdt.Plot

  const director = document.createElement("p")
  director.classList.add("detail-director")
  director.innerHTML = `Directed by ${mdt.Director}`

  textWrapper.appendChild(title)
  textWrapper.appendChild(director)
  textWrapper.appendChild(plot)
}