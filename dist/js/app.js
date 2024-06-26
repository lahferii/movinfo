import { showCards } from "./features/cards.mjs"
import { showNotFound } from "./features/errors.mjs"
import { showDetails } from "./features/details.mjs"

if (window.location.pathname == "/index.html"){
  const search = document.querySelector("#input")
  const btn = document.querySelector("#find")
  let mvs
  
  btn.onclick = function () {
    const ajax = new XMLHttpRequest()
    const param = new URLSearchParams()
    param.append("s", search.value)
    ajax.open("GET", `https://www.omdbapi.com/?apikey=1049ad46&${param.toString()}`)
  
    ajax.onload = function () {
      mvs = JSON.parse(ajax.response)
      if (mvs.Response == "True") {
        showCards(mvs)
      } else {
        const message = `Data related with ${search.value} not available yet.`
        showNotFound(message)
      }
    }
    ajax.send()
  }
}

if (window.location.pathname == "/detail.html") {
  const url = new URLSearchParams(window.location.search);
  const target = url.get("imdbID");

  const request = new XMLHttpRequest();
  request.open("GET", `https://www.omdbapi.com/?apikey=1049ad46&&i=${target}&plot=full`);
  request.onload = function () {
    const datas = JSON.parse(request.response)
    if (datas) {
      showDetails(datas)
    }
  }
  request.send();
}