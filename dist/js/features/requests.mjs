function getAllMovies(search){
  const param = new URLSearchParams()
  param.append("apikey", `1049ad46`)
  param.append("s", search)

  return fetch(`https://www.omdbapi.com/?${param.toString()}`)
    .then(ress => ress.json())
}

function getSelectedMovie(){
  const param = new URLSearchParams(window.location.search)
  param.append(`apikey`, `1049ad46`)
  param.append(`plot`, `full`)
  param.append(`i`, param.get(`imdbID`))

  return fetch(`https://www.omdbapi.com/?${param.toString()}`)
    .then(ress => ress.json())
}

export { getAllMovies, getSelectedMovie }