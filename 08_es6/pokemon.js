const container = document.querySelector('#container section')

for ( i in [...Array(898).keys()] ){
  const id = parseInt(i) + 1;
  
  const item = document.createElement('fieldset')
  
  const legend = document.createElement('legend')
  legend.innerHTML = id
  
  const img = document.createElement('img')
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  
  item.appendChild(legend)
  item.appendChild(img)

  container.appendChild(item)
}