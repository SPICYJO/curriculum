const axios = require('axios')

axios('https://pokeapi.co/api/v2/pokemon/')
  .then(res => {
    const promises = res.data.results.map(result => {
      return axios(result.url).then(res => {
        return res.data
      })
    })
    return Promise.all(promises)
  })
  .then(results => {
    return results.reduce((acc, res) => {
      acc += `<div>
        <h4>${res.name}</h4>
        <img src="${res.sprites.front_default}" />
      </div>`
      return acc
    }, "")
  })
  .then(viewHtml => {
    return "<html><body>" + viewHtml + "</body></html>"
  })
  .then(htmlString => {
    const fs = require('fs')
    fs.writeFile("9.html", htmlString, () => {})
  })

